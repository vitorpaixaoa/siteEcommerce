import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

class Categorias extends Component {

    render(){
        const { categorias } = this.props;
        return(
            <div className="categorias flex  horizontal-mb">
                {
                    categorias.map(categoria => (
                        <Link  href={`/categoria/${categoria.nome}?id=${categoria._id}`} key={categoria._id}>
                            <div  className="categoria-item flex-1 flex flex-center">
                                <span className="text-center" key={categoria.id}>{categoria.nome}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categorias: state.categoria.categorias
})

export default connect(mapStateToProps)(Categorias);