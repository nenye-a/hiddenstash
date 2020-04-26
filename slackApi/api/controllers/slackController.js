'use strict';


var mongoose = require('mongoose'),
  SlackMessage = mongoose.model('Slack');

exports.list_all_messages = function (req, res) {
  SlackMessage.find({}, function (err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};


exports.serve_a_message = function (req, res) {
  var new_message = new SlackMessage(req.body);
  new_message.save(function (err, message) {
    if (err)
      res.send(err);
    //if there's a challenge, return the challenge so that slack can verify
    if (message.challenge)
      res.json(message.challenge);
    res.json(message)
  });
};
