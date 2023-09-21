import { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp_Social() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');
    const [name, setName] =useState('');
    const navigate = useNavigate();
    const [userRegistered, setUserRegistered] = useState(false)

    const handleSubmit = (e) => {
        axios.post('http://localhost:2100/users', { email, password, company, name }) 
            .then((response)=>{
                console.log("Server Response:", response.data);
                if(response.data === 'New user created'){
                    navigate('/social_media/user',{state:{user:email}})
                }
            })
            .catch(error => { console.log(error) })
        e.preventDefault();
    }

    return (
        <div>
            <Row display="flex" justify-content="center">
                <Col>
                    <h1 style={{ textAlign: 'center' }}>Bem vindo ao Braskemotion</h1>
                    <h3>Sign Up</h3>
                </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control 
                                type="name"
                                placeholder="Insira seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Email</Form.Label> 
                            <Form.Control
                                type="email" 
                                placeholder="Insira seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder="Insira sua senha"
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group style={{ marginBottom: "10px" }}>
                            <Form.Label>Company</Form.Label>
                            <Form.Control placeholder="Digite sua Companhia"
                                value={company} onChange={(e) => setCompany(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="Submit">Sign Up</Button>
            </Form>

            <Row>
                <Col>Já tem uma conta?</Col>
                <Link to='/social_media/Login'>
                    <Button>LogIn</Button>
                </Link>
            </Row>

        </div>
    )
}
