import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';

export default class Dashboard extends Component {

    render(){
        let mappedInv = this.props.inventory.map(product => {
            return (
                <div key={product.product_name}>
                    <Product id={product.product_id} name={product.product_name} price={product.product_price} image={product.image_url} deleteProd={this.props.deleteProd} getInv={this.props.getInv} />
                </div>
            )
        })
        return (
            <div className='inventory'>{mappedInv}</div>
        )
    }
};