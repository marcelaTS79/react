import React from "react";
import ImagenCabecera from '../img/Taller.jpg';
import '../App.css';

//Defino componente funcional para titulo cabecera
function Titulo(){
    return (
    <h1 className="h1cab">
        Taller de Escultura Religiosa R.S.G
    </h1>
    );
}

//Defino componente funcional para Imagen
function Imagen(){
    return(
        <img className="imgcab" alt="Cabecera" src={ImagenCabecera}/>
    );
}

//Defino componente principal
function Cabecera(){
    return(
        <div className="bloque">
        <Titulo/>
        <Imagen/>

        </div>
    );
}

export default Cabecera;