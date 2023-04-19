import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

export default function GetApiEach(){
    
    const [data, setData] = useState(null)
    const [error, setError] =useState(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const country = params.country
    const link = `https://restcountries.com/v3.1/name/${country}`

    useEffect(()=>{
        const getData = async() => {
            try{
                const res = await axios.get(link)
                setData(res.data); setError(null)
            } catch(error){
                setError(error.message);setData(null)
            } finally {
                setLoading(false)
            }
        }
        getData()

    },[])
    console.log(data)

    return(
        <div>
            {loading && <h1>A moment, please....</h1>}
            {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}  
            {data && data.map((item, index)=>(
                <div>
                    <h1>{country}</h1>
                    <img src={item.flags.png} />
                    <ul>
                        <li className="list-group-item"> {item.unMember ? "UN Member" : ""}</li>
                        <li className="list-group-item"> 
                        {item.timezones && item.timezones.map((timezone, index)=>(
                            <span>{timezone}{index === item.timezones.length -1? '. ':', '}</span>
                        ))}
                        </li>
                        <li className="list-group-item">
                            {item.currencies && Object.entries(item.currencies).map(([key, value])=>(
                                <div key={key}>
                                    <span>{value.name}</span>
                                </div>
                            ))}
                        </li>
                        <li className="list-group-item"> {item.independent ? "Independent" : ""}</li>
                        <li className="list-group-item">
                            <button 
                            className="btn btn-outline-primary">
                             <a href={item.maps.googleMaps} >Google Maps</a>
                            </button>
                        </li>
                    </ul>
                
                </div>
            ))}

        </div>
       
    )
}