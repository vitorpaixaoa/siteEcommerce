import React from 'react';
import Link from 'next/link';
import {Img} from './styles'
const LogoCabecalho = () => (
    <div className="flex-2 flex flex-center">
        <Link href="/">
            <Img src="/static/Logo.png"/>
        </Link>
    </div>
)

export default LogoCabecalho;