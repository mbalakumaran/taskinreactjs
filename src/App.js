import React,{ Component } from 'react';
import Items from './Items';

class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
        })
      });
  }


  render() {
    var {  items } = this.state; 
      return (
        <div className="App">
         {items.map((item, key) => {
           return(
             <Items key={`item-details-${key}`} item={item}/>
           )
         })} 
				
        </div>
      );
    }
    
}


export default App;