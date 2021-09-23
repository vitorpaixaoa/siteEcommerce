import React from "react"
import Link from "next/link"
import {
  Container,
  GroupComponent
} from "../../pages/styles/Components/Components"
import { colors } from "../../pages/styles/theme"
const Paginas = () => (
  <Container
    alignItems="center"
    flexDirection="column"
    background={colors.lightGrey}
  >
    <h2>Páginas</h2>
    <br />
    <GroupComponent
      height={100}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="/">
        <span>Página Inicial</span>
      </Link>
      <Link href="/carrinho">
        <span>Ver Sacola</span>
      </Link>
      <Link href="/area-cliente">
        <span>Minha Conta</span>
      </Link>
      <Link href="/sobre">
        <span>Sobre a loja</span>
      </Link>
    </GroupComponent>
  </Container>
)

export default Paginas
