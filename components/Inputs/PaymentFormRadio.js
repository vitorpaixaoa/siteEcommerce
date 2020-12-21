import React, { Component } from 'react';

export default class FormRadio extends Component {
    
    render(){
        const { name, id, label } = this.props;
        return (
            <div className="Form-Payment-Teste">
                <ul className="payment-methods  ">
                    <li className="payment-method boleto">
                        <input name={name} type="radio" id={id}/>
                        <label >{label}</label>
                    </li>
            </ul>
            </div>
        )
    }
}