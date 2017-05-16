/**
 * Created by jk on 12.05.17.
 */

'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {

    // TODO Check params

    const params = {
        TableName: 'ValuesTable',
        Item: {
            id: event.id,
            timestamp: event.timestamp,
            value: event.value
        },
        ReturnConsumedCapacity: "TOTAL"
    };

    return dynamo.put(params, (err, data) => {
        if(err) callback(err);
        else callback(null, data);
    });
};