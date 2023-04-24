import {React, useRef, useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { useAuth } from './AuthContext'


export default function SignUp(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signUp, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

         try{
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
        }catch(error){
            setError(error.message)
        } finally{
            setLoading(false)
        }

        
    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2>Sign In</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {JSON.stringify(currentUser)}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='pb-2' id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required ref={emailRef}/>
                        </Form.Group>
                        <Form.Group  className='pb-2' id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' required ref={passwordRef}/>
                        </Form.Group>
                        <Form.Group className='pb-3'id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' required ref={passwordConfirmRef}/>
                        </Form.Group>
                        <Button disabled ={loading} className="btn btn-primary w-100" type='submit'>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='d-flex justify-content-center'>
                <div><span> Already have an account? </span></div>
                <div><a>Sign In</a></div>
            </div>
        </>
    )
}