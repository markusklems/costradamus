/**
 * Created by jk on 12.05.17.
 */

'use strict';

const AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis({apiVersion: '2013-12-02'});

module.exports.handler = (event, context, callback) => {

    // TODO Check params of client request.

    const timeout = Math.floor((Math.random() * 1000) +200);
    setTimeout(() => {
        console.log('Event delivered: ' +event);
    }, timeout);

    callback(null);

    /**
    const streamParams = {
      StreamName: 'NotificationsStream'
    };

    let shards = [], iterators = [];


    // TODO End callback hell and use promises.
    kinesis.describeStream( streamParams, (err, data) => {
        if(err) callback(err);
        else {
            console.log('StreamDescription: ' +data.StreamDescription);
            console.log('Shards: ' +data.StreamDescription.Shards);
            console.log('Shards[0]: ' +data.StreamDescription.Shards[0]);
            console.log('Shards[0].ShardId: ' +data.StreamDescription.Shards[0].ShardId);
            for(let shard in data.StreamDescription.Shards) {
                shards.push(shard.ShardId);
                console.log('Shard: '+shard);
                console.log('ShardId: '+shard.ShardId);
            }
            for(let shardId in shards) {
                const iteratorParams = {
                    ShardId: data.StreamDescription.Shards[0].ShardId,
                    ShardIteratorType: 'LATEST',
                    StreamName: 'NotificationsStream'
                    // Timestamp: (event.start)
                };
                console.log('Timestamp: ' +event.start+ ', now: ' +(new Date().getTime()));
                kinesis.getShardIterator( iteratorParams, (err, data) => {
                    if(err) callback(err);
                    else {
                        iterators.push(data.ShardIterator);
                        console.log('ShardIterator: ' +data.ShardIterator);
                        // TODO This will not work for streams with more than a single shard. Consider to change this
                        // to an implementation that supports multiple shards.
                        for(let iterator in iterators) {
                            const getParams = {
                                ShardIterator: iterator
                            };

                            kinesis.getRecords(getParams, (err, data) => {
                                if(err) callback(err);
                                else callback(null, data);
                            });
                        }
                    }
                });
            }
        }
    });
    */
};