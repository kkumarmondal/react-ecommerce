import React from 'react';
import { Switch, Route, Link} from 'react-router-dom'

//Component
import Home from './component/home'
import About from './component/about'
import Shop from './component/shop'

const Router = () => {
    return (
        <div>
            <Link to="/" >Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/" exact component={Home} />
            
        </Switch>
        </div>
    )
}

export default Router