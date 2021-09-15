export const scrollTo = (section) => {
  const elementSelected = document.getElementById(section)
  elementSelected.scrollIntoView({ behavior: "smooth" })
  console.log("elementSelected", elementSelected)
  console.log("Entrou", section)
}
