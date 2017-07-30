import React from 'react';

export default class NavItem extends React.Component{
	render(){
        return (
        	<li>
                <a onClick={this.props.onClick} href={`#${this.props.itemName}`}>
                    {this.props.itemName} {this.props.active?'*':''}</a>
            </li>
        );
    }
}