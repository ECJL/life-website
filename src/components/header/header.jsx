import React from 'react';

export default class Header extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-3">
                    {this.props.children}
                </div>
                <div className="col-md-9">
                    <nav>
                        <ul>
                            {this.props.navItems.map( item =>
                                <li key={item.name}>{item.name}</li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}