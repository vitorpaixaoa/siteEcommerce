import Head from "./Head"
import Style from "./Style"

const Layout = ({ children, title, description, url, ogImage, pagSeguro }) => (
  <div>
    <div>
      <Head
        title={title}
        description={description}
        url={url}
        ogImage={ogImage}
        pagSeguro={pagSeguro}
      ></Head>
      <div className="body">{children}</div>
      <footer></footer>
    </div>
  </div>
)

export default Layout
