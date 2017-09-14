import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import logo from '../logo.svg';

import * as Containers from 'Containers';
import * as Components from 'Components';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}

                    <Route path="/" component={Components.Header}/>
                    <Switch>
                        <Route exact path="/" component={Containers.Home}/>
                        <Route path="/about" component={Containers.About}/>
                        <Route path="/test" component={Containers.Test}/>
                    </Switch>
                    {/*<Containers.Test/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
