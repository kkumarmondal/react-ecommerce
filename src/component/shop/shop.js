import React, { Component } from 'react'
import './shop.css';

import Header from '../header'
import LeftPanel from '../left-panel'
import SubBanner from '../subpage-banner'
import ProductList from './product_list'



class Shop extends Component {
    render () {
        return (
            <div>  
                <Header />
                <SubBanner/>
                
                <div className="container margin-top35">
                    <div className="row">
                    <LeftPanel />

                    <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                        <div className="row">
                            <ProductList />
                            <ProductList />
                            <ProductList />
                            <ProductList />
                            <ProductList />
                            <ProductList />
                        </div>    
                    </div>    

                    </div>
                </div>
            </div>
        )
    }
}

export default Shop