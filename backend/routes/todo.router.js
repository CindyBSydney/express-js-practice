const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo.Controller'); 

router.post('/todo', todoController.createTodoList);


module.exports = router;