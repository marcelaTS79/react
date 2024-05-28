import React, {useState} from "react";
import Login from "./Login";
import './FormularioRegistro.css'; 

function FormularioRegistro(){
    const [registrado, setRegistrado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Obtener valores de campos del formulario
        const nombresApellidos = event.target.nombresApellidos.value;
        const tipo = event.target.tipo.value;
        const dni = event.target.dni.value;
        const correo = event.target.icorreo.value;
        const telefono = event.target.telefono.value;
        const tos = event.target.tos.checked; // Checkbox de términos y condiciones
        const contraseña = event.target.contraseña.value;
        const contraseñaV = event.target.contraseñaV.value;

        // Validar campos según los requisitos usando expresiones regulares
        if (!/^[a-zA-Z\s]+$/.test(nombresApellidos)) {
            alert('Los nombres y apellidos solo deben contener letras y espacios');
            return;
        }

        if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[@$*]).{10}$/.test(contraseña)) {
            alert('La contraseña debe contener números, letras mayúsculas y un carácter especial (@, $, *). Longitud máxima de 10 caracteres');
            return;
        }

        if (contraseña !== contraseñaV) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if ((telefono.length !== 7 && telefono.length !== 9) ||
           (telefono.length === 7 && !["2", "4", "5", "6"].some(prefix => telefono.startsWith(prefix))) ||
           (telefono.length === 9 && !telefono.startsWith("9"))) {
           alert('El teléfono debe tener 7 dígitos y comenzar con 2, 4, 5 o 6; si tiene 9 dígitos, comenzar con 9');
           return;
        }

        if ((tipo === '1' && !/^\d{8}$/.test(dni)) ||
            (tipo === '2' && !/^[\w\d]{12}$/.test(dni))) {
            alert('El dni debe tener 8 dígitos para el tipo DNI y 12 caracteres alfanuméricos para el tipo Carnet de Extranjería');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(correo)) {
            alert('Ingrese un correo válido');
            return;
        }

        if (!tos) {
            alert('Acepte los términos y condiciones del servicio');
            return;
        }

        // FIN DE VALIDACIONES

        // Si todos los campos son válidos, mostrar un mensaje agradeciendo y establecer el estado de registro en verdadero
        alert('Gracias por registrarse');
        setRegistrado(true);
    };

    return (
        <div className="registro-container">
            {registrado ? (
                <Login /> // mostrar componente Login si el usuario se ha registrado
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombresApellidos">Nombres y Apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombresApellidos"
                            name="nombresApellidos"
                            placeholder="Ingrese nombres y apellidos"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tipo">Tipo</label>
                        <select id="tipo" name="tipo" className="form-control" required>
                            <option value="1">DNI</option>
                            <option value="2">Carnet de Extranjería</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dni">DNI</label>
                        <input
                            type="text"
                            className="form-control"
                            id="dni"
                            name="dni"
                            placeholder="Ingrese DNI"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="icorreo">Correo Electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="icorreo"
                            name="icorreo"
                            placeholder="Ingrese correo"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="text"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            placeholder="Ingrese teléfono"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="contraseña"
                            name="contraseña"
                            placeholder="Ingrese contraseña"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contraseñaV">Verificar Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="contraseñaV"
                            name="contraseñaV"
                            placeholder="Verifique contraseña"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            id="tos"
                            name="tos"
                            className="form-check-input"
                            required
                        />
                        <label htmlFor="tos" className="form-check-label">
                            Acepto los términos y condiciones
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </form>
            )}
        </div>
    );
}

export default FormularioRegistro;
