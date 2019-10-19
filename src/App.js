import React from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount(){
    this.getInventory();
  }

  getInventory(){
    axios.get('/api/inventory').then(response => {
      
      this.setState({
        inventory: response.data
      })
    }).catch(err => console.log(err))
  };

  deleteProduct(id){
    axios.delete(`/api/product/${id}`).then(response => {
      this.setState({
        inventory: response.data
      })
    }).catch(err => console.log(err))
  }

  render(){
    const {inventory} = this.state;
    return (
      <div className="App">
        <Header />

        <div className='dash-form'>
          <Dashboard inventory={inventory} getInv={this.getInventory} deleteProd={this.deleteProduct} />
          <Form getInv={this.getInventory} />
        </div>

      </div>
    );
  }
}

export default App;
