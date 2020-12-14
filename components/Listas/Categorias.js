import React, { Component } from 'react';
import Link from 'next/link';

class Categorias extends Component {
    state = {
        categorias: [
            { id: 1, nome: "Blusas"},
            { id: 2, nome: "Calças"},
            { id: 3, nome: "Shorts"},
            { id: 4, nome: "Vestidos"},
            { id: 5, nome: "Camisas"},
            { id: 6, nome: "Bermudas"},
            { id: 7, nome: "Macacões"},
            { id: 8, nome: "Acessórios"},
            { id: 9, nome: "Sapatos"},
            
        ]
    }

    render(){
        const { categorias } = this.state;
        return(
            <div className="categorias flex  horizontal-mb">
                {
                    categorias.map(categoria => (
                        <Link href={`/categoria/${categoria.nome}?id=${categoria.id}`} key={categoria.id}>
                            <div className="categoria-item flex-1 flex flex-center">
                                <span className="text-center" key={categoria.id}>{categoria.nome}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        )
    }
}

export default Categorias;