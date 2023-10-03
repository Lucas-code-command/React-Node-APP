import { Button, Col, Row, Image } from "react-bootstrap";
import Characters from './Main/img/Characters.png'

export default function Response_created(){
    return(
        <div className="container" style={{textAlign: 'center'}}>
            <Row>
                <Col>
                    <Image src={''} />
                    <h1 style={{marginBottom:'15px'}}>Você acaba de dar um passo a mais para melhorar o entendimento das suas emoções no trabalho! <br /></h1>
                    <h2>Vamos analisar como foi a semana? Já parou para pensar sobre suas emoções no mês?</h2>
                    <Button>Vamos Juntos?</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={Characters} />
                </Col>
            </Row>
            

        </div>
    )
}