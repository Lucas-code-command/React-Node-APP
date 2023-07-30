import {useState} from 'react'
import Overlay_ from './Overlay'

export default function Main(){

    const [showOverlay, setShowOverlay]=useState(false)
    const handOverlayOpen = () =>{
        setShowOverlay(true)

    }

    const handOverlayClose = () =>{
        setShowOverlay(false)
    }



    return(
        <div className="container">
            <div class='row row-cols-2'> 
                <div class='col'>
                    <div class='col'>
                    <img></img>
                    <p>imagem do usuário</p>
                    <h2>Nome do usuário</h2>
                    <p>@do usuário</p>
                    </div>
                    <div class='col' style={{backgroundColor:"green"}}>
                        <h1>Como estou me sentindo?</h1>
                        <p>foto de perfil</p>
                        <h2>Nome</h2>
                        <h3>user</h3>
                        <p>Frase</p>
                    </div>
                    
                </div>
                
                <div class='row row-cols-1 row-cols-md-2'>
                        <div clss='col'>Hey</div>
                        <button onClick={handOverlayOpen}>Open</button>
                        {showOverlay  && <Overlay_ onClose={handOverlayClose}/>}
                        <div clss='col'>There</div>
                        
                </div>
            </div>
            
            
        </div>
        )
}


