#!/bin/bash

node user.js -f persistValueFunction -e -n 600
node user.js -f ingestValueFunction -o baseline-euwest1-ingestValue.txt -n 10
node user.js -f readNotificationsFunction -o baseline-euwest1-readNotifications.txt -n 10
node user.js -f readPredictionsFunction -o baseline-euwest1-readPredictions.txt -n 10
node user.js -f readValuesFunction -o baseline-euwest1-readValues.txt -n 10
