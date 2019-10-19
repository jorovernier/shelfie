import React, { Component } from 'react';
import './Product.css';

export default class Product extends Component {

    render(){
        console.log(this.props)
        return (
            <div className='product'>
                <img src={this.props.image} alt='placeholder'/>
                <div className='words'>
                    <div>{this.props.name}</div>
                    <div>${this.props.price}</div>
                </div>
                <button onClick={() => {this.props.deleteProd(this.props.id); this.props.getInv()}} >Delete</button>
                <button>Edit</button>
            </div>
        )
    }
};