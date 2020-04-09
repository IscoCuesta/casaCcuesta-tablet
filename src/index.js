// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.css';
import './styles/index.css'

// Common Layout
// import Layout from "./component/common/App";


// Home layout
import Paralax from './components/Paralax';
import App from './App';


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={App}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
