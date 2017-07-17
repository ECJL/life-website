import React from 'react';
import {Col} from 'react-bootstrap';

export default class Header extends React.Component{
    render(){
        return (
            <div>
                <Col xs={12} md={3}>
                    {this.props.children}
                </Col>
                <Col xs={12} md={9}>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Life</li>
                            <li>Work</li>
                            <li>Contact</li> {/* donate & sponsor*/}
                        </ul>
                    </nav>
                </Col>
            </div>
        );
    }
}