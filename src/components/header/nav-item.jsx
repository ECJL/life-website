import React from 'react';

export default class NavItem extends React.Component{
	render(){
        return (
        	<li>
                <a href={`#${this.props.itemName}`}>{this.props.itemName}</a>
            </li>
        );
    }
}