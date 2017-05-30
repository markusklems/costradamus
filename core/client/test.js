{ Traces: 
   [ { Id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
       Duration: 17.200000047683716,
       Segments: 
        [ { Id: '2def59f80af4f641',
            Document: '{"id":"2def59f80af4f641","name":"persistValueFunction","start_time":1.496136526232E9,"end_time":1.496136526241E9,"parent_id":"dbe171881f2380be","http":{"response":{"status":202}},"aws":{"request_id":"614d2066-451a-11e7-a61b-536aaf9738fb"},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::Lambda","resource_arn":"arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction","subsegments":[{"id":"04980501855fa5d8","name":"Dwell Time","start_time":1.496136526232E9,"end_time":1.49613652627E9,"http":{"response":{}}},{"id":"1694fd1516e8c258","name":"Attempt #1","start_time":1.49613652627E9,"end_time":1.496136538749E9,"http":{"response":{"status":200}}}]}' },
          { Id: '4a403dfa44c1a291',
            Document: '{"id":"4a403dfa44c1a291","name":"ingestValueFunction","start_time":1.496136525182E9,"end_time":1.496136527259E9,"parent_id":"5cef4e060b98e5d3","aws":{"function_arn":"arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction","resource_names":["ingestValueFunction"],"account_id":"186706155491"},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::Lambda::Function","subsegments":[{"id":"8243154f88ab1489","name":"LambdaMetadata","start_time":1.496136525215E9,"end_time":1.496136525216E9,"metadata":{"ResourceUsage":{"RequestId":"5e848a81-451a-11e7-a93d-53f7d1a14ba3"}}},{"id":"725cdd9394626093","name":"Lambda","start_time":1.496136525816E9,"end_time":1.496136527057E9,"http":{"response":{"status":202}},"aws":{"operation":"Invoke","region":"us-east-1","request_id":"614d6da3-451a-11e7-beae-7b3b487c25a3","retries":0,"function_name":"predictValueFunction","invocation_type":"Event","resource_names":["predictValueFunction"]},"namespace":"aws"},{"id":"dbe171881f2380be","name":"Lambda","start_time":1.496136525278E9,"end_time":1.496136526319E9,"http":{"response":{"status":202}},"aws":{"operation":"Invoke","region":"us-east-1","request_id":"614d2066-451a-11e7-a61b-536aaf9738fb","retries":0,"function_name":"persistValueFunction","invocation_type":"Event","resource_names":["persistValueFunction"]},"namespace":"aws"},{"id":"130f558711ce9160","name":"Initialization","start_time":1.496136524792E9,"end_time":1.49613652518E9,"aws":{"function_arn":"arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction"}}]}' },
          { Id: '71dcc0b295363fd7',
            Document: '{"id":"71dcc0b295363fd7","name":"predictValueFunction","start_time":1.496136526238E9,"end_time":1.496136526249E9,"parent_id":"725cdd9394626093","http":{"response":{"status":202}},"aws":{"request_id":"614d6da3-451a-11e7-beae-7b3b487c25a3"},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::Lambda","resource_arn":"arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction","subsegments":[{"id":"3a906810da6a968e","name":"Attempt #1","start_time":1.496136526276E9,"end_time":1.496136537476E9,"http":{"response":{"status":200}}},{"id":"2d870cb942d79f3b","name":"Dwell Time","start_time":1.496136526238E9,"end_time":1.496136526276E9,"http":{"response":{}}}]}' },
          { Id: '31d5042c5c01ce8d',
            Document: '{"id":"31d5042c5c01ce8d","name":"predictValueFunction","start_time":1.496136537229E9,"end_time":1.496136537465E9,"parent_id":"3a906810da6a968e","aws":{"function_arn":"arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction","resource_names":["predictValueFunction"],"account_id":"186706155491"},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::Lambda::Function","subsegments":[{"id":"2ca1f2ee6acfe4ee","name":"DynamoDB","start_time":1.496136537237E9,"end_time":1.49613653735E9,"http":{"response":{"status":200}},"aws":{"operation":"Query","region":"us-east-1","request_id":"NLDDT3QCFB7AF1O1HI6OG2PKFRVV4KQNSO5AEMVJF66Q9ASUAAJG","retries":0,"limit":100,"select":"ALL_ATTRIBUTES","table_name":"ValuesTable","resource_names":["ValuesTable"]},"namespace":"aws","subsegments":[{"id":"1e7ac53368dbf1e6","name":"Kinesis","start_time":1.496136537377E9,"end_time":1.496136537451E9,"http":{"response":{"status":200}},"aws":{"operation":"PutRecord","region":"us-east-1","request_id":"fe461dd7-0a55-2fcd-afe1-204ea4036cec","retries":0},"namespace":"aws","subsegments":[{"id":"a7a97dc818f7057d","name":"KinesisMetadata","start_time":1.496136537451E9,"end_time":1.496136537451E9,"metadata":{"ResourceUsage":{"Operation":"KINESISPUTRECORD","MessagePayloadSize":182}}}]},{"id":"394c68d8afaa1a70","name":"Kinesis","start_time":1.496136537364E9,"end_time":1.496136537437E9,"http":{"response":{"status":200}},"aws":{"operation":"PutRecord","region":"us-east-1","request_id":"f443bb91-5b61-0572-a5e4-86089bfcceef","retries":0},"namespace":"aws","subsegments":[{"id":"e110a2e25fd9bc76","name":"KinesisMetadata","start_time":1.496136537437E9,"end_time":1.496136537437E9,"metadata":{"ResourceUsage":{"Operation":"KINESISPUTRECORD","MessagePayloadSize":182}}}]},{"id":"dc4d1737bdd08859","name":"DynamoDB","start_time":1.49613653736E9,"end_time":1.496136537419E9,"http":{"response":{"status":200}},"aws":{"operation":"PutItem","region":"us-east-1","request_id":"JJ6P2J9N78O69FRLFA9KAO4IINVV4KQNSO5AEMVJF66Q9ASUAAJG","retries":0,"table_name":"PredictionsTable","resource_names":["PredictionsTable"]},"namespace":"aws","subsegments":[{"id":"06a9cbb3b4b96b57","name":"DynamoDBConsumedCapacity","start_time":1.496136537419E9,"end_time":1.49613653742E9,"metadata":{"DynamoDBConsumedCapacity":{"consumptions":{"CapacityUnits":{"val":1,"type":"WCU"}},"resourceName":"PredictionsTable"}}}]},{"id":"89d2e8ee79593a6c","name":"DynamoDB","start_time":1.496136537367E9,"end_time":1.496136537418E9,"http":{"response":{"status":200}},"aws":{"operation":"PutItem","region":"us-east-1","request_id":"87QEBCEVQNCETBFGC225CF3LBBVV4KQNSO5AEMVJF66Q9ASUAAJG","retries":0,"table_name":"PredictionsTable","resource_names":["PredictionsTable"]},"namespace":"aws","subsegments":[{"id":"293d5eab5b6bd10f","name":"DynamoDBConsumedCapacity","start_time":1.496136537418E9,"end_time":1.496136537418E9,"metadata":{"DynamoDBConsumedCapacity":{"consumptions":{"CapacityUnits":{"val":1,"type":"WCU"}},"resourceName":"PredictionsTable"}}}]},{"id":"6471e25c6e8e6448","name":"DynamoDBConsumedCapacity","start_time":1.496136537356E9,"end_time":1.496136537356E9,"metadata":{"DynamoDBConsumedCapacity":{"consumptions":{"CapacityUnits":{"val":0.5,"type":"RCU"}},"resourceName":"ValuesTable"}}}]},{"id":"666c4a378f31ccd9","name":"LambdaMetadata","start_time":1.49613653723E9,"end_time":1.49613653723E9,"metadata":{"ResourceUsage":{"RequestId":"614d6da3-451a-11e7-beae-7b3b487c25a3"}}},{"id":"76d010d30abe5b30","name":"Initialization","start_time":1.496136536608E9,"end_time":1.496136537226E9,"aws":{"function_arn":"arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction"}}]}' },
          { Id: '5cef4e060b98e5d3',
            Document: '{"id":"5cef4e060b98e5d3","name":"ingestValueFunction","start_time":1.496136521549E9,"end_time":1.496136527381E9,"http":{"response":{"status":200}},"aws":{"request_id":"5e848a81-451a-11e7-a93d-53f7d1a14ba3"},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::Lambda","resource_arn":"arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction"}' },
          { Id: '5ad8ce7037c50494',
            Document: '{"id":"5ad8ce7037c50494","name":"persistValueFunction","start_time":1.496136537213E9,"end_time":1.496136538737E9,"parent_id":"1694fd1516e8c258","aws":{"function_arn":"arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction","resource_names":["persistValueFunction"],"account_id":"186706155491"},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::Lambda::Function","subsegments":[{"id":"5cc000c90e7798cc","name":"DynamoDB","start_time":1.496136537396E9,"end_time":1.496136538658E9,"http":{"response":{"status":200}},"aws":{"operation":"PutItem","region":"us-east-1","request_id":"C60L09K67K2D82Q55VGMJ1BCENVV4KQNSO5AEMVJF66Q9ASUAAJG","retries":0,"table_name":"ValuesTable","resource_names":["ValuesTable"]},"namespace":"aws","subsegments":[{"id":"3a9d45e33deb9b0c","name":"DynamoDBConsumedCapacity","start_time":1.496136538659E9,"end_time":1.496136538715E9,"metadata":{"DynamoDBConsumedCapacity":{"consumptions":{"CapacityUnits":{"val":1,"type":"WCU"}},"resourceName":"ValuesTable"}}}]},{"id":"5e5c45237db6c0d9","name":"Initialization","start_time":1.496136536608E9,"end_time":1.496136537211E9,"aws":{"function_arn":"arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction"}},{"id":"488f2299b5893f4e","name":"LambdaMetadata","start_time":1.496136537236E9,"end_time":1.496136537238E9,"metadata":{"ResourceUsage":{"RequestId":"614d2066-451a-11e7-a61b-536aaf9738fb"}}}]}' },
          { Id: '1af262dd29712f54',
            Document: '{"id":"1af262dd29712f54","name":"DynamoDB","start_time":1.496136537237E9,"end_time":1.49613653735E9,"parent_id":"2ca1f2ee6acfe4ee","inferred":true,"http":{"response":{"status":200}},"aws":{"operation":"Query","region":"us-east-1","request_id":"NLDDT3QCFB7AF1O1HI6OG2PKFRVV4KQNSO5AEMVJF66Q9ASUAAJG","retries":0,"limit":100,"select":"ALL_ATTRIBUTES","table_name":"ValuesTable","resource_names":["ValuesTable"]},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::DynamoDB::Table"}' },
          { Id: '3675758f384d4611',
            Document: '{"id":"3675758f384d4611","name":"Kinesis","start_time":1.496136537377E9,"end_time":1.496136537451E9,"parent_id":"1e7ac53368dbf1e6","inferred":true,"http":{"response":{"status":200}},"aws":{"operation":"PutRecord","region":"us-east-1","request_id":"fe461dd7-0a55-2fcd-afe1-204ea4036cec","retries":0},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::Kinesis"}' },
          { Id: '06aac8712df53148',
            Document: '{"id":"06aac8712df53148","name":"Kinesis","start_time":1.496136537364E9,"end_time":1.496136537437E9,"parent_id":"394c68d8afaa1a70","inferred":true,"http":{"response":{"status":200}},"aws":{"operation":"PutRecord","region":"us-east-1","request_id":"f443bb91-5b61-0572-a5e4-86089bfcceef","retries":0},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::Kinesis"}' },
          { Id: '34636cd2231928aa',
            Document: '{"id":"34636cd2231928aa","name":"DynamoDB","start_time":1.49613653736E9,"end_time":1.496136537419E9,"parent_id":"dc4d1737bdd08859","inferred":true,"http":{"response":{"status":200}},"aws":{"operation":"PutItem","region":"us-east-1","request_id":"JJ6P2J9N78O69FRLFA9KAO4IINVV4KQNSO5AEMVJF66Q9ASUAAJG","retries":0,"table_name":"PredictionsTable","resource_names":["PredictionsTable"]},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::DynamoDB::Table"}' },
          { Id: '12dfc5b82989abdb',
            Document: '{"id":"12dfc5b82989abdb","name":"DynamoDB","start_time":1.496136537367E9,"end_time":1.496136537418E9,"parent_id":"89d2e8ee79593a6c","inferred":true,"http":{"response":{"status":200}},"aws":{"operation":"PutItem","region":"us-east-1","request_id":"87QEBCEVQNCETBFGC225CF3LBBVV4KQNSO5AEMVJF66Q9ASUAAJG","retries":0,"table_name":"PredictionsTable","resource_names":["PredictionsTable"]},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::DynamoDB::Table"}' },
          { Id: '14f88ca53b71000b',
            Document: '{"id":"14f88ca53b71000b","name":"DynamoDB","start_time":1.496136537396E9,"end_time":1.496136538658E9,"parent_id":"5cc000c90e7798cc","inferred":true,"http":{"response":{"status":200}},"aws":{"operation":"PutItem","region":"us-east-1","request_id":"C60L09K67K2D82Q55VGMJ1BCENVV4KQNSO5AEMVJF66Q9ASUAAJG","retries":0,"table_name":"ValuesTable","resource_names":["ValuesTable"]},"trace_id":"1-592d3b49-bf8ac7498a9738de2ce8291d","origin":"AWS::DynamoDB::Table"}' } ] } ],
  UnprocessedTraceIds: [],
  NextToken: null }
make new cost document
make new cost document
make new cost document
make new cost document
Found Lambda document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
Found Lambda document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
Found Lambda document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
make new cost document
Found dynamodb document
Found dynamodb document
