
import React, { useState } from "react";
import './FormularioProducto.css'; 

function FormularioProducto() {
    const [formValues, setFormValues] = useState({
        idproducto: '',
        nombre: '',
        descripcion: '',
        precio: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Formulario enviado', formValues);
        alert('Producto registrado exitosamente');
        // Limpia los campos del formulario
        setFormValues({
            idproducto: '',
            nombre: '',
            descripcion: '',
            precio: ''
        });
    };

    return (
        <div className="producto-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="idproducto">ID Producto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="idproducto"
                        name="idproducto"
                        value={formValues.idproducto}
                        onChange={handleInputChange}
                        placeholder="Ingrese ID del producto"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={handleInputChange}
                        placeholder="Ingrese nombre del producto"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea
                        className="form-control"
                        id="descripcion"
                        name="descripcion"
                        value={formValues.descripcion}
                        onChange={handleInputChange}
                        placeholder="Ingrese descripción del producto"
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="precio">Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        id="precio"
                        name="precio"
                        value={formValues.precio}
                        onChange={handleInputChange}
                        placeholder="Ingrese precio del producto"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Registrar Producto</button>
            </form>
        </div>
    );
}

export default FormularioProducto;
