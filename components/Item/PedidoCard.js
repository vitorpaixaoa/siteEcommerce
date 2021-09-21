import React, { Component } from "react"
import { formatMoney } from "../../utils"
import Link from "next/link"
import moment from "moment"
import {
  Container,
  GroupComponent,
  TextComponent
} from "../../pages/styles/Components/Components"
import { colors } from "../../pages/styles/theme"
import { OrderContainer } from "./styles"
class PedidoCard extends Component {
  render() {
    const { pedido } = this.props
    const { createdAt, pagamento, cancelado, entrega, _id } = pedido
    return (
      <OrderContainer>
        <GroupComponent flexDirection="row">
          <GroupComponent>
            <TextComponent
              fontSize={10}
              color={colors.darkGrey}
              fontWeight="700"
            >
              Data
            </TextComponent>
            <TextComponent fontSize={14} color={colors.black} fontWeight="200">
              {moment(createdAt).format("DD/MM/YYYY") || 'Indisponível'}
            </TextComponent>
          </GroupComponent>
          <GroupComponent>
            <TextComponent
              fontSize={10}
              color={colors.darkGrey}
              fontWeight="700"
            >
              Valor
            </TextComponent>
            <TextComponent fontSize={14} color={colors.black} fontWeight="200">{formatMoney(pagamento.valor) || 'Indisponível'}</TextComponent>
          </GroupComponent>
          <GroupComponent>
            <TextComponent
              fontSize={10}
              color={colors.darkGrey}
              fontWeight="700"
            >
              Status
            </TextComponent>
            <TextComponent fontSize={14} color={colors.black} fontWeight="200">
              {cancelado
                ? "Cancelado"
                : `${pagamento.status} / ${entrega.status}` || 'Indisponível'}
            </TextComponent>
          </GroupComponent>
        </GroupComponent>
        <Link href={`/area-cliente/pedido/${_id}`}>
          <TextComponent
            cursor="pointer"
            color={colors.darkGrey}
            margin="25px 0 10px 0"
            textAlign="center"
            fontSize={12}
            fontWeight="700"
          >
            Ver detalhes
          </TextComponent>
        </Link>
      </OrderContainer>
    )
  }
}

export default PedidoCard
