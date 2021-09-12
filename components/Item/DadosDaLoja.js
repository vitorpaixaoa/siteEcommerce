import React from "react"
import { connect } from "react-redux"
import {
  Container,
  GroupComponent,
  TextComponent
} from "../../pages/styles/Components/Components"
import { colors } from "../../pages/styles/theme"
class DadosDaLoja extends React.Component {
  render() {
    if (!this.props.loja) return <div></div>
    const { nome, cnpj, email, endereco, telefones } = this.props.loja

    return (
      <Container flexDirection="column" background={colors.lightGrey}>
        <GroupComponent alignItem="center">
          <h2>Entre em Contato</h2>
          <br></br>
        </GroupComponent>
        <GroupComponent
          height={200}
          flexDirection="column"
          justifyContent="space-between"
        >
          <p>Nome: {nome}</p>
          <p>CNPJ: {cnpj}</p>
          <p>
            E-mail:
            <a href={`mailto:${email}`}> {email}</a>
          </p>
          <p className="loja-Telefones">Telefones:</p>
          {telefones.map((telefone, index) => (
            <p key={index} className="loja-telefone">
              <a href={`phone:${telefone}`}>{telefone}</a>
            </p>
          ))}
          <p className="loja-endereco">
            {endereco.local}, {endereco.numero} - {endereco.bairro}
          </p>
          <p className="loja-cidade">
            {endereco.cidade}/{endereco.estado} - {endereco.CEP}
          </p>
        </GroupComponent>
      </Container>
    )
  }
}
const mapStateToProps = (state) => ({
  loja: state.loja.loja
})

export default connect(mapStateToProps)(DadosDaLoja)
