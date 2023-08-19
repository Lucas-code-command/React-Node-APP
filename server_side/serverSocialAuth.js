const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const port = 2100
const cors = require('cors')
const mongoose = require('mongoose')
//social_db

app.use(cors())
app.use(express.json())
app.use(cors({original: 'http://localhost:3000'}))


const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    company: String
})

const users = mongoose.model('users', userSchema)

mongoose.connect('mongodb://localhost:27017/social_db',{useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>{console.log('mongoDB Connected')
})

app.get('/users', (req,res)=>{
    res.json(users)
})


//SignUP
// Create a validation if the user exists
app.post('/users', async (req, res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new users({
            name: req.body.name, 
            password: hashedPassword,
            company: req.body.name
        })
        users.push(user)
        res.status(201).send('New user created')
    }catch{
        res.status(500).send()
    }
})

app.post('/users/login', async(req, res)=>{
    const user = users.find(user => user.name === req.body.name)
    if(user == null){
        return res.status(400).send('Cannot find user')
    }
    try{
        if (await bcrypt.compare(req.body.password , user.password)){
            res.send('Success')
        }else{
            res.send('Not Allowed')
        }
    }catch{res.status(500).send('Error')}
})


app.listen(port,()=>{
    console.log(`Port is running on ${port}`)
})
