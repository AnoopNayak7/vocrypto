import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'

export default function Body() {
    return (
        <section>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
            </Switch>
        </section>
    )
}
