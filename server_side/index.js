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



app.get('/users', (req,res)=> {
    users.find({})
        .then(users=>{
            res.send(users)
        })
})

// send from firebase to Mongodb

const emailSchema = new mongoose.Schema({
    email: String,
    classification: String
})

const emails = mongoose.model('emails',emailSchema)

app.post('/emails',(req,res)=>{
    const email = new emails ({
        email: req.body.email,
        classification: req.body.classification
    })
    email.save()
        .then(()=>{
            console.log(` New email Saved`)
            res.send("Complete")
    })
        .catch((err) => {
         console.error(err);
            res.status(500).send('Error saving user to database');
      })
})

app.get('/emails', (req,res)=> {
    emails.find({})
        .then(emails=>{
            res.send(emails)
        })
})

app.delete('/emails', (req,res)=>{
    emails.deleteMany({})
        .then(() => {
            console.log('All emails deleted');
            res.send('All emails deleted');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error deleting emails from database');
        });
})

app.put('/emails/:email', (req, res)=>{
    const email = req.params.email;
    const {classification} = req.body;

    emails.findOneAndUpdate({email},{classification})
        .then(() => {
            console.log(`Email with email ${email} updated with classification ${classification}`);
            res.send('Email updated successfully');
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error updating email');
        });
})




app.listen(port,()=>{
    console.log(`port is listening on ${port}`)
})