import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { auth } from './Auth_firebase/firebase'
import { useNavigate } from "react-router-dom";




export default function LogIn(){
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    async function logIn(e){
        e.preventDefault()

        try{
            await signInWithEmailAndPassword(auth, email,password)
            navigate(`/auth/${email}`)
        }catch(err){
            console.log(err)
        }
        console.log(auth?.currentUser?.email)

    }
    return(
        <Card>
            <Card.Body>
                <h2>Log In</h2>
                <Form onSubmit={logIn}>
                    <Form.Group className='pb-2'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email" value={email}
                        required onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group className='pb-2'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" value={password}
                        required onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </Form.Group>
                    <Button type="submit">Log In</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}