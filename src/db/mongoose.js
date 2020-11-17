const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})



// const me = new User({
//     name: '   Mike   ',
//     email: 'mike@TEST.com   ',
//     age: 44,
//     password: 'phone098!'

// })

// const me = new User({
//     name: "Michael", 
//     age: 44
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })



// const task = new Task({
//     description: "    Eat lunch     "
  
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })