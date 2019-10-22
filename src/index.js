import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';
import './index.css';
import App from './App';
import Items from './Items';

class Test  extends React.Component{
  render(){
    return(
      <Router>
        <Route path={"item"} Component={Items} />
      </Router>
    );
  }
}

render(<Test />, document.getElementById('root'));
