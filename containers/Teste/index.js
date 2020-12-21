import React, { Component } from 'react';
import PaymenteFormRadio from '../../components/Inputs/PaymentFormRadio';
class Teste extends Component {
    render(){
        return(
            <div className="Rodape">
                <div className="container flex horizontal">
                    <PaymenteFormRadio />
                </div>
            </div>
        )
    }
}

export default Teste;