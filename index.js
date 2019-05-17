const express = require('express')
const app = express()
const todos = require('./routes/lista')
let port = process.argv[2] || 2233
app.use(express.urlencoded({extended:false}))

const myLogger = (req,res,next) => {
    console.log('Logged');
    next();
};
app.use(myLogger);


app.use('/api/v1/todos', todos)

app.use((req,res) =>{
    res.status(404).send('ERROR 404 ERROR 404')
});

app.listen(port)