import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';

export default function Retrive(){

   
    const link = 'http://localhost:5050/users'
    const [data, setData] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    useEffect(()=>{
        const getData = async()=>{
            try{
                const res = await axios.get(link)
                setData(res.data); setError(null)
            } catch(err){
                setError(err.message); setData(null)
            } finally{
                setLoading(false)
            }
        }
        getData()
    },[])



    return(
        <div class='container'>
            <div class='row'>
                <div class='col'>
                    <Link to='/'>Go Back</Link>
                </div>
            </div>
            {loading && <div>Wait.....</div>}
            {error && <div>{`There is a problem fetching the post data - ${error}`}</div>} 
            {data && (
                <div class='p-2 table-responsive'>
                    <table class='table table-dark table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th> </th>
                            </tr>
                        </thead>

                        <tbody class='table-secondary'>
                           {data.map((item , index) =>(
                            <tr key={index}>
                                <td> {item.name}</td>
                                <td>{item.email}</td>
                                <td><button>Editar</button></td>
                            </tr>
                           ))}
                        </tbody>
                    </table>
                </div>
                
           )}
        </div>
    )
}