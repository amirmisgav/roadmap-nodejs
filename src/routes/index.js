const router = require('express').Router()

let tasks = {}

const create = () => {
    router.param('id', (req, res, next, id) => {
        if (!tasks[parseInt(req.param.id)]) res.sendStatus(406)
        req.taskId = parseInt(req.param.id)
        next()
    })

    router.get('/', (req, res) => res.send(tasks))
    router.post('/', (req, res) => {
        if (!req.body.subject) return res.sendStatus(406)
        const id = genId()

        const task = Object.assign({}, req.body, { id: Math.random() })
        tasks.push(task)
        task[id] = task
        res.sendStatus(201).send(task)

    })

    router.put('/:id', (req, res) => {
        tasks[parseInt(req.param.id)] = req.body
        res.sendStatus(200)
    })

    router.get('/:id', (req, res) => {
        tasks[parseInt(req.param.id)] = req.body
        res.sendStatus(200)
    })


    router.delete('/:id', (req, res) => {
        delete tasks[parseInt(req.param.id)]
        res.sendStatus(200)
    })
    return router
}

module.exports = create