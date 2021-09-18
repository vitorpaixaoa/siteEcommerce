import React from "react"
import Link from "next/link"
import { Img } from "./styles"
const LogoCabecalho = () => (
  <div>
    <Link href="/">
      <Img src="/static/img-site/Logo_Branca.png" />
    </Link>
  </div>
)

export default LogoCabecalho
