import 'bootstrap/dist/css/bootstrap.min.css'
import Forms from './App2/send_data';
import GetApi from './App2/GetApi';
import Retrive from './App2/retrive_mongo';
import Parameters from './Params_history/Parameters';
import ParameterOne from './Params_history/ParameterOne';
import Home from './Home/Home';
import {createBrowserRouter,createRoutesFromElements,Link,Outlet,Route, RouterProvider } from 'react-router-dom'
import GetApiEach from './App2/GetApiEach';
import SignUp from './Firebase/SignUp';
import React from 'react';
import User_page from './Firebase/User_page';
import LogIn from './Firebase/LogIn';
import SignUp_Social from './social_media/Auth/SignUp_Social';
import LogIn_Social from './social_media/Auth/LogIn_Social';
import Main_about from './social_media/Main_about';






function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path="/" element={<Root />} >
          <Route index element={<Home />} />
          <Route path="/forms" element={<Forms />} />

          <Route path="/get">
            <Route index element={<GetApi />} />
            <Route path=":country" element={<GetApiEach />} />
          </Route>

          <Route path="/retrive" element={<Retrive />} />

          <Route path="/parameters">
            <Route index element={<Parameters />} />
            <Route path=":paramId" element={<ParameterOne />} />
          </Route>

          <Route path="/auth">
              <Route index element={<SignUp />} />
              <Route path="/auth/logIn" element={<LogIn />}/>
              <Route path=":UserId" element={<User_page />} />
          </Route>

          <Route path='/social_media'>
            <Route index element={<Main_about />}/>
            <Route path='/social_media/SignUp' element={<SignUp_Social />}/>
            <Route path='/social_media/Login' element={<LogIn_Social />} />

            
          </Route>
        </Route>
      </React.Fragment>
    )
  );

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  ) 
}

const Root = () => {
  return(
    <div className='container'>
    <div className='row pb-2'>
      <div className='col'><Link to='/'> Home </Link></div>
      <div className='col'><Link to='/forms'> Forms </Link></div>
      <div className='col'><Link to='/get'> Country </Link></div>
      <div className='col'><Link to='/retrive'> Retrive </Link></div>
      <div className='col'><Link to='/parameters'> Parameters </Link></div>
      <div className='col'><Link to='/auth'>Auth Firebase</Link></div>
      <div className='col'><Link to='/social_media'>Social</Link></div>
    </div>
    <div>
      <Outlet />
    </div>
    </div>
    
  )

}

export default App;
