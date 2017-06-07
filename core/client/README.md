

# CSV Converte

Converts all pruned trace files in an input directory into a single or multiple .csv files.


Example:
```
node csvBatch.js -d ../../experiments/results/baseline-us-east-1 -b true -s true
```

Parameters:
+ -d, --input-dir <directory>: Directory containing pruned trace files.
+ -b, --billed-only [true, false]: Extract only invocations with consumption data?
+ -s, --single-file [true, false]: Write complete output to a single file?