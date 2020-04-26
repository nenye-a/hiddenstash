'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO: make event its own schema within the messaging schema

var SlackSchema = new Schema({
  challenge: {
    type: String,
  },
  token: {type: String},
  team_id: {type: String},
  api_app_id: {type: String},
  event: {
    type: {type: String},
    channel: {type: String},
    user: {type: String},
    text: {type: String},
    ts: {type: String},
    event_ts: {type: String},
    channel_type: {type: String},
    },
  type: {type: String},
  authed_teams: [
    {type: String},
  ],
  event_id: {type: String},
  event_time: {type: Number},
});

module.exports = mongoose.model('Slack', SlackSchema);