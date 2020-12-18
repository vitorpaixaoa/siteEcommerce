import React, { Component } from 'react';

class Avaliacoes extends Component{

    renderAvaliacoes(){
        return(
            <div className="avaliacoes-items flex horizontal wrap no-wrap-mb">
                <div className="avaliacao flex-1 flex vertical wrap-3">
                    <div className="avaliaco-texto flex-3 flex texto">
                        <p>Ótimo conjunto, perfeito para festa.</p> 
                    </div>
                    <div className="avaliacao-dados flex">
                        <div className="avaliacao-nome flex-1 flex" >
                            <small>Sabrino Jason</small>
                        </div>
                        <div className="avaliacao-pontuacao flex-1 flex">
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                        </div>
                    </div>
                </div>
            {/* ----------------------------------------------------- */}
                <div className="avaliacao flex-1 flex vertical wrap-3">
                    <div className="avaliaco-texto flex-3 flex texto">
                        <p>Ótimo conjunto pena que não acertei o tamanho</p> 
                    </div>
                    <div className="avaliacao-dados flex">
                        <div className="avaliacao-nome flex-1 flex" >
                            <small>Josefa de Raio laser</small>
                        </div>
                        <div className="avaliacao-pontuacao flex-1 flex">
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------- */}
                <div className="avaliacao flex-1 flex vertical wrap-3">
                    <div className="avaliaco-texto flex-3 flex texto">
                        <p>Meu cachorro comeu, mas era lindo.</p> 
                    </div>
                    <div className="avaliacao-dados flex">
                        <div className="avaliacao-nome flex-1 flex" >
                            <small>Blobls Carlons</small>
                        </div>
                        <div className="avaliacao-pontuacao flex-1 flex">
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------- */}
            </div>
        )
    }

    renderFormularioAvaliacoes(){
        return(
            <div className="avaliacoes-form">
                <h4>Envie sua avaliação sobre o produto:</h4>
                <div className="flex vertical">
                    <div className="flex horizontal">
                        <label>Pontuação:</label>
                        <select>
                            <option value="1">1 estrela</option>
                            <option value="2">2 estrela</option>
                            <option value="3">3 estrela</option>
                            <option value="4">4 estrela</option>
                            <option value="5">5 estrela</option>
                        </select>
                    </div>
                    <div className="flex vertical">
                        <label>Avaliação:&nbsp;</label> 
                        <textarea rows="3" style={{ resize: "none", width: "100%", maxWidth:"500px" }}
                        placeholder="Digite aqui sua avaliação..." />
                    </div>
                    <div>
                        <button onClick={() => alert("Avaliação enviada")} className="btn btn-primary btn-lg">
                            <span>Enviar Avaliação</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div className="Avaliacoes flex  vertical">
                <h2 >Avaliações</h2>
                { this.renderAvaliacoes() }
                <br/>
                { this.renderFormularioAvaliacoes() }
            </div>
        )
    }
}

export default Avaliacoes;