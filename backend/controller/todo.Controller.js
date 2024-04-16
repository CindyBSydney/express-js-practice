const todoList = []; //this array will hold an item in the TODO list.

//createTodo function will add a new object to the todos array.
exports.createTodoList = (req, res) => {
    //when creating a new TODO, the user sends the title and priority of the TODO in the request body.
    const { title, priority } = req.body; 
    //create a new object with the title and priority received from the user.
    const newTodoList = {
        id: todoList.length + 1, // simple ID assignment
        title: title,
        priority: priority,
        createdAt: new Date(),
        done: false, // when creating a new TODO, it is not done yet.
        doneAt: null
    };
    todoList.push(newTodoList);
    res.status(201).send(newTodoList);
};


//return the list of TODOs created so far.
exports.getTodoList = (req, res) => {
    res.status(200).send(todoList);
};

//update the todo list
exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, priority, done } = req.body;
    const todo = todoList.find(todo => todo.id === parseInt(id));
    if (todo) {
        todo.title = title || todo.title;
        todo.priority = priority || todo.priority;
        if (done !== undefined) {
            todo.done = done;
            todo.doneAt = done ? new Date() : null;
        }
        res.status(200).send(todo);
    } else {
        res.status(404).send({ message: "TODO not found" });
    }
};

