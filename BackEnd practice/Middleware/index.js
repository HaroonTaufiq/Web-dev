const Config = require('config'); 
const express = require('express');
const dbDebugger = require('debug')('app:db');
const Logger = require('./logger');
const morgan = require('morgan');
const courses = require('./routes/courses')
const app = express();

// Router
app.use('/api/courses', courses)  // for any route like api/courses use courses router

// Environments
// console.log(`Node environment ${process.env.NODE_ENV}`)
// console.log(`app: ${app.get('env')}`)

// Debugger
dbDebugger('Connected to the database...')  // set msgs ON and OFF

app.set('view engine', 'pug');
app.set('views', './views'); // default

app.get('/', (req,res) => {
    res.render('index', {title: 'My Express App', message: 'Hello'})
})

// Configuration
console.log(`Application Name: ${Config.get('name')}`)
// console.log(`Mail Server: ${Config.get('mail.password')}`)

app.use(express.json());        
app.use(express.urlencoded());  
app.use(express.static('public'));  // let you display public directly files in browser

if (app.get('env') === 'development'){
    app.use(morgan('tiny'));  // disply the request info in terminal
    console.log("App is in development mode")
}

// creating custom Middleware, importing from another file
app.use(Logger)


// creating custom Middleware
app.use(function(req, res, next){
    console.log("Authenticating...")
    next();
})

// --------- Rest code --------------------------------
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening at Port: ${3000}`)
}) 