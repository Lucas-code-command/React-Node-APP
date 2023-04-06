import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetApi(){
    const link = 'https://restcountries.com/v3.1/all'

    
    const [data, setData] = useState(null)
    const [error, setError] =useState(null)
    const [loading, setLoading] = useState(true)
    const [filterQuery, setFilterQuery] = useState('')
    const [anotherFilter , setAnotherFilter] =useState('')
    const [another, setAnother] = useState('')
    const [lessEqual, setLessEqual] = useState('Select a symbol')

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

    const handleFilterChange = (e) => {
        setFilterQuery(e.target.value)
        
    }
    const handleAnotherFilter = (e)=>{
        setAnotherFilter(e.target.value)
    }

    const handleAnother = (e) => {
        setAnother(e.target.value)
    }




   

    const filteredData = data ? 
    data.filter((item) => 
        item.name.common.toLowerCase().includes(filterQuery.toLowerCase()) 
        && (lessEqual === 'More than' ? (item.area > anotherFilter)
            : (lessEqual === 'Less than') ? (item.area < anotherFilter)
            : (lessEqual === 'Select a symbol') ? (item.area)
            : (item.area).toString().startsWith(anotherFilter) ) //Equal than

        //&& (item.capital).toLowerCase().includes(another.toString().toLowerCase())
    ) 
    :[];

    

    //console.log(data)
    
    


    return(
        <div>   
        <div class="text-center p-2 mb-3" style={{backgroundColor:"black", color:'white'}}>
            <h1>List Of the countries</h1>    
        </div>        
           
            <div class='container'> 
            {
            //master
            }
            
                <div class='row pb-3 g-2'>
                    <spam>Filtros:</spam>
                    <form>
                            <div class='col pb-2 form-floating'>
                                <input  class="form-control" id="name-input"required  type="text" value={filterQuery} onChange={handleFilterChange} placeholder='Name' />
                                <label for="name-input">  Name</label>
                            </div>
                            <div class="row">
                                <div class='col'>
                                    <select class='form-select' style={{ width: '100%' }} onChange={(e)=> setLessEqual(e.target.value)}>
                                        <option>Select a symbol</option>
                                        <option> More than </option>
                                        <option> Less than </option>
                                        <option> Equal than </option>
                                    </select>
                                </div>
                                
                                <div class='col pb-2 form-floating' >
                                    <input 
                                        disabled={lessEqual === 'Select a symbol'}
                                        value={lessEqual === 'Select a symbol' ? ' ' : anotherFilter} 
                                        id="area-input" style={{ width: '100%' }} required class="form-control" type="text" onChange={handleAnotherFilter}  />
                                    <label for="area-input"> {lessEqual === 'Select a symbol' ? "Fill the place on the right": 'Area' }</label>
                                </div>
                            </div>
                           
                            <div class='col'>
                                <input style={{ width: '100%' }} disabled type="text" value={another} onChange={handleAnother} placeholder='Capital is not working because it is not a string' />
                            </div>
                        </form>
                    </div>
            

                {loading && <h1>A moment, please....</h1>}
                {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}  
                {data && filteredData.map((item, index) => (
                   <div key={index}>
                        <div class="row gx-2">
                            <div class='col border' style={{color:'black'}}>
                                <div>{item.name.common}</div>
                            </div>
                            <div class='col border' >
                                <div>{item.flag}</div>
                            </div>
                            <div class='col border'>
                                <div>{item.capital && item.capital.map((capitals)=>(
                                    <li key={capitals}>{capitals}</li>
                                ))}</div>
                            </div>
                            <div class='col border'>
                                <div>{item.area}</div>
                            </div>
                            <div class='col border'>
                                <ol>
                                    {item.borders && item.borders.map((border) => (
                                        <li key={border}>{border}</li>
                                    ))}
                                </ol>
                            </div>

                            
                        </div>
                   </div>
                   
                    
                    ))}
            </div>
        </div>
    )

}