/**
 * Created by jk on 12.05.17.
 */

'use strict';

const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({apiVersion: '2015-03-31'});
const sqs = new AWS.SQS({apiVersion: '2012-11-05'});


const sendToDynamodb = event => {
    return new Promise((resolve, reject) => {
        const params = {
            FunctionName: 'persistValueFunction',
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify(event, null)
        };
        lambda.invoke(params, (err, data) => {
            if (err) {
                console.log(err, err.stack, err.message);
                reject(err);
            }
            else {
                console.log(data);
                resolve(data);
            }
        });
    });
};

const sendToSqs = event => {
    return new Promise((resolve, reject) => {
        const params = {
            MessageBody: JSON.stringify(event),
            QueueUrl: 'https://sqs.us-east-1.amazonaws.com/186706155491/DE00056366740S2031372170000000000010001080000'
        };
        sqs.sendMessage(params, (err, data) => {
            if (err) {
                console.log(err, err.stack);
                reject(err);
            }
            else {
                console.log(data);
                resolve(data);
            }
        });
    })
};

module.exports.handler = (event, context, callback) => {

    // TODO Check params

    // TODO Join both functions and terminate via a callback.
    const promises = [sendToDynamodb(event), sendToSqs(event)];
    Promise.all(promises)
        .then( values => {
            callback(null, values);
        })
        .catch( err => {
            callback(err);
        });

    /**
    lambda.invoke(predictParams, function(err, data) {
        if (err) console.log(err, err.stack);
        else    callback(data);
    });
    */
};