# Workloads

## Workload A

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
node mainBatch.js -i results/experiment1/ingestValue.txt -o results/experiment1/traces
```

# Experiments 1-4

## 1. Baseline experiment

Region: us-east-1
Lambda config: 1024 MB memory, 10 sec timeout
Workload A

## 2. Memory configuration experiment

Baseline with
Lambda config: 128 MB memory

## 3. Multi-region experiment

Baseline with
Region: eu-west-1

## 4. Code change experiment

Baseline with different predictValue with different prediction model (interval 60, in baseline 3)
