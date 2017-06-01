BilledDuration: 300[number], Duration: 232.62[number]
BilledDuration: 400[number], Duration: 314.9[number]
BilledDuration: 400[number], Duration: 322.62[number]
  [
    [{
        id: '4d84cf3d36f8c35d',
        name: 'persistValueFunction',
        start_time: 1496322153.533,
        end_time: 1496322153.836,
        parent_id: '57a47507c0384328',
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction',
          resource_names: ['persistValueFunction'],
          account_id: '186706155491'
        },
        trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
        origin: 'AWS::Lambda::Function',
        subsegments: [{
            id: 'bfffdf8114749fef',
            name: 'LambdaCostradamus',
            start_time: 1496322153.533,
            end_time: 1496322153.533,
            metadata: {
              LambdaCostradamus: {
                RequestId: '93bf1141-46ca-11e7-bb2f-db5a522041db'
              }
            }
          },
          {
            id: '9e280ff72b4e5492',
            name: 'DynamoDB',
            start_time: 1496322153.534,
            end_time: 1496322153.835,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutItem',
              region: 'us-east-1',
              request_id: 'BEHC4R6JUG7HBJE8P1JGC0LVFRVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              table_name: 'ValuesTable',
              resource_names: ['ValuesTable']
            },
            namespace: 'aws',
            subsegments: [{
              id: 'db47cea33f010db7',
              name: 'DynamoDBCostradamus',
              start_time: 1496322153.835,
              end_time: 1496322153.835,
              metadata: {
                DynamoDBCostradamus: {
                  consumptions: {
                    CapacityUnits: {
                      val: 1,
                      type: 'WCU'
                    },
                    Latency: {
                      val: 0.30100011825561523,
                      type: 'MS'
                    },
                    PayloadSize: {
                      val: 1.5,
                      type: 'KB'
                    }
                  }
                }
              },
              cost: {
                MonetaryCost: {
                  type: 'NANO-USD',
                  val: 0
                },
                ProvisioningAmountWaste: {
                  type: 'B',
                  val: 8500
                },
                ProvisioningTimeWaste: {
                  type: 'MS',
                  val: 3599999.6989998817
                },
                MeteringAmountWaste: {
                  type: 'B',
                  val: 500
                },
                MeteringTimeWaste: {
                  type: 'MS',
                  val: 999.6989998817444
                }
              }
            }],
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: {
                val: 0.30100011825561523,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            },
            cost: {
              MonetaryCost: {
                type: 'NANO-USD',
                val: 0
              },
              ProvisioningAmountWaste: {
                type: 'B',
                val: 8500
              },
              ProvisioningTimeWaste: {
                type: 'MS',
                val: 3599999.6989998817
              },
              MeteringAmountWaste: {
                type: 'B',
                val: 500
              },
              MeteringTimeWaste: {
                type: 'MS',
                val: 999.6989998817444
              }
            }
          }
        ],
        consumptions: {
          Duration: {
            val: 322.62,
            type: 'ms'
          },
          BilledDuration: {
            val: 400,
            type: 'ms'
          },
          MemorySize: {
            val: 128,
            type: 'MB'
          },
          MaxMemoryUsed: {
            val: 43,
            type: 'MB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 832
          },
          RuntimeWaste: {
            type: 'US',
            val: 77380
          },
          MonetaryRuntimeWaste: {
            type: 'NANO-USD',
            val: 161
          },
          MemoryWaste: {
            type: 'MB',
            val: 85
          }
        }
      },
      {
        id: 'bfffdf8114749fef',
        name: 'LambdaCostradamus',
        start_time: 1496322153.533,
        end_time: 1496322153.533,
        metadata: {
          LambdaCostradamus: {
            RequestId: '93bf1141-46ca-11e7-bb2f-db5a522041db'
          }
        }
      },
      {
        id: '9e280ff72b4e5492',
        name: 'DynamoDB',
        start_time: 1496322153.534,
        end_time: 1496322153.835,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: 'BEHC4R6JUG7HBJE8P1JGC0LVFRVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'ValuesTable',
          resource_names: ['ValuesTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: 'db47cea33f010db7',
          name: 'DynamoDBCostradamus',
          start_time: 1496322153.835,
          end_time: 1496322153.835,
          metadata: {
            DynamoDBCostradamus: {
              consumptions: {
                CapacityUnits: {
                  val: 1,
                  type: 'WCU'
                },
                Latency: {
                  val: 0.30100011825561523,
                  type: 'MS'
                },
                PayloadSize: {
                  val: 1.5,
                  type: 'KB'
                }
              }
            }
          },
          cost: {
            MonetaryCost: {
              type: 'NANO-USD',
              val: 0
            },
            ProvisioningAmountWaste: {
              type: 'B',
              val: 8500
            },
            ProvisioningTimeWaste: {
              type: 'MS',
              val: 3599999.6989998817
            },
            MeteringAmountWaste: {
              type: 'B',
              val: 500
            },
            MeteringTimeWaste: {
              type: 'MS',
              val: 999.6989998817444
            }
          }
        }],
        consumptions: {
          CapacityUnits: {
            val: 1,
            type: 'WCU'
          },
          Latency: {
            val: 0.30100011825561523,
            type: 'MS'
          },
          PayloadSize: {
            val: 1.5,
            type: 'KB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 8500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.6989998817
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.6989998817444
          }
        }
      },
      {
        id: 'db47cea33f010db7',
        name: 'DynamoDBCostradamus',
        start_time: 1496322153.835,
        end_time: 1496322153.835,
        metadata: {
          DynamoDBCostradamus: {
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: {
                val: 0.30100011825561523,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            }
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 8500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.6989998817
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.6989998817444
          }
        }
      }
    ],
    [{
        id: '33cbc7304549d126',
        name: 'ingestValueFunction',
        start_time: 1496322153.117,
        end_time: 1496322153.432,
        parent_id: '1fea849af56b4d6f',
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction',
          resource_names: ['ingestValueFunction'],
          account_id: '186706155491'
        },
        trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
        origin: 'AWS::Lambda::Function',
        subsegments: [{
            id: '27497aa0de2c6df2',
            name: 'LambdaCostradamus',
            start_time: 1496322153.117,
            end_time: 1496322153.118,
            metadata: {
              LambdaCostradamus: {
                RequestId: '938c1a91-46ca-11e7-adf7-6fb5eef32a0b'
              }
            }
          },
          {
            id: '409cf0409d66bc02',
            name: 'Lambda',
            start_time: 1496322153.21,
            end_time: 1496322153.397,
            http: {
              response: {
                status: 202
              }
            },
            aws: {
              operation: 'Invoke',
              region: 'us-east-1',
              request_id: '93b72188-46ca-11e7-aad2-cfbabf08719c',
              retries: 0,
              function_name: 'predictValueFunction',
              invocation_type: 'Event',
              resource_names: ['predictValueFunction']
            },
            namespace: 'aws'
          },
          {
            id: 'e3918b8471321829',
            name: 'Lambda',
            start_time: 1496322153.129,
            end_time: 1496322153.431,
            http: {
              response: {
                status: 202
              }
            },
            aws: {
              operation: 'Invoke',
              region: 'us-east-1',
              request_id: '93bf1141-46ca-11e7-bb2f-db5a522041db',
              retries: 0,
              function_name: 'persistValueFunction',
              invocation_type: 'Event',
              resource_names: ['persistValueFunction']
            },
            namespace: 'aws'
          }
        ],
        consumptions: {
          Duration: {
            val: 314.9,
            type: 'ms'
          },
          BilledDuration: {
            val: 400,
            type: 'ms'
          },
          MemorySize: {
            val: 128,
            type: 'MB'
          },
          MaxMemoryUsed: {
            val: 45,
            type: 'MB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 832
          },
          RuntimeWaste: {
            type: 'US',
            val: 85100
          },
          MonetaryRuntimeWaste: {
            type: 'NANO-USD',
            val: 177
          },
          MemoryWaste: {
            type: 'MB',
            val: 83
          }
        }
      },
      {
        id: '27497aa0de2c6df2',
        name: 'LambdaCostradamus',
        start_time: 1496322153.117,
        end_time: 1496322153.118,
        metadata: {
          LambdaCostradamus: {
            RequestId: '938c1a91-46ca-11e7-adf7-6fb5eef32a0b'
          }
        }
      },
      {
        id: '409cf0409d66bc02',
        name: 'Lambda',
        start_time: 1496322153.21,
        end_time: 1496322153.397,
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          operation: 'Invoke',
          region: 'us-east-1',
          request_id: '93b72188-46ca-11e7-aad2-cfbabf08719c',
          retries: 0,
          function_name: 'predictValueFunction',
          invocation_type: 'Event',
          resource_names: ['predictValueFunction']
        },
        namespace: 'aws'
      },
      {
        id: 'e3918b8471321829',
        name: 'Lambda',
        start_time: 1496322153.129,
        end_time: 1496322153.431,
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          operation: 'Invoke',
          region: 'us-east-1',
          request_id: '93bf1141-46ca-11e7-bb2f-db5a522041db',
          retries: 0,
          function_name: 'persistValueFunction',
          invocation_type: 'Event',
          resource_names: ['persistValueFunction']
        },
        namespace: 'aws'
      }
    ],
    [{
        id: '208ef3321fc4be50',
        name: 'persistValueFunction',
        start_time: 1496322153.443,
        end_time: 1496322153.459,
        parent_id: 'e3918b8471321829',
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          request_id: '93bf1141-46ca-11e7-bb2f-db5a522041db'
        },
        trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
        origin: 'AWS::Lambda',
        resource_arn: 'arn:aws:lambda:us-east-1:186706155491:function:persistValueFunction',
        subsegments: [{
            id: '65326725f4940617',
            name: 'Dwell Time',
            start_time: 1496322153.443,
            end_time: 1496322153.485,
            http: {
              response: {}
            }
          },
          {
            id: '57a47507c0384328',
            name: 'Attempt #1',
            start_time: 1496322153.485,
            end_time: 1496322153.827,
            http: {
              response: {
                status: 200
              }
            }
          }
        ]
      },
      {
        id: '65326725f4940617',
        name: 'Dwell Time',
        start_time: 1496322153.443,
        end_time: 1496322153.485,
        http: {
          response: {}
        }
      },
      {
        id: '57a47507c0384328',
        name: 'Attempt #1',
        start_time: 1496322153.485,
        end_time: 1496322153.827,
        http: {
          response: {
            status: 200
          }
        }
      }
    ],
    [{
        id: '5d5717bf0e9372fd',
        name: 'predictValueFunction',
        start_time: 1496322153.407,
        end_time: 1496322153.426,
        parent_id: '409cf0409d66bc02',
        http: {
          response: {
            status: 202
          }
        },
        aws: {
          request_id: '93b72188-46ca-11e7-aad2-cfbabf08719c'
        },
        trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
        origin: 'AWS::Lambda',
        resource_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction',
        subsegments: [{
            id: '761c510a86cf3390',
            name: 'Dwell Time',
            start_time: 1496322153.407,
            end_time: 1496322153.45,
            http: {
              response: {}
            }
          },
          {
            id: '2cd5de5e83d6c90e',
            name: 'Attempt #1',
            start_time: 1496322153.45,
            end_time: 1496322153.75,
            http: {
              response: {
                status: 200
              }
            }
          }
        ]
      },
      {
        id: '761c510a86cf3390',
        name: 'Dwell Time',
        start_time: 1496322153.407,
        end_time: 1496322153.45,
        http: {
          response: {}
        }
      },
      {
        id: '2cd5de5e83d6c90e',
        name: 'Attempt #1',
        start_time: 1496322153.45,
        end_time: 1496322153.75,
        http: {
          response: {
            status: 200
          }
        }
      }
    ],
    [{
        id: '07045ffd5e310470',
        name: 'predictValueFunction',
        start_time: 1496322153.533,
        end_time: 1496322153.757,
        parent_id: '2cd5de5e83d6c90e',
        aws: {
          function_arn: 'arn:aws:lambda:us-east-1:186706155491:function:predictValueFunction',
          resource_names: ['predictValueFunction'],
          account_id: '186706155491'
        },
        trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
        origin: 'AWS::Lambda::Function',
        subsegments: [{
            id: 'd0126b55320a34cd',
            name: 'DynamoDB',
            start_time: 1496322153.534,
            end_time: 1496322153.67,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'Query',
              region: 'us-east-1',
              request_id: 'SATP38KPE9A1C3RIK6VL1V1CBFVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              limit: 100,
              select: 'ALL_ATTRIBUTES',
              table_name: 'ValuesTable',
              resource_names: ['ValuesTable']
            },
            namespace: 'aws',
            subsegments: [{
                id: '3856936a1cb44b73',
                name: 'DynamoDB',
                start_time: 1496322153.672,
                end_time: 1496322153.736,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutItem',
                  region: 'us-east-1',
                  request_id: '38LBC78IKAVI50BI6CDS6JSBSNVV4KQNSO5AEMVJF66Q9ASUAAJG',
                  retries: 0,
                  table_name: 'PredictionsTable',
                  resource_names: ['PredictionsTable']
                },
                namespace: 'aws',
                subsegments: [{
                  id: '0bdcbb10972432b3',
                  name: 'DynamoDBCostradamus',
                  start_time: 1496322153.736,
                  end_time: 1496322153.736,
                  metadata: {
                    DynamoDBCostradamus: {
                      consumptions: {
                        CapacityUnits: {
                          val: 1,
                          type: 'WCU'
                        },
                        Latency: {
                          val: 0.06400012969970703,
                          type: 'MS'
                        },
                        PayloadSize: {
                          val: 1.5,
                          type: 'KB'
                        }
                      }
                    }
                  },
                  cost: {
                    MonetaryCost: {
                      type: 'NANO-USD',
                      val: 0
                    },
                    ProvisioningAmountWaste: {
                      type: 'B',
                      val: 8500
                    },
                    ProvisioningTimeWaste: {
                      type: 'MS',
                      val: 3599999.9359998703
                    },
                    MeteringAmountWaste: {
                      type: 'B',
                      val: 500
                    },
                    MeteringTimeWaste: {
                      type: 'MS',
                      val: 999.9359998703003
                    }
                  }
                }],
                consumptions: {
                  CapacityUnits: {
                    val: 1,
                    type: 'WCU'
                  },
                  Latency: {
                    val: 0.06400012969970703,
                    type: 'MS'
                  },
                  PayloadSize: {
                    val: 1.5,
                    type: 'KB'
                  }
                },
                cost: {
                  MonetaryCost: {
                    type: 'NANO-USD',
                    val: 0
                  },
                  ProvisioningAmountWaste: {
                    type: 'B',
                    val: 8500
                  },
                  ProvisioningTimeWaste: {
                    type: 'MS',
                    val: 3599999.9359998703
                  },
                  MeteringAmountWaste: {
                    type: 'B',
                    val: 500
                  },
                  MeteringTimeWaste: {
                    type: 'MS',
                    val: 999.9359998703003
                  }
                }
              },
              {
                id: 'c5b0478551dbab9f',
                name: 'Kinesis',
                start_time: 1496322153.679,
                end_time: 1496322153.755,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutRecord',
                  region: 'us-east-1',
                  request_id: 'd77bf89d-c59e-5d38-86d1-ea347c3ed79f',
                  retries: 0
                },
                namespace: 'aws',
                subsegments: [{
                  id: '7fe5b0f4b385c490',
                  name: 'KinesisCostradamus',
                  start_time: 1496322153.756,
                  end_time: 1496322153.756,
                  metadata: {
                    KinesisCostradamus: {
                      consumptions: {
                        PayloadSize: {
                          val: 232,
                          type: 'B'
                        },
                        Operation: {
                          Operation: {
                            val: 'WRITE',
                            type: 'KINESISOPERATION'
                          }
                        },
                        Latency: {
                          val: 0.07600021362304688,
                          type: 'MS'
                        }
                      }
                    }
                  },
                  cost: {
                    MonetaryCost: {
                      type: 'USD',
                      val: NaN
                    }
                  }
                }],
                consumptions: {
                  PayloadSize: {
                    val: 232,
                    type: 'B'
                  },
                  Operation: {
                    Operation: {
                      val: 'WRITE',
                      type: 'KINESISOPERATION'
                    }
                  },
                  Latency: {
                    val: 0.07600021362304688,
                    type: 'MS'
                  }
                },
                cost: {
                  MonetaryCost: {
                    type: 'USD',
                    val: NaN
                  }
                }
              },
              {
                id: '90b932765041121a',
                name: 'Kinesis',
                start_time: 1496322153.684,
                end_time: 1496322153.744,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutRecord',
                  region: 'us-east-1',
                  request_id: 'd51c7ec2-196a-25a3-84b6-6c6b40d3c0a5',
                  retries: 0
                },
                namespace: 'aws',
                subsegments: [{
                  id: 'a75e6ce1c7905cf0',
                  name: 'KinesisCostradamus',
                  start_time: 1496322153.745,
                  end_time: 1496322153.745,
                  metadata: {
                    KinesisCostradamus: {
                      consumptions: {
                        PayloadSize: {
                          val: 232,
                          type: 'B'
                        },
                        Operation: {
                          Operation: {
                            val: 'WRITE',
                            type: 'KINESISOPERATION'
                          }
                        },
                        Latency: {
                          val: 0.059999942779541016,
                          type: 'MS'
                        }
                      }
                    }
                  },
                  cost: {
                    MonetaryCost: {
                      type: 'USD',
                      val: NaN
                    }
                  }
                }],
                consumptions: {
                  PayloadSize: {
                    val: 232,
                    type: 'B'
                  },
                  Operation: {
                    Operation: {
                      val: 'WRITE',
                      type: 'KINESISOPERATION'
                    }
                  },
                  Latency: {
                    val: 0.059999942779541016,
                    type: 'MS'
                  }
                },
                cost: {
                  MonetaryCost: {
                    type: 'USD',
                    val: NaN
                  }
                }
              },
              {
                id: 'e7a599efeb48fbf1',
                name: 'DynamoDB',
                start_time: 1496322153.675,
                end_time: 1496322153.727,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutItem',
                  region: 'us-east-1',
                  request_id: 'IB2CNFNK6G5ALDBPADCBHM76DJVV4KQNSO5AEMVJF66Q9ASUAAJG',
                  retries: 0,
                  table_name: 'PredictionsTable',
                  resource_names: ['PredictionsTable']
                },
                namespace: 'aws',
                subsegments: [{
                  id: '62f0db9e7cad8075',
                  name: 'DynamoDBCostradamus',
                  start_time: 1496322153.727,
                  end_time: 1496322153.727,
                  metadata: {
                    DynamoDBCostradamus: {
                      consumptions: {
                        CapacityUnits: {
                          val: 1,
                          type: 'WCU'
                        },
                        Latency: {
                          val: 0.05200004577636719,
                          type: 'MS'
                        },
                        PayloadSize: {
                          val: 1.5,
                          type: 'KB'
                        }
                      }
                    }
                  },
                  cost: {
                    MonetaryCost: {
                      type: 'NANO-USD',
                      val: 0
                    },
                    ProvisioningAmountWaste: {
                      type: 'B',
                      val: 8500
                    },
                    ProvisioningTimeWaste: {
                      type: 'MS',
                      val: 3599999.947999954
                    },
                    MeteringAmountWaste: {
                      type: 'B',
                      val: 500
                    },
                    MeteringTimeWaste: {
                      type: 'MS',
                      val: 999.9479999542236
                    }
                  }
                }],
                consumptions: {
                  CapacityUnits: {
                    val: 1,
                    type: 'WCU'
                  },
                  Latency: {
                    val: 0.05200004577636719,
                    type: 'MS'
                  },
                  PayloadSize: {
                    val: 1.5,
                    type: 'KB'
                  }
                },
                cost: {
                  MonetaryCost: {
                    type: 'NANO-USD',
                    val: 0
                  },
                  ProvisioningAmountWaste: {
                    type: 'B',
                    val: 8500
                  },
                  ProvisioningTimeWaste: {
                    type: 'MS',
                    val: 3599999.947999954
                  },
                  MeteringAmountWaste: {
                    type: 'B',
                    val: 500
                  },
                  MeteringTimeWaste: {
                    type: 'MS',
                    val: 999.9479999542236
                  }
                }
              },
              {
                id: 'f97dd74e24da3567',
                name: 'Kinesis',
                start_time: 1496322153.674,
                end_time: 1496322153.743,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutRecord',
                  region: 'us-east-1',
                  request_id: 'fdb2eb07-60b6-edee-ac18-f9aeb9184d84',
                  retries: 0
                },
                namespace: 'aws',
                subsegments: [{
                  id: '7fd03da3ce5dfcf8',
                  name: 'KinesisCostradamus',
                  start_time: 1496322153.744,
                  end_time: 1496322153.744,
                  metadata: {
                    KinesisCostradamus: {
                      consumptions: {
                        PayloadSize: {
                          val: 232,
                          type: 'B'
                        },
                        Operation: {
                          Operation: {
                            val: 'WRITE',
                            type: 'KINESISOPERATION'
                          }
                        },
                        Latency: {
                          val: 0.0690000057220459,
                          type: 'MS'
                        }
                      }
                    }
                  },
                  cost: {
                    MonetaryCost: {
                      type: 'USD',
                      val: NaN
                    }
                  }
                }],
                consumptions: {
                  PayloadSize: {
                    val: 232,
                    type: 'B'
                  },
                  Operation: {
                    Operation: {
                      val: 'WRITE',
                      type: 'KINESISOPERATION'
                    }
                  },
                  Latency: {
                    val: 0.0690000057220459,
                    type: 'MS'
                  }
                },
                cost: {
                  MonetaryCost: {
                    type: 'USD',
                    val: NaN
                  }
                }
              },
              {
                id: '6f4ab8ca88eac5f8',
                name: 'DynamoDB',
                start_time: 1496322153.681,
                end_time: 1496322153.741,
                http: {
                  response: {
                    status: 200
                  }
                },
                aws: {
                  operation: 'PutItem',
                  region: 'us-east-1',
                  request_id: 'LQ2LORJUVNDQ03KDSLKTLQ2L57VV4KQNSO5AEMVJF66Q9ASUAAJG',
                  retries: 0,
                  table_name: 'PredictionsTable',
                  resource_names: ['PredictionsTable']
                },
                namespace: 'aws',
                subsegments: [{
                  id: 'ead62048fd81dd59',
                  name: 'DynamoDBCostradamus',
                  start_time: 1496322153.741,
                  end_time: 1496322153.741,
                  metadata: {
                    DynamoDBCostradamus: {
                      consumptions: {
                        CapacityUnits: {
                          val: 1,
                          type: 'WCU'
                        },
                        Latency: {
                          val: 0.059999942779541016,
                          type: 'MS'
                        },
                        PayloadSize: {
                          val: 1.5,
                          type: 'KB'
                        }
                      }
                    }
                  },
                  cost: {
                    MonetaryCost: {
                      type: 'NANO-USD',
                      val: 0
                    },
                    ProvisioningAmountWaste: {
                      type: 'B',
                      val: 8500
                    },
                    ProvisioningTimeWaste: {
                      type: 'MS',
                      val: 3599999.940000057
                    },
                    MeteringAmountWaste: {
                      type: 'B',
                      val: 500
                    },
                    MeteringTimeWaste: {
                      type: 'MS',
                      val: 999.9400000572205
                    }
                  }
                }],
                consumptions: {
                  CapacityUnits: {
                    val: 1,
                    type: 'WCU'
                  },
                  Latency: {
                    val: 0.059999942779541016,
                    type: 'MS'
                  },
                  PayloadSize: {
                    val: 1.5,
                    type: 'KB'
                  }
                },
                cost: {
                  MonetaryCost: {
                    type: 'NANO-USD',
                    val: 0
                  },
                  ProvisioningAmountWaste: {
                    type: 'B',
                    val: 8500
                  },
                  ProvisioningTimeWaste: {
                    type: 'MS',
                    val: 3599999.940000057
                  },
                  MeteringAmountWaste: {
                    type: 'B',
                    val: 500
                  },
                  MeteringTimeWaste: {
                    type: 'MS',
                    val: 999.9400000572205
                  }
                }
              },
              {
                id: 'd2250b79f9791d85',
                name: 'DynamoDBCostradamus',
                start_time: 1496322153.671,
                end_time: 1496322153.671,
                metadata: {
                  DynamoDBCostradamus: {
                    consumptions: {
                      CapacityUnits: {
                        val: 0.5,
                        type: 'RCU'
                      },
                      Latency: {
                        val: 0.1360001564025879,
                        type: 'MS'
                      },
                      PayloadSize: {
                        val: 1.5,
                        type: 'KB'
                      }
                    }
                  }
                },
                cost: {
                  MonetaryCost: {
                    type: 'NANO-USD',
                    val: 0
                  },
                  ProvisioningAmountWaste: {
                    type: 'B',
                    val: 198500
                  },
                  ProvisioningTimeWaste: {
                    type: 'MS',
                    val: 3599999.8639998436
                  },
                  MeteringAmountWaste: {
                    type: 'B',
                    val: 2500
                  },
                  MeteringTimeWaste: {
                    type: 'MS',
                    val: 999.8639998435974
                  }
                }
              }
            ],
            consumptions: {
              CapacityUnits: {
                val: 0.5,
                type: 'RCU'
              },
              Latency: {
                val: 0.1360001564025879,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            },
            cost: {
              MonetaryCost: {
                type: 'NANO-USD',
                val: 0
              },
              ProvisioningAmountWaste: {
                type: 'B',
                val: 198500
              },
              ProvisioningTimeWaste: {
                type: 'MS',
                val: 3599999.8639998436
              },
              MeteringAmountWaste: {
                type: 'B',
                val: 2500
              },
              MeteringTimeWaste: {
                type: 'MS',
                val: 999.8639998435974
              }
            }
          },
          {
            id: 'c87860fd6dc90b2e',
            name: 'LambdaCostradamus',
            start_time: 1496322153.533,
            end_time: 1496322153.533,
            metadata: {
              LambdaCostradamus: {
                RequestId: '93b72188-46ca-11e7-aad2-cfbabf08719c'
              }
            }
          }
        ],
        consumptions: {
          Duration: {
            val: 232.62,
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
            val: 44,
            type: 'MB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 5001
          },
          RuntimeWaste: {
            type: 'US',
            val: 67380
          },
          MonetaryRuntimeWaste: {
            type: 'NANO-USD',
            val: 1123
          },
          MemoryWaste: {
            type: 'MB',
            val: 980
          }
        }
      },
      {
        id: 'd0126b55320a34cd',
        name: 'DynamoDB',
        start_time: 1496322153.534,
        end_time: 1496322153.67,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'Query',
          region: 'us-east-1',
          request_id: 'SATP38KPE9A1C3RIK6VL1V1CBFVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          limit: 100,
          select: 'ALL_ATTRIBUTES',
          table_name: 'ValuesTable',
          resource_names: ['ValuesTable']
        },
        namespace: 'aws',
        subsegments: [{
            id: '3856936a1cb44b73',
            name: 'DynamoDB',
            start_time: 1496322153.672,
            end_time: 1496322153.736,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutItem',
              region: 'us-east-1',
              request_id: '38LBC78IKAVI50BI6CDS6JSBSNVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              table_name: 'PredictionsTable',
              resource_names: ['PredictionsTable']
            },
            namespace: 'aws',
            subsegments: [{
              id: '0bdcbb10972432b3',
              name: 'DynamoDBCostradamus',
              start_time: 1496322153.736,
              end_time: 1496322153.736,
              metadata: {
                DynamoDBCostradamus: {
                  consumptions: {
                    CapacityUnits: {
                      val: 1,
                      type: 'WCU'
                    },
                    Latency: {
                      val: 0.06400012969970703,
                      type: 'MS'
                    },
                    PayloadSize: {
                      val: 1.5,
                      type: 'KB'
                    }
                  }
                }
              },
              cost: {
                MonetaryCost: {
                  type: 'NANO-USD',
                  val: 0
                },
                ProvisioningAmountWaste: {
                  type: 'B',
                  val: 8500
                },
                ProvisioningTimeWaste: {
                  type: 'MS',
                  val: 3599999.9359998703
                },
                MeteringAmountWaste: {
                  type: 'B',
                  val: 500
                },
                MeteringTimeWaste: {
                  type: 'MS',
                  val: 999.9359998703003
                }
              }
            }],
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: {
                val: 0.06400012969970703,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            },
            cost: {
              MonetaryCost: {
                type: 'NANO-USD',
                val: 0
              },
              ProvisioningAmountWaste: {
                type: 'B',
                val: 8500
              },
              ProvisioningTimeWaste: {
                type: 'MS',
                val: 3599999.9359998703
              },
              MeteringAmountWaste: {
                type: 'B',
                val: 500
              },
              MeteringTimeWaste: {
                type: 'MS',
                val: 999.9359998703003
              }
            }
          },
          {
            id: 'c5b0478551dbab9f',
            name: 'Kinesis',
            start_time: 1496322153.679,
            end_time: 1496322153.755,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutRecord',
              region: 'us-east-1',
              request_id: 'd77bf89d-c59e-5d38-86d1-ea347c3ed79f',
              retries: 0
            },
            namespace: 'aws',
            subsegments: [{
              id: '7fe5b0f4b385c490',
              name: 'KinesisCostradamus',
              start_time: 1496322153.756,
              end_time: 1496322153.756,
              metadata: {
                KinesisCostradamus: {
                  consumptions: {
                    PayloadSize: {
                      val: 232,
                      type: 'B'
                    },
                    Operation: {
                      Operation: {
                        val: 'WRITE',
                        type: 'KINESISOPERATION'
                      }
                    },
                    Latency: {
                      val: 0.07600021362304688,
                      type: 'MS'
                    }
                  }
                }
              },
              cost: {
                MonetaryCost: {
                  type: 'USD',
                  val: NaN
                }
              }
            }],
            consumptions: {
              PayloadSize: {
                val: 232,
                type: 'B'
              },
              Operation: {
                Operation: {
                  val: 'WRITE',
                  type: 'KINESISOPERATION'
                }
              },
              Latency: {
                val: 0.07600021362304688,
                type: 'MS'
              }
            },
            cost: {
              MonetaryCost: {
                type: 'USD',
                val: NaN
              }
            }
          },
          {
            id: '90b932765041121a',
            name: 'Kinesis',
            start_time: 1496322153.684,
            end_time: 1496322153.744,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutRecord',
              region: 'us-east-1',
              request_id: 'd51c7ec2-196a-25a3-84b6-6c6b40d3c0a5',
              retries: 0
            },
            namespace: 'aws',
            subsegments: [{
              id: 'a75e6ce1c7905cf0',
              name: 'KinesisCostradamus',
              start_time: 1496322153.745,
              end_time: 1496322153.745,
              metadata: {
                KinesisCostradamus: {
                  consumptions: {
                    PayloadSize: {
                      val: 232,
                      type: 'B'
                    },
                    Operation: {
                      Operation: {
                        val: 'WRITE',
                        type: 'KINESISOPERATION'
                      }
                    },
                    Latency: {
                      val: 0.059999942779541016,
                      type: 'MS'
                    }
                  }
                }
              },
              cost: {
                MonetaryCost: {
                  type: 'USD',
                  val: NaN
                }
              }
            }],
            consumptions: {
              PayloadSize: {
                val: 232,
                type: 'B'
              },
              Operation: {
                Operation: {
                  val: 'WRITE',
                  type: 'KINESISOPERATION'
                }
              },
              Latency: {
                val: 0.059999942779541016,
                type: 'MS'
              }
            },
            cost: {
              MonetaryCost: {
                type: 'USD',
                val: NaN
              }
            }
          },
          {
            id: 'e7a599efeb48fbf1',
            name: 'DynamoDB',
            start_time: 1496322153.675,
            end_time: 1496322153.727,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutItem',
              region: 'us-east-1',
              request_id: 'IB2CNFNK6G5ALDBPADCBHM76DJVV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              table_name: 'PredictionsTable',
              resource_names: ['PredictionsTable']
            },
            namespace: 'aws',
            subsegments: [{
              id: '62f0db9e7cad8075',
              name: 'DynamoDBCostradamus',
              start_time: 1496322153.727,
              end_time: 1496322153.727,
              metadata: {
                DynamoDBCostradamus: {
                  consumptions: {
                    CapacityUnits: {
                      val: 1,
                      type: 'WCU'
                    },
                    Latency: {
                      val: 0.05200004577636719,
                      type: 'MS'
                    },
                    PayloadSize: {
                      val: 1.5,
                      type: 'KB'
                    }
                  }
                }
              },
              cost: {
                MonetaryCost: {
                  type: 'NANO-USD',
                  val: 0
                },
                ProvisioningAmountWaste: {
                  type: 'B',
                  val: 8500
                },
                ProvisioningTimeWaste: {
                  type: 'MS',
                  val: 3599999.947999954
                },
                MeteringAmountWaste: {
                  type: 'B',
                  val: 500
                },
                MeteringTimeWaste: {
                  type: 'MS',
                  val: 999.9479999542236
                }
              }
            }],
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: {
                val: 0.05200004577636719,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            },
            cost: {
              MonetaryCost: {
                type: 'NANO-USD',
                val: 0
              },
              ProvisioningAmountWaste: {
                type: 'B',
                val: 8500
              },
              ProvisioningTimeWaste: {
                type: 'MS',
                val: 3599999.947999954
              },
              MeteringAmountWaste: {
                type: 'B',
                val: 500
              },
              MeteringTimeWaste: {
                type: 'MS',
                val: 999.9479999542236
              }
            }
          },
          {
            id: 'f97dd74e24da3567',
            name: 'Kinesis',
            start_time: 1496322153.674,
            end_time: 1496322153.743,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutRecord',
              region: 'us-east-1',
              request_id: 'fdb2eb07-60b6-edee-ac18-f9aeb9184d84',
              retries: 0
            },
            namespace: 'aws',
            subsegments: [{
              id: '7fd03da3ce5dfcf8',
              name: 'KinesisCostradamus',
              start_time: 1496322153.744,
              end_time: 1496322153.744,
              metadata: {
                KinesisCostradamus: {
                  consumptions: {
                    PayloadSize: {
                      val: 232,
                      type: 'B'
                    },
                    Operation: {
                      Operation: {
                        val: 'WRITE',
                        type: 'KINESISOPERATION'
                      }
                    },
                    Latency: {
                      val: 0.0690000057220459,
                      type: 'MS'
                    }
                  }
                }
              },
              cost: {
                MonetaryCost: {
                  type: 'USD',
                  val: NaN
                }
              }
            }],
            consumptions: {
              PayloadSize: {
                val: 232,
                type: 'B'
              },
              Operation: {
                Operation: {
                  val: 'WRITE',
                  type: 'KINESISOPERATION'
                }
              },
              Latency: {
                val: 0.0690000057220459,
                type: 'MS'
              }
            },
            cost: {
              MonetaryCost: {
                type: 'USD',
                val: NaN
              }
            }
          },
          {
            id: '6f4ab8ca88eac5f8',
            name: 'DynamoDB',
            start_time: 1496322153.681,
            end_time: 1496322153.741,
            http: {
              response: {
                status: 200
              }
            },
            aws: {
              operation: 'PutItem',
              region: 'us-east-1',
              request_id: 'LQ2LORJUVNDQ03KDSLKTLQ2L57VV4KQNSO5AEMVJF66Q9ASUAAJG',
              retries: 0,
              table_name: 'PredictionsTable',
              resource_names: ['PredictionsTable']
            },
            namespace: 'aws',
            subsegments: [{
              id: 'ead62048fd81dd59',
              name: 'DynamoDBCostradamus',
              start_time: 1496322153.741,
              end_time: 1496322153.741,
              metadata: {
                DynamoDBCostradamus: {
                  consumptions: {
                    CapacityUnits: {
                      val: 1,
                      type: 'WCU'
                    },
                    Latency: {
                      val: 0.059999942779541016,
                      type: 'MS'
                    },
                    PayloadSize: {
                      val: 1.5,
                      type: 'KB'
                    }
                  }
                }
              },
              cost: {
                MonetaryCost: {
                  type: 'NANO-USD',
                  val: 0
                },
                ProvisioningAmountWaste: {
                  type: 'B',
                  val: 8500
                },
                ProvisioningTimeWaste: {
                  type: 'MS',
                  val: 3599999.940000057
                },
                MeteringAmountWaste: {
                  type: 'B',
                  val: 500
                },
                MeteringTimeWaste: {
                  type: 'MS',
                  val: 999.9400000572205
                }
              }
            }],
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: {
                val: 0.059999942779541016,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            },
            cost: {
              MonetaryCost: {
                type: 'NANO-USD',
                val: 0
              },
              ProvisioningAmountWaste: {
                type: 'B',
                val: 8500
              },
              ProvisioningTimeWaste: {
                type: 'MS',
                val: 3599999.940000057
              },
              MeteringAmountWaste: {
                type: 'B',
                val: 500
              },
              MeteringTimeWaste: {
                type: 'MS',
                val: 999.9400000572205
              }
            }
          },
          {
            id: 'd2250b79f9791d85',
            name: 'DynamoDBCostradamus',
            start_time: 1496322153.671,
            end_time: 1496322153.671,
            metadata: {
              DynamoDBCostradamus: {
                consumptions: {
                  CapacityUnits: {
                    val: 0.5,
                    type: 'RCU'
                  },
                  Latency: {
                    val: 0.1360001564025879,
                    type: 'MS'
                  },
                  PayloadSize: {
                    val: 1.5,
                    type: 'KB'
                  }
                }
              }
            },
            cost: {
              MonetaryCost: {
                type: 'NANO-USD',
                val: 0
              },
              ProvisioningAmountWaste: {
                type: 'B',
                val: 198500
              },
              ProvisioningTimeWaste: {
                type: 'MS',
                val: 3599999.8639998436
              },
              MeteringAmountWaste: {
                type: 'B',
                val: 2500
              },
              MeteringTimeWaste: {
                type: 'MS',
                val: 999.8639998435974
              }
            }
          }
        ],
        consumptions: {
          CapacityUnits: {
            val: 0.5,
            type: 'RCU'
          },
          Latency: {
            val: 0.1360001564025879,
            type: 'MS'
          },
          PayloadSize: {
            val: 1.5,
            type: 'KB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 198500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.8639998436
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 2500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.8639998435974
          }
        }
      },
      {
        id: '3856936a1cb44b73',
        name: 'DynamoDB',
        start_time: 1496322153.672,
        end_time: 1496322153.736,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: '38LBC78IKAVI50BI6CDS6JSBSNVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: ['PredictionsTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: '0bdcbb10972432b3',
          name: 'DynamoDBCostradamus',
          start_time: 1496322153.736,
          end_time: 1496322153.736,
          metadata: {
            DynamoDBCostradamus: {
              consumptions: {
                CapacityUnits: {
                  val: 1,
                  type: 'WCU'
                },
                Latency: {
                  val: 0.06400012969970703,
                  type: 'MS'
                },
                PayloadSize: {
                  val: 1.5,
                  type: 'KB'
                }
              }
            }
          },
          cost: {
            MonetaryCost: {
              type: 'NANO-USD',
              val: 0
            },
            ProvisioningAmountWaste: {
              type: 'B',
              val: 8500
            },
            ProvisioningTimeWaste: {
              type: 'MS',
              val: 3599999.9359998703
            },
            MeteringAmountWaste: {
              type: 'B',
              val: 500
            },
            MeteringTimeWaste: {
              type: 'MS',
              val: 999.9359998703003
            }
          }
        }],
        consumptions: {
          CapacityUnits: {
            val: 1,
            type: 'WCU'
          },
          Latency: {
            val: 0.06400012969970703,
            type: 'MS'
          },
          PayloadSize: {
            val: 1.5,
            type: 'KB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 8500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.9359998703
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.9359998703003
          }
        }
      },
      {
        id: '0bdcbb10972432b3',
        name: 'DynamoDBCostradamus',
        start_time: 1496322153.736,
        end_time: 1496322153.736,
        metadata: {
          DynamoDBCostradamus: {
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: {
                val: 0.06400012969970703,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            }
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 8500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.9359998703
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.9359998703003
          }
        }
      },
      {
        id: 'c5b0478551dbab9f',
        name: 'Kinesis',
        start_time: 1496322153.679,
        end_time: 1496322153.755,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'd77bf89d-c59e-5d38-86d1-ea347c3ed79f',
          retries: 0
        },
        namespace: 'aws',
        subsegments: [{
          id: '7fe5b0f4b385c490',
          name: 'KinesisCostradamus',
          start_time: 1496322153.756,
          end_time: 1496322153.756,
          metadata: {
            KinesisCostradamus: {
              consumptions: {
                PayloadSize: {
                  val: 232,
                  type: 'B'
                },
                Operation: {
                  Operation: {
                    val: 'WRITE',
                    type: 'KINESISOPERATION'
                  }
                },
                Latency: {
                  val: 0.07600021362304688,
                  type: 'MS'
                }
              }
            }
          },
          cost: {
            MonetaryCost: {
              type: 'USD',
              val: NaN
            }
          }
        }],
        consumptions: {
          PayloadSize: {
            val: 232,
            type: 'B'
          },
          Operation: {
            Operation: {
              val: 'WRITE',
              type: 'KINESISOPERATION'
            }
          },
          Latency: {
            val: 0.07600021362304688,
            type: 'MS'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'USD',
            val: NaN
          }
        }
      },
      {
        id: '7fe5b0f4b385c490',
        name: 'KinesisCostradamus',
        start_time: 1496322153.756,
        end_time: 1496322153.756,
        metadata: {
          KinesisCostradamus: {
            consumptions: {
              PayloadSize: {
                val: 232,
                type: 'B'
              },
              Operation: {
                Operation: {
                  val: 'WRITE',
                  type: 'KINESISOPERATION'
                }
              },
              Latency: {
                val: 0.07600021362304688,
                type: 'MS'
              }
            }
          }
        },
        cost: {
          MonetaryCost: {
            type: 'USD',
            val: NaN
          }
        }
      },
      {
        id: '90b932765041121a',
        name: 'Kinesis',
        start_time: 1496322153.684,
        end_time: 1496322153.744,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'd51c7ec2-196a-25a3-84b6-6c6b40d3c0a5',
          retries: 0
        },
        namespace: 'aws',
        subsegments: [{
          id: 'a75e6ce1c7905cf0',
          name: 'KinesisCostradamus',
          start_time: 1496322153.745,
          end_time: 1496322153.745,
          metadata: {
            KinesisCostradamus: {
              consumptions: {
                PayloadSize: {
                  val: 232,
                  type: 'B'
                },
                Operation: {
                  Operation: {
                    val: 'WRITE',
                    type: 'KINESISOPERATION'
                  }
                },
                Latency: {
                  val: 0.059999942779541016,
                  type: 'MS'
                }
              }
            }
          },
          cost: {
            MonetaryCost: {
              type: 'USD',
              val: NaN
            }
          }
        }],
        consumptions: {
          PayloadSize: {
            val: 232,
            type: 'B'
          },
          Operation: {
            Operation: {
              val: 'WRITE',
              type: 'KINESISOPERATION'
            }
          },
          Latency: {
            val: 0.059999942779541016,
            type: 'MS'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'USD',
            val: NaN
          }
        }
      },
      {
        id: 'a75e6ce1c7905cf0',
        name: 'KinesisCostradamus',
        start_time: 1496322153.745,
        end_time: 1496322153.745,
        metadata: {
          KinesisCostradamus: {
            consumptions: {
              PayloadSize: {
                val: 232,
                type: 'B'
              },
              Operation: {
                Operation: {
                  val: 'WRITE',
                  type: 'KINESISOPERATION'
                }
              },
              Latency: {
                val: 0.059999942779541016,
                type: 'MS'
              }
            }
          }
        },
        cost: {
          MonetaryCost: {
            type: 'USD',
            val: NaN
          }
        }
      },
      {
        id: 'e7a599efeb48fbf1',
        name: 'DynamoDB',
        start_time: 1496322153.675,
        end_time: 1496322153.727,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: 'IB2CNFNK6G5ALDBPADCBHM76DJVV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: ['PredictionsTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: '62f0db9e7cad8075',
          name: 'DynamoDBCostradamus',
          start_time: 1496322153.727,
          end_time: 1496322153.727,
          metadata: {
            DynamoDBCostradamus: {
              consumptions: {
                CapacityUnits: {
                  val: 1,
                  type: 'WCU'
                },
                Latency: {
                  val: 0.05200004577636719,
                  type: 'MS'
                },
                PayloadSize: {
                  val: 1.5,
                  type: 'KB'
                }
              }
            }
          },
          cost: {
            MonetaryCost: {
              type: 'NANO-USD',
              val: 0
            },
            ProvisioningAmountWaste: {
              type: 'B',
              val: 8500
            },
            ProvisioningTimeWaste: {
              type: 'MS',
              val: 3599999.947999954
            },
            MeteringAmountWaste: {
              type: 'B',
              val: 500
            },
            MeteringTimeWaste: {
              type: 'MS',
              val: 999.9479999542236
            }
          }
        }],
        consumptions: {
          CapacityUnits: {
            val: 1,
            type: 'WCU'
          },
          Latency: {
            val: 0.05200004577636719,
            type: 'MS'
          },
          PayloadSize: {
            val: 1.5,
            type: 'KB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 8500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.947999954
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.9479999542236
          }
        }
      },
      {
        id: '62f0db9e7cad8075',
        name: 'DynamoDBCostradamus',
        start_time: 1496322153.727,
        end_time: 1496322153.727,
        metadata: {
          DynamoDBCostradamus: {
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: {
                val: 0.05200004577636719,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            }
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 8500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.947999954
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.9479999542236
          }
        }
      },
      {
        id: 'f97dd74e24da3567',
        name: 'Kinesis',
        start_time: 1496322153.674,
        end_time: 1496322153.743,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutRecord',
          region: 'us-east-1',
          request_id: 'fdb2eb07-60b6-edee-ac18-f9aeb9184d84',
          retries: 0
        },
        namespace: 'aws',
        subsegments: [{
          id: '7fd03da3ce5dfcf8',
          name: 'KinesisCostradamus',
          start_time: 1496322153.744,
          end_time: 1496322153.744,
          metadata: {
            KinesisCostradamus: {
              consumptions: {
                PayloadSize: {
                  val: 232,
                  type: 'B'
                },
                Operation: {
                  Operation: {
                    val: 'WRITE',
                    type: 'KINESISOPERATION'
                  }
                },
                Latency: {
                  val: 0.0690000057220459,
                  type: 'MS'
                }
              }
            }
          },
          cost: {
            MonetaryCost: {
              type: 'USD',
              val: NaN
            }
          }
        }],
        consumptions: {
          PayloadSize: {
            val: 232,
            type: 'B'
          },
          Operation: {
            Operation: {
              val: 'WRITE',
              type: 'KINESISOPERATION'
            }
          },
          Latency: {
            val: 0.0690000057220459,
            type: 'MS'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'USD',
            val: NaN
          }
        }
      },
      {
        id: '7fd03da3ce5dfcf8',
        name: 'KinesisCostradamus',
        start_time: 1496322153.744,
        end_time: 1496322153.744,
        metadata: {
          KinesisCostradamus: {
            consumptions: {
              PayloadSize: {
                val: 232,
                type: 'B'
              },
              Operation: {
                Operation: {
                  val: 'WRITE',
                  type: 'KINESISOPERATION'
                }
              },
              Latency: {
                val: 0.0690000057220459,
                type: 'MS'
              }
            }
          }
        },
        cost: {
          MonetaryCost: {
            type: 'USD',
            val: NaN
          }
        }
      },
      {
        id: '6f4ab8ca88eac5f8',
        name: 'DynamoDB',
        start_time: 1496322153.681,
        end_time: 1496322153.741,
        http: {
          response: {
            status: 200
          }
        },
        aws: {
          operation: 'PutItem',
          region: 'us-east-1',
          request_id: 'LQ2LORJUVNDQ03KDSLKTLQ2L57VV4KQNSO5AEMVJF66Q9ASUAAJG',
          retries: 0,
          table_name: 'PredictionsTable',
          resource_names: ['PredictionsTable']
        },
        namespace: 'aws',
        subsegments: [{
          id: 'ead62048fd81dd59',
          name: 'DynamoDBCostradamus',
          start_time: 1496322153.741,
          end_time: 1496322153.741,
          metadata: {
            DynamoDBCostradamus: {
              consumptions: {
                CapacityUnits: {
                  val: 1,
                  type: 'WCU'
                },
                Latency: {
                  val: 0.059999942779541016,
                  type: 'MS'
                },
                PayloadSize: {
                  val: 1.5,
                  type: 'KB'
                }
              }
            }
          },
          cost: {
            MonetaryCost: {
              type: 'NANO-USD',
              val: 0
            },
            ProvisioningAmountWaste: {
              type: 'B',
              val: 8500
            },
            ProvisioningTimeWaste: {
              type: 'MS',
              val: 3599999.940000057
            },
            MeteringAmountWaste: {
              type: 'B',
              val: 500
            },
            MeteringTimeWaste: {
              type: 'MS',
              val: 999.9400000572205
            }
          }
        }],
        consumptions: {
          CapacityUnits: {
            val: 1,
            type: 'WCU'
          },
          Latency: {
            val: 0.059999942779541016,
            type: 'MS'
          },
          PayloadSize: {
            val: 1.5,
            type: 'KB'
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 8500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.940000057
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.9400000572205
          }
        }
      },
      {
        id: 'ead62048fd81dd59',
        name: 'DynamoDBCostradamus',
        start_time: 1496322153.741,
        end_time: 1496322153.741,
        metadata: {
          DynamoDBCostradamus: {
            consumptions: {
              CapacityUnits: {
                val: 1,
                type: 'WCU'
              },
              Latency: {
                val: 0.059999942779541016,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            }
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 8500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.940000057
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.9400000572205
          }
        }
      },
      {
        id: 'd2250b79f9791d85',
        name: 'DynamoDBCostradamus',
        start_time: 1496322153.671,
        end_time: 1496322153.671,
        metadata: {
          DynamoDBCostradamus: {
            consumptions: {
              CapacityUnits: {
                val: 0.5,
                type: 'RCU'
              },
              Latency: {
                val: 0.1360001564025879,
                type: 'MS'
              },
              PayloadSize: {
                val: 1.5,
                type: 'KB'
              }
            }
          }
        },
        cost: {
          MonetaryCost: {
            type: 'NANO-USD',
            val: 0
          },
          ProvisioningAmountWaste: {
            type: 'B',
            val: 198500
          },
          ProvisioningTimeWaste: {
            type: 'MS',
            val: 3599999.8639998436
          },
          MeteringAmountWaste: {
            type: 'B',
            val: 2500
          },
          MeteringTimeWaste: {
            type: 'MS',
            val: 999.8639998435974
          }
        }
      },
      {
        id: 'c87860fd6dc90b2e',
        name: 'LambdaCostradamus',
        start_time: 1496322153.533,
        end_time: 1496322153.533,
        metadata: {
          LambdaCostradamus: {
            RequestId: '93b72188-46ca-11e7-aad2-cfbabf08719c'
          }
        }
      }
    ],
    [{
      id: '1fea849af56b4d6f',
      name: 'ingestValueFunction',
      start_time: 1496322153.13,
      end_time: 1496322153.461,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        request_id: '938c1a91-46ca-11e7-adf7-6fb5eef32a0b'
      },
      trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
      origin: 'AWS::Lambda',
      resource_arn: 'arn:aws:lambda:us-east-1:186706155491:function:ingestValueFunction'
    }],
    [{
      id: '3bc63b692a78bb07',
      name: 'DynamoDB',
      start_time: 1496322153.534,
      end_time: 1496322153.835,
      parent_id: '9e280ff72b4e5492',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutItem',
        region: 'us-east-1',
        request_id: 'BEHC4R6JUG7HBJE8P1JGC0LVFRVV4KQNSO5AEMVJF66Q9ASUAAJG',
        retries: 0,
        table_name: 'ValuesTable',
        resource_names: ['ValuesTable']
      },
      trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
      origin: 'AWS::DynamoDB::Table'
    }],
    [{
      id: '1d338def30dea2a5',
      name: 'DynamoDB',
      start_time: 1496322153.534,
      end_time: 1496322153.67,
      parent_id: 'd0126b55320a34cd',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'Query',
        region: 'us-east-1',
        request_id: 'SATP38KPE9A1C3RIK6VL1V1CBFVV4KQNSO5AEMVJF66Q9ASUAAJG',
        retries: 0,
        limit: 100,
        select: 'ALL_ATTRIBUTES',
        table_name: 'ValuesTable',
        resource_names: ['ValuesTable']
      },
      trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
      origin: 'AWS::DynamoDB::Table'
    }],
    [{
      id: '353472f71d7257b0',
      name: 'DynamoDB',
      start_time: 1496322153.672,
      end_time: 1496322153.736,
      parent_id: '3856936a1cb44b73',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutItem',
        region: 'us-east-1',
        request_id: '38LBC78IKAVI50BI6CDS6JSBSNVV4KQNSO5AEMVJF66Q9ASUAAJG',
        retries: 0,
        table_name: 'PredictionsTable',
        resource_names: ['PredictionsTable']
      },
      trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
      origin: 'AWS::DynamoDB::Table'
    }],
    [{
      id: '2514753b23965afc',
      name: 'Kinesis',
      start_time: 1496322153.679,
      end_time: 1496322153.755,
      parent_id: 'c5b0478551dbab9f',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutRecord',
        region: 'us-east-1',
        request_id: 'd77bf89d-c59e-5d38-86d1-ea347c3ed79f',
        retries: 0
      },
      trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
      origin: 'AWS::Kinesis'
    }],
    [{
      id: '1e4175813df37934',
      name: 'Kinesis',
      start_time: 1496322153.684,
      end_time: 1496322153.744,
      parent_id: '90b932765041121a',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutRecord',
        region: 'us-east-1',
        request_id: 'd51c7ec2-196a-25a3-84b6-6c6b40d3c0a5',
        retries: 0
      },
      trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
      origin: 'AWS::Kinesis'
    }],
    [{
      id: '1c0e78fa243b2071',
      name: 'DynamoDB',
      start_time: 1496322153.675,
      end_time: 1496322153.727,
      parent_id: 'e7a599efeb48fbf1',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutItem',
        region: 'us-east-1',
        request_id: 'IB2CNFNK6G5ALDBPADCBHM76DJVV4KQNSO5AEMVJF66Q9ASUAAJG',
        retries: 0,
        table_name: 'PredictionsTable',
        resource_names: ['PredictionsTable']
      },
      trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
      origin: 'AWS::DynamoDB::Table'
    }],
    [{
      id: '3ed0fcb12aa39d27',
      name: 'Kinesis',
      start_time: 1496322153.674,
      end_time: 1496322153.743,
      parent_id: 'f97dd74e24da3567',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutRecord',
        region: 'us-east-1',
        request_id: 'fdb2eb07-60b6-edee-ac18-f9aeb9184d84',
        retries: 0
      },
      trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
      origin: 'AWS::Kinesis'
    }],
    [{
      id: '34d04da30256d8dc',
      name: 'DynamoDB',
      start_time: 1496322153.681,
      end_time: 1496322153.741,
      parent_id: '6f4ab8ca88eac5f8',
      inferred: true,
      http: {
        response: {
          status: 200
        }
      },
      aws: {
        operation: 'PutItem',
        region: 'us-east-1',
        request_id: 'LQ2LORJUVNDQ03KDSLKTLQ2L57VV4KQNSO5AEMVJF66Q9ASUAAJG',
        retries: 0,
        table_name: 'PredictionsTable',
        resource_names: ['PredictionsTable']
      },
      trace_id: '1-59301069-2ff295fcdc556b9dbee93a9a',
      origin: 'AWS::DynamoDB::Table'
    }]
  ]