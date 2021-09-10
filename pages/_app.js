import  { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
import {GlobalStyles} from './styles/GlobalStyle'
import Head from 'next/head'

class Principal extends App { //função exclusiva do next 
    static async getInitialProps({ Component, ctx }){
        return {
            pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        }
    }

    render(){
        const { Component, pageProps, store } = this.props;
        return(
            <>
            <Head>
            <script src="https://kit.fontawesome.com/7c3b0a9d92.js" crossorigin="anonymous"></script>
            </Head>
                <Provider store={store}>
                    <GlobalStyles/>
                    <Component   {...pageProps} />
                </Provider>
                </>
        );
    }
}

export default withRedux(initStore)(Principal);