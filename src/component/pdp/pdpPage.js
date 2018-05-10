import React, { Component } from 'react'
import Header from './../header';
import {connect} from 'react-redux'
import * as actions from './../../actions'
import LeftSidebar from './leftSidebar'
import RightSidebar from './rightSidebar'
import './../main.css'
import './../util.css'

class PDPPage extends Component {
	componentWillMount(){
        this.props.productDetails(this.props.match.params.id)
	}
	
    render () {
		let product = this.props.product;
		
        return (
			product ?
            <div>

                <Header/>
                
                <div className="container bgwhite p-t-35 p-b-80">
					<div className="flex-w flex-sb">
						
						<LeftSidebar product={this.props.product}/>

						<RightSidebar product={this.props.product} />

					</div>
				</div>
				
			</div> : null
        )
    }

}

const mapStateToProps = (state) => {
    return {
        product : state.products.productData
    }
}
export default connect(mapStateToProps,actions)(PDPPage);