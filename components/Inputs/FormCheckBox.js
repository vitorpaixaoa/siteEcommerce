  
import React, { Component } from 'react';

export default class FormCheckBox extends Component {
    render(){
        const { name, checked, label, onChange,defaultChecked } = this.props;
        return (
            <div className="form-input form-check ">
                <input type="checkbox" defaultChecked={defaultChecked} checked={checked} name={name} onChange={onChange} />
                <label>&nbsp;{label}</label>                
            </div>
        )
    }
}