import React from "react"

import ItemBeneficio from "../../components/Item/Beneficio"
import {
  Container,
  GroupComponent
} from "../../pages/styles/Components/Components"
const Beneficios = () => (
  <Container flexDirection="row" justifyContent="space-around">
    <GroupComponent alignItem="center" flexDirection="row">
      <ItemBeneficio
        icone="fa-credit-card"
        texto="Em até 6x sem juros para todo o site."
      />
      <ItemBeneficio icone="fa-truck" texto="Entregamos em todo Brasil." />
      <ItemBeneficio
        icone="fa-motorcycle"
        texto="Entrega no mesmo dia para a cidade de São Luís."
      />
      <ItemBeneficio
        icone="fa-whatsapp"
        texto="Atendimento personalizado via WhatsApp."
      />
    </GroupComponent>
  </Container>
)

export default Beneficios
