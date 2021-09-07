import React, { Component } from "react"
import Router from "next/router"
import actions from "../../redux/actions"
import { connect } from "react-redux"
import { SearchImage, Container, Icon, InputDiv } from "./styles"
class Pesquisa extends Component {
  state = {
    termo: "",
    isOpenSearchBar: false
  }

  submitPesquisa() {
    const { termo } = this.state
    this.props.fetchTermo(termo)
    Router.push({ pathname: "/pesquisa", query: { termo } })
  }

  handleSearch() {}
  render() {
    const { isOpenSearchBar } = this.state
    return (
      <Container isOpenSearchBar={isOpenSearchBar}>
        {isOpenSearchBar ? (
          <InputDiv isOpenSearchBar={isOpenSearchBar}>
            <SearchImage
              onClick={() => this.submitPesquisa()}
              src={"/static/img-site/search.svg"}
            />
            <input
              name="pesquisa"
              value={this.state.termo}
              onChange={(e) => this.setState({ termo: e.target.value })}
              placeholder="Proucure aqui o seu produto"
              className="input-pesquisa"
            />
            <Icon>
              <i
                onClick={() =>
                  this.setState({ isOpenSearchBar: !isOpenSearchBar })
                }
                class="fas fa-times fa-1x"
              ></i>
            </Icon>
          </InputDiv>
        ) : (
          <SearchImage
            onClick={() => this.setState({ isOpenSearchBar: !isOpenSearchBar })}
            src={"/static/img-site/search.svg"}
          />
        )}
      </Container>
    )
  }
}

export default connect(null, actions)(Pesquisa)
