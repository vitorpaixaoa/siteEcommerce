export const scrollTo = (section) => {
  const elementSelected = document.getElementById(section)
  elementSelected.scrollIntoView({ behavior: "smooth" })
}
