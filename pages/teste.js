import React, { Component } from 'react';
import PaymentFormRadio from '../components/Inputs/PaymentFormRadio'



export default class Teste extends Component {
    render(){
        return(
            <div className="flex horizontal">
                <PaymentFormRadio  name="boleto" id="bol" label="Boleto" />
                <PaymentFormRadio  name="cartao" id="card" label="Cartão" />
            </div>
        )
    }
}