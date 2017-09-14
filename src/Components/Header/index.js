import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeStyle: {
                color: 'green',
                fontWeight: 'board',
            }
        }
    }
    render() {
        return (
            <div className="header">
                <nav className="nav">
                    <ul className="menu">

                        <li><NavLink activeStyle={this.state.activeStyle} exact to="/">Home</NavLink></li>
                        <li><NavLink activeStyle={this.state.activeStyle} exact to="/about">About</NavLink></li>
                        <li><NavLink activeStyle={this.state.activeStyle} to="/about/foo">About Foo</NavLink></li>

                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;