import React, { Component } from "react"
import styled from "styled-components"

const IMAGES = [
  "/static/banners/iphone11-gallery1-2019.jpeg",
  "/static/banners/iphone11-gallery2-2019.jpeg",
  "/static/banners/iphone11-gallery3-2019.jpeg",
  "/static/banners/iphone11-gallery4-2019.jpeg"
]
export const Container = styled.div`
  height: 100%;
  width: 100vw;
`
class Banners extends Component {
  state = {
    img: IMAGES[0],
    idx: 0
  }

  onChange = (index) => {
    let opcao =
      index < 0 ? IMAGES.length - 1 : index >= IMAGES.length ? 0 : index
    this.setState({ img: IMAGES[opcao], idx: opcao })
  }

  componentDidMount() {
    this.scroll = window.setInterval(
      () => this.onChange(this.state.idx + 1),
      5000
    )
  }

  componentWillUnmount() {
    window.clearInterval(this.scroll)
  }

  renderBanners() {
    const { img } = this.state
    return (
      <Container margin="50px 0 0 0" >
        <img src={img} className="banner" alt="banner" width="100%" />
      </Container>
    )
  }

  render() {
    return <Container>{this.renderBanners()}</Container>
  }
}
export default Banners
