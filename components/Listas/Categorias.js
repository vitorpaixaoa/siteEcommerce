import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import {CategoryItem, Container} from './styles'
class Categorias extends Component {
    render(){
        const { categorias } = this.props;
        return(
            <Container>
                {
                    categorias.map(categoria => (
                        <>
                        <Link  href={`/categoria/${categoria.nome}?id=${categoria._id}`} key={categoria._id}>
                        <CategoryItem>
                                <span className="text-center" key={categoria.id}>{categoria.nome}</span>
                        </CategoryItem>
                        </Link>
                        </>
                    ))
                }
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    categorias: state.categoria.categorias
})

export default connect(mapStateToProps)(Categorias);