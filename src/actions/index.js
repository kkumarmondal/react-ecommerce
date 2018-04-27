import axios from 'axios';
const URL = 'http://localhost:3004';


export function artistList(keywords){
    const request = axios.get(`${URL}/artists?q=${keywords}`)
                    .then(response => response.data)
    return {
        type: 'GET_ARTISTS',
        payload: request
    }
}


export function artistListAll(){
    const request = axios.get(`${URL}/artists?_limit=6`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_ALL',
        payload: request   
    }
}

export function artistDetail(id){
    const request = axios.get(`${URL}/artists?id=${id}`)
                    .then(response => response.data)

    return {
        type: 'GET_ARTISTS_DETAIL',
        payload: request   
    }
}

export function postList(){
    const request  = axios.get(`http://localhost/react-ecommerce/reactPress/wp-json/wp/v2/posts`)
                        .then( response => response.data)
                        
    return {
        type: 'GET_ALL_POST',
        payload: request
    }
}

export function productDetails(id){
    const request = axios.get(`http://localhost/react-ecommerce/reactPress/wp-json/wp/v2/posts/${id}`)
    .then( response => response.data)
    
    return{
        type:'GET_PRODUCT_DETAIL',
        payload: request
    }
    
}

export function clearProductDetail(){
    return{
        type:'CLEAR_PRODUCT_DETAIL',
        payload:null
    }
}