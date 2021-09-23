import React, { Component } from "react"
import { connect } from "react-redux"

import Produtos from "../../../components/Listas/Produtos"
import { Container } from "../../../pages/styles/Components/Components"
import { TitlePage } from "./styles"
import EmptyStateHome from "../../../components/EmptyStateHome"
class ProdutosPaginaInicial extends Component {
  render() {
    const emptyArray = new Array(3).fill({
      avaliacoes: [],
      categoria: {},
      createdAt: "",
      descricao: "",
      disponibilidade: false,
      fotos: [],
      loja: "",
      preco: 0,
      promocao: 0,
      sku: "",
      titulo: "",
      updatedAt: "",
      variacoes: [],
      forShowCase: true
    })
    return (
      <Container
        margin="0px 0px 50px 0px"
        flexDirection="column"
        alignItems="center"
       
      > 
        <TitlePage>Lançamentos</TitlePage>
        {this.props.produtos.docs ? (
          <Produtos
            produtos={
              this.props.produtos.docs ? this.props.produtos.docs : emptyArray
            }
            emptyArray={emptyArray}
            itensPorLinha={4}
          />
        ) : (
          <EmptyStateHome
            message="Em manutenção"
            secundaryMessage="Ainda estamos organizando tudo para você. Logo mais retornaremos com novidades"
          />
        )}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  produtos: state.produto.produtos
})
export default connect(mapStateToProps)(ProdutosPaginaInicial)
