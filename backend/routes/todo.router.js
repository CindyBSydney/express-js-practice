const express = require('express');
const router = express.Router();
const todoController = require('../controller/todo.Controller'); 

router.post('/todo', todoController.createTodoList);
router.get('/todo', todoController.getTodoList);
router.put('/todo/:id', todoController.updateTodo);


module.exports = router;
