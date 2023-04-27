import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Forms(){

    // name validation and store data
    const name_forms = document.querySelector("#name_forms")
    const name_val = document.querySelector('#name_validation')
    const [name, setName] = useState('')

    const handleNameChange= (e)=>{
        const input = e.target.value
        if(name_val !== null && name_val.value !== '') {name_forms.classList.add('was-validated')}
        setName(input)
        setNameValid(e.target.checkValidity());
      }
    
    // Number (i dunno shit here hahaha)
    const [number, setNumber] = useState("")
    const handleNumberChange = (e) => {
        if (e.target.value === "one" ||e.target.value === "Two" ) { // Set name state only if the input value is 50 characters or less
          setNumber(e.target.value);
        } else{
            setNumber("Error")
        }
      };


    // email validation and store data
    const [email, setEmail] = useState('')
    const form = document.querySelector("#email_forms")
    const email_val = document.querySelector("#email_validation")

    const handleInputChange = (e) => {
        const input = e.target.value
        if(email_val !== null && email_val.value !== '') {form.classList.add('was-validated')} 
        setEmail(input)
        setValid(e.target.checkValidity());
      }  


    // send data or prevent deafult
    const [valid, setValid] = useState(false)
    const [nameValid, setNameValid] =useState(false)
    const history = useNavigate()
    const handleSubmit = (e) => {
        if (valid === false || nameValid === false){e.preventDefault();}
        else if(valid === true && nameValid === true) {
        axios.post('http://localhost:5050/users', {name, email})
            .then(response => {console.log(response.data)})
            .catch(error=>{console.log(error)})
        history.push('/')
        }  
      }
    

      


    return(
        <div>
            
        <div class="container">
            <div class="row pb-3">
                <div class="col">
                    <div class="card" style={{"width":"400px"}}>
                        <div class="card-header"> This is a Header</div>
                        <img class="card-img" src="//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg"></img>
                        <div class="card-body">
                            <div class="card-title" >Title</div>
                            <div class="card-subtitle" >subTitle</div>
                            <div clas="card-text">Text text text</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{"width":"400px"}}>
                        <img class="card-img" src="//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg"></img>
                        <div class="card-body card-img-overlay" style={{"color":"White"}}>
                            <div class="card-title" >Title</div>
                            <div class="card-subtitle" >subTitle</div>
                            <div clas="card-text">Text text text</div>
                        </div>
                    </div>
                </div>
            </div>
           
            


            <div class="row"> 
            <form noValidate onSubmit={handleSubmit}> 

                <div class='form-floating pb-2' id='name_forms'>
                    <input type="name" class="form-control" placeholder='Name' id="name_validation"required 
                    onChange={handleNameChange}/>
                    <label for="name"> Name </label>
                </div>

                <div class="form-floating" id= "email_forms">
                    <input type="email" id="email_validation" class="form-control" placeholder='Email'
                    required  onChange = {handleInputChange}/>
                    <p>{email}</p>
                    <label for="email">Email</label>
                    <div class="invalid-feedback">Not valid Tho</div>
                    <div class="valid-feedback">Okay, go ahead</div>
                </div>



                <div class="form-floating">
                    <input  disabled class="form-control" placeholder='Disabled'></input>
                    <label for="disabled">Email Disabled</label>
                </div>

                <label for="colorpicker" class="form-label"> Color Picker</label>
                <input type="color" class="form-control form-control-color"></input>

                <label for="range" class="form-label"> Range</label>
                <input type="range" class="form-range"></input>

                <select class="form-select" onChange={handleNumberChange}>
                    <option>Select a value....</option>
                    <option>one</option>
                    <option>Two</option>
                </select>

                <div class="form-check form-switch form-check-inline">
                    <input type="checkbox" id="label" class="form-check-input"/>
                    <label for="label" class="form-check-label">Email</label>
                </div>
                <div class="form-check form-switch form-check-inline">
                    <input type="checkbox" id="label" class="form-check-input"/>
                    <label for="label" class="form-check-label">Email</label>
                </div>
                
                <label for="amount" class="form-label">Amount</label>
                <div class="input-group">
                    <div class="input-group-text">$</div>
                    <input type="number" id="amount" class="form-control"></input>
                    <button class="btn btn-primary">+</button>
                </div>
                <div class="row p-2">
                    <button class="btn btn-outline-primary" data-bs-toglgle="button" id="button">Submit</button>
                </div>
                
                
            </form>
            <div>
                <button class="btn btn-outline-primary active" data-bs-toggle="button" aria-pressed="true">Submit</button> 
                 <button class="btn btn-outline-primary" data-bs-toggle="button">Submit</button>

            </div>

           </div>
        </div>
    </div>
        
    )
}

export default Forms;