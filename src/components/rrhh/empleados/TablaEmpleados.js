import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListadoEmpleados from './ListaEmpleados';
import Header from '../../header/Header';

class Empleados extends Component {
    render() {
        return (
            <div>
                <Header 
                    titulo = 'Lista de Empleados'
                />
                <div className="col-12 col-md-12">
                    <ListadoEmpleados
                        // empleados = {this.props.empleados}
                        // borrarEmpleado = {this.props.borrarEmpleado}
                    />
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <Link to={`/rrhh/alta-empleado`} className="btn btn-success">Nuevo Empleado</Link> 
                    </div>          
                </div>
            </div>
        );
    }
}

export default Empleados;