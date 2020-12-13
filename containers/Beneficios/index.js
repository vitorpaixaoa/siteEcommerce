import React from 'react';

import ItemBeneficio from '../../components/Item/Beneficio'

const Beneficios = () => (
    <div className="Beneficios">
        <div className="container flex horizontal horizontal-mb wrap-mb">
            <ItemBeneficio 
                icone="fa-credit-card" 
                texto="Em até 6x sem juros para todo o site." />
            <ItemBeneficio 
                icone="fa-truck" 
                texto="Entregamos em todo Brasil." />
            <ItemBeneficio 
                icone="fa-motorcycle" 
                texto="Entrega no mesmo dia para a cidade de São Luís." />
            <ItemBeneficio 
                icone="fa-whatsapp" 
                texto="Atendimento personalizado via WhatsApp." />
        </div>
    </div>
)

export default Beneficios;