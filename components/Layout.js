import Head from './Head';
import Style from './Style';

const Layout = ({ children, title, description, url, ogImage, pagSeguro }) => (
    <div className="layout-supremo-mb LayoutSupremo">
        <br/>
        <div className="Layout">
            <br/>
        <Head
            title={title}
            description={description}
            url={url}
            ogImage={ogImage}
            pagSeguro ={pagSeguro} ></Head>
            <Style />
        <div className="body">
            { children }
        </div>
        <br/>
        <footer>
            <div className="flex flex-center">
                <small>
                    &copy; Loja Zellus - Moda e estilo.
                </small>
            </div>
        </footer>
    </div>
    <br/>
    </div>
);

export default Layout;