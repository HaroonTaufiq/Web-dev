const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'Course 1'},
    { id: 2, name: 'Course 2'},
    { id: 3, name: 'Course 3'}
]

// --------- Get request ------------------------
app.get('/api/courses', (req, res) => {
    res.send(courses)
}) 

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with given ID was not found.")
    res.send(course)
})

// =========== < validate function > =====================
function validateCourse (course) {
    // validate course
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    // Validate the request body
    return schema.validate(course); 
}

// --------- Post request ------------------------
app.post('/api/courses/', (req,res) => {

    const {error} = validateCourse(req.body)

    if (error) {
        res.status(404).send(error.details[0].message)
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

// --------- Put request ------------------------
app.put('/api/courses/:id', (req,res) => {
    // If course don't exist
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with given ID was not found.")

    const {error} = validateCourse(req.body)
    
    if (error) {
        res.status(404).send(error.details[0].message)
        return;
    }

    // Update the course
    course.name = req.body.name;
    res.send(course)
})

// --------- Delete request -----------------------
app.delete('/api/courses/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with given ID was not found.")

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(courses)
})

// --------- Rest code --------------------------------
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening at Port: ${3000}`)
}) 