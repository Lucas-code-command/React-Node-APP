import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";


export default function LogIn_Social(){
    const [name, setName] = useState('')
    const [password, setPassword]=useState('')
    

    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.post('http://localhost:2100/users/login', {name, password})
            .then( response =>{
                if(response.data === 'Success'){
                    Navigate('/social_media', {state: {user: name}})
                } else{
                    console.log('Invalid Login')
                }
            }).catch(error=>{console.log(error)})
    }

    return(
        <div>
            <Row display='flex' justify-content='center'>
                <Col>
                    <h1 style={{textAlign:'Center'}}> Bem vindo ao Braskemotion</h1>
                    <h3>Log In</h3>
                </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Insira seu email'
                            value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Insira sua senha"
                            value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>

                <Button type='Submit'>Sign In</Button>
            </Form>
        </div>
    )
}