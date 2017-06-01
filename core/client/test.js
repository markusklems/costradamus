{ traceId: '1-592ec12d-5e40def01a28cfb2caeeb872',
  origin: '',
  segments: 
   [ { id: '1998cd9f3f44067f',
       name: 'predictValueFunction',
       start_time: 1496236341.383,
       end_time: 1496236341.663,
       parent_id: '3937e1fcb13c4d3f',
       aws: 
        { function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction',
          resource_names: [ 'predictValueFunction' ],
          account_id: '186706155491' },
       trace_id: '1-592ec12d-5e40def01a28cfb2caeeb872',
       origin: 'AWS::Lambda::Function',
       subsegments: 
        [ { id: '432208adbeb98911',
            name: 'DynamoDB',
            start_time: 1496236341.392,
            end_time: 1496236341.523,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'Query',
               region: 'us-east-1',
               request_id: 'FS7DEQ5CVE9N373BU3A0MIED9NVV4KQNSO5AEMVJF66Q9ASUAAJG',
               retries: 0,
               limit: 100,
               select: 'ALL_ATTRIBUTES',
               table_name: 'ValuesTable',
               resource_names: [ 'ValuesTable' ] },
            namespace: 'aws',
            subsegments: 
             [ { id: '4374f05e3e6952e8',
                 name: 'DynamoDB',
                 start_time: 1496236341.528,
                 end_time: 1496236341.622,
                 http: { response: { status: 200 } },
                 aws: 
                  { operation: 'PutItem',
                    region: 'us-east-1',
                    request_id: '4FVIUSTQ98GS454FC0H6SU3RC3VV4KQNSO5AEMVJF66Q9ASUAAJG',
                    retries: 0,
                    table_name: 'PredictionsTable',
                    resource_names: [ 'PredictionsTable' ] },
                 namespace: 'aws',
                 subsegments: 
                  [ { id: '2dabb0e6babef978',
                      name: 'DynamoDBCostradamus',
                      start_time: 1496236341.623,
                      end_time: 1496236341.623,
                      metadata: 
                       { DynamoDBCostradamus: 
                          { consumptions: 
                             { CapacityUnits: { val: 1, type: 'WCU' },
                               Latency: { val: 0.09399986267089844, type: 'MS' },
                               PayloadSize: { val: 1.5, type: 'KB' } } } },
                      cost: 
                       { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
                         PayloadWaste: { type: 'KB', val: -0.5 } } } ],
                 consumptions: 
                  { CapacityUnits: { val: 1, type: 'WCU' },
                    Latency: { val: 0.09399986267089844, type: 'MS' },
                    PayloadSize: { val: 1.5, type: 'KB' } },
                 cost: 
                  { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
                    PayloadWaste: { type: 'KB', val: -0.5 } } },
               { id: 'e96da2bc0961786e',
                 name: 'Kinesis',
                 start_time: 1496236341.563,
                 end_time: 1496236341.65,
                 http: { response: { status: 200 } },
                 aws: 
                  { operation: 'PutRecord',
                    region: 'us-east-1',
                    request_id: 'f726bc1a-947b-8719-a68e-7f6f92dc58dc',
                    retries: 0 },
                 namespace: 'aws',
                 subsegments: 
                  [ { id: '88f16fc4dfeb2ede',
                      name: 'KinesisCostradamus',
                      start_time: 1496236341.651,
                      end_time: 1496236341.651,
                      metadata: 
                       { KinesisCostradamus: 
                          { consumptions: 
                             { PayloadSize: { val: 232, type: 'B' },
                               Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
                               Latency: { val: 0.08700013160705566, type: 'MS' } } } },
                      cost: { MonetaryCost: { type: 'USD', val: NaN } } } ],
                 consumptions: 
                  { PayloadSize: { val: 232, type: 'B' },
                    Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
                    Latency: { val: 0.08700013160705566, type: 'MS' } },
                 cost: { MonetaryCost: { type: 'USD', val: NaN } } },
               { id: '0d11d1fe978be42b',
                 name: 'DynamoDB',
                 start_time: 1496236341.566,
                 end_time: 1496236341.65,
                 http: { response: { status: 200 } },
                 aws: 
                  { operation: 'PutItem',
                    region: 'us-east-1',
                    request_id: '1HAB8ET2UOMB9T3507RQ9CLBFFVV4KQNSO5AEMVJF66Q9ASUAAJG',
                    retries: 0,
                    table_name: 'PredictionsTable',
                    resource_names: [ 'PredictionsTable' ] },
                 namespace: 'aws',
                 subsegments: 
                  [ { id: '6e96a238c4140efc',
                      name: 'DynamoDBCostradamus',
                      start_time: 1496236341.65,
                      end_time: 1496236341.65,
                      metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
               { id: 'd7bca2d6fe3a3d44',
                 name: 'Kinesis',
                 start_time: 1496236341.546,
                 end_time: 1496236341.627,
                 http: { response: { status: 200 } },
                 aws: 
                  { operation: 'PutRecord',
                    region: 'us-east-1',
                    request_id: 'c4e5e4e1-af48-d106-954d-2794765e0965',
                    retries: 0 },
                 namespace: 'aws',
                 subsegments: 
                  [ { id: 'a55414b7619a7a30',
                      name: 'KinesisCostradamus',
                      start_time: 1496236341.648,
                      end_time: 1496236341.648,
                      metadata: 
                       { KinesisCostradamus: 
                          { consumptions: 
                             { PayloadSize: { val: 232, type: 'B' },
                               Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] },
               { id: '7e26b62592d15789',
                 name: 'DynamoDB',
                 start_time: 1496236341.561,
                 end_time: 1496236341.625,
                 http: { response: { status: 200 } },
                 aws: 
                  { operation: 'PutItem',
                    region: 'us-east-1',
                    request_id: 'VA33VJLEJI2DQ509BTPFQBT5MNVV4KQNSO5AEMVJF66Q9ASUAAJG',
                    retries: 0,
                    table_name: 'PredictionsTable',
                    resource_names: [ 'PredictionsTable' ] },
                 namespace: 'aws',
                 subsegments: 
                  [ { id: '4579415ba2739510',
                      name: 'DynamoDBCostradamus',
                      start_time: 1496236341.625,
                      end_time: 1496236341.625,
                      metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
               { id: '2fa5f744cbc886f9',
                 name: 'DynamoDBCostradamus',
                 start_time: 1496236341.524,
                 end_time: 1496236341.524,
                 metadata: 
                  { DynamoDBCostradamus: 
                     { consumptions: 
                        { CapacityUnits: { val: 0.5, type: 'RCU' },
                          Latency: { val: 0.13100004196166992, type: 'MS' },
                          PayloadSize: { val: 1.5, type: 'KB' } } } },
                 cost: 
                  { MonetaryCost: { type: 'USD', val: 0.000002674584190050761 },
                    PayloadWaste: { type: 'KB', val: 0.5 } } },
               { id: 'd0e4284210f810ce',
                 name: 'Kinesis',
                 start_time: 1496236341.568,
                 end_time: 1496236341.651,
                 http: { response: { status: 200 } },
                 aws: 
                  { operation: 'PutRecord',
                    region: 'us-east-1',
                    request_id: 'cbdfa85e-17eb-3a06-9a77-6b2baf19036e',
                    retries: 0 },
                 namespace: 'aws',
                 subsegments: 
                  [ { id: '1ee395d9f7554cf3',
                      name: 'KinesisCostradamus',
                      start_time: 1496236341.652,
                      end_time: 1496236341.652,
                      metadata: 
                       { KinesisCostradamus: 
                          { consumptions: 
                             { PayloadSize: { val: 232, type: 'B' },
                               Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] } ],
            consumptions: 
             { CapacityUnits: { val: 0.5, type: 'RCU' },
               Latency: { val: 0.13100004196166992, type: 'MS' },
               PayloadSize: { val: 1.5, type: 'KB' } },
            cost: 
             { MonetaryCost: { type: 'USD', val: 0.000002674584190050761 },
               PayloadWaste: { type: 'KB', val: 0.5 } } },
          { id: '025e29253f924eb5',
            name: 'LambdaCostradamus',
            start_time: 1496236341.384,
            end_time: 1496236341.385,
            metadata: { LambdaCostradamus: { RequestId: 'c5989757-4602-11e7-9142-91671adaaeed' } } },
          { id: '1a37a5105a7977c7',
            name: 'Initialization',
            start_time: 1496236340.976,
            end_time: 1496236341.381,
            aws: { function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction' } } ],
       resourceName: 'predictValueFunction',
       resourceId: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction',
       consumptions: 
        { Duration: { val: 281.48, type: 'ms' },
          BilledDuration: { val: 300, type: 'ms' },
          MemorySize: { val: 1024, type: 'MB' },
          MaxMemoryUsed: { val: 43, type: 'MB' } },
       cost: 
        { MonetaryCost: { type: 'USD', val: 500.1 },
          RuntimeWaste: { type: 'MS', val: 18.519999999999982 },
          MonetaryRuntimeWaste: { type: 'MS', val: 30.87283999999997 },
          MemoryWaste: { type: 'MB', val: 981 } } },
     { id: '432208adbeb98911',
       name: 'DynamoDB',
       start_time: 1496236341.392,
       end_time: 1496236341.523,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'Query',
          region: 'us-east-1',
          request_id: 'FS7DEQ5CVE9N373BU3A0MIED9NVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          limit: 100,
          select: 'ALL_ATTRIBUTES',
          table_name: 'ValuesTable',
          resource_names: [ 'ValuesTable' ] },
       namespace: 'aws',
       subsegments: 
        [ { id: '4374f05e3e6952e8',
            name: 'DynamoDB',
            start_time: 1496236341.528,
            end_time: 1496236341.622,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutItem',
               region: 'us-east-1',
               request_id: '4FVIUSTQ98GS454FC0H6SU3RC3VV4KQNSO5AEMVJF66Q9ASUAAJG',
               retries: 0,
               table_name: 'PredictionsTable',
               resource_names: [ 'PredictionsTable' ] },
            namespace: 'aws',
            subsegments: 
             [ { id: '2dabb0e6babef978',
                 name: 'DynamoDBCostradamus',
                 start_time: 1496236341.623,
                 end_time: 1496236341.623,
                 metadata: 
                  { DynamoDBCostradamus: 
                     { consumptions: 
                        { CapacityUnits: { val: 1, type: 'WCU' },
                          Latency: { val: 0.09399986267089844, type: 'MS' },
                          PayloadSize: { val: 1.5, type: 'KB' } } } },
                 cost: 
                  { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
                    PayloadWaste: { type: 'KB', val: -0.5 } } } ],
            consumptions: 
             { CapacityUnits: { val: 1, type: 'WCU' },
               Latency: { val: 0.09399986267089844, type: 'MS' },
               PayloadSize: { val: 1.5, type: 'KB' } },
            cost: 
             { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
               PayloadWaste: { type: 'KB', val: -0.5 } } },
          { id: 'e96da2bc0961786e',
            name: 'Kinesis',
            start_time: 1496236341.563,
            end_time: 1496236341.65,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutRecord',
               region: 'us-east-1',
               request_id: 'f726bc1a-947b-8719-a68e-7f6f92dc58dc',
               retries: 0 },
            namespace: 'aws',
            subsegments: 
             [ { id: '88f16fc4dfeb2ede',
                 name: 'KinesisCostradamus',
                 start_time: 1496236341.651,
                 end_time: 1496236341.651,
                 metadata: 
                  { KinesisCostradamus: 
                     { consumptions: 
                        { PayloadSize: { val: 232, type: 'B' },
                          Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
                          Latency: { val: 0.08700013160705566, type: 'MS' } } } },
                 cost: { MonetaryCost: { type: 'USD', val: NaN } } } ],
            consumptions: 
             { PayloadSize: { val: 232, type: 'B' },
               Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
               Latency: { val: 0.08700013160705566, type: 'MS' } },
            cost: { MonetaryCost: { type: 'USD', val: NaN } } },
          { id: '0d11d1fe978be42b',
            name: 'DynamoDB',
            start_time: 1496236341.566,
            end_time: 1496236341.65,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutItem',
               region: 'us-east-1',
               request_id: '1HAB8ET2UOMB9T3507RQ9CLBFFVV4KQNSO5AEMVJF66Q9ASUAAJG',
               retries: 0,
               table_name: 'PredictionsTable',
               resource_names: [ 'PredictionsTable' ] },
            namespace: 'aws',
            subsegments: 
             [ { id: '6e96a238c4140efc',
                 name: 'DynamoDBCostradamus',
                 start_time: 1496236341.65,
                 end_time: 1496236341.65,
                 metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
          { id: 'd7bca2d6fe3a3d44',
            name: 'Kinesis',
            start_time: 1496236341.546,
            end_time: 1496236341.627,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutRecord',
               region: 'us-east-1',
               request_id: 'c4e5e4e1-af48-d106-954d-2794765e0965',
               retries: 0 },
            namespace: 'aws',
            subsegments: 
             [ { id: 'a55414b7619a7a30',
                 name: 'KinesisCostradamus',
                 start_time: 1496236341.648,
                 end_time: 1496236341.648,
                 metadata: 
                  { KinesisCostradamus: 
                     { consumptions: 
                        { PayloadSize: { val: 232, type: 'B' },
                          Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] },
          { id: '7e26b62592d15789',
            name: 'DynamoDB',
            start_time: 1496236341.561,
            end_time: 1496236341.625,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutItem',
               region: 'us-east-1',
               request_id: 'VA33VJLEJI2DQ509BTPFQBT5MNVV4KQNSO5AEMVJF66Q9ASUAAJG',
               retries: 0,
               table_name: 'PredictionsTable',
               resource_names: [ 'PredictionsTable' ] },
            namespace: 'aws',
            subsegments: 
             [ { id: '4579415ba2739510',
                 name: 'DynamoDBCostradamus',
                 start_time: 1496236341.625,
                 end_time: 1496236341.625,
                 metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
          { id: '2fa5f744cbc886f9',
            name: 'DynamoDBCostradamus',
            start_time: 1496236341.524,
            end_time: 1496236341.524,
            metadata: 
             { DynamoDBCostradamus: 
                { consumptions: 
                   { CapacityUnits: { val: 0.5, type: 'RCU' },
                     Latency: { val: 0.13100004196166992, type: 'MS' },
                     PayloadSize: { val: 1.5, type: 'KB' } } } },
            cost: 
             { MonetaryCost: { type: 'USD', val: 0.000002674584190050761 },
               PayloadWaste: { type: 'KB', val: 0.5 } } },
          { id: 'd0e4284210f810ce',
            name: 'Kinesis',
            start_time: 1496236341.568,
            end_time: 1496236341.651,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutRecord',
               region: 'us-east-1',
               request_id: 'cbdfa85e-17eb-3a06-9a77-6b2baf19036e',
               retries: 0 },
            namespace: 'aws',
            subsegments: 
             [ { id: '1ee395d9f7554cf3',
                 name: 'KinesisCostradamus',
                 start_time: 1496236341.652,
                 end_time: 1496236341.652,
                 metadata: 
                  { KinesisCostradamus: 
                     { consumptions: 
                        { PayloadSize: { val: 232, type: 'B' },
                          Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] } ],
       consumptions: 
        { CapacityUnits: { val: 0.5, type: 'RCU' },
          Latency: { val: 0.13100004196166992, type: 'MS' },
          PayloadSize: { val: 1.5, type: 'KB' } },
       cost: 
        { MonetaryCost: { type: 'USD', val: 0.000002674584190050761 },
          PayloadWaste: { type: 'KB', val: 0.5 } } },
     { id: '432208adbeb98911',
       name: 'DynamoDB',
       start_time: 1496236341.392,
       end_time: 1496236341.523,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'Query',
          region: 'us-east-1',
          request_id: 'FS7DEQ5CVE9N373BU3A0MIED9NVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          limit: 100,
          select: 'ALL_ATTRIBUTES',
          table_name: 'ValuesTable',
          resource_names: [ 'ValuesTable' ] },
       namespace: 'aws',
       subsegments: 
        [ { id: '4374f05e3e6952e8',
            name: 'DynamoDB',
            start_time: 1496236341.528,
            end_time: 1496236341.622,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutItem',
               region: 'us-east-1',
               request_id: '4FVIUSTQ98GS454FC0H6SU3RC3VV4KQNSO5AEMVJF66Q9ASUAAJG',
               retries: 0,
               table_name: 'PredictionsTable',
               resource_names: [ 'PredictionsTable' ] },
            namespace: 'aws',
            subsegments: 
             [ { id: '2dabb0e6babef978',
                 name: 'DynamoDBCostradamus',
                 start_time: 1496236341.623,
                 end_time: 1496236341.623,
                 metadata: 
                  { DynamoDBCostradamus: 
                     { consumptions: 
                        { CapacityUnits: { val: 1, type: 'WCU' },
                          Latency: { val: 0.09399986267089844, type: 'MS' },
                          PayloadSize: { val: 1.5, type: 'KB' } } } },
                 cost: 
                  { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
                    PayloadWaste: { type: 'KB', val: -0.5 } } } ],
            consumptions: 
             { CapacityUnits: { val: 1, type: 'WCU' },
               Latency: { val: 0.09399986267089844, type: 'MS' },
               PayloadSize: { val: 1.5, type: 'KB' } },
            cost: 
             { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
               PayloadWaste: { type: 'KB', val: -0.5 } } },
          { id: 'e96da2bc0961786e',
            name: 'Kinesis',
            start_time: 1496236341.563,
            end_time: 1496236341.65,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutRecord',
               region: 'us-east-1',
               request_id: 'f726bc1a-947b-8719-a68e-7f6f92dc58dc',
               retries: 0 },
            namespace: 'aws',
            subsegments: 
             [ { id: '88f16fc4dfeb2ede',
                 name: 'KinesisCostradamus',
                 start_time: 1496236341.651,
                 end_time: 1496236341.651,
                 metadata: 
                  { KinesisCostradamus: 
                     { consumptions: 
                        { PayloadSize: { val: 232, type: 'B' },
                          Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
                          Latency: { val: 0.08700013160705566, type: 'MS' } } } },
                 cost: { MonetaryCost: { type: 'USD', val: NaN } } } ],
            consumptions: 
             { PayloadSize: { val: 232, type: 'B' },
               Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
               Latency: { val: 0.08700013160705566, type: 'MS' } },
            cost: { MonetaryCost: { type: 'USD', val: NaN } } },
          { id: '0d11d1fe978be42b',
            name: 'DynamoDB',
            start_time: 1496236341.566,
            end_time: 1496236341.65,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutItem',
               region: 'us-east-1',
               request_id: '1HAB8ET2UOMB9T3507RQ9CLBFFVV4KQNSO5AEMVJF66Q9ASUAAJG',
               retries: 0,
               table_name: 'PredictionsTable',
               resource_names: [ 'PredictionsTable' ] },
            namespace: 'aws',
            subsegments: 
             [ { id: '6e96a238c4140efc',
                 name: 'DynamoDBCostradamus',
                 start_time: 1496236341.65,
                 end_time: 1496236341.65,
                 metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
          { id: 'd7bca2d6fe3a3d44',
            name: 'Kinesis',
            start_time: 1496236341.546,
            end_time: 1496236341.627,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutRecord',
               region: 'us-east-1',
               request_id: 'c4e5e4e1-af48-d106-954d-2794765e0965',
               retries: 0 },
            namespace: 'aws',
            subsegments: 
             [ { id: 'a55414b7619a7a30',
                 name: 'KinesisCostradamus',
                 start_time: 1496236341.648,
                 end_time: 1496236341.648,
                 metadata: 
                  { KinesisCostradamus: 
                     { consumptions: 
                        { PayloadSize: { val: 232, type: 'B' },
                          Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] },
          { id: '7e26b62592d15789',
            name: 'DynamoDB',
            start_time: 1496236341.561,
            end_time: 1496236341.625,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutItem',
               region: 'us-east-1',
               request_id: 'VA33VJLEJI2DQ509BTPFQBT5MNVV4KQNSO5AEMVJF66Q9ASUAAJG',
               retries: 0,
               table_name: 'PredictionsTable',
               resource_names: [ 'PredictionsTable' ] },
            namespace: 'aws',
            subsegments: 
             [ { id: '4579415ba2739510',
                 name: 'DynamoDBCostradamus',
                 start_time: 1496236341.625,
                 end_time: 1496236341.625,
                 metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
          { id: '2fa5f744cbc886f9',
            name: 'DynamoDBCostradamus',
            start_time: 1496236341.524,
            end_time: 1496236341.524,
            metadata: 
             { DynamoDBCostradamus: 
                { consumptions: 
                   { CapacityUnits: { val: 0.5, type: 'RCU' },
                     Latency: { val: 0.13100004196166992, type: 'MS' },
                     PayloadSize: { val: 1.5, type: 'KB' } } } },
            cost: 
             { MonetaryCost: { type: 'USD', val: 0.000002674584190050761 },
               PayloadWaste: { type: 'KB', val: 0.5 } } },
          { id: 'd0e4284210f810ce',
            name: 'Kinesis',
            start_time: 1496236341.568,
            end_time: 1496236341.651,
            http: { response: { status: 200 } },
            aws: 
             { operation: 'PutRecord',
               region: 'us-east-1',
               request_id: 'cbdfa85e-17eb-3a06-9a77-6b2baf19036e',
               retries: 0 },
            namespace: 'aws',
            subsegments: 
             [ { id: '1ee395d9f7554cf3',
                 name: 'KinesisCostradamus',
                 start_time: 1496236341.652,
                 end_time: 1496236341.652,
                 metadata: 
                  { KinesisCostradamus: 
                     { consumptions: 
                        { PayloadSize: { val: 232, type: 'B' },
                          Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] } ],
       consumptions: 
        { CapacityUnits: { val: 0.5, type: 'RCU' },
          Latency: { val: 0.13100004196166992, type: 'MS' },
          PayloadSize: { val: 1.5, type: 'KB' } },
       cost: 
        { MonetaryCost: { type: 'USD', val: 0.000002674584190050761 },
          PayloadWaste: { type: 'KB', val: 0.5 } } },
     { id: '4374f05e3e6952e8',
       name: 'DynamoDB',
       start_time: 1496236341.528,
       end_time: 1496236341.622,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutItem',
          region: 'us-east-1',
          request_id: '4FVIUSTQ98GS454FC0H6SU3RC3VV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: [ 'PredictionsTable' ] },
       namespace: 'aws',
       subsegments: 
        [ { id: '2dabb0e6babef978',
            name: 'DynamoDBCostradamus',
            start_time: 1496236341.623,
            end_time: 1496236341.623,
            metadata: 
             { DynamoDBCostradamus: 
                { consumptions: 
                   { CapacityUnits: { val: 1, type: 'WCU' },
                     Latency: { val: 0.09399986267089844, type: 'MS' },
                     PayloadSize: { val: 1.5, type: 'KB' } } } },
            cost: 
             { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
               PayloadWaste: { type: 'KB', val: -0.5 } } } ],
       consumptions: 
        { CapacityUnits: { val: 1, type: 'WCU' },
          Latency: { val: 0.09399986267089844, type: 'MS' },
          PayloadSize: { val: 1.5, type: 'KB' } },
       cost: 
        { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
          PayloadWaste: { type: 'KB', val: -0.5 } } },
     { id: '4374f05e3e6952e8',
       name: 'DynamoDB',
       start_time: 1496236341.528,
       end_time: 1496236341.622,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutItem',
          region: 'us-east-1',
          request_id: '4FVIUSTQ98GS454FC0H6SU3RC3VV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: [ 'PredictionsTable' ] },
       namespace: 'aws',
       subsegments: 
        [ { id: '2dabb0e6babef978',
            name: 'DynamoDBCostradamus',
            start_time: 1496236341.623,
            end_time: 1496236341.623,
            metadata: 
             { DynamoDBCostradamus: 
                { consumptions: 
                   { CapacityUnits: { val: 1, type: 'WCU' },
                     Latency: { val: 0.09399986267089844, type: 'MS' },
                     PayloadSize: { val: 1.5, type: 'KB' } } } },
            cost: 
             { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
               PayloadWaste: { type: 'KB', val: -0.5 } } } ],
       consumptions: 
        { CapacityUnits: { val: 1, type: 'WCU' },
          Latency: { val: 0.09399986267089844, type: 'MS' },
          PayloadSize: { val: 1.5, type: 'KB' } },
       cost: 
        { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
          PayloadWaste: { type: 'KB', val: -0.5 } } },
     { id: '2dabb0e6babef978',
       name: 'DynamoDBCostradamus',
       start_time: 1496236341.623,
       end_time: 1496236341.623,
       metadata: 
        { DynamoDBCostradamus: 
           { consumptions: 
              { CapacityUnits: { val: 1, type: 'WCU' },
                Latency: { val: 0.09399986267089844, type: 'MS' },
                PayloadSize: { val: 1.5, type: 'KB' } } } },
       cost: 
        { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
          PayloadWaste: { type: 'KB', val: -0.5 } } },
     { id: '2dabb0e6babef978',
       name: 'DynamoDBCostradamus',
       start_time: 1496236341.623,
       end_time: 1496236341.623,
       metadata: 
        { DynamoDBCostradamus: 
           { consumptions: 
              { CapacityUnits: { val: 1, type: 'WCU' },
                Latency: { val: 0.09399986267089844, type: 'MS' },
                PayloadSize: { val: 1.5, type: 'KB' } } } },
       cost: 
        { MonetaryCost: { type: 'USD', val: 0.000019191638628641763 },
          PayloadWaste: { type: 'KB', val: -0.5 } } },
     { id: 'e96da2bc0961786e',
       name: 'Kinesis',
       start_time: 1496236341.563,
       end_time: 1496236341.65,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'f726bc1a-947b-8719-a68e-7f6f92dc58dc',
          retries: 0 },
       namespace: 'aws',
       subsegments: 
        [ { id: '88f16fc4dfeb2ede',
            name: 'KinesisCostradamus',
            start_time: 1496236341.651,
            end_time: 1496236341.651,
            metadata: 
             { KinesisCostradamus: 
                { consumptions: 
                   { PayloadSize: { val: 232, type: 'B' },
                     Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
                     Latency: { val: 0.08700013160705566, type: 'MS' } } } },
            cost: { MonetaryCost: { type: 'USD', val: NaN } } } ],
       consumptions: 
        { PayloadSize: { val: 232, type: 'B' },
          Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
          Latency: { val: 0.08700013160705566, type: 'MS' } },
       cost: { MonetaryCost: { type: 'USD', val: NaN } } },
     { id: 'e96da2bc0961786e',
       name: 'Kinesis',
       start_time: 1496236341.563,
       end_time: 1496236341.65,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'f726bc1a-947b-8719-a68e-7f6f92dc58dc',
          retries: 0 },
       namespace: 'aws',
       subsegments: 
        [ { id: '88f16fc4dfeb2ede',
            name: 'KinesisCostradamus',
            start_time: 1496236341.651,
            end_time: 1496236341.651,
            metadata: 
             { KinesisCostradamus: 
                { consumptions: 
                   { PayloadSize: { val: 232, type: 'B' },
                     Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
                     Latency: { val: 0.08700013160705566, type: 'MS' } } } },
            cost: { MonetaryCost: { type: 'USD', val: NaN } } } ],
       consumptions: 
        { PayloadSize: { val: 232, type: 'B' },
          Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
          Latency: { val: 0.08700013160705566, type: 'MS' } },
       cost: { MonetaryCost: { type: 'USD', val: NaN } } },
     { id: '88f16fc4dfeb2ede',
       name: 'KinesisCostradamus',
       start_time: 1496236341.651,
       end_time: 1496236341.651,
       metadata: 
        { KinesisCostradamus: 
           { consumptions: 
              { PayloadSize: { val: 232, type: 'B' },
                Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
                Latency: { val: 0.08700013160705566, type: 'MS' } } } },
       cost: { MonetaryCost: { type: 'USD', val: NaN } } },
     { id: '88f16fc4dfeb2ede',
       name: 'KinesisCostradamus',
       start_time: 1496236341.651,
       end_time: 1496236341.651,
       metadata: 
        { KinesisCostradamus: 
           { consumptions: 
              { PayloadSize: { val: 232, type: 'B' },
                Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } },
                Latency: { val: 0.08700013160705566, type: 'MS' } } } },
       cost: { MonetaryCost: { type: 'USD', val: NaN } } },
     { id: '0d11d1fe978be42b',
       name: 'DynamoDB',
       start_time: 1496236341.566,
       end_time: 1496236341.65,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutItem',
          region: 'us-east-1',
          request_id: '1HAB8ET2UOMB9T3507RQ9CLBFFVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: [ 'PredictionsTable' ] },
       namespace: 'aws',
       subsegments: 
        [ { id: '6e96a238c4140efc',
            name: 'DynamoDBCostradamus',
            start_time: 1496236341.65,
            end_time: 1496236341.65,
            metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
     { id: '0d11d1fe978be42b',
       name: 'DynamoDB',
       start_time: 1496236341.566,
       end_time: 1496236341.65,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutItem',
          region: 'us-east-1',
          request_id: '1HAB8ET2UOMB9T3507RQ9CLBFFVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: [ 'PredictionsTable' ] },
       namespace: 'aws',
       subsegments: 
        [ { id: '6e96a238c4140efc',
            name: 'DynamoDBCostradamus',
            start_time: 1496236341.65,
            end_time: 1496236341.65,
            metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
     { id: '6e96a238c4140efc',
       name: 'DynamoDBCostradamus',
       start_time: 1496236341.65,
       end_time: 1496236341.65,
       metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } },
     { id: '6e96a238c4140efc',
       name: 'DynamoDBCostradamus',
       start_time: 1496236341.65,
       end_time: 1496236341.65,
       metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } },
     { id: 'd7bca2d6fe3a3d44',
       name: 'Kinesis',
       start_time: 1496236341.546,
       end_time: 1496236341.627,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'c4e5e4e1-af48-d106-954d-2794765e0965',
          retries: 0 },
       namespace: 'aws',
       subsegments: 
        [ { id: 'a55414b7619a7a30',
            name: 'KinesisCostradamus',
            start_time: 1496236341.648,
            end_time: 1496236341.648,
            metadata: 
             { KinesisCostradamus: 
                { consumptions: 
                   { PayloadSize: { val: 232, type: 'B' },
                     Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] },
     { id: 'd7bca2d6fe3a3d44',
       name: 'Kinesis',
       start_time: 1496236341.546,
       end_time: 1496236341.627,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'c4e5e4e1-af48-d106-954d-2794765e0965',
          retries: 0 },
       namespace: 'aws',
       subsegments: 
        [ { id: 'a55414b7619a7a30',
            name: 'KinesisCostradamus',
            start_time: 1496236341.648,
            end_time: 1496236341.648,
            metadata: 
             { KinesisCostradamus: 
                { consumptions: 
                   { PayloadSize: { val: 232, type: 'B' },
                     Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] },
     { id: 'a55414b7619a7a30',
       name: 'KinesisCostradamus',
       start_time: 1496236341.648,
       end_time: 1496236341.648,
       metadata: 
        { KinesisCostradamus: 
           { consumptions: 
              { PayloadSize: { val: 232, type: 'B' },
                Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } },
     { id: 'a55414b7619a7a30',
       name: 'KinesisCostradamus',
       start_time: 1496236341.648,
       end_time: 1496236341.648,
       metadata: 
        { KinesisCostradamus: 
           { consumptions: 
              { PayloadSize: { val: 232, type: 'B' },
                Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } },
     { id: '7e26b62592d15789',
       name: 'DynamoDB',
       start_time: 1496236341.561,
       end_time: 1496236341.625,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutItem',
          region: 'us-east-1',
          request_id: 'VA33VJLEJI2DQ509BTPFQBT5MNVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: [ 'PredictionsTable' ] },
       namespace: 'aws',
       subsegments: 
        [ { id: '4579415ba2739510',
            name: 'DynamoDBCostradamus',
            start_time: 1496236341.625,
            end_time: 1496236341.625,
            metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
     { id: '7e26b62592d15789',
       name: 'DynamoDB',
       start_time: 1496236341.561,
       end_time: 1496236341.625,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutItem',
          region: 'us-east-1',
          request_id: 'VA33VJLEJI2DQ509BTPFQBT5MNVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: [ 'PredictionsTable' ] },
       namespace: 'aws',
       subsegments: 
        [ { id: '4579415ba2739510',
            name: 'DynamoDBCostradamus',
            start_time: 1496236341.625,
            end_time: 1496236341.625,
            metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } } ] },
     { id: '4579415ba2739510',
       name: 'DynamoDBCostradamus',
       start_time: 1496236341.625,
       end_time: 1496236341.625,
       metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } },
     { id: '4579415ba2739510',
       name: 'DynamoDBCostradamus',
       start_time: 1496236341.625,
       end_time: 1496236341.625,
       metadata: { DynamoDBCostradamus: { consumptions: { CapacityUnits: { val: 1, type: 'WCU' } } } } },
     { id: '2fa5f744cbc886f9',
       name: 'DynamoDBCostradamus',
       start_time: 1496236341.524,
       end_time: 1496236341.524,
       metadata: 
        { DynamoDBCostradamus: 
           { consumptions: 
              { CapacityUnits: { val: 0.5, type: 'RCU' },
                Latency: { val: 0.13100004196166992, type: 'MS' },
                PayloadSize: { val: 1.5, type: 'KB' } } } },
       cost: 
        { MonetaryCost: { type: 'USD', val: 0.000002674584190050761 },
          PayloadWaste: { type: 'KB', val: 0.5 } } },
     { id: '2fa5f744cbc886f9',
       name: 'DynamoDBCostradamus',
       start_time: 1496236341.524,
       end_time: 1496236341.524,
       metadata: 
        { DynamoDBCostradamus: 
           { consumptions: 
              { CapacityUnits: { val: 0.5, type: 'RCU' },
                Latency: { val: 0.13100004196166992, type: 'MS' },
                PayloadSize: { val: 1.5, type: 'KB' } } } },
       cost: 
        { MonetaryCost: { type: 'USD', val: 0.000002674584190050761 },
          PayloadWaste: { type: 'KB', val: 0.5 } } },
     { id: 'd0e4284210f810ce',
       name: 'Kinesis',
       start_time: 1496236341.568,
       end_time: 1496236341.651,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'cbdfa85e-17eb-3a06-9a77-6b2baf19036e',
          retries: 0 },
       namespace: 'aws',
       subsegments: 
        [ { id: '1ee395d9f7554cf3',
            name: 'KinesisCostradamus',
            start_time: 1496236341.652,
            end_time: 1496236341.652,
            metadata: 
             { KinesisCostradamus: 
                { consumptions: 
                   { PayloadSize: { val: 232, type: 'B' },
                     Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] },
     { id: 'd0e4284210f810ce',
       name: 'Kinesis',
       start_time: 1496236341.568,
       end_time: 1496236341.651,
       http: { response: { status: 200 } },
       aws: 
        { operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'cbdfa85e-17eb-3a06-9a77-6b2baf19036e',
          retries: 0 },
       namespace: 'aws',
       subsegments: 
        [ { id: '1ee395d9f7554cf3',
            name: 'KinesisCostradamus',
            start_time: 1496236341.652,
            end_time: 1496236341.652,
            metadata: 
             { KinesisCostradamus: 
                { consumptions: 
                   { PayloadSize: { val: 232, type: 'B' },
                     Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } } ] },
     { id: '1ee395d9f7554cf3',
       name: 'KinesisCostradamus',
       start_time: 1496236341.652,
       end_time: 1496236341.652,
       metadata: 
        { KinesisCostradamus: 
           { consumptions: 
              { PayloadSize: { val: 232, type: 'B' },
                Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } },
     { id: '1ee395d9f7554cf3',
       name: 'KinesisCostradamus',
       start_time: 1496236341.652,
       end_time: 1496236341.652,
       metadata: 
        { KinesisCostradamus: 
           { consumptions: 
              { PayloadSize: { val: 232, type: 'B' },
                Operation: { Operation: { val: 'WRITE', type: 'KINESISOPERATION' } } } } } },
     { id: '025e29253f924eb5',
       name: 'LambdaCostradamus',
       start_time: 1496236341.384,
       end_time: 1496236341.385,
       metadata: { LambdaCostradamus: { RequestId: 'c5989757-4602-11e7-9142-91671adaaeed' } } },
     { id: '025e29253f924eb5',
       name: 'LambdaCostradamus',
       start_time: 1496236341.384,
       end_time: 1496236341.385,
       metadata: { LambdaCostradamus: { RequestId: 'c5989757-4602-11e7-9142-91671adaaeed' } } },
     { id: '1a37a5105a7977c7',
       name: 'Initialization',
       start_time: 1496236340.976,
       end_time: 1496236341.381,
       aws: { function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction' } },
     { id: '1a37a5105a7977c7',
       name: 'Initialization',
       start_time: 1496236340.976,
       end_time: 1496236341.381,
       aws: { function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction' } } ] }
val:  500.1
val:  0.000002674584190050761
val:  0.000002674584190050761
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000002674584190050761
val:  0.000002674584190050761
val:  0.000002674584190050761
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000002674584190050761
val:  0.000002674584190050761
val:  0.000002674584190050761
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000002674584190050761
val:  0.000002674584190050761
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000019191638628641763
val:  0.000002674584190050761
val:  0.000002674584190050761
500.1004159277828
