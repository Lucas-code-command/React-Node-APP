import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function LogIn_Social() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
      .post("http://localhost:2100/users/login", { email, password }) 
      .then((response) => {
        if (response.data.status === "Success") {
            const userName = response.data.userName;
            const companyName = response.data.companyName;
          navigate("/social_media/user", { state: { 
            user: email, 
            userName,
            companyName
         } }); 
        } else {
          console.log("Invalid Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

    return (
        <div>
            <Row display='flex' justify-content='center'>
                <Col>
                    <h1 style={{ textAlign: 'Center' }}> Bem vindo ao Company In Motion</h1>
                    <h3>Log In</h3>
                </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Email</Form.Label> {/* Change label to 'Email' */}
                            <Form.Control type='email' placeholder='Insira seu email'
                                value={email} onChange={(e) => { setEmail(e.target.value) }} /> {/* Change name to email */}
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{marginBottom:'15px'}}>
                    <Col>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Insira sua senha"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                
                <Button className="btn btn-primary" type='Submit'>LogIn</Button>    


                
            </Form>
        </div>
    )
}
