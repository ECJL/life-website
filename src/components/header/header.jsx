import React from 'react';

export default class Header extends React.Component{
    render(){
        return (
            <div>
                <div className="col-md-3">
                    {this.props.children}
                </div>
                <div className="col-md-9">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Life</li>
                            <li>Work</li>
                            <li>Contact</li> // donate & sponsor
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}