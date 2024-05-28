import React from 'react';
import Menu from './Componentes/Menu';
import Cabecera from './Componentes/Cabecera';
import Login from './Login';
import FormularioRegistro from './FormularioRegistro';
import FormularioProducto from './FormularioProducto';
import './App.css';
import Cotizacion from './Cotizacion';
import OrdenCompra from './Ordencompra';

function App() {
  return (
   <div className='container'>
   <Menu/>
   <Cabecera/>
   <Login/>
   <FormularioRegistro/>
   <FormularioProducto />
   <Cotizacion/>
   <OrdenCompra/>
   

   </div>
  );
}

export default App;
