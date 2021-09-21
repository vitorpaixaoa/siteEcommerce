import React, { Component } from "react"
import { connect } from "react-redux"

import AlertGeral from "../../components/Alert/Geral"
import actions from "../../redux/actions"

import { validateCPF } from "../../utils/validate"
import Button from "../../components/Button"
import { colors } from "../../pages/styles/theme"
import { TextComponent } from "../../pages/styles/Components/Components"
class SubmitDadosCliente extends Component {
  state = { aviso: null }

  callback = (erro) => {
    if (!erro) {
      this.props.permitir()
      this.setState({ aviso: null })
    } else {
      this.setState({ aviso: { status: false, message: erro.message } })
    }
  }

  validate = () => {
    const {
      email,
      senha,
      nome,
      CPF,
      dataDeNascimento,
      telefone,
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP
    } = this.props.form
    const { usuario } = this.props

    let temErro = false

    if (!usuario && !email) temErro = true
    if (!usuario && !senha) temErro = true

    if (!nome) temErro = true
    if (!CPF || CPF.length !== 14) temErro = true
    if (CPF && CPF.length === 14 && !validateCPF(CPF)) temErro = true
    if (!dataDeNascimento || dataDeNascimento.length !== 10) temErro = true
    if (!telefone || telefone.length < 11) temErro = true

    if (!local) temErro = true
    if (!numero) temErro = true
    if (!bairro) temErro = true
    if (!complemento) temErro = true
    if (!cidade) temErro = true
    if (!estado) temErro = true
    if (!CEP || CEP.length !== 9) temErro = true

    return !temErro
  }
  handleSubmit() {
    if (!this.validate()) return null
    const { token, form, cliente } = this.props
    if (!token) this.props.newCliente(form, this.callback)
    else this.props.updateCliente(form, cliente._id, token, this.callback)
  }
  render() {
    return (
      <div>
        <AlertGeral aviso={this.state.aviso} />
        <div>
          <Button
            ColorButton={colors.red}
            background={colors.red}
            onSubmit={() => this.handleSubmit()}
          >
            <TextComponent fontWeight="700" color={colors.white}>
              Continuar pedido
            </TextComponent>
          </Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
  form: state.checkout.form
})

export default connect(mapStateToProps, actions)(SubmitDadosCliente)
