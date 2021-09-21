import React, { Component } from "react"
import { connect } from "react-redux"
import actions from "../../redux/actions"
import Link from "next/link"
import {
  H2,
  NoAuthorizedUser,
  Dropdown,
  Label,
  TitleSubmitFeedback,
  TextArea
} from "./styles"
import {
  Container,
  TextComponent,
  GroupComponent,
  Divisor
} from "../../pages/styles/Components/Components"
import Button from "../../components/Button"
import { colors, fontSizes } from "../../pages/styles/theme"
import moment from "moment"
class Avaliacoes extends Component {
  state = {
    estaLogado: true,
    texto: "",
    pontuacao: 5
  }

  renderAvaliacoes() {
    const { avaliacoes } = this.props
    return (
      <Container
        style
        margin="50px 0px"
        wrap="wrap"
        width="50%"
        flexDirection="row"
        justifyContent="flex-start"
      >
        {avaliacoes.map((avaliacao) => (
          <>
            <Container
              margin="0px 0px 10px 0px"
              //background={colors.lightGrey}
              alignItem="center"
              padding="10px"
              key={avaliacao._id}
              flexDirection="column"
            >
              <GroupComponent
                padding="0px 10px"
                justifyContent="space-between"
                flexDirection="row"
              >
                <TextComponent width="20%">
                  {[...Array(avaliacao.pontuacao).keys()].map((i, idx) => (
                    <i
                      style={{
                        color: colors.darkGrey
                      }}
                      key={idx}
                      className="fa fa-star"
                    ></i>
                  ))}
                </TextComponent>
                <TextComponent
                  fontSize={fontSizes.small}
                  fontWeight="700"
                  width={null}
                  color={colors.darkGrey}
                >
                  {moment(avaliacao.createdAt).format("DD/MM/yyyy HH:mm")}
                </TextComponent>
              </GroupComponent>
              <TextComponent margin="10px" fontWeight="100" textAlign="center">
                <i>"{avaliacao.texto}"</i>
              </TextComponent>
              <GroupComponent
                marginTop={10}
                justifyContent="center"
                flexDirection="row"
              >
                <TextComponent
                  fontSize={fontSizes.small}
                  fontWeight="700"
                  width={null}
                  margin="0px 0px 0px 10px"
                  color={colors.darkGrey}
                >
                  {avaliacao.nome}
                </TextComponent>
              </GroupComponent>
            </Container>
            <Divisor height={1} background={colors.darkGrey} />
          </>
        ))}
      </Container>
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
      <Container
        justifyContent="center"
        alignItem="center"
        width="20%"
        flexDirection="column"
      >
        <TitleSubmitFeedback>
          Envie sua avaliação sobre o produto:
        </TitleSubmitFeedback>
        <GroupComponent width="100%">
          <GroupComponent flexDirection="column">
            <Label>Pontuação:</Label>
            <Dropdown
              value={this.state.pontuacao}
              onChange={(e) => this.setState({ pontuacao: e.target.value })}
            >
              <option value="1">1 estrela</option>
              <option value="2">2 estrela</option>
              <option value="3">3 estrela</option>
              <option value="4">4 estrela</option>
              <option value="5">5 estrela</option>
            </Dropdown>
          </GroupComponent>
          <GroupComponent marginTop={24}>
            <Label>Avaliação:</Label>
            <TextArea
              rows="3"
              style={{ resize: "none", width: "100%", maxWidth: "500px" }}
              placeholder="Digite aqui sua avaliação..."
              value={this.state.texto}
              onChange={(e) => this.setState({ texto: e.target.value })}
            />
          </GroupComponent>
          <GroupComponent>
            <Button
              onClick={() => this.submitAvaliacao()}
              ColorButton={colors.red}
              background={colors.red}
            >
              <TextComponent fontWeight="700" color={colors.white}>
                Enviar Avaliação
              </TextComponent>
            </Button>
          </GroupComponent>
        </GroupComponent>
      </Container>
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
