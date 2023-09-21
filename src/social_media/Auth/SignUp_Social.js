import { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp_Social() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [company_val, setCompany_val] = useState('');
    const[pron, setPron] =useState('');
    const [warning, setWarning] =useState(false);
    


    const [name, setName] =useState('');
    const navigate = useNavigate();
    const [userRegistered, setUserRegistered] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pron === "") {
            setWarning(true);
            
        } else{
            const company = pron + company_val;
        
        axios.post('http://localhost:2100/users', { email, password, company, name }) 
            .then((response)=>{
                console.log("Server Response:", response.data);
                if(response.data.status === 'New user created'){
                    const userName = response.data.userName;
                    const companyName = response.data.companyName;
                    navigate('/social_media/user',{state:{
                        user:email,
                        userName,
                        companyName
                    }})
                }
            })
            .catch(error => { console.log(error) })
        }

        }

        
    

    return (
        <div>
            <Row display="flex" justify-content="center">
                <Col>
                    <h1 style={{ textAlign: 'center' }}>Bem vindo ao Company In Motion</h1>
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
                            <Row>
                                <Col md={4}>
                                    <Form.Control as='select' value={pron} 
                                            style={{marginBottom: '5px'}}
                                            onChange={(e)=> setPron(e.target.value)}>
                                    <option value=''>Selecione o pronome</option>
                                    <option value="a ">a </option>
                                    <option value="o ">o </option>
                                    </Form.Control>
                                </Col>
                                <Col md={8}>
                                    <Form.Control placeholder="Digite sua Companhia"
                                        value={company_val} 
                                        onChange={(e) => setCompany_val(e.target.value)}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>

                {warning && (<div>Selecione um pronome para sua companhia!</div>)}
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
