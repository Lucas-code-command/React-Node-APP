import 'bootstrap/dist/css/bootstrap.min.css'
import Forms from './App2/Teste';
import GetApi from './App2/GetApi';
import Retrive from './App2/retrive_mongo';
import Parameters from './Params_history/Parameters';
import ParameterOne from './Params_history/ParameterOne';
import Home from './Home';
import {createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'




function App() {

  const router  = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />} />

    )
  )
  return (
    <></>
  ) 
}

export default App;
