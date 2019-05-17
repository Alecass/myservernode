const express = require('express');
const router = express.Router();

const todos = require('../todos')

router.get('/', (req, res) => {
    res.send(todos)
  })

  router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    res.json(todos.todos.filter(todos => todos.id === id))
  })

  router.post('/add', (req, res) => {
    const body = req.body
    const {id,titolo,descrizione} = req.body
    status = {}
    console.log(id,titolo,descrizione)

    if(titolo){
        status.code = 'success'
        status.message = `${titolo} valido!`
    }else{
        status.code = 'error'
        status.message = 'titolo non valido || inesistente!!!!'
    }
    res.send(status)
  })

  router.put('/update', (req, res) => {
    status={}
    status.message = 'Todo Updated'
    res.send(status)
  })

  router.delete('/delete', (req, res) => {
    status={}
    status.message = 'Todo Deleted'
    res.send(status)
  })
  

module.exports = router