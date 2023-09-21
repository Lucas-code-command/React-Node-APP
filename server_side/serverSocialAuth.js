const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const port = 2100;
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
    name: String,
    email: String, 
    password: String,
    company: String
});

const users = mongoose.model('users', userSchema);

mongoose.connect('mongodb://localhost:27017/social_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongoDB Connected');
});

// SignUP
app.post('/users', async (req, res) => {
    try {
        const existingUser = await users.findOne({ email: req.body.email }); 

        if (existingUser) {
            res.status(400).send('UserEmail alreay in use');
            return;
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new users({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            company: req.body.company 
        });
        await users.create(user);
        res.status(201).send('New user created');
    } catch {
        res.status(500).send();
    }
});

// Login
app.post('/users/login', async (req, res) => {
    const user = await users.findOne({ email: req.body.email }); 
    if (!user) {
        return res.status(400).send('Cannot find user');
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) { 
            res.json({status: "Success", 
            userName: user.name,
            companyName: user.company
        
        })
        } else {
            res.send('Not Allowed');
        }
    } catch {
        res.status(500).send('Error');
    }
});


//POST Responses 

const responseSchema = new mongoose.Schema({
    email: String,
    selectedSentimentos: String,
    relacionado:String,
    local:String
})

const responses = mongoose.model('responses', responseSchema)

mongoose.connect('mongodb://localhost:27017/social_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('mongoDB Connected')
})

app.post('/store-responses', async (req, res) => {
    try {
      const { email, selectedSentimentos, relacionado, local } = req.body;

      const response = new responses({
        email: req.body.email,
        selectedSentimentos: req.body.selectedSentimentos,
        relacionado:req.body.relacionado,
        local:req.body.local
    });
    await responses.create(response)
    res.status(201).send('Response created')
    } catch{
        res.status(500).send();
    } 
});



app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});
