const express = require('express');
const loginRouter = require('./router/loginRouter');
const userRouter = require('./router/userRouter');
const categoryRouter = require('./router/categorysRouter');
const blogpost = require('./router/blogPostRouter');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', blogpost); 
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
