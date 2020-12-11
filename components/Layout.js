import Head from './Head';
import Style from './Style';

const Layout = ({ children, title, description, url, ogImage }) => (
    <div>
        <Head
            title={title}
            description={description}
            url={url}
            ogImage={ogImage} ></Head>
        <Style />
        <div className="body">
            { children }
        </div>
        <footer>
            <div className="flex flex-center">
                <small>
                    &copy; Loja Zellus - Moda e estilo.
                </small>
            </div>
        </footer>
    </div>
);

export default Layout;