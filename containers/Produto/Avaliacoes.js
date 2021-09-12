import React, { Component } from "react"
import { connect } from "react-redux"
import actions from "../../redux/actions"
import Link from "next/link"
import { H2, NoAuthorizedUser } from "./styles"
import { Container } from "../../pages/styles/Components/Components"
import Button from "../../components/Button"
import { colors } from "../../pages/styles/theme"
class Avaliacoes extends Component {
  state = {
    estaLogado: true,
    texto: "",
    pontuacao: 5
  }

  renderAvaliacoes() {
    const { avaliacoes } = this.props
    return (
      <div>
        {avaliacoes.map((avaliacao) => (
          <div key={avaliacao._id}>
            <div>
              <p>{avaliacao.texto}</p>
            </div>
            <div>
              <div>
                <small>{avaliacao.nome}</small>
              </div>
              <div>
                <span>
                  {[...Array(avaliacao.pontuacao).keys()].map((i, idx) => (
                    <i key={idx} className="fa fa-star"></i>
                  ))}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  submitAvaliacao() {
    const { texto, pontuacao } = this.state
    const { produto, token, usuario } = this.props
    if (!texto || !produto) alert("Preencha o campo de texto da avaliação.")
    this.props.novaAvaliacao(
      {
        nome: usuario.nome,
        token,
        produto: produto._id,
        texto,
        pontuacao
      },
      (err) => {
        if (err) alert("Ocorreu um erro, tente novamente.")
        else this.setState({ texto: "", pontuacao: 5 })
      }
    )
  }
  renderFormularioAvaliacoes() {
    return (
      <div>
        <h4>Envie sua avaliação sobre o produto:</h4>
        <div>
          <div>
            <label>Pontuação:</label>
            <select
              value={this.state.pontuacao}
              onChange={(e) => this.setState({ pontuacao: e.target.value })}
            >
              <option value="1">1 estrela</option>
              <option value="2">2 estrela</option>
              <option value="3">3 estrela</option>
              <option value="4">4 estrela</option>
              <option value="5">5 estrela</option>
            </select>
          </div>
          <div className="flex vertical">
            <label>Avaliação:&nbsp;</label>
            <textarea
              rows="3"
              style={{ resize: "none", width: "100%", maxWidth: "500px" }}
              placeholder="Digite aqui sua avaliação..."
              value={this.state.texto}
              onChange={(e) => this.setState({ texto: e.target.value })}
            />
          </div>
          <div>
            <button
              onClick={() => this.submitAvaliacao()}
              className="btn btn-primary btn-lg"
            >
              <span>Enviar Avaliação</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  renderAvisoLogin() {
    return (
      <div>
        <Link href="/area-cliente">
          <NoAuthorizedUser
            background={colors.red}
            ColorButton={colors.red}
            ButtonLabelColor={colors.white}
          >
            Se inscreva para deixar avaliações
          </NoAuthorizedUser>
        </Link>
      </div>
    )
  }

  render() {
    return (
      <Container
        margin="0px 0px 50px 0px"
        alignItem="center"
        flexDirection="column"
      >
        <H2>Avaliações</H2>
        {this.renderAvaliacoes()}
        {this.props.token
          ? this.renderFormularioAvaliacoes()
          : this.renderAvisoLogin()}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  produto: state.produto.produto,
  avaliacoes: state.produto.avaliacoes,
  token: state.auth.token,
  usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(Avaliacoes)
