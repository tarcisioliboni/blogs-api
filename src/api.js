const express = require('express');

const usersRouter = require('./database/routers/usersRouter');
const loginRouter = require('./database/routers/loginRouter');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

// app.use(loginController.validateToken);

app.use('/user', usersRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
