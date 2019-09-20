import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListadoProductos from './ListaProductos';
import Header from '../../header/Header';

class Productos extends Component {
    render() {
        return (
            <div>
                <Header 
                    titulo = 'Lista de Productos'
                />
                <div className="col-12 col-md-12">
                    <ListadoProductos
                        // empleados = {this.props.empleados}
                        // borrarEmpleado = {this.props.borrarEmpleado}
                    />
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <Link to={`/rrhh/alta-empleado`} className="btn btn-success">Nuevo Producto</Link> 
                    </div>          
                </div>
            </div>
        );
    }
}

export default Productos;