import {useState} from 'react'

export default function Main(){
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


    const handleSubmit = (e) =>{
        console.log(selectedSentimentos, relacionado, local)
    }


    return(
        <div className="container">
            <div class='row'>
                <div class='col'>
                    <img src='./img/BraskEmotion-removebg-preview.png' alt='braskEmotion' width="200" height="200"/>
                </div>
                <div class='col'>
                    <h1>Olá, eu sou o Braskemotion</h1>
                </div>
            </div>


            <div class='container'>
                <h3>Como você está se sentindo hoje?</h3>
                <ul>
                    {Sentimentos.map((Sentimento, index)=>(
                        <li key={index}>
                            <input
                                type="checkbox"
                                name='sentimentos'
                                value={Sentimento}
                                checked={selectedSentimentos === Sentimento}
                                onChange={handleSentimentoChange}
                            />
                            {Sentimento}
                        </li>
                    ))}
                </ul>
            </div>

            <div class='container'>
                <h3>O quanto isso tem relação com *sua empresa*</h3>
                <select className='form-select' onChange={handleRelacionado}>
                    <option value="no">Selecione uma opção abaixo</option>
                    <option value='Nada relacionado'>Nada relacionado</option>
                    <option value='Pouco relacionado'>Pouco relacionado</option>
                    <option value='Neutro'>Neutro</option>
                    <option value='Relacionado'>Relacionado</option>
                    <option value='Muito relacionado'>Muito relacionado</option>

                </select>

            </div>

            <div class='container'>
                <ul>
                    {localidades.map((localidade, index)=>(
                        <li key={index}>
                            <input 
                            type='radio'
                            name='localidade'
                            value={localidade}
                            checked={local === localidade}
                            onChange={handleLocal}
                            />
                            {localidade}
                        </li>
                    ))}

                </ul>


            </div>


            <div class='container'>
                <button onClick={handleSubmit}>Click here</button>
            </div>
            
            
            
            
            
            
        </div>
        )
}


