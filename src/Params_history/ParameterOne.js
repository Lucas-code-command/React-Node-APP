import {  useParams } from "react-router-dom"

export default function ParameterOne (){
    const {paramId}= useParams()
    

    return(
        <div className="container">
            <h1><strong>Hi</strong><br /> you are user:</h1>
            <h2>{paramId}</h2>
        </div>
    )
}
