# Smart Grid Metering Application

## Pre-requisites
+ [Node.js >= v6.5.0](https://nodejs.org/en/)
+ [Serverless Framework](https://serverless.com/)
+ [AWS account](https://aws.amazon.com/)
+ [AWS Provider Credentials](https://serverless.comaws )

## Architecture

![SMGA Architecture](./documentation/sgma-architecture.jpg)

##### IngestValue Function (Lambda)
The IngestValue function accepts new meter values from meters. It checks
 new meter values for completeness and converts them into a canonical
 data format. Finally, meter values are pushed to downstream functions:
 PersistValue function and PredictValue function.

Example Client Input:
```
{
    "id": "DE00056366740S2031372170000000000010001080000",
    "timestamp": 1494500000,
    "value": "+000000010+1"
}
```

##### PersistValue Function (Lambda)
The PersistValue function persists new meter values without any
processing in the DynamoDB table Values. The PersistValue function is a
downstream function of the IngestValue function.

##### PredictValue Function (Lambda)
The PredictValue function predicts future values of a timeseries based
on measured values for n time intervals into the future. To derive
the model, missing values are loaded from the DynamoDB table Values.
Predictions are stored to the DynamoDB table Predictions. If a predicted
value increases or decreases by an absolute value that is higher as a
configurable threshold, a notification is pushed to a corresponding
Kinesis stream Predictions.

##### ReadValues Function (Lambda)
The ReadValues functions allows to query metered values in a time a
configurable time [start...end] interval. Timestamps are UNIX-Timestamps
with second precision.

Example Client Input:
```
{
    "id": "DE00056366740S2031372170000000000010001080000",
    "start": 1494499900,
    "end": 1494500000
}
```

##### ReadPredictions Function (Lambda)
The ReadPredictions functions allows to query predicted metered values
in a time a configurable time [start...end] interval. Timestamps are
UNIX-Timestamps with second precision.

Example Client Input:
```
{
    "id": "DE00056366740S2031372170000000000010001080000",
    "start": 1494500000,
    "end": 1494500003
}
```

##### ReadNotificatitons Function (Lambda)
The ReadPredictions functions allows to query predicted metered values
for timeseries of interst.

##### Values Table (DynamoDB)

The Values table stores submitted and metered meter values.

Schema and example data:

| id                                            | timestamp  | value        |
| --------------------------------------------- |:----------:| ------------:|
| DE00056366740S2031372170000000000010001080000 | 1494499997 | +000000010+1 |
| DE00056366740S2031372170000000000010001080000 | 1494499998 | +000000040+1 |
| DE00056366740S2031372170000000000010001080000 | 1494499999 | +000000010+1 |


##### Predictions Table (DynamoDB)

The Values Predictions table stores predicted values that are calculated
based on an analytical model. Thus, stored values have never been
submitted or metered.

Schema and example data:

| id                                            | timestamp  | value        |
| --------------------------------------------- |:----------:| ------------:|
| DE00056366740S2031372170000000000010001080000 | 1494500001 | +000000010+1 |
| DE00056366740S2031372170000000000010001080000 | 1494500002 | +000000040+1 |
| DE00056366740S2031372170000000000010001080000 | 1494500003 | +000000010+1 |

##### Notifications Stream (Kinesis)
The Notifications stream publishes predicted meter values that represent
an absolute change in value that is greater than a configurable threshold.

## Getting Started

##### Deploy Application
```
sls deploy
```

##### Load Initial Dataset
```
sls invoke -f persistValueFunction -p persistValue/event1.json
sls invoke -f persistValueFunction -p persistValue/event2.json
sls invoke -f persistValueFunction -p persistValue/event3.json
```

##### Emulate Meter Client
```
sls invoke -f ingestValueFunction -p ingestValue/event.json
sls invoke -f ingestValueFunction -p ingestValue/event2.json
sls invoke -f ingestValueFunction -p ingestValue/event3.json
```

##### Emulate Grid Operator Client
```
sls invoke -f readValuesFunction -p readValue/event.json
```

##### Emulate Grid Controller Client
```
sls invoke -f readPredictionsFunction -p readPredictions/event.json
```

##### Emulate Notification Service Client
CURRENTLY NOT SUPPORTED!!!

##### Check Executions
```
sls logs -f ingestValueFunction
sls logs -f persistValueFunction
sls logs -f predictValueFunction
```

##### Remove Deployment
```
sls remove
```