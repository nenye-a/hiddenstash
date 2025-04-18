'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/taskController');
    var challenge = require('../controllers/slackController');


    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/challenge')
        .get(challenge.list_all_messages)
        .post(challenge.serve_a_message);
};