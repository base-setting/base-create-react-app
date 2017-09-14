import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import queryString from 'query-string';

import * as Containers from 'Containers';

class About extends Component {
    render() {
        const query = queryString.parse(this.props.location.search);
        console.log(query);

        const detail = query.detail === 'true';

        return (
            <div>
                <h1>About</h1>
                { this.props.match.params.name && <h2>{ this.props.match.params.name }</h2> }
                { detail && 'detail: blahblah' }
                <Route path="/about/:name" component={Containers.Foo}/>
                <Route path="/about/:name/:boo" component={Containers.Boo}/>
            </div>
        );
    }
}

export default About;