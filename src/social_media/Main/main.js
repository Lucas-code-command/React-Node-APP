import {useState} from 'react'
import { Col, Row,Image,Button,Alert } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Characters from './img/Characters.png';
import './main.css'


export default function Main(){
    const location = useLocation();
    const user = location.state?.user;
    const [email, setEmail] = useState(user); 
    const Username = location.state?.userName;
    const [name, setName] = useState(Username);
    const Companyname = location.state?.companyName;
    const [company, setCompany] = useState(Companyname)


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



          if (
            allItems.some((item) => item === undefined) ||
            relacionado === 'Selecione uma opção abaixo'
          ) {
            e.preventDefault();
            setSelecionado(true);
          } else {
            axios
              .post('http://localhost:2100/store-responses', {
                email,
                selectedSentimentos,
                relacionado,
                local,
              })
              .then((response) => {
                console.log('Responses stored in the database:', response.data);

              })
              .catch((error) => {
                console.error('Error storing responses:', error);
              });
            console.log(allItems, relacionado);
          }

          
    }




    return(
        <div className="container">
            <Row>
                <Col sm={6}>
                    <Image src={Characters} alt="Image" />
                </Col>
                <Col sm={6}>
                    <h1>Company In Motion</h1>
                    <p>Seja bem vindo {name}!</p>
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
                <h3>O quanto isso tem relação com {company}?</h3>
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


