import React, { Component } from "react"
import { connect } from "react-redux"
import FormSimples from "../../../components/Inputs/FormSimples"
import actions from "../../../redux/actions"
import AlertGeral from "../../../components/Alert/Geral"
import {
  GroupComponent,
  TextComponent,
  Divisor
} from "../../../pages/styles/Components/Components"
import Button from "../../../components/Button"

import { H1, H2 } from "./styles"
import { colors } from "../../../pages/styles/theme"
class FormularioSenha extends Component {
  state = {
    senhaAntiga: "",
    novaSenha: "",
    confirmarNovaSenha: "",
    erros: {},
    aviso: null
  }

  handleSubmit() {
    const { token } = this.props
    if (!token || !this.validate()) return null
    this.props.updateSenha(this.state, token, (error) => {
      if (error)
        this.setState({ aviso: { status: fallse, message: error.message } })
      else {
        alert("Senha atualizada com sucesso")
        this.setState({
          senhaAntiga: "",
          novaSenha: "",
          confirmarNovaSenha: ""
        })
      }
    })
  }

  validate() {
    const { senhaAntiga, novaSenha, confirmarNovaSenha } = this.state

    const erros = {}

    if (!senhaAntiga) erros.senhaAntiga = "Preencha aqui com a sua senha atual"
    if (!novaSenha) erros.novaSenha = "Preencha aqui com a sua nova senha"
    if (!confirmarNovaSenha)
      erros.confirmarNovaSenha = "Confirme aqui com a sua senha nova senha"
    if (novaSenha !== confirmarNovaSenha)
      erros.confirmarNovaSenha = "A nova senha e sua confirmação não coincidem"

    this.setState({ erros, aviso: null })
    return Object.keys(erros).length === 0
  }

  onChange = (f, v) => this.setState({ [f]: v }, () => this.validate())

  render() {
    const { senhaAntiga, novaSenha, confirmarNovaSenha, erros } = this.state
    return (
      <GroupComponent
        alignItem="center"
        justifyContent="space-around"
        flexDirection="column"
        padding="50px"
      >
        <H2 margin="0 0 1rem 0">Alterar senha</H2>
        <div>
          <FormSimples
            erro={erros.senhaAntiga}
            label="Senha atual"
            value={senhaAntiga}
            name="senhaAntiga"
            type="password"
            placeholder="Senha Antiga"
            onChange={(e) => this.onChange("senhaAntiga", e.target.value)}
          />
          <Divisor height="10px" />
          <FormSimples
            erro={erros.novaSenha}
            label="Nova senha"
            value={novaSenha}
            name="novaSenha"
            type="password"
            placeholder="Nova Senha"
            onChange={(e) => this.onChange("novaSenha", e.target.value)}
          />
          <Divisor height="10px" />
          <FormSimples
            label="Confirmar nova senha"
            erro={erros.confirmarNovaSenha}
            value={confirmarNovaSenha}
            name="confirmarNovaSenha"
            type="password"
            placeholder="Confirmar Nova Senha"
            onChange={(e) =>
              this.onChange("confirmarNovaSenha", e.target.value)
            }
          />
        </div>
        <AlertGeral aviso={this.state.aviso} />
        <div>
          <Button
            onClick={() => this.handleSubmit()}
            ColorButton={colors.red}
            background={colors.red}
          >
            <TextComponent fontWeight="700" color={colors.white}>
              SALVAR
            </TextComponent>
          </Button>
        </div>
      </GroupComponent>
    )
  }
}

const mapStateToProps = (state) => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente
})

export default connect(mapStateToProps, actions)(FormularioSenha)
