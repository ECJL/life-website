import React from 'react';
import styles from './footer.css';

export default class Footer extends React.Component{
	render(){
        let currentYear = new Date().getFullYear();
		return (<div className={`row ${styles.footer}`}>Copyright &copy; {currentYear} Ellis &amp; Jen | All rights reserved</div>);
	}
}
