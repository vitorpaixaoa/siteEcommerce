import React from 'react';

const DadosDaLoja = () => (
    <div className="flex-1 dados-da-loja">
        <div>
            <h2>Entre em Contato</h2>
            <br/>
        </div>
        <p className="loja-nome">Nome: Loja Zellus</p>
        <p className="loja-CNPJ">CNPJ: 12.345.678/0001-05</p>
        <p className="loja-email">E-mail: <a href="mailto:lojazellus@email.com">lojazellus@email.com</a></p>
        <p className="loja-Telefones">Telefones:</p>
        <p className="loja-telefone">&nbsp;&nbsp;<a href="phone:(98) 3304-6030">(98) 3304-6030</a></p>
        <p className="loja-telefone">&nbsp;&nbsp;<a href="phone:(98) 98126-8532">(98) 98126-8532</a></p>
        <p className="loja-endereco">Av. Castelo Branco, 146 - João Paulo</p>
        <p className="loja-cidade">São Luís/MA - 6405400</p>
    </div>
)

export default DadosDaLoja;