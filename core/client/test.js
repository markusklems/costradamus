{
  traceId: '1-592d3b49-bf8ac7498a9738de2ce8291d',
  origin: 'TODO',
  segments: [
    [{
        id: '2def59f80af4f641',
        name: 'persistValueFunction',
        start_time: 1496136526.232,
        end_time: 1496136526.241,
        parent_id: 'dbe171881f2380be',
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          request_id: '614d2066-451a-11e7-a61b-536aaf9738fb'
        },
        trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
        origin: 'AWS::Lambda',
        resource_arn: 'arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction',
        subsegments: [{
            id: '04980501855fa5d8',
            name: 'Dwell Time',
            start_time: 1496136526.232,
            end_time: 1496136526.27,
            http: {
              response: {}
            }
          },
          {
            id: '1694fd1516e8c258',
            name: 'Attempt #1',
            start_time: 1496136526.27,
            end_time: 1496136538.749,
            http: {
              response: {
                status: 200
              }
            }
          }
        ]
      },
      {
        id: '04980501855fa5d8',
        name: 'Dwell Time',
        start_time: 1496136526.232,
        end_time: 1496136526.27,
        http: {
          response: {}
        }
      },
      {
        id: '04980501855fa5d8',
        name: 'Dwell Time',
        start_time: 1496136526.232,
        end_time: 1496136526.27,
        http: {
          response: {}
        }
      },
      {
        id: '1694fd1516e8c258',
        name: 'Attempt #1',
        start_time: 1496136526.27,
        end_time: 1496136538.749,
        http: {
          response: {
            status: 200
          }
        }
      },
      {
        id: '1694fd1516e8c258',
        name: 'Attempt #1',
        start_time: 1496136526.27,
        end_time: 1496136538.749,
        http: {
          response: {
            status: 200
          }
        }
      }
    ],
    [{
        id: '4a403dfa44c1a291',
        name: 'ingestValueFunction',
        start_time: 1496136525.182,
        end_time: 1496136527.259,
        parent_id: '5cef4e060b98e5d3',
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction',
          resource_names: ['ingestValueFunction'],
          account_id: '186706155491'
        },
        trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
        origin: 'AWS::Lambda::Function',
        subsegments: [{
            id: '8243154f88ab1489',
            name: 'LambdaMetadata',
            start_time: 1496136525.215,
            end_time: 1496136525.216,
            metadata: {
              ResourceUsage: {
                RequestId: '5e848a81-451a-11e7-a93d-53f7d1a14ba3'
              }
            }
          },
          {
            id: '725cdd9394626093',
            name: 'Lambda',
            start_time: 1496136525.816,
            end_time: 1496136527.057,
            http: {
              response: {
                status: 202
              }
            },
            aws: {
              operation: 'Invoke',
              region: 'us-east-1',
              request_id: '614d6da3-451a-11e7-beae-7b3b487c25a3',
              retries: 0,
              function_name: 'predictValueFunction',
              invocation_type: 'Event',
              resource_names: ['predictValueFunction']
            },
            namespace: 'aws'
          },
          {
            id: 'dbe171881f2380be',
            name: 'Lambda',
            start_time: 1496136525.278,
            end_time: 1496136526.319,
            http: {
              response: {
                status: 202
              }
            },
            aws: {
              operation: 'Invoke',
              region: 'us-east-1',
              request_id: '614d2066-451a-11e7-a61b-536aaf9738fb',
              retries: 0,
              function_name: 'persistValueFunction',
              invocation_type: 'Event',
              resource_names: ['persistValueFunction']
            },
            namespace: 'aws'
          },
          {
            id: '130f558711ce9160',
            name: 'Initialization',
            start_time: 1496136524.792,
            end_time: 1496136525.18,
            aws: {
              function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction'
            }
          }
        ],
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
        id: '8243154f88ab1489',
        name: 'LambdaMetadata',
        start_time: 1496136525.215,
        end_time: 1496136525.216,
        metadata: {
          ResourceUsage: {
            RequestId: '5e848a81-451a-11e7-a93d-53f7d1a14ba3'
          }
        }
      },
      {
        id: '8243154f88ab1489',
        name: 'LambdaMetadata',
        start_time: 1496136525.215,
        end_time: 1496136525.216,
        metadata: {
          ResourceUsage: {
            RequestId: '5e848a81-451a-11e7-a93d-53f7d1a14ba3'
          }
        }
      },
      {
        id: '725cdd9394626093',
        name: 'Lambda',
        start_time: 1496136525.816,
        end_time: 1496136527.057,
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          operation: 'Invoke',
          region: 'us-east-1',
          request_id: '614d6da3-451a-11e7-beae-7b3b487c25a3',
          retries: 0,
          function_name: 'predictValueFunction',
          invocation_type: 'Event',
          resource_names: ['predictValueFunction']
        },
        namespace: 'aws'
      },
      {
        id: '725cdd9394626093',
        name: 'Lambda',
        start_time: 1496136525.816,
        end_time: 1496136527.057,
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          operation: 'Invoke',
          region: 'us-east-1',
          request_id: '614d6da3-451a-11e7-beae-7b3b487c25a3',
          retries: 0,
          function_name: 'predictValueFunction',
          invocation_type: 'Event',
          resource_names: ['predictValueFunction']
        },
        namespace: 'aws'
      },
      {
        id: 'dbe171881f2380be',
        name: 'Lambda',
        start_time: 1496136525.278,
        end_time: 1496136526.319,
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          operation: 'Invoke',
          region: 'us-east-1',
          request_id: '614d2066-451a-11e7-a61b-536aaf9738fb',
          retries: 0,
          function_name: 'persistValueFunction',
          invocation_type: 'Event',
          resource_names: ['persistValueFunction']
        },
        namespace: 'aws'
      },
      {
        id: 'dbe171881f2380be',
        name: 'Lambda',
        start_time: 1496136525.278,
        end_time: 1496136526.319,
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          operation: 'Invoke',
          region: 'us-east-1',
          request_id: '614d2066-451a-11e7-a61b-536aaf9738fb',
          retries: 0,
          function_name: 'persistValueFunction',
          invocation_type: 'Event',
          resource_names: ['persistValueFunction']
        },
        namespace: 'aws'
      },
      {
        id: '130f558711ce9160',
        name: 'Initialization',
        start_time: 1496136524.792,
        end_time: 1496136525.18,
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction'
        }
      },
      {
        id: '130f558711ce9160',
        name: 'Initialization',
        start_time: 1496136524.792,
        end_time: 1496136525.18,
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction'
        }
      }
    ],
    [{
        id: '71dcc0b295363fd7',
        name: 'predictValueFunction',
        start_time: 1496136526.238,
        end_time: 1496136526.249,
        parent_id: '725cdd9394626093',
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          request_id: '614d6da3-451a-11e7-beae-7b3b487c25a3'
        },
        trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
        origin: 'AWS::Lambda',
        resource_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction',
        subsegments: [{
            id: '3a906810da6a968e',
            name: 'Attempt #1',
            start_time: 1496136526.276,
            end_time: 1496136537.476,
            http: {
              response: {
                status: 200
              }
            }
          },
          {
            id: '2d870cb942d79f3b',
            name: 'Dwell Time',
            start_time: 1496136526.238,
            end_time: 1496136526.276,
            http: {
              response: {}
            }
          }
        ]
      },
      {
        id: '3a906810da6a968e',
        name: 'Attempt #1',
        start_time: 1496136526.276,
        end_time: 1496136537.476,
        http: {
          response: {
            status: 200
          }
        }
      },
      {
        id: '3a906810da6a968e',
        name: 'Attempt #1',
        start_time: 1496136526.276,
        end_time: 1496136537.476,
        http: {
          response: {
            status: 200
          }
        }
      },
      {
        id: '2d870cb942d79f3b',
        name: 'Dwell Time',
        start_time: 1496136526.238,
        end_time: 1496136526.276,
        http: {
          response: {}
        }
      },
      {
        id: '2d870cb942d79f3b',
        name: 'Dwell Time',
        start_time: 1496136526.238,
        end_time: 1496136526.276,
        http: {
          response: {}
        }
      }
    ],
    [{
        id: '31d5042c5c01ce8d',
        name: 'predictValueFunction',
        start_time: 1496136537.229,
        end_time: 1496136537.465,
        parent_id: '3a906810da6a968e',
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction',
          resource_names: ['predictValueFunction'],
          account_id: '186706155491'
        },
        trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
        origin: 'AWS::Lambda::Function',
        subsegments: [{
            id: '2ca1f2ee6acfe4ee',
            name: 'DynamoDB',
            start_time: 1496136537.237,
            end_time: 1496136537.35,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'Query',
              region: 'us-east-1',
              request_id: 'NLDDT3QCFB7AF1O1HI6OG2PKFRVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              limit: 100,
              select: 'ALL_ATTRIBUTES',
              table_name: 'ValuesTable',
              resource_names: ['ValuesTable']
            },
            namespace: 'aws',
            subsegments: [{
                id: '1e7ac53368dbf1e6',
                name: 'Kinesis',
                start_time: 1496136537.377,
                end_time: 1496136537.451,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutRecord',
                  region: 'us-east-1',
                  request_id: 'fe461dd7-0a55-2fcd-afe1-204ea4036cec',
                  retries: 0
                },
                namespace: 'aws',
                subsegments: [{
                  id: 'a7a97dc818f7057d',
                  name: 'KinesisMetadata',
                  start_time: 1496136537.451,
                  end_time: 1496136537.451,
                  metadata: {
                    ResourceUsage: {
                      Operation: 'KINESISPUTRECORD',
                      MessagePayloadSize: 182
                    }
                  }
                }]
              },
              {
                id: '394c68d8afaa1a70',
                name: 'Kinesis',
                start_time: 1496136537.364,
                end_time: 1496136537.437,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutRecord',
                  region: 'us-east-1',
                  request_id: 'f443bb91-5b61-0572-a5e4-86089bfcceef',
                  retries: 0
                },
                namespace: 'aws',
                subsegments: [{
                  id: 'e110a2e25fd9bc76',
                  name: 'KinesisMetadata',
                  start_time: 1496136537.437,
                  end_time: 1496136537.437,
                  metadata: {
                    ResourceUsage: {
                      Operation: 'KINESISPUTRECORD',
                      MessagePayloadSize: 182
                    }
                  }
                }]
              },
              {
                id: 'dc4d1737bdd08859',
                name: 'DynamoDB',
                start_time: 1496136537.36,
                end_time: 1496136537.419,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutItem',
                  region: 'us-east-1',
                  request_id: 'JJ6P2J9N78O69FRLFA9KAO4IINVV4KQNSO5AEMVJF66Q9ASUAAJG',
                  retries: 0,
                  table_name: 'PredictionsTable',
                  resource_names: ['PredictionsTable']
                },
                namespace: 'aws',
                subsegments: [{
                  id: '06a9cbb3b4b96b57',
                  name: 'DynamoDBConsumedCapacity',
                  start_time: 1496136537.419,
                  end_time: 1496136537.42,
                  metadata: {
                    DynamoDBConsumedCapacity: {
                      consumptions: {
                        CapacityUnits: {
                          val: 1,
                          type: 'WCU'
                        },
                        Latency: 0.05900001525878906,
                        PayloadSize: {
                          val: 1.5,
                          type: 'KB'
                        }
                      },
                      resourceName: 'PredictionsTable'
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
                }],
                resourceName: 'PredictionsTable',
                consumptions: {
                  CapacityUnits: {
                    val: 1,
                    type: 'WCU'
                  },
                  Latency: 0.05900001525878906,
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
              {
                id: '89d2e8ee79593a6c',
                name: 'DynamoDB',
                start_time: 1496136537.367,
                end_time: 1496136537.418,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutItem',
                  region: 'us-east-1',
                  request_id: '87QEBCEVQNCETBFGC225CF3LBBVV4KQNSO5AEMVJF66Q9ASUAAJG',
                  retries: 0,
                  table_name: 'PredictionsTable',
                  resource_names: ['PredictionsTable']
                },
                namespace: 'aws',
                subsegments: [{
                  id: '293d5eab5b6bd10f',
                  name: 'DynamoDBConsumedCapacity',
                  start_time: 1496136537.418,
                  end_time: 1496136537.418,
                  metadata: {
                    DynamoDBConsumedCapacity: {
                      consumptions: {
                        CapacityUnits: {
                          val: 1,
                          type: 'WCU'
                        }
                      },
                      resourceName: 'PredictionsTable'
                    }
                  }
                }]
              },
              {
                id: '6471e25c6e8e6448',
                name: 'DynamoDBConsumedCapacity',
                start_time: 1496136537.356,
                end_time: 1496136537.356,
                metadata: {
                  DynamoDBConsumedCapacity: {
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
                    resourceName: 'ValuesTable'
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
              }
            ],
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
          {
            id: '666c4a378f31ccd9',
            name: 'LambdaMetadata',
            start_time: 1496136537.23,
            end_time: 1496136537.23,
            metadata: {
              ResourceUsage: {
                RequestId: '614d6da3-451a-11e7-beae-7b3b487c25a3'
              }
            }
          },
          {
            id: '76d010d30abe5b30',
            name: 'Initialization',
            start_time: 1496136536.608,
            end_time: 1496136537.226,
            aws: {
              function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction'
            }
          }
        ],
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
        id: '2ca1f2ee6acfe4ee',
        name: 'DynamoDB',
        start_time: 1496136537.237,
        end_time: 1496136537.35,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'Query',
          region: 'us-east-1',
          request_id: 'NLDDT3QCFB7AF1O1HI6OG2PKFRVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          limit: 100,
          select: 'ALL_ATTRIBUTES',
          table_name: 'ValuesTable',
          resource_names: ['ValuesTable']
        },
        namespace: 'aws',
        subsegments: [{
            id: '1e7ac53368dbf1e6',
            name: 'Kinesis',
            start_time: 1496136537.377,
            end_time: 1496136537.451,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutRecord',
              region: 'us-east-1',
              request_id: 'fe461dd7-0a55-2fcd-afe1-204ea4036cec',
              retries: 0
            },
            namespace: 'aws',
            subsegments: [{
              id: 'a7a97dc818f7057d',
              name: 'KinesisMetadata',
              start_time: 1496136537.451,
              end_time: 1496136537.451,
              metadata: {
                ResourceUsage: {
                  Operation: 'KINESISPUTRECORD',
                  MessagePayloadSize: 182
                }
              }
            }]
          },
          {
            id: '394c68d8afaa1a70',
            name: 'Kinesis',
            start_time: 1496136537.364,
            end_time: 1496136537.437,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutRecord',
              region: 'us-east-1',
              request_id: 'f443bb91-5b61-0572-a5e4-86089bfcceef',
              retries: 0
            },
            namespace: 'aws',
            subsegments: [{
              id: 'e110a2e25fd9bc76',
              name: 'KinesisMetadata',
              start_time: 1496136537.437,
              end_time: 1496136537.437,
              metadata: {
                ResourceUsage: {
                  Operation: 'KINESISPUTRECORD',
                  MessagePayloadSize: 182
                }
              }
            }]
          },
          {
            id: 'dc4d1737bdd08859',
            name: 'DynamoDB',
            start_time: 1496136537.36,
            end_time: 1496136537.419,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutItem',
              region: 'us-east-1',
              request_id: 'JJ6P2J9N78O69FRLFA9KAO4IINVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              table_name: 'PredictionsTable',
              resource_names: ['PredictionsTable']
            },
            namespace: 'aws',
            subsegments: [{
              id: '06a9cbb3b4b96b57',
              name: 'DynamoDBConsumedCapacity',
              start_time: 1496136537.419,
              end_time: 1496136537.42,
              metadata: {
                DynamoDBConsumedCapacity: {
                  consumptions: {
                    CapacityUnits: {
                      val: 1,
                      type: 'WCU'
                    },
                    Latency: 0.05900001525878906,
                    PayloadSize: {
                      val: 1.5,
                      type: 'KB'
                    }
                  },
                  resourceName: 'PredictionsTable'
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
            }],
            resourceName: 'PredictionsTable',
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: 0.05900001525878906,
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
          {
            id: '89d2e8ee79593a6c',
            name: 'DynamoDB',
            start_time: 1496136537.367,
            end_time: 1496136537.418,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutItem',
              region: 'us-east-1',
              request_id: '87QEBCEVQNCETBFGC225CF3LBBVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              table_name: 'PredictionsTable',
              resource_names: ['PredictionsTable']
            },
            namespace: 'aws',
            subsegments: [{
              id: '293d5eab5b6bd10f',
              name: 'DynamoDBConsumedCapacity',
              start_time: 1496136537.418,
              end_time: 1496136537.418,
              metadata: {
                DynamoDBConsumedCapacity: {
                  consumptions: {
                    CapacityUnits: {
                      val: 1,
                      type: 'WCU'
                    }
                  },
                  resourceName: 'PredictionsTable'
                }
              }
            }]
          },
          {
            id: '6471e25c6e8e6448',
            name: 'DynamoDBConsumedCapacity',
            start_time: 1496136537.356,
            end_time: 1496136537.356,
            metadata: {
              DynamoDBConsumedCapacity: {
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
                resourceName: 'ValuesTable'
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
          }
        ],
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
      {
        id: '2ca1f2ee6acfe4ee',
        name: 'DynamoDB',
        start_time: 1496136537.237,
        end_time: 1496136537.35,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'Query',
          region: 'us-east-1',
          request_id: 'NLDDT3QCFB7AF1O1HI6OG2PKFRVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          limit: 100,
          select: 'ALL_ATTRIBUTES',
          table_name: 'ValuesTable',
          resource_names: ['ValuesTable']
        },
        namespace: 'aws',
        subsegments: [{
            id: '1e7ac53368dbf1e6',
            name: 'Kinesis',
            start_time: 1496136537.377,
            end_time: 1496136537.451,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutRecord',
              region: 'us-east-1',
              request_id: 'fe461dd7-0a55-2fcd-afe1-204ea4036cec',
              retries: 0
            },
            namespace: 'aws',
            subsegments: [{
              id: 'a7a97dc818f7057d',
              name: 'KinesisMetadata',
              start_time: 1496136537.451,
              end_time: 1496136537.451,
              metadata: {
                ResourceUsage: {
                  Operation: 'KINESISPUTRECORD',
                  MessagePayloadSize: 182
                }
              }
            }]
          },
          {
            id: '394c68d8afaa1a70',
            name: 'Kinesis',
            start_time: 1496136537.364,
            end_time: 1496136537.437,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutRecord',
              region: 'us-east-1',
              request_id: 'f443bb91-5b61-0572-a5e4-86089bfcceef',
              retries: 0
            },
            namespace: 'aws',
            subsegments: [{
              id: 'e110a2e25fd9bc76',
              name: 'KinesisMetadata',
              start_time: 1496136537.437,
              end_time: 1496136537.437,
              metadata: {
                ResourceUsage: {
                  Operation: 'KINESISPUTRECORD',
                  MessagePayloadSize: 182
                }
              }
            }]
          },
          {
            id: 'dc4d1737bdd08859',
            name: 'DynamoDB',
            start_time: 1496136537.36,
            end_time: 1496136537.419,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutItem',
              region: 'us-east-1',
              request_id: 'JJ6P2J9N78O69FRLFA9KAO4IINVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              table_name: 'PredictionsTable',
              resource_names: ['PredictionsTable']
            },
            namespace: 'aws',
            subsegments: [{
              id: '06a9cbb3b4b96b57',
              name: 'DynamoDBConsumedCapacity',
              start_time: 1496136537.419,
              end_time: 1496136537.42,
              metadata: {
                DynamoDBConsumedCapacity: {
                  consumptions: {
                    CapacityUnits: {
                      val: 1,
                      type: 'WCU'
                    },
                    Latency: 0.05900001525878906,
                    PayloadSize: {
                      val: 1.5,
                      type: 'KB'
                    }
                  },
                  resourceName: 'PredictionsTable'
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
            }],
            resourceName: 'PredictionsTable',
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: 0.05900001525878906,
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
          {
            id: '89d2e8ee79593a6c',
            name: 'DynamoDB',
            start_time: 1496136537.367,
            end_time: 1496136537.418,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutItem',
              region: 'us-east-1',
              request_id: '87QEBCEVQNCETBFGC225CF3LBBVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              table_name: 'PredictionsTable',
              resource_names: ['PredictionsTable']
            },
            namespace: 'aws',
            subsegments: [{
              id: '293d5eab5b6bd10f',
              name: 'DynamoDBConsumedCapacity',
              start_time: 1496136537.418,
              end_time: 1496136537.418,
              metadata: {
                DynamoDBConsumedCapacity: {
                  consumptions: {
                    CapacityUnits: {
                      val: 1,
                      type: 'WCU'
                    }
                  },
                  resourceName: 'PredictionsTable'
                }
              }
            }]
          },
          {
            id: '6471e25c6e8e6448',
            name: 'DynamoDBConsumedCapacity',
            start_time: 1496136537.356,
            end_time: 1496136537.356,
            metadata: {
              DynamoDBConsumedCapacity: {
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
                resourceName: 'ValuesTable'
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
          }
        ],
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
      {
        id: '1e7ac53368dbf1e6',
        name: 'Kinesis',
        start_time: 1496136537.377,
        end_time: 1496136537.451,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'fe461dd7-0a55-2fcd-afe1-204ea4036cec',
          retries: 0
        },
        namespace: 'aws',
        subsegments: [{
          id: 'a7a97dc818f7057d',
          name: 'KinesisMetadata',
          start_time: 1496136537.451,
          end_time: 1496136537.451,
          metadata: {
            ResourceUsage: {
              Operation: 'KINESISPUTRECORD',
              MessagePayloadSize: 182
            }
          }
        }]
      },
      {
        id: '1e7ac53368dbf1e6',
        name: 'Kinesis',
        start_time: 1496136537.377,
        end_time: 1496136537.451,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'fe461dd7-0a55-2fcd-afe1-204ea4036cec',
          retries: 0
        },
        namespace: 'aws',
        subsegments: [{
          id: 'a7a97dc818f7057d',
          name: 'KinesisMetadata',
          start_time: 1496136537.451,
          end_time: 1496136537.451,
          metadata: {
            ResourceUsage: {
              Operation: 'KINESISPUTRECORD',
              MessagePayloadSize: 182
            }
          }
        }]
      },
      {
        id: 'a7a97dc818f7057d',
        name: 'KinesisMetadata',
        start_time: 1496136537.451,
        end_time: 1496136537.451,
        metadata: {
          ResourceUsage: {
            Operation: 'KINESISPUTRECORD',
            MessagePayloadSize: 182
          }
        }
      },
      {
        id: 'a7a97dc818f7057d',
        name: 'KinesisMetadata',
        start_time: 1496136537.451,
        end_time: 1496136537.451,
        metadata: {
          ResourceUsage: {
            Operation: 'KINESISPUTRECORD',
            MessagePayloadSize: 182
          }
        }
      },
      {
        id: '394c68d8afaa1a70',
        name: 'Kinesis',
        start_time: 1496136537.364,
        end_time: 1496136537.437,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'f443bb91-5b61-0572-a5e4-86089bfcceef',
          retries: 0
        },
        namespace: 'aws',
        subsegments: [{
          id: 'e110a2e25fd9bc76',
          name: 'KinesisMetadata',
          start_time: 1496136537.437,
          end_time: 1496136537.437,
          metadata: {
            ResourceUsage: {
              Operation: 'KINESISPUTRECORD',
              MessagePayloadSize: 182
            }
          }
        }]
      },
      {
        id: '394c68d8afaa1a70',
        name: 'Kinesis',
        start_time: 1496136537.364,
        end_time: 1496136537.437,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'f443bb91-5b61-0572-a5e4-86089bfcceef',
          retries: 0
        },
        namespace: 'aws',
        subsegments: [{
          id: 'e110a2e25fd9bc76',
          name: 'KinesisMetadata',
          start_time: 1496136537.437,
          end_time: 1496136537.437,
          metadata: {
            ResourceUsage: {
              Operation: 'KINESISPUTRECORD',
              MessagePayloadSize: 182
            }
          }
        }]
      },
      {
        id: 'e110a2e25fd9bc76',
        name: 'KinesisMetadata',
        start_time: 1496136537.437,
        end_time: 1496136537.437,
        metadata: {
          ResourceUsage: {
            Operation: 'KINESISPUTRECORD',
            MessagePayloadSize: 182
          }
        }
      },
      {
        id: 'e110a2e25fd9bc76',
        name: 'KinesisMetadata',
        start_time: 1496136537.437,
        end_time: 1496136537.437,
        metadata: {
          ResourceUsage: {
            Operation: 'KINESISPUTRECORD',
            MessagePayloadSize: 182
          }
        }
      },
      {
        id: 'dc4d1737bdd08859',
        name: 'DynamoDB',
        start_time: 1496136537.36,
        end_time: 1496136537.419,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: 'JJ6P2J9N78O69FRLFA9KAO4IINVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: ['PredictionsTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: '06a9cbb3b4b96b57',
          name: 'DynamoDBConsumedCapacity',
          start_time: 1496136537.419,
          end_time: 1496136537.42,
          metadata: {
            DynamoDBConsumedCapacity: {
              consumptions: {
                CapacityUnits: {
                  val: 1,
                  type: 'WCU'
                },
                Latency: 0.05900001525878906,
                PayloadSize: {
                  val: 1.5,
                  type: 'KB'
                }
              },
              resourceName: 'PredictionsTable'
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
        }],
        resourceName: 'PredictionsTable',
        consumptions: {
          CapacityUnits: {
            val: 1,
            type: 'WCU'
          },
          Latency: 0.05900001525878906,
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
      {
        id: 'dc4d1737bdd08859',
        name: 'DynamoDB',
        start_time: 1496136537.36,
        end_time: 1496136537.419,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: 'JJ6P2J9N78O69FRLFA9KAO4IINVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: ['PredictionsTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: '06a9cbb3b4b96b57',
          name: 'DynamoDBConsumedCapacity',
          start_time: 1496136537.419,
          end_time: 1496136537.42,
          metadata: {
            DynamoDBConsumedCapacity: {
              consumptions: {
                CapacityUnits: {
                  val: 1,
                  type: 'WCU'
                },
                Latency: 0.05900001525878906,
                PayloadSize: {
                  val: 1.5,
                  type: 'KB'
                }
              },
              resourceName: 'PredictionsTable'
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
        }],
        resourceName: 'PredictionsTable',
        consumptions: {
          CapacityUnits: {
            val: 1,
            type: 'WCU'
          },
          Latency: 0.05900001525878906,
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
      {
        id: '06a9cbb3b4b96b57',
        name: 'DynamoDBConsumedCapacity',
        start_time: 1496136537.419,
        end_time: 1496136537.42,
        metadata: {
          DynamoDBConsumedCapacity: {
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: 0.05900001525878906,
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            },
            resourceName: 'PredictionsTable'
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
      {
        id: '06a9cbb3b4b96b57',
        name: 'DynamoDBConsumedCapacity',
        start_time: 1496136537.419,
        end_time: 1496136537.42,
        metadata: {
          DynamoDBConsumedCapacity: {
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: 0.05900001525878906,
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            },
            resourceName: 'PredictionsTable'
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
      {
        id: '89d2e8ee79593a6c',
        name: 'DynamoDB',
        start_time: 1496136537.367,
        end_time: 1496136537.418,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: '87QEBCEVQNCETBFGC225CF3LBBVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: ['PredictionsTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: '293d5eab5b6bd10f',
          name: 'DynamoDBConsumedCapacity',
          start_time: 1496136537.418,
          end_time: 1496136537.418,
          metadata: {
            DynamoDBConsumedCapacity: {
              consumptions: {
                CapacityUnits: {
                  val: 1,
                  type: 'WCU'
                }
              },
              resourceName: 'PredictionsTable'
            }
          }
        }]
      },
      {
        id: '89d2e8ee79593a6c',
        name: 'DynamoDB',
        start_time: 1496136537.367,
        end_time: 1496136537.418,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: '87QEBCEVQNCETBFGC225CF3LBBVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: ['PredictionsTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: '293d5eab5b6bd10f',
          name: 'DynamoDBConsumedCapacity',
          start_time: 1496136537.418,
          end_time: 1496136537.418,
          metadata: {
            DynamoDBConsumedCapacity: {
              consumptions: {
                CapacityUnits: {
                  val: 1,
                  type: 'WCU'
                }
              },
              resourceName: 'PredictionsTable'
            }
          }
        }]
      },
      {
        id: '293d5eab5b6bd10f',
        name: 'DynamoDBConsumedCapacity',
        start_time: 1496136537.418,
        end_time: 1496136537.418,
        metadata: {
          DynamoDBConsumedCapacity: {
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              }
            },
            resourceName: 'PredictionsTable'
          }
        }
      },
      {
        id: '293d5eab5b6bd10f',
        name: 'DynamoDBConsumedCapacity',
        start_time: 1496136537.418,
        end_time: 1496136537.418,
        metadata: {
          DynamoDBConsumedCapacity: {
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              }
            },
            resourceName: 'PredictionsTable'
          }
        }
      },
      {
        id: '6471e25c6e8e6448',
        name: 'DynamoDBConsumedCapacity',
        start_time: 1496136537.356,
        end_time: 1496136537.356,
        metadata: {
          DynamoDBConsumedCapacity: {
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
            resourceName: 'ValuesTable'
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
      {
        id: '6471e25c6e8e6448',
        name: 'DynamoDBConsumedCapacity',
        start_time: 1496136537.356,
        end_time: 1496136537.356,
        metadata: {
          DynamoDBConsumedCapacity: {
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
            resourceName: 'ValuesTable'
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
      {
        id: '666c4a378f31ccd9',
        name: 'LambdaMetadata',
        start_time: 1496136537.23,
        end_time: 1496136537.23,
        metadata: {
          ResourceUsage: {
            RequestId: '614d6da3-451a-11e7-beae-7b3b487c25a3'
          }
        }
      },
      {
        id: '666c4a378f31ccd9',
        name: 'LambdaMetadata',
        start_time: 1496136537.23,
        end_time: 1496136537.23,
        metadata: {
          ResourceUsage: {
            RequestId: '614d6da3-451a-11e7-beae-7b3b487c25a3'
          }
        }
      },
      {
        id: '76d010d30abe5b30',
        name: 'Initialization',
        start_time: 1496136536.608,
        end_time: 1496136537.226,
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction'
        }
      },
      {
        id: '76d010d30abe5b30',
        name: 'Initialization',
        start_time: 1496136536.608,
        end_time: 1496136537.226,
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction'
        }
      }
    ],
    [{
      id: '5cef4e060b98e5d3',
      name: 'ingestValueFunction',
      start_time: 1496136521.549,
      end_time: 1496136527.381,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        request_id: '5e848a81-451a-11e7-a93d-53f7d1a14ba3'
      },
      trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
      origin: 'AWS::Lambda',
      resource_arn: 'arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction'
    }],
    [{
        id: '5ad8ce7037c50494',
        name: 'persistValueFunction',
        start_time: 1496136537.213,
        end_time: 1496136538.737,
        parent_id: '1694fd1516e8c258',
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction',
          resource_names: ['persistValueFunction'],
          account_id: '186706155491'
        },
        trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
        origin: 'AWS::Lambda::Function',
        subsegments: [{
            id: '5cc000c90e7798cc',
            name: 'DynamoDB',
            start_time: 1496136537.396,
            end_time: 1496136538.658,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutItem',
              region: 'us-east-1',
              request_id: 'C60L09K67K2D82Q55VGMJ1BCENVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              table_name: 'ValuesTable',
              resource_names: ['ValuesTable']
            },
            namespace: 'aws',
            subsegments: [{
              id: '3a9d45e33deb9b0c',
              name: 'DynamoDBConsumedCapacity',
              start_time: 1496136538.659,
              end_time: 1496136538.715,
              metadata: {
                DynamoDBConsumedCapacity: {
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
                  resourceName: 'ValuesTable'
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
            }],
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
          {
            id: '5e5c45237db6c0d9',
            name: 'Initialization',
            start_time: 1496136536.608,
            end_time: 1496136537.211,
            aws: {
              function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction'
            }
          },
          {
            id: '488f2299b5893f4e',
            name: 'LambdaMetadata',
            start_time: 1496136537.236,
            end_time: 1496136537.238,
            metadata: {
              ResourceUsage: {
                RequestId: '614d2066-451a-11e7-a61b-536aaf9738fb'
              }
            }
          }
        ],
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
      {
        id: '5cc000c90e7798cc',
        name: 'DynamoDB',
        start_time: 1496136537.396,
        end_time: 1496136538.658,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: 'C60L09K67K2D82Q55VGMJ1BCENVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'ValuesTable',
          resource_names: ['ValuesTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: '3a9d45e33deb9b0c',
          name: 'DynamoDBConsumedCapacity',
          start_time: 1496136538.659,
          end_time: 1496136538.715,
          metadata: {
            DynamoDBConsumedCapacity: {
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
              resourceName: 'ValuesTable'
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
        }],
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
      {
        id: '5cc000c90e7798cc',
        name: 'DynamoDB',
        start_time: 1496136537.396,
        end_time: 1496136538.658,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: 'C60L09K67K2D82Q55VGMJ1BCENVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'ValuesTable',
          resource_names: ['ValuesTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: '3a9d45e33deb9b0c',
          name: 'DynamoDBConsumedCapacity',
          start_time: 1496136538.659,
          end_time: 1496136538.715,
          metadata: {
            DynamoDBConsumedCapacity: {
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
              resourceName: 'ValuesTable'
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
        }],
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
      {
        id: '3a9d45e33deb9b0c',
        name: 'DynamoDBConsumedCapacity',
        start_time: 1496136538.659,
        end_time: 1496136538.715,
        metadata: {
          DynamoDBConsumedCapacity: {
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
            resourceName: 'ValuesTable'
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
      {
        id: '3a9d45e33deb9b0c',
        name: 'DynamoDBConsumedCapacity',
        start_time: 1496136538.659,
        end_time: 1496136538.715,
        metadata: {
          DynamoDBConsumedCapacity: {
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
            resourceName: 'ValuesTable'
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
      {
        id: '5e5c45237db6c0d9',
        name: 'Initialization',
        start_time: 1496136536.608,
        end_time: 1496136537.211,
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction'
        }
      },
      {
        id: '5e5c45237db6c0d9',
        name: 'Initialization',
        start_time: 1496136536.608,
        end_time: 1496136537.211,
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction'
        }
      },
      {
        id: '488f2299b5893f4e',
        name: 'LambdaMetadata',
        start_time: 1496136537.236,
        end_time: 1496136537.238,
        metadata: {
          ResourceUsage: {
            RequestId: '614d2066-451a-11e7-a61b-536aaf9738fb'
          }
        }
      },
      {
        id: '488f2299b5893f4e',
        name: 'LambdaMetadata',
        start_time: 1496136537.236,
        end_time: 1496136537.238,
        metadata: {
          ResourceUsage: {
            RequestId: '614d2066-451a-11e7-a61b-536aaf9738fb'
          }
        }
      }
    ],
    [{
      id: '1af262dd29712f54',
      name: 'DynamoDB',
      start_time: 1496136537.237,
      end_time: 1496136537.35,
      parent_id: '2ca1f2ee6acfe4ee',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'Query',
        region: 'us-east-1',
        request_id: 'NLDDT3QCFB7AF1O1HI6OG2PKFRVV4KQNSO5AEMVJF66Q9ASUAAJG',
        retries: 0,
        limit: 100,
        select: 'ALL_ATTRIBUTES',
        table_name: 'ValuesTable',
        resource_names: ['ValuesTable']
      },
      trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
      origin: 'AWS::DynamoDB::Table'
    }],
    [{
      id: '3675758f384d4611',
      name: 'Kinesis',
      start_time: 1496136537.377,
      end_time: 1496136537.451,
      parent_id: '1e7ac53368dbf1e6',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutRecord',
        region: 'us-east-1',
        request_id: 'fe461dd7-0a55-2fcd-afe1-204ea4036cec',
        retries: 0
      },
      trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
      origin: 'AWS::Kinesis'
    }],
    [{
      id: '06aac8712df53148',
      name: 'Kinesis',
      start_time: 1496136537.364,
      end_time: 1496136537.437,
      parent_id: '394c68d8afaa1a70',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutRecord',
        region: 'us-east-1',
        request_id: 'f443bb91-5b61-0572-a5e4-86089bfcceef',
        retries: 0
      },
      trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
      origin: 'AWS::Kinesis'
    }],
    [{
      id: '34636cd2231928aa',
      name: 'DynamoDB',
      start_time: 1496136537.36,
      end_time: 1496136537.419,
      parent_id: 'dc4d1737bdd08859',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutItem',
        region: 'us-east-1',
        request_id: 'JJ6P2J9N78O69FRLFA9KAO4IINVV4KQNSO5AEMVJF66Q9ASUAAJG',
        retries: 0,
        table_name: 'PredictionsTable',
        resource_names: ['PredictionsTable']
      },
      trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
      origin: 'AWS::DynamoDB::Table'
    }],
    [{
      id: '12dfc5b82989abdb',
      name: 'DynamoDB',
      start_time: 1496136537.367,
      end_time: 1496136537.418,
      parent_id: '89d2e8ee79593a6c',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutItem',
        region: 'us-east-1',
        request_id: '87QEBCEVQNCETBFGC225CF3LBBVV4KQNSO5AEMVJF66Q9ASUAAJG',
        retries: 0,
        table_name: 'PredictionsTable',
        resource_names: ['PredictionsTable']
      },
      trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
      origin: 'AWS::DynamoDB::Table'
    }],
    [{
      id: '14f88ca53b71000b',
      name: 'DynamoDB',
      start_time: 1496136537.396,
      end_time: 1496136538.658,
      parent_id: '5cc000c90e7798cc',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutItem',
        region: 'us-east-1',
        request_id: 'C60L09K67K2D82Q55VGMJ1BCENVV4KQNSO5AEMVJF66Q9ASUAAJG',
        retries: 0,
        table_name: 'ValuesTable',
        resource_names: ['ValuesTable']
      },
      trace_id: '1-592d3b49-bf8ac7498a9738de2ce8291d',
      origin: 'AWS::DynamoDB::Table'
    }]
  ]
}
