import React from 'react';

export default class Section extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.props.sectionName}
                </div>
            </div>
        );
    }
}
