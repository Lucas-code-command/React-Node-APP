const express = require('express')
const cors = require('cors')
const app = express()
const port = 5050

app.use(cors())
app.use(express.json())

app.use(cors({origin: 'http://localhost:3000'}))

app.get('/', (req,res)=> {
    res.send('hey, i am working')
})

let users = []

app.post('/users',(req,res)=>{
    const user = {
        name: req.body.name,
        email: req.body.email
    }
    users.push(user)
    res.send("Complete")
})

app.get('/users', (req,res)=>{
    res.send(users) 
})


app.listen(port,()=>{
    console.log(`port is listening on ${port}`)
})