const express = require('express')

const app = express()

const tasks = require('./src/routes')

// app.get('/home',(req, res) => res.send('hello2'))

// app.post('hello2',(req, res) => res.send('hello2'))

// app.use((req, res) => res.send('hello1'))

app.use('/tasks', tasks)

app.use((req, res) => res.send('last'))

app.use((err, req, res, next) => res.status(400).send('error'))

app.listen(app.listen(3000))