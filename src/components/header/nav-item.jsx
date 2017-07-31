import React from 'react';
import classNames from 'classnames';

export default class NavItem extends React.Component{
	render(){
    	var navItemLiClasses = classNames(
    		{active:this.props.active}
    	);

        return (
        	<li className={navItemLiClasses}>
                <a onClick={this.props.onClick} href={`#${this.props.itemName}`}>
                    {this.props.itemName} {this.props.active?'*':''}</a>
            </li>
        );
    }
}