import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

// ideia é criar um lugar de busca onde as pessoas possam ver o país onde querem morar
// 2 passo é criar botão e conectar com a wikipédia
// 3 passo em uma nova página a pessoa abre uma lista de prós e contras
// 4 passo trazer as informações do pais da wikipédia e fazer do lado a lista de prós e contras

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
        && (lessEqual === 'More than' ? (item.area > anotherFilter): (lessEqual === 'Less than') ? (item.area < anotherFilter): (lessEqual === 'Select a symbol') ? (item.area): (item.area).toString().startsWith(anotherFilter) ) //Equal than
        && Array.isArray(item.capital)
        && (item.capital.some(city => city.toLowerCase().includes(another.toLowerCase())))
    ) 
    :[];

    //wiki
    function sendToWiki(countryName) {
        const formattedCountryName = countryName.replace(/ /g, '_'); // replace spaces with underscores
        window.location.href = `https://en.wikipedia.org/wiki/${formattedCountryName}`;
    }
    
    
   
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
                            <div class='row row-2' >
                                <div class='col' style={{ width: '100%'}}>
                                    <select class='form-select'  onChange={(e)=> setLessEqual(e.target.value)}>
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
                           
                            <div class='col form-floating'>
                                <input 
                                class='form-control'
                                style={{ width: '100%' }} type="capitals" id="capitals_filter"value={another} onChange={handleAnother} placeholder='Capitals' />
                                <label for ='capitals_filter'> Capitals </label>
                            </div>
                        </form>
                    </div>
            

                {loading && <h1>A moment, please....</h1>}
                {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}  
                <div className='row'>
                {data && filteredData.map((item, index) => (
                    
                        <div key={index} className='card col-md-3 m-3 p-0'>
                            <div className="card-header">{item.name.common}</div>
                            <div classname="card-body">
                                <img src={item.flags.png} style={{width: '100%', display: 'block', margin: '0 auto'}}/>
                                <ul>
                                    <li className="list-group-item"><strong>Capital:</strong> {item.capital && item.capital.join(', ')}</li>
                                    <li className='list-group-item'><strong>Area:</strong> {item.area}</li>
                                    <li className='list-group-item'><strong>Continent:</strong> {item.continents && item.continents.map((continent)=>(<>{continent}</>))}</li>
                                    <li className="list-group-item"><strong>Borders:</strong>
                                        {item.borders && item.borders.map((border, index) => (
                                            <span key={`${border}-${index}`}> {border}{index === item.borders.length - 1 ? '.' : ','} </span>
                                        ))}
                                    </li>

                                    <li className='list-group-item'>
                                        <strong>Language: </strong>
                                        {item.languages && Object.entries(item.languages).map(([key, value], index) => (
                                            <span key={key}>
                                                {value}{index === item.languages.length - 1 ? '.' : ', '}
                                            </span>
                                            ))}

                                    </li>

                                  </ul>
                                  <div>
                                  <button 
                                  className='btn btn-outline-primary '
                                  onClick={() => sendToWiki(item.name.common)}
                                  >Know More?</button>
                                  </div>
                            </div>
                        </div> 
                    ))}
            </div>
        </div>
        </div>
    )
   

}