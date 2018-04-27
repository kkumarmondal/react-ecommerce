import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions'

class PDPPage extends Component { 

    componentWillMount(){
        this.props.productDetails(this.props.match.params.id)
        //console.log(this.props.match.params.id);
    }
    renderPost =(post)=> (
        post?
        
        <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
        : null
        
   )
   componentWillUnmount (){
       this.props.clearProductDetail()
   }
    
    render () {
        //console.log(this.props.data)
        return (
           
            <div>
              {this.renderPost(this.props.data)}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        data : state.artists.productData
    }
}

export default connect(mapStateToProps,actions)(PDPPage)