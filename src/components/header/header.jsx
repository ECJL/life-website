import React from 'react';

export default class Header extends React.Component{
    render(){
        return (
            <div>
                <div className="col-md-3">
                    {this.props.children}
                </div>
                <div className="col-md-9">
                    menu
                </div>
            </div>
        );
    }
}