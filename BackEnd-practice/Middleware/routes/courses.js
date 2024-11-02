const express = require('express')
const router = express.Router()
const Joi = require('joi');

const courses = [
    { id: 1, name: 'Course 1'},
    { id: 2, name: 'Course 2'},
    { id: 3, name: 'Course 3'}
]

// --------- Get request ------------------------
router.get('/', (req, res) => {
    res.send(courses)
}) 

router.get('/:id', (req,res) => {
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
router.post('/', (req,res) => {

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
router.put('/:id', (req,res) => {
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
router.delete('/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with given ID was not found.")

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(courses)
})

module.exports = router