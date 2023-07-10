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

// api for course with category

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const seletedCourse = courses.filter(course => course.category_id == id);
    res.send(seletedCourse);
})

// category api

app.get('/categories', (req, res) => {
    res.send(category);
})


app.listen(port, () => {
    console.log('course wave server running on port', port);
})