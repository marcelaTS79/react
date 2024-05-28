import React, { useState } from "react";
import FormularioRegistro from "./FormularioRegistro";
import './Login.css';

// Defino Lista de usuarios con contraseñas
const usuarios = [
    { nombreusuario: 'Jefe colaboradores', contraseña: 'sombra79' },
    { nombreusuario: 'secretaria', contraseña: 'mmiranda2013' }
];

let intento = 0;

// Componente principal
const Login = () => {
    // Defino estados iniciales para nombre usuario y contraseña
    const [nombreusuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [mostrarRegistro, setMostrarRegistro] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Buscar si existe un usuario con credenciales ingresadas
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombreusuario === nombreusuario && usuario.contraseña === contraseña
        );

        // Mostrar mensaje de bienvenido si encuentra usuario o mostrar formulario
        if (usuarioEncontrado) {
            alert(`¡Bienvenido ${usuarioEncontrado.nombreusuario}`);
        } else {
            intento++;
            if (intento < 2) {
                alert('Usuario y/o contraseña incorrectos');
            } else {
                alert('Credenciales incorrectas, por favor registrese');
                setMostrarRegistro(true);
            }
        }
    };

    // Renderizar componente Login y componente Formulario Registro condicionalmente
    return (
        <div className="container">
            {!mostrarRegistro ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="iusuario">Nombre de Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="iusuario"
                            name="nombreusuario"
                            placeholder="Ingrese nombre de usuario"
                            value={nombreusuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="icontraseña">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="icontraseña"
                            name="contraseña"
                            placeholder="Ingrese contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
            ) : (
                <FormularioRegistro />
            )}
        </div>
    );
};

export default Login;
