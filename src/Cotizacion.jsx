import React, { useState } from 'react';
import './Cotizacion.css';

function Cotizacion() {
  // Almacenar los datos de la cotización
  const [cotizacion, setCotizacion] = useState({
    idCotizacion: '',
    fecha: '',
    idCliente: '',
    precioUnitario: ''
  });

  // Mensaje
  const [mensaje, setMensaje] = useState('');

  // Campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCotizacion({ ...cotizacion, [name]: value });
  };

  // Envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar la cotización 
    console.log('Cotización enviada:', cotizacion);
    // Agregar mensaje de confirmación
    setMensaje('Cotización enviada correctamente');
    // Limpiar el formulario después de enviar la cotización
    setCotizacion({
      idCotizacion: '',
      fecha: '',
      idCliente: '',
      precioUnitario: ''
    });
  };

  return (
    <div>
      <h2>Crear Cotización</h2>
      {/* Mostrar el mensaje */}
      {mensaje && <p>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idCotizacion">ID Cotización:</label>
          <input
            type="text"
            id="idCotizacion"
            name="idCotizacion"
            value={cotizacion.idCotizacion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={cotizacion.fecha}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="idCliente">ID Cliente:</label>
          <input
            type="text"
            id="idCliente"
            name="idCliente"
            value={cotizacion.idCliente}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="precioUnitario">Precio Unitario:</label>
          <input
            type="text"
            id="precioUnitario"
            name="precioUnitario"
            value={cotizacion.precioUnitario}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Crear Cotización</button>
      </form>
    </div>
  );
}

export default Cotizacion;

