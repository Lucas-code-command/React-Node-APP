import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Forms from './App2/Teste';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import GetApi from './App2/GetApi';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>

        <Route exact path='/'>
          <App />
        </Route>

        <Route path='/forms'>
          <Forms />
        </Route>

        <Route path='/country'>
           <GetApi />
        </Route>


      </Switch>
  </Router>
   

    
);


