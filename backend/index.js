const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json()); 

const todoRoutes = require('./routes/todo.router');
app.use('/', todoRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});





