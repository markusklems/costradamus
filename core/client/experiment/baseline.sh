#!/bin/bash

node user.js -f persistValueFunction -e -n 600
node user.js -f ingestValueFunction -o baseline-ingestValue.txt -n 10
node user.js -f readNotificationsFunction -o baseline-readNotifications.txt -n 10
node user.js -f readPredictionsFunction -o baseline-readPredictions.txt -n 10
node user.js -f readValuesFunction -o baseline-readValues.txt -n 10
