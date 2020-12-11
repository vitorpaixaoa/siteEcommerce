import React from 'react';
import NextHeaed from 'next/head';
import { string } from 'prop-types';

const defaultDescricao = '';
const defaultOGURL = '';
const defaultOGImage = '/static/Logo.png';

const Head = props => (
    <NextHeaed>
        <meta charSet="UTF-8" />
        <title>{ props.title || "" }</title>
        <meta
            name="description"
            content={props.description || defaultDescricao} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico"/>
        <meta property="og:url" content={props.url || defaultOGURL} />
        <meta property="og:title" content={props.title || ""} />
        <meta
            property="og:description"
            content={props.description || defaultDescricao} />
        <meta property="twitter:site" content={props.url || defaultOGURL} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <link rel="stylesheet" href="/static/font-awesome.min.css"></link>
        { props.children }
    </NextHeaed>
);

Head.propType = {
    title: string,
    description: string,
    url: string,
    ogImage: string
};

export default Head;