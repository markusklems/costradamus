# Smart Grid Metering Application

Table of Contents:
+ [Pre-requisits](#prerequisits)
+ [Architecture & Implementation](#architecture)
+ [Getting Started](#gettingstarted)


## <a name="prerequisits"></a> Pre-requisites
+ [Node.js >= v6.5.0](https://nodejs.org/en/)
+ [Serverless Framework](https://serverless.com/)
+ [AWS account](https://aws.amazon.com/)
+ [AWS Provider Credentials](https://serverless.comaws )

## <a name="architecture"></a> Architecture & Implementation

![SMGA Architecture](./documentation/sgma-architecture.jpg)

#### IngestValue Function (Lambda: [DOCS](https://aws.amazon.com/de/documentation/lambda/)/[SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html))
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

Example Client Response:
```
{
    "statusCode": "202"
}
```
#### PersistValue Function (Lambda: [DOCS](https://aws.amazon.com/de/documentation/lambda/)/[SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html))
The PersistValue function persists new meter values without any
processing in the DynamoDB table Values. The PersistValue function is a
downstream function of the IngestValue function.

#### PredictValue Function (Lambda: [DOCS](https://aws.amazon.com/de/documentation/lambda/)/[SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html))
The PredictValue function predicts future values of a timeseries based
on measured values for n time intervals into the future. To derive
the model, missing values are loaded from the DynamoDB table Values.
Predictions are stored to the DynamoDB table Predictions. If a predicted
value increases or decreases by an absolute value that is higher as a
configurable threshold, a notification is pushed to a corresponding
Kinesis stream Predictions.

#### ReadValues Function (Lambda: [DOCS](https://aws.amazon.com/de/documentation/lambda/)/[SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html))
The ReadValues functions allows to query metered values in a time a
configurable time [start...end] interval. Timestamps are UNIX-Timestamps
with second precision.

Example Client Request:
```
{
    "id": "DE00056366740S2031372170000000000010001080000",
    "start": 1494499900,
    "end": 1494500000
}
```

Example Client Response:
```
[
    {
        "id": "DE00056366740S2031372170000000000010001080000",
        "value": "+000000040+1",
        "timestamp": 1494500001
    },
    {
        "id": "DE00056366740S2031372170000000000010001080000",
        "value": "+000000010+1",
        "timestamp": 1494500002
    }
]
```

#### ReadPredictions Function (Lambda: [DOCS](https://aws.amazon.com/de/documentation/lambda/)/[SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html))
The ReadPredictions functions allows to query predicted metered values
in a time a configurable time [start...end] interval. Timestamps are
UNIX-Timestamps with second precision.

Example Client Request:
```
{
    "id": "DE00056366740S2031372170000000000010001080000",
    "start": 1494500000,
    "end": 1494500003
}
```

Example Client Response:
```
[
    {
        "id": "DE00056366740S2031372170000000000010001080000",
        "value": "+000000017+1",
        "timestamp": 1494500001
    },
    {
        "id": "DE00056366740S2031372170000000000010001080000",
        "value": "+000000019+1",
        "timestamp": 1494500002
    },
    {
        "id": "DE00056366740S2031372170000000000010001080000",
        "value": "+000000019+1",
        "timestamp": 1494500003
    },
    {
        "id": "DE00056366740S2031372170000000000010001080000",
        "value": "+000000016+1",
        "timestamp": 1494500004
    }
]

```
#### ReadNotificatitons Function (Lambda: [DOCS](https://aws.amazon.com/de/documentation/lambda/)/[SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html))
The ReadPredictions functions allows to query predicted metered values
for timeseries of interest.

Example Client Request:
```
{
    "id": "DE00056366740S2031372170000000000010001080000",
    "start": 1494499997
}
```

Example Client Response:
```
[
    {
        "id": "DE00056366740S2031372170000000000010001080000",
        "timestamp": 1494500004,
        "value": "+000000016+1"
    },
    {
        "id": "DE00056366740S2031372170000000000010001080000",
        "timestamp": 1494500003,
        "value": "+000000019+1"
    },
    {
        "id": "DE00056366740S2031372170000000000010001080000",
        "timestamp": 1494500002,
        "value": "+000000019+1"
    }
]

```
#### Values Table (DynamoDB: [DOCS](https://aws.amazon.com/de/documentation/dynamodb/)/[SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html))

The Values table stores submitted and metered meter values.

Schema and example data:

| id                                            | timestamp  | value        |
| --------------------------------------------- |:----------:| ------------:|
| DE00056366740S2031372170000000000010001080000 | 1494499997 | +000000010+1 |
| DE00056366740S2031372170000000000010001080000 | 1494499998 | +000000040+1 |
| DE00056366740S2031372170000000000010001080000 | 1494499999 | +000000010+1 |


#### Predictions Table (DynamoDB: [DOCS](https://aws.amazon.com/de/documentation/dynamodb/)/[SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html))

The Values Predictions table stores predicted values that are calculated
based on an analytical model. Thus, stored values have never been
submitted or metered.

Schema and example data:

| id                                            | timestamp  | value        |
| --------------------------------------------- |:----------:| ------------:|
| DE00056366740S2031372170000000000010001080000 | 1494500001 | +000000010+1 |
| DE00056366740S2031372170000000000010001080000 | 1494500002 | +000000040+1 |
| DE00056366740S2031372170000000000010001080000 | 1494500003 | +000000010+1 |

#### Notifications Stream (Kinesis: [DOCS](https://aws.amazon.com/de/documentation/kinesis/)/[SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Kinesis.html))
The Notifications stream publishes predicted meter values that represent
an absolute change in value that is greater than a configurable threshold.

## <a name="gettingstarted"></a> Getting Started

##### Deploy Application
```
sls deploy
```

#### Load Initial Dataset
```
sls invoke -f persistValueFunction -p persistValue/event1.json
sls invoke -f persistValueFunction -p persistValue/event2.json
sls invoke -f persistValueFunction -p persistValue/event3.json
```

#### Emulate Meter Client
```
sls invoke -f ingestValueFunction -p ingestValue/event.json
sls invoke -f ingestValueFunction -p ingestValue/event2.json
sls invoke -f ingestValueFunction -p ingestValue/event3.json
```

#### Emulate Grid Operator Client
```
sls invoke -f readValuesFunction -p readValues/event.json
```

#### Emulate Grid Controller Client
```
sls invoke -f readPredictionsFunction -p readPredictions/event.json
```

#### Emulate Notification Service Client
```
sls invoke -f readNotificationsFunction -p readNotifications/event.json
```

#### Check Executions
```
sls logs -f ingestValueFunction
sls logs -f persistValueFunction
sls logs -f predictValueFunction
```

#### Remove Deployment
```
sls remove
```
