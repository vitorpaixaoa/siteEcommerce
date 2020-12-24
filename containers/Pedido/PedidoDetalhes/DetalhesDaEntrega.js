import React, { Component } from 'react';

import ListaStatus from '../../../components/Listas/Status';

const REGISTROS  = [
    { data: "20/12/2020", situacao: "Objeto em separação"},
    { data: "21/12/2020", situacao: "Objeto entregue a Transportadora"},
    { data: "22/12/2020", situacao: "Objeto em trânsito"},
    { data: "24/12/2020", situacao: "Objeto entregue"}
]
 

class DetalhesDaEntrega extends Component {
    render(){
        return(
            <div className="flex-1">
                <div className="Detalhes-Da-Entrega">
                    <h4>Sobre a Entrega</h4>
                    <br/>
                    <ListaStatus registros={REGISTROS} />
                </div>
            </div>
        )
    }
}
export default DetalhesDaEntrega;