import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import queryString from 'query-string';

import * as Containers from 'Containers';

class About extends Component {
    render() {
        const query = queryString.parse(this.props.location.search);
        console.log('this.props.match : ', this.props.match);

        return (
            <div>
                { this.props.match.params.boo && <h3>{ this.props.match.params.boo } oh no</h3> }
            </div>
        );
    }
}

export default About;