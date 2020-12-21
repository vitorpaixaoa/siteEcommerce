import React, { Component } from 'react';

class AlertGeral extends Component {
    render(){
        if( !this.props.show ) return null;
        return(
            <div className="alert alert-danger">
                <span>{this.props.msg}</span>
            </div>
        )
    }
}
export default AlertGeral;