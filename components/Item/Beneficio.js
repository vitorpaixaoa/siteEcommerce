import React from "react"
import { GroupComponent } from "../../pages/styles/Components/Components"

export default ({ icone, texto }) => (
  <GroupComponent padding={"10px 20px"} alignItem="center">
    <i className={`fa ${icone} fa-2x`}></i>
    <span
      style={{
        paddingTop: "10px"
      }}
      className="text-center"
    >
      {texto}
    </span>
  </GroupComponent>
)
