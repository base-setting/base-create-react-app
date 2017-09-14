import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

class Foo extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.match.params.name}</h2>
                <ul>
                    <li>
                        <NavLink to={`/about/${this.props.match.params.name}/gogo`}>gogo</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Foo;