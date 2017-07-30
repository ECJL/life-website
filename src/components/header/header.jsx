import React from 'react';
import styles from './header.css';
import NavItemContainer from '../../redux/containers/nav-item-container';

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
                                <NavItemContainer key={item.name} itemName={item.name}></NavItemContainer>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}