import React, { Component, PureComponent } from 'react'
import {connect, Provider} from 'react-redux'
import { createStore, combineReducers } from 'redux';
import * as actions from './../actions'
import {
	Cart,
	Product,
	CheckoutButton,
	cartLocalization,
	cartReducer,
	setCartCurrency,
  } from 'react-shopping-cart';
//import Button from 'react-button'
import Header from './header';
import { Link } from 'react-router-dom'
import './main.css'
import './util.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

const { getDefaultLocalization } = cartLocalization;
const iPadCaseLocalization = {
	color: 'Color',
	iPadCase: 'iPad case',
	red: 'Red',
	green: 'Green',
	yellow: 'Yellow',
	GBP: '£',
	EUR: '€',
	USD: '$',
  };
   
  const iPadPropertiesWithAdditionalCostLocalization = {
	//yellow: 'Yellow (+{cost}{localizedCurrency})',
  };

const store = createStore(
	combineReducers(
	  {
		cart: cartReducer,
		// Your own reducers, sir
	  }
	)
  );

class PDPPage extends Component { 
	state = {
		product: {
		  name: 'iPadCase',
		  id: 'ipad-case',
		  path: '/shop/ipad-case/',
		  properties: {
			color: ['red', 'green', {
			  additionalCost: {
				GBP: 1,
				EUR: 2,
				USD: 3.50,
			  },
			  value: 'yellow',
			}],
		  },
		  propertiesToShowInCart: ['color'],
		  prices: { GBP: 70, EUR: 80, USD: 90 },
		  currency: 'GBP',
		  imageSrc: '1-483x321.jpeg',
		},
		getProductLocalization:
		  getDefaultLocalization(
			'product',
			'en',
			{
			  ...iPadCaseLocalization,
			  ...iPadPropertiesWithAdditionalCostLocalization
			}
		  ),
		getCheckoutButtonLocalization:
		  getDefaultLocalization(
			'checkoutButton',
			'en',
			iPadCaseLocalization,
		  ),
		getCartLocalization:
		  getDefaultLocalization(
			'cart',
			'en',
			iPadCaseLocalization
		  )
	  };
    
    render () {

		// const  chngeValue = (e)=> {
		// 	this.setState({value: e.target.value});
		// 	console.log(this.state.value);
		//  }
		 
		// let product = this.props.data;
		
		// console.log(product);
		
		const {
			product,
			getCheckoutButtonLocalization,
			getProductLocalization,
			getCartLocalization,
		  } = this.state;

		  const checkoutButtonElement =
      <CheckoutButton
        getLocalization={
          getCheckoutButtonLocalization
        }
        checkoutURL="/to/my/checkout"
      />;
        return (
            product ?
            <div>
                <Header/>
                
                <div className="container bgwhite p-t-35 p-b-80">
		<div className="flex-w flex-sb">
			<div className="w-size13 p-t-30 respon5">
				<div className="wrap-slick3 flex-sb flex-w">
					<div className="wrap-slick3-dots"></div>

					<div className="slick3">
						<div className="item-slick3" data-thumb="images/thumb-item-01.jpg">
							<div className="wrap-pic-w">
								{/* <img src={product.images[0].src} alt="IMG-PRODUCT"/> */}
							</div>
						</div>

						{/* <div className="item-slick3" data-thumb="images/thumb-item-02.jpg">
							<div className="wrap-pic-w">
								<img src={product.images[0].src} alt="IMG-PRODUCT"/>
							</div>
						</div>

						<div className="item-slick3" data-thumb="images/thumb-item-03.jpg">
							<div className="wrap-pic-w">
								<img src={product.images[0].src} alt="IMG-PRODUCT"/>
							</div>
						</div> */}
					</div>
				</div>
			</div>

			<div className="w-size14 p-t-30 respon5">
				<h4 className="product-detail-name m-text16 p-b-13">
					 {product.name} 
				</h4>

				<span className="m-text17" dangerouslySetInnerHTML={{__html:product.price_html}}>
				
				</span>

				<p className="s-text8 p-t-10">
					Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
				</p>

			
				<div className="p-t-33 p-b-60">
					<div className="flex-m flex-w p-b-10">
						<div className="s-text15 w-size15 t-center">
							Size
						</div>

						<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
							<select className="selection-2" name="size">
								<option>Choose an option</option>
								<option>Size S</option>
								<option>Size M</option>
								<option>Size L</option>
								<option>Size XL</option>
							</select>
						</div>
					</div>

					<div className="flex-m flex-w">
						<div className="s-text15 w-size15 t-center">
							Color
						</div>

						<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
							<select className="selection-2" name="color">
								<option>Choose an option</option>
								<option>Gray</option>
								<option>Red</option>
								<option>Black</option>
								<option>Blue</option>
							</select>
						</div>
					</div>

					<div className="flex-r-m flex-w p-t-10">
						<div className="w-size16 flex-m flex-w">
							<div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
								<button  className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" >
									<i className="fs-12 fa fa-minus" aria-hidden="true"></i>
								</button >

								 <input className="size8 m-text18 t-center num-product" type="number" name="num-product" /> 

								<button  className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" >
									<i className="fs-12 fa fa-plus" aria-hidden="true"></i>
								</button >
							</div>

							<div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10" >
							
								{/* <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
									<Link to={`/CartPage/${this.state.id}`} params={"suman"} >Add to Cart </Link>
								</button> */}
								
							</div>
						</div>
					</div>
				</div>

				<div className="p-b-45">
					<span className="s-text8 m-r-35">SKU: MUG-01</span>
					<span className="s-text8">Categories: Mug, Design</span>
				</div>
				<Provider store={store}>
								<div className="container">
								<Product
            {...product}
            checkoutButton={checkoutButtonElement}
            getLocalization={
              getProductLocalization
            }
 
          />
          <Cart
            checkoutButton={checkoutButtonElement}
            getLocalization={
              getCartLocalization
            }
          />
		  </div>
		  </Provider>
			
				<div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						Description
						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div className="dropdown-content dis-none p-t-15 p-b-23">
						<p className="s-text8">
                        {product.description}
							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						</p>
					</div>
				</div>

				<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						Additional information
						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div className="dropdown-content dis-none p-t-15 p-b-23">
						<p className="s-text8">
							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						</p>
					</div>
				</div>

				<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						Reviews (0)
						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div className="dropdown-content dis-none p-t-15 p-b-23">
						<p className="s-text8">
							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
            
            </div> : null
        )
    }

}

const mapStateToProps = (state) => {
    return {
        data : state.products.productData
    }
}

export default connect(mapStateToProps,actions)(PDPPage)