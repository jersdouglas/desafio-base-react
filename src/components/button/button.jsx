import React from "react";
import './button.css';

const Button = () => {

    return (
        <button className = 'btn' onClick={() => alert('Botão foi Clicado!')}>
            Clique aqui
        </button>
    )
}

export default Button;