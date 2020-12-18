import React, { Component } from 'react';

class Pesquisa extends Component {
    state = { termo: "" }

    submitPesquisa(){
        console.log(this.state.termo);
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

export default Pesquisa;