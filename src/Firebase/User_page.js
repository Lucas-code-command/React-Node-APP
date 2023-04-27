import { auth } from "./Auth_firebase/firebase";
import { signOut } from "firebase/auth";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";


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


    function send_email_toBackend(e){
        e.preventDefault()
        const email = auth?.currentUser?.email

        axios.post('http://localhost:5050/emails', {email})
            .then(response => {console.log(response.data)})
            .catch(error=>{console.log(error)})

    }

    return(
        <div> 
            <h1>Hello,</h1>
            <h2>{auth?.currentUser?.email}</h2>

            <Button onClick={logOut}
                className="btn btn-primary w-100" type='submit'>
                    Log Off
            </Button>

            <Form onSubmit={send_email_toBackend}> 
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Label>{auth?.currentUser?.email}</Form.Label>
                </Form.Group>
                <Button type="submit">send to MongoDB</Button>
            </Form>
        </div>
    )
}