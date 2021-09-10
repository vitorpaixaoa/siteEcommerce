import React from "react"
import Link from "next/link"
import { SocialMediaContainer, SocialMediaContent } from "./styles"
const REDES_SOCIAIS = [
  { nome: "facebook", url: "#" },
  { nome: "instagram", url: "#" },
  { nome: "whatsapp", url: "#" }
]

const RedesSociais = () => (
  <SocialMediaContainer>
    <div>
      <h2>Redes Sociais</h2>
      <br></br>
    </div>
    <SocialMediaContent>
      {REDES_SOCIAIS.map((item, index) => (
        <div className="flex-1 flex" key={item.nome}>
          <Link href={item.url}>
            <i className={`fa fa-${item.nome} fa-lg`}></i>
          </Link>
        </div>
      ))}
    </SocialMediaContent>
  </SocialMediaContainer>
)
export default RedesSociais
