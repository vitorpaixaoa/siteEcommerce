import React, { Component } from "react"
import { connect } from "react-redux"
import FormSimples from "../../../components/Inputs/FormSimples"
import TextoDados from "../../../components/Texto/Dados"
import { ESTADOS } from "../../../utils"
import actions from "../../../redux/actions"
import {
  GroupComponent,
  TextComponent,
  Divisor,
  Select
} from "../../../pages/styles/Components/Components"
import AlertGeral from "../../../components/Alert/Geral"
import { validateCPF } from "../../../utils/validate"
import { H2, H1 } from "./styles"
import Button from "../../../components/Button"

import {
  formatCEP,
  formatCPF,
  formatDataDeNascimento,
  formatNumber,
  formatTelefone
} from "../../../utils/format"
import moment from "moment"
import { colors } from "../../../pages/styles/theme"

class FormularioDados extends Component {
  state = {
    nome: "",
    CPF: "",
    telefone: "",
    dataDeNascimento: "",
    local: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    CEP: "",
    aviso: null,
    erros: {}
  }

  updateState = (cliente) => {
    this.setState({
      nome: cliente.nome,
      CPF: cliente.cpf,
      telefone: cliente.telefones[0],
      dataDeNascimento: moment(cliente.dataDeNascimento).format("DD/MM/YYYY"),
      local: cliente.endereco.local,
      numero: cliente.endereco.numero,
      complemento: cliente.endereco.complemento,
      bairro: cliente.endereco.bairro,
      cidade: cliente.endereco.cidade,
      estado: cliente.endereco.estado,
      CEP: cliente.endereco.CEP
    })
  }

  componentDidMount() {
    if (this.props.cliente) this.updateState(this.props.cliente)
  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.cliente && this.props.cliente) ||
      (prevProps.cliente &&
        this.props.cliente &&
        prevProps.cliente.updatedAt !== this.props.cliente.updatedAt)
    )
      this.updateState(this.props.cliente)
  }

  validate() {
    const {
      nome,
      CPF,
      dataDeNascimento,
      telefone,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP
    } = this.state

    const erros = {}

    if (!nome) erros.nome = "Preencha aqui com seu nome"
    if (!CPF || CPF.length !== 14) erros.CPF = "Preencha aqui com seu CPF"
    if (CPF && CPF.length === 14 && !validateCPF(CPF))
      erros.CPF = "Preencha aqui com seu CPF corretamente"
    if (!dataDeNascimento || dataDeNascimento.length !== 10)
      erros.dataDeNascimento = "Preencha aqui com sua data de nascimento"
    if (!telefone || telefone.length < 11)
      erros.telefone = "Preencha aqui com seu telefone"

    if (!local) erros.local = "Preencha aqui com seu Endereço"
    if (!numero) erros.numero = "Preencha aqui com o numero"
    if (!bairro) erros.bairro = "Preencha aqui com seu bairro"
    if (!cidade) erros.cidade = "Preencha aqui com sua cidade"
    if (!estado) erros.estado = "Preencha aqui com seu estado"
    if (!CEP || CEP.length !== 9) erros.CEP = "Preencha aqui com seu CEP"

    this.setState({ erros, aviso: null })
    return Object.keys(erros).length === 0
  }

  handleSubmit() {
    const { cliente, token } = this.props
    if (!cliente || !token || !this.validate()) return null
    this.props.updateCliente(this.state, cliente._id, token, (error) => {
      if (error)
        this.setState({ aviso: { status: false, message: error.message } })
      else alert("Dados atualizados com sucesso")
    })
  }

  onChange = (field, value) =>
    this.setState({ [field]: value }, () => this.validate())

  render() {
    const {
      nome,
      CPF,
      telefone,
      dataDeNascimento,
      local,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      CEP,
      erros,
      aviso
    } = this.state
    const { usuario } = this.props

    return (
      <GroupComponent
        alignItems="center"
        justifyContent="space-around"
        flexDirection="column"
        padding="50px"
      >
        <H2 margin="0 0 1rem 0">Meus dados</H2>
        <div>
          <TextComponent
            style={{
              letterSpacing: ".1rem"
            }}
            fontSize="1rem"
            fontWeight="500"
            color={colors.darkGrey}
          >
            E-mail: {usuario ? usuario.email : ""}
          </TextComponent>
          <Divisor height="20px" />
          <FormSimples
            label="Nome"
            erro={erros.nome}
            value={nome}
            name="nome"
            type="text"
            placeholder="Nome"
            onChange={(e) => this.onChange("nome", e.target.value)}
          />
          <Divisor height="10px" />
          <div>
            <FormSimples
              value={CPF}
              label="CPF"
              erro={erros.CPF}
              name="CPF"
              type="text"
              er
              placeholder="CPF - 123.456.789-10"
              onChange={(e) => this.onChange("CPF", formatCPF(e.target.value))}
            />
          </div>
          <Divisor height="10px" />

          <FormSimples
            value={telefone}
            erro={erros.telefone}
            label="Telefone"
            name="telefone"
            type="text"
            placeholder="Telefone"
            onChange={(e) =>
              this.onChange("telefone", formatTelefone(e.target.value))
            }
          />
          <Divisor height="10px" />

          <FormSimples
            value={dataDeNascimento}
            erro={erros.dataDeNascimento}
            name="dataDeNascimento"
            type="text"
            placeholder="DD/MM/YYY"
            label="Data de nascimento"
            onChange={(e) =>
              this.onChange(
                "dataDeNascimento",
                formatDataDeNascimento(e.target.value)
              )
            }
          />
          <Divisor height="10px" />
          <FormSimples
            value={local}
            erro={erros.local}
            name="local"
            label="Endereço"
            placeholder="Endereço"
            onChange={(e) => this.onChange("local", e.target.value)}
          />
          <Divisor height="10px" />
          <FormSimples
            value={numero}
            name="numero"
            erro={erros.numero}
            placeholder="Número"
            label="Número"
            onChange={(e) =>
              this.onChange("numero", formatNumber(e.target.value))
            }
          />
          <Divisor height="10px" />
          <FormSimples
            value={bairro}
            name="bairro"
            erro={erros.local}
            placeholder="Bairro"
            label="Bairro"
            Bairro
            onChange={(e) => this.onChange("bairro", e.target.value)}
          />
          <Divisor height="10px" />
          <FormSimples
            value={complemento}
            name="complemento"
            placeholder="Complemento"
            label="Complemento"
            onChange={(e) => this.onChange("complemento", e.target.value)}
          />
          <Divisor height="10px" />
          <FormSimples
            value={cidade}
            name="cidade"
            erro={erros.cidade}
            placeholder="Cidade"
            label="Cidade"
            label="Cidade"
            onChange={(e) => this.onChange("cidade", e.target.value)}
          />
          <Divisor height="10px" />
          <label
            style={{
              letterSpacing: ".1rem",
              color: colors.darkGrey
            }}
          >
            Estado
          </label>
          <Select
            name="estado"
            value={estado}
            onChange={(e) => this.onChange("estado", e.target.value)}
          >
            <option>Selecione seu estado</option>
            {Object.keys(ESTADOS).map((abbr) => (
              <option key={abbr} value={abbr}>
                {ESTADOS[abbr]}
              </option>
            ))}
          </Select>
          <Divisor height="10px" />
          {erros.estado && <small className="erro">{erros.estado}</small>}
          <FormSimples
            value={CEP}
            name="CEP"
            placeholder="12345-789"
            erro={erros.CEP}
            label="CEP"
            onChange={(e) => this.onChange("CEP", formatCEP(e.target.value))}
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
  token: state.auth.token,
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente
})

export default connect(mapStateToProps, actions)(FormularioDados)
