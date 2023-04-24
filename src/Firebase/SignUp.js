import {React,useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
//parei em 9:31 desse video https://www.youtube.com/watch?v=Vv_Oi7zPPTw


export default function SignUp(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setpasswordConfirm] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        

        if(password !== passwordConfirm){
            return setError("Passwords do not match")
        }

        console.log(email, password)

    }

    return(
        <>
            <Card>
                <Card.Body>
                    <h2>Sign In</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='pb-2' id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required value={email}
                            onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group  className='pb-2' id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' required value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}></Form.Control>
                        </Form.Group>
                        <Form.Group className='pb-3'id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' required value={passwordConfirm}
                            onChange={(e)=>{setpasswordConfirm(e.target.value)}}/>
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