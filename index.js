const express = require('express')
const cors = require('cors')
const category = require('./data/categories.json')
const courses = require('./data/courses.json')

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Server running')
})

// category api

app.get('/categories', (req, res) => {
    res.send(category);
})


app.listen(port, () => {
    console.log('course wave server running on port', port);
})