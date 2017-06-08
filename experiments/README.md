# Workload

Load phase:
- 600x persistValue invocations to fill the ValuesTable in DynamoDB

Run phase: function invocations (1 second wait time between subsequent requests)
1. 100x ingestValue
2. 100x readNotifications
3. 100x readPredictions
4. 100x readValues

```
node user.js -f persistValueFunction -e -n 600
node user.js -f ingestValueFunction -o results/experiment1/ingestValue.txt -n 100
node user.js -f readNotificationsFunction -o results/experiment1/readNotifications.txt -n 100
node user.js -f readPredictionsFunction -o results/experiment1/readPredictions.txt -n 100
node user.js -f readValuesFunction -o results/experiment1/readValues.txt -n 100
```

# Trace processing

Fetch batches of x-ray traces and augment the traces with costradamus:

```
node mainBatch.js -i results/experiment1/ingestValue.txt -o results/experiment1/ingest-value-traces
node mainBatch.js -i results/experiment1/readNotifications.txt -o results/experiment1/read-notifications-traces
node mainBatch.js -i results/experiment1/readPredictions.txt -o results/experiment1/read-predictions-traces
node mainBatch.js -i results/experiment1/readValues.txt -o results/experiment1/read-values-traces
```

# Experiments 1-4

## 1. Baseline experiment

Region: us-east-1
Lambda config: 1024 MB memory
PredictValue function: interval 3

(other configurations as stated in example/app/serverless.yml)

## 2. Memory configuration experiment

Lambda config: 128 MB memory

## 3. Code change experiment

PredictValue function: interval 60

## 4. Multi-region experiment

Region: eu-west-1
