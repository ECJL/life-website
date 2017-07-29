import React from 'react';
import styles from './header.css';

export default class Header extends React.Component{
    render(){
        return (
            <div className="row">
                <div className={`col-md-3 ${styles.hero}`}>
                    {this.props.children}
                </div>
                <div className="col-md-9">
                    <nav className={`navbar pull-right ${styles.navBar}`}>
                        <ul className="nav navbar-nav">
                            {this.props.navItems.map( item =>
                                <li key={item.name}>
                                    <a href="#">{item.name}</a>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}