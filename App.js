import React from 'react'; 
import Header from './header'      
import MyForm from './form';   
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';                                                                                                                                                                                                                                                                                                                                                                          
import Sports from './sports';
import cruiser from './cruiser';
import naked from './naked';
import home from './home';

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/"  exact component={home} />
        <Route path="/sports" exact component={Sports}/>
        <Route path="/adventure" exact component={naked}/>
        <Route path="/cruiser" exact component={cruiser}/>
        <Route path="/form" exact component={MyForm}/>
      </Switch>
      </BrowserRouter>
     
      
      <br/>
      
    </div>
  )
}

export default App
