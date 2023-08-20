const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const port = 2100
const cors = require('cors')
const mongoose = require('mongoose')


app.use(cors())
app.use(express.json())



const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    company: String
})

const users = mongoose.model('users', userSchema)

mongoose.connect('mongodb://localhost:27017/social_db',{useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>{console.log('mongoDB Connected')
})


//SignUP
app.post('/users', async (req, res)=>{
    try{
        const existingUser = await users.findOne({ name: req.body.name });

        if(existingUser){
            res.status(400).send('Usuário já cadastrado')
            return
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new users({
            name: req.body.name, 
            password: hashedPassword,
            company: req.body.name
        })
        await users.create(user)
        res.status(201).send('New user created')
    }catch{
        res.status(500).send()
    }
})

//Login
app.post('/users/login', async(req, res)=>{
    const user = await users.find({ name: req.body.name })
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
