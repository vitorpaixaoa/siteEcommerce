import React, { Component } from 'react';
import  Router  from 'next/router';
import actions from '../../redux/actions';
import { connect } from 'react-redux';

class Pesquisa extends Component {
    state = { termo: "" }

    submitPesquisa(){
        const { termo } = this.state;
        this.props.fetchTermo(termo);
        Router.push({ pathname: "/pesquisa", query: { termo } })
    }

    render(){
        return(
            <div className="flex-3 flex flex-center ">
                <input 
                    name="pesquisa"
                    value={this.state.termo}
                    onChange={ e => this.setState({ termo: e.target.value })} 
                    placeholder="Proucure aqui o seu produto" 
                    className="input-pesquisa" />
                <button 
                    onClick={() => this.submitPesquisa()}
                    className="button-pesquisa" >
                <i className="fa fa-search"></i>
                </button>
            </div>
        )
    }
}

export default connect(null, actions)(Pesquisa);