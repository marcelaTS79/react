import React from "react";
import PropTypes from 'prop-types';
import '../App.css';
import Logo from '../img/LOGO STEIR.png';

//Creo arreglo de objetos que contienen nombre y url para cada elemento
const Elementos = [
    { text: 'Inicio', url: '/Inicio' },
    { text: 'Servicio', url : '/Servicio'},
    { text: 'Contacto', url : '/Contacto'},
    { text: 'Login', url : '/Login'},
];

//Creo componente funcional para elemento menu
function MenuItem({text, url}){
    return (
        <a href={url} className="item">
            {text}
        </a>
    );

}

// Defino PropTypes para el componente MenuItem
MenuItem.propTypes = {
    text: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired 
};

//Creo componente funcional para Menu
function Menu(){
    return(
        <nav className="bloque">
            {Elementos.map((item, index) => (
                <MenuItem key={item.text} text={item.text} url={item.url}/>
            )) }
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
        </nav>
    );
}

export default Menu;