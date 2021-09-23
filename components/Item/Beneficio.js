import React from "react"
import { GroupComponent } from "../../pages/styles/Components/Components"

export default ({ icone, texto }) => (
  <GroupComponent padding={"20px 20px"} alignItems="center">
    <i className={`fa ${icone} fa-1x`}></i>
    <span
      style={{
        paddingTop: "10px",
        fontSize: 14
      }}
      className="text-center"
    >
      {texto}
    </span>
  </GroupComponent>
)
