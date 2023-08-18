const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const port = 2100

//https://www.youtube.com/watch?v=Ud5xKCYQTjM

app.use(express.json())

const users =[]

app.get('/users', (req,res)=>{
    res.json(users)
})

app.post('/users', async (req, res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    }catch{
        res.status(500).send()
    }
})


app.listen(port,()=>{
    console.log(`Port is running on ${port}`)
})
