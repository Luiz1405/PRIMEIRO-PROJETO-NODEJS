import express from 'express'

const app = express()
const port = 3001

const users = []

app.listen(`${port}`)
app.use(express.json()) 

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {

    res.status(200).json(users)

})
