/**
 * Created by jk on 12.05.17.
 */

'use strict';

const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({apiVersion: '2015-03-31'});

module.exports.handler = (event, context, callback) => {

    // TODO Check params

    const persistParams = {
        FunctionName: 'persistValueFunction',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(event, null)
    };
    /*
    const predictParams = {
        FunctionName: "smartgridmonitor-dev-predictValueFunction",
        InvocationType: "Event",
        Payload: JSON.stringify(event)
    };
    */
    lambda.invoke(persistParams, (err, data) => {
        if (err) console.log(err, err.stack, err.message);
        else     callback(null, data);
    });

    /**
    lambda.invoke(predictParams, function(err, data) {
        if (err) console.log(err, err.stack);
        else    callback(data);
    });
    */
};