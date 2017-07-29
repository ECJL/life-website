import React from 'react';
import styles from './section.css';

export default class Section extends React.Component{
    render(){
        return (
            <div className="row">
                <div className={`col-md-12 ${styles.section}`}>
                    {this.props.sectionName}
                </div>
            </div>
        );
    }
}
