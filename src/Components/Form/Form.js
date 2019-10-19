import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
          product_name: '',
          product_price: '',
          image_url: ''
        }
        this.universalInput = this.universalInput.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }
    
    universalInput(prop, val){
        this.setState({
          [prop]: val
        })
    };
    
    clearInput(){
        this.refs.Name.value = ''
        this.refs.Price.value = ''
        this.refs.Image.value = ''
    };

    createProduct(){
        const {product_name, product_price, image_url} = this.state;
        axios.post('/api/product').then(response => {
            response.status(200).send([product_name, product_price, image_url])
        }).catch(err => console.log(err))
    }

    render(){
        return (
            <div className='inputs-buttons'>
                <div className='placeholder'></div>
                <div className='inputs'>
                    <div>Image URL:</div>
                    <input onChange={e => this.universalInput("image_url", e.target.value)} ref='Image' placeholder='Image'/>
                    <div>Product Name:</div>
                    <input onChange={e => this.universalInput("product_name", e.target.value)} ref='Name' placeholder='Name'/>
                    <div>Price:</div>
                    <input onChange={e => this.universalInput("product_price", e.target.value)} ref='Price' placeholder='Price'/>
                </div>

                <div className='buttons'>
                    <button onClick={this.clearInput} >Cancel</button>
                    <button onClick={this.createProduct} >Add to Inventory</button>
                </div>
            </div>
        )
    }
};