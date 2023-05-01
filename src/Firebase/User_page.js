import { auth } from "./Auth_firebase/firebase";
import { signOut } from "firebase/auth";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


export default function User_page(){
    const navigate = useNavigate()

    async function logOut(e){
        try{
            await signOut(auth)
            navigate('/auth')
        } catch(err){
            console.error(err)
        }
    }
    const [classification, setClassification]= useState('')
    const [deleteResult , setDeleteResult]=useState(null)

  //get data from mongodb
    const link = 'http://localhost:5050/emails'
    const [data, setData]=useState()
    async function getData(){
        try{
            const res = await axios.get(link)
            setData(res.data)
        } catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    
    const [emailExist , setEmailExist]=useState(false)
    function send_Classification(e){
        const email = auth?.currentUser?.email
        const emailExists = data.some(item => item.email === email);

        if(emailExists){
            e.preventDefault()
            setEmailExist(true)
        } else {
        axios.post('http://localhost:5050/emails', {email, classification})
            .then(response => {
                console.log(response.data)
                setEmailExist(false)
            })
            .catch(error=>{
                console.log(error)
                setEmailExist(false)
            
            })
        }
    }

    function update_classification(e){
        e.preventDefault()
        const email = auth?.currentUser?.email

        axios.put(`http://localhost:5050/emails/${email}`, {classification})
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function delete_all(){
        axios.delete('http://localhost:5050/emails')
            .then(response => {
                setDeleteResult(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div className="container"> 
            <h1>Hello,</h1>
            <h2>{auth?.currentUser?.email}</h2>

            <Form onSubmit={send_Classification}> 
                <Form.Group className="pb-2">
                    <h2>Add a new post request</h2>
                    <select className='form-select' 
                    onChange={(e)=> setClassification(e.target.value)}>
                        <option>Want to go</option>
                        <option>Been to</option>
                        <option>Don't want to go</option>
                    </select>
                </Form.Group>
                {emailExist && 
                    <div className="alert alert-danger"> 
                        Email already in use, use the put request above
                        </div>}
                <Button type="submit">send to MongoDB</Button>
            </Form>
            <Form 
            className="pb-2"
            onSubmit={update_classification}>
                <Form.Group className="pb-2">
                        <h2>Edit with PUT Request</h2>
                        <select class='form-select' 
                            onChange={(e)=> setClassification(e.target.value)}>
                        <option>Want to go</option>
                        <option>Been to</option>
                        <option>Don't want to go</option>
                    </select>
                    </Form.Group>
                <Button type="submit" className="btn btn-warning">
                    Update email
                </Button>
            </Form>
           <div className="pb-2">
           <Button 
            onClick={delete_all} 
            className="btn btn-danger"
            type="submit">
                Delete all
            </Button>
           </div>
            <div>
            <Button onClick={logOut}
                className="btn btn-danger" type='submit'>
                    Log Off
            </Button>

            </div>
            

            
        </div>
    )
}