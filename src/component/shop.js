import React, { Component } from 'react'
import axios from 'axios';

class Shop extends Component {
    state= {
        product:[]
    }
    componentWillMount() {
        axios.get(`http://localhost/react-ecommerce/reactPress/wp-json/wp/v2/product`)
        .then (response =>{
            console.log(response.data)
            this.setState({product:response.data})
        })
    }
    
    render () {
        
        return (
            <div>
                <ul>
               {
                this.state.product.map(function(product,i) {
                    return (
                      
                      <div>
                          <li key={product.id}>
                         {product.id} <br/>
                         {product.title.rendered} <br/>
                         
                        </li>
                    </div>
                    )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Shop