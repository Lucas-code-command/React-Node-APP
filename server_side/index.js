const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const port = 5050

app.use(cors())
app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}))

const userSchema = new mongoose.Schema({
    name: String,
    email: String
})

const users = mongoose.model('users',userSchema)

mongoose.connect('mongodb://localhost:27017/db',{useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>{console.log('mongoDB Connected')
})

app.post('/users',(req,res)=>{
    const user = new users ({
        name: req.body.name,
        email: req.body.email
    })
    user.save()
        .then(()=>{
            console.log(` New user Saved`)
            res.send("Complete")
    })
        .catch((err) => {
         console.error(err);
            res.status(500).send('Error saving user to database');
      })
})



app.get('/', (req,res)=> {
    res.send('hey, i am working')
})



app.get('/users', (req,res)=>{
    res.send(users) 
})


app.listen(port,()=>{
    console.log(`port is listening on ${port}`)
})