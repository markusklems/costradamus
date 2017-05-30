{
  traceId: '1-592d3b49-bf8ac7498a9738de2ce8291d',
  origin: 'TODO',
  invocations: [{
      id: '4a403dfa44c1a291',
      parent_id: '5cef4e060b98e5d3',
      resourceName: 'ingestValueFunction',
      resourceId: 'arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction',
      consumptions: {
        Duration: {
          val: 2194.56,
          type: 'ms'
        },
        BilledDuration: {
          val: 2200,
          type: 'ms'
        },
        MemorySize: {
          val: 128,
          type: 'MB'
        },
        MaxMemoryUsed: {
          val: 46,
          type: 'MB'
        }
      },
      cost: {
        MonetaryCost: {
          type: 'USD',
          val: 4.576
        },
        RuntimeWaste: {
          type: 'MS',
          val: 5.440000000000055
        },
        MonetaryRuntimeWaste: {
          type: 'MS',
          val: 0.011315200000000112
        },
        MemoryWaste: {
          type: 'MB',
          val: 82
        }
      }
    },
    {
      subsegment: {
        id: '2ca1f2ee6acfe4ee',
        name: 'DynamoDB',
        resourceName: 'ValuesTable',
        consumptions: {
          CapacityUnits: {
            val: 0.5,
            type: 'RCU'
          },
          Latency: 0.11299991607666016,
          PayloadSize: {
            val: 1.5,
            type: 'KB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'USD',
            val: NaN
          },
          PayloadWaste: {
            type: 'KB',
            val: 0.5
          }
        }
      },
      id: '31d5042c5c01ce8d',
      parent_id: '3a906810da6a968e',
      resourceName: 'predictValueFunction',
      resourceId: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction',
      consumptions: {
        Duration: {
          val: 239.12,
          type: 'ms'
        },
        BilledDuration: {
          val: 300,
          type: 'ms'
        },
        MemorySize: {
          val: 1024,
          type: 'MB'
        },
        MaxMemoryUsed: {
          val: 41,
          type: 'MB'
        }
      },
      cost: {
        MonetaryCost: {
          type: 'USD',
          val: 500.1
        },
        RuntimeWaste: {
          type: 'MS',
          val: 60.879999999999995
        },
        MonetaryRuntimeWaste: {
          type: 'MS',
          val: 101.48696
        },
        MemoryWaste: {
          type: 'MB',
          val: 983
        }
      }
    },
    {
      subsegment: {
        id: '5cc000c90e7798cc',
        name: 'DynamoDB',
        resourceName: 'ValuesTable',
        consumptions: {
          CapacityUnits: {
            val: 1,
            type: 'WCU'
          },
          Latency: 1.2620000839233398,
          PayloadSize: {
            val: 1.5,
            type: 'KB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'USD',
            val: NaN
          },
          PayloadWaste: {
            type: 'KB',
            val: -0.5
          }
        }
      },
      id: '5ad8ce7037c50494',
      parent_id: '1694fd1516e8c258',
      resourceName: 'persistValueFunction',
      resourceId: 'arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction',
      consumptions: {
        Duration: {
          val: 1526.46,
          type: 'ms'
        },
        BilledDuration: {
          val: 1600,
          type: 'ms'
        },
        MemorySize: {
          val: 128,
          type: 'MB'
        },
        MaxMemoryUsed: {
          val: 40,
          type: 'MB'
        }
      },
      cost: {
        MonetaryCost: {
          type: 'USD',
          val: 3.328
        },
        RuntimeWaste: {
          type: 'MS',
          val: 73.53999999999996
        },
        MonetaryRuntimeWaste: {
          type: 'MS',
          val: 0.1529631999999999
        },
        MemoryWaste: {
          type: 'MB',
          val: 88
        }
      }
    },
  ]
}
