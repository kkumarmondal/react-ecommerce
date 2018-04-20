import React from 'react';
import { Switch, Route } from 'react-router-dom'

//Component
import Home from './component/home/home'
import About from './component/about'
import Shop from './component/shop'

import Header  from './header'

const Router = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/" exact component={Home} />
            
             </Switch>
        </div>
    )
}

export default Router