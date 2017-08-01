import React from 'react';
import styles from './nav-item.css';
import classNames from 'classnames';

export default class NavItem extends React.Component{
	render(){
    	var navItemLiClasses = classNames(
    		{[styles.active]: this.props.active}
    	);

        return (
        	<li className={navItemLiClasses}>
                <a onClick={this.props.onClick} href={`#${this.props.itemName}`}>
                    {this.props.itemName}</a>
            </li>
        );
    }
}