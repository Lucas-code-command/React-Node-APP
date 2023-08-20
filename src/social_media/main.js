import { all } from 'axios'
import {useState} from 'react'
import { Col, Row,Image,Button,Alert } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';


export default function Main(){
    const location = useLocation();
    const user = location.state?.user;


    const Sentimentos = ["Muito Bem", "Bem" , "Neutro","Mal","Muito Mal"]
    const [selectedSentimentos, setSelectedSentimentos] = useState()

    const handleSentimentoChange = (e) =>{
        setSelectedSentimentos(e.target.value)
    }

    const [relacionado, setRelacionado] = useState()
    const handleRelacionado = (e) => {
        setRelacionado(e.target.value)
    }

    const localidades = ["Planta", 'Home Office', 'Escritórios']
    const [local, setLocal] = useState()
    const handleLocal = (e) =>{
        setLocal(e.target.value)
    }

    const [selecionado,setSelecionado]=useState(false)
    const handleSubmit = (e) =>{
        const allItems = [selectedSentimentos, relacionado, local];
        if (selectedSentimentos!== undefined &&
            local !== undefined &&
            relacionado === 'Selecione uma opção abaixo') {setSelecionado(true)}


        if (allItems.some(item => item === undefined) || relacionado=='Selecione uma opção abaixo') {
            e.preventDefault();
            setSelecionado(true)
          } else {
            console.log(allItems, relacionado);
          }
    }

    const imageSrc = 'https://picsum.photos/200/300'


    return(
        <div className="container">
            <Row>
                <Col sm={6}>
                    <Image src={imageSrc} alt="Image" />
                </Col>
                <Col sm={6}>
                    <h1>Braskemotion</h1>
                    <p>Seja bem vindo *nome da pessoa*</p>
                </Col>
            </Row>


            <div class='container'>
                <h3>Como você está se sentindo hoje?</h3>
                <ul>
                    {Sentimentos.map((Sentimento, index)=>(
                        <div key={index} class="d-flex align-items-center">
                            <input
                                type="checkbox"
                                name='sentimentos'
                                value={Sentimento}
                                checked={selectedSentimentos === Sentimento}
                                onChange={handleSentimentoChange}
                            />
                            <div style={{marginLeft:'10px'}}>{Sentimento}</div>
                        </div>
                    ))}
                </ul>
            </div>

            <div class='container'>
                <h3>O quanto isso tem relação com *sua empresa*</h3>
                <div style={{marginLeft:'10px', marginBottom:'10px'}}>
                    <select className='form-select' onChange={handleRelacionado}>
                        <option value="Selecione uma opção abaixo">Selecione uma opção abaixo</option>
                        <option value='Nada relacionado'>Nada relacionado</option>
                        <option value='Pouco relacionado'>Pouco relacionado</option>
                        <option value='Neutro'>Neutro</option>
                        <option value='Relacionado'>Relacionado</option>
                        <option value='Muito relacionado'>Muito relacionado</option>

                    </select>

                </div>
                

            </div>

            <div class='container'>
                <h3>Qual seu local de trabalho hoje?</h3>
                <ul>
                    {localidades.map((localidade, index)=>(
                        <div key={index} class="d-flex align-items-center">
                            <input 
                            type='radio'
                            name='localidade'
                            value={localidade}
                            checked={local === localidade}
                            onChange={handleLocal}
                            />
                            <div style={{marginLeft:'10px'}}>{localidade}</div>
                        </div>
                    ))}

                </ul>


            </div>

            {selecionado && <Alert variant="warning">⚠️ Preencha todos os campos </Alert>}


            <div class='container' style={{marginLeft:'20px'}}>
                <Button onClick={handleSubmit}>Click here</Button>
            </div>

            
            
            
            
            
            
            
        </div>
        )
}


