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

// single course api

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n.id == id);
    res.send(selectedCourse);
})

// all courses api

app.get('/courses', (req, res) => {
    res.send(courses);
})

// api for course with category

app.get('/courses/category/:id', (req, res) => {
    const id = req.params.id;
    const seletedCourses = courses.filter(course => course.category_id == id);
    if (id == '00') {
        res.send(courses);
    }
    else {
        res.send(seletedCourses);
    }
})

// category api

app.get('/categories', (req, res) => {
    res.send(category);
})


app.listen(port, () => {
    console.log('course wave server running on port', port);
})