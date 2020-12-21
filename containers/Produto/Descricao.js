import React from 'react';

const DESC = "Ótimo produto, o material é excelente .\n\nAlta disponibilidade e segurança.\n\nGarantia de entrega em todo o país"

const Descricao = () => (
    <div className="Descricao flex vertical">
        <h2>Descrição</h2>
        <div>
            { DESC.split("\n").map((item, idx) => <p key={idx}> {item} </p>) }
        </div>
    </div>
)
export default Descricao;