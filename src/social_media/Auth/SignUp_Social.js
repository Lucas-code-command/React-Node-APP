import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";


export default function SignUp_Social(){
    const [name, setName] = useState('')
    const [password,setPassword]=useState('')
    const [company, setCompany] =useState('')


    const handleSubmit = (e) =>{
        axios.post('http://localhost:2100/users', {name, password, company})
            .then(res=>{console.log(res.data)})
            .catch(error=>{console.log(error)})
        e.preventDefault()
        

    }
    
    return(
        <div>
            <Row display="flex" justify-content="center">
                <Col flexGrow="1">
                    <h1 style={{ textAlign: 'center' }}>Bem vindo ao Braskemotion</h1>
                </Col>
            </Row>
            
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Insira seu email" 
                            value={name} onChange={(e)=> setName(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder="Insira sua senha"
                            value={password} onChange={(e)=> setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group style={{ marginBottom: "10px"  }}>
                            <Form.Label>Company</Form.Label>
                            <Form.Control placeholder="Digite sua Companhia"
                            value={company} onChange={(e)=> setCompany(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button type="Submit">Enviar</Button>


            </Form>
        </div>
    )
}