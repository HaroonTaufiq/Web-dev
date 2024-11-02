const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://haroon:mongodb-demo@cluster0.jwvai.mongodb.net/')
    .then(() => {
        console.log("connection is successful");
    })
    .catch((err) => {
        console.log(err);
    })

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
}); 

    //create a model       //model name, schema
const Course = mongoose.model("Course", courseSchema);


// create a document
const createCourse = async () => {
    const course = new Course({
        name: "Node.js",
        author: "Haroon",
        tags: ["node", "backend"],
        isPublished: true
    });

        //save to database
    const result = await course.save();
    console.log(result);  // console what is returned by the save method
}

// Get the courses
const getCourses = async () => {
    const pageNumber = 2;
    const pageSize = 10;

    // comparison operators
    // eq (equal)
    // ne (not equal)
    // gt (greater than) lt (less than)
    // gte (greater than or equal to) lte (less than or equal to)
    // in (in), nin (not in)

    // Logical Operators
    // or
    // and

    const result = await Course

    // Comparison operators
    // .find({price: {$gt: 10, $lte: 20}})  // assign the filter object as an argument values
    // .find({price: {$in: [10, 15, 20]}})  // price is either 10, 15 or 20


    // Logical Operators
    // .find()
    // .or([{name: "Node.js" }, {author: "Haroon"}])

    // Regular Expressions
    // Starts with Haroon
    // .find({author: /^Haroon/})

    // Ends with Haroon
    // .find({author: /Haroon$/i})  // i for case insensitive

    // Contains Haroon
    // .find({author: /.*Haroon.*/i})

    .find({isPublished: true})

    // Pagination
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)

    // .limit(10)
    .sort({name: 1})  // 1 for ascending order, -1 for descending order

    // .select({name: 1, tags: 1});   // only properties that we want to select

    // .countDocuments();  // count the number of documents
    console.log(result);
}


// Update course
const updateCourse = async (id) => {

    // Approach: Query first
    // find by id
    const course = await Course.findById(id);
    if (!course) return;

    // update the course
    course.isPublished = true;
    course.author = "Another Author";
    // or
    course.set({
        isPublished: true,
        author: "Another Author"
    }); 

    // save the course
    const result = await course.save();
    console.log(result);

// ======================================== //
    // Approach: Update first
    const Course = await Course.update({ _id: id }, {
        $set: {
            isPublished: true,
            author: "Another Author"
        }
    });

// ======================================== //
    // Approach: Update first and return the document
    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            isPublished: true,
            author: "Another Author"
        }
    }, { new: true });  // new: true to return the updated document
}

// Delete course
const removeCourse = async (id) => {
    // const result = await Course.deleteMany({ isPublished: false });
    // const result = await Course.deleteOne({ _id: id });

    const course = await Course.findByIdAndRemove(id);
    console.log(result);
}

// createCourse();
// getCourses();
// updateCourse("60c5f5e0e3a4c4a4b4e8f0e8");
removeCourse("60c5f5e0e3a4c4a4b4e8f0e8");