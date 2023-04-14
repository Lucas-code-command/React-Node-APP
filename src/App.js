import 'bootstrap/dist/css/bootstrap.min.css'
import Forms from './App2/Teste';
import GetApi from './App2/GetApi';
import Retrive from './App2/retrive_mongo';
import Parameters from './Params_history/Parameters';
import ParameterOne from './Params_history/ParameterOne';
import Home from './Home/Home';
import {createBrowserRouter,createRoutesFromElements,Link,Outlet,Route, RouterProvider } from 'react-router-dom'




function App() {

  const router  = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} >
        <Route index element={<Home />}/>
        <Route path='/forms' element={<Forms />}/>
        <Route path='/get' element={<GetApi />}/>
        <Route path='/retrive' element={<Retrive />}/>

        <Route path='/parameters'>
          <Route index element={<Parameters />}/>
          <Route path=':paramId' element={<ParameterOne />}/>
        </Route>
       
      </Route>

    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  ) 
}

const Root = () => {
  return(
    <div className='container'>
    <div className='row'>
      <div><Link to='/'> Home </Link></div>
      <div><Link to='/forms'> Forms </Link></div>
      <div><Link to='/get'> getAPI </Link></div>
      <div><Link to='/retrive'> Retrive </Link></div>
      <div><Link to='/parameters'> Parameters </Link></div>
    </div>
    <div>
      <Outlet />
    </div>
    </div>
    
  )

}

export default App;
