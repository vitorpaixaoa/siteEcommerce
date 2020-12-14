import React from 'react';
import Link from 'next/link';

const REDES_SOCIAIS = [
    { nome: "facebook", url: "#"},
    { nome: "instagram", url: "#"},
    { nome: "whatsapp", url: "#"},
];

const RedesSociais = () => (
    <div className="flex-1 flex vertical">
        <div>
            <h2>Redes Sociais</h2>
        <br></br>
        </div>
        <div className="flex-1 flex redes-sociais wrap">
            {
                REDES_SOCIAIS.map((item, index) => (
                    <div className="flex-1 flex" key={item.nome}>
                        <Link href={item.url}  >
                            <i  className={`fa fa-${item.nome} fa-lg`}></i>
                        </Link>
                    </div>
                ))
            }
        </div>

    </div>
)
export default RedesSociais;