const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document file'))
//         }

//         cb(undefined, true)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }


// app.post('/upload', upload.single('upload') , (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })


// middleware
// app.use((req, res, next) => {
//     // console.log(req.method, req.path)
//     // next()
//     if (req.method == "GET") {
//         res.send('GET requests are disabled')
//     }
//     else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('The site is in maintenance mode')
// })




// automatically parse incoming json
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("server is up on port " + port)
})

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     // const password = 'Red12345!'
//     // const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare(password, hashedPassword)
//     // console.log(isMatch)

//     const token = jwt.sign({ _id: "abc1234" }, 'thisismynewcourse', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5fb20cdcc755a48dcfb798cd')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5fb20993661e678bf5dc39bd')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()