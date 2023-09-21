import { Button, Col, Row } from "react-bootstrap";
import CompanyLogo from './img/CompanyLogo.png';
import { Link } from "react-router-dom";
import './Main_about.css'




export default function Main_about(){
    return(
        <div className="container">
            <Row className="row-cols-1 row-cols-md-2">
                <Col><img src={CompanyLogo} alt=''  className="img-fluid" /></Col>
                <Col>
                    <h1>Meça a Felicidade dos seus colaboradores!</h1>
                    <p>Já sabemos que a felicidade no trabalho é algo
                         importante para redução de turnover e aumento de produtividade!
                         <br /><br /> Que tal entregar a eles uma ferramenta para medir e gerar estes insights? </p>
                    <h3> Vamos juntos? </h3>
                    <Row>
                        <Col>
                            <Link to='/social_media/Login'>    
                                <Button className="btn btn-primary"> LogIn </Button>
                            </Link>
                        </Col>

                        <Col>
                            <Link to='/social_media/SignUp'>
                                <Button className="btn btn-primary"> SignUp </Button>
                            </Link>                        
                        </Col>
                    </Row>
                    
                    
                </Col>
            </Row>
            
        </div>
        
    )
}