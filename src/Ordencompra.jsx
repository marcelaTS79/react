import React, { useState } from 'react';
import './Ordencompra.css';

function OrdenCompra() {
  // Datos de la orden de compra
  const [ordenCompra, setOrdenCompra] = useState({
    idOrdenCompra: '',
    fecha: '',
    idCliente: '',
    total: ''
  });

  // Estado del mensaje
  const [mensaje, setMensaje] = useState('');

  // Cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrdenCompra({ ...ordenCompra, [name]: value });
  };

  // Envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simular envío de la orden de compra 
    console.log('Orden de compra enviada:', ordenCompra);
    // Agregar mensaje de confirmación
    setMensaje('Orden de compra generada correctamente');
    // Limpiar el formulario después de enviar la orden de compra
    setOrdenCompra({
      idOrdenCompra: '',
      fecha: '',
      idCliente: '',
      total: ''
    });
  };

  return (
    <div>
      <h2>Generar Orden de Compra</h2>
      {/* Mostrar el mensaje */}
      {mensaje && <p>{mensaje}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idOrdenCompra">ID Orden de Compra:</label>
          <input
            type="text"
            id="idOrdenCompra"
            name="idOrdenCompra"
            value={ordenCompra.idOrdenCompra}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={ordenCompra.fecha}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="idCliente">ID Cliente:</label>
          <input
            type="text"
            id="idCliente"
            name="idCliente"
            value={ordenCompra.idCliente}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="total">Total:</label>
          <input
            type="text"
            id="total"
            name="total"
            value={ordenCompra.total}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Generar Orden de Compra</button>
      </form>
    </div>
  );
}

export default OrdenCompra;
