import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListaRoles from './ListaRoles';
import Header from '../../header/Header';

class Roles extends Component {
    render() {
        return (
            <div>
                <Header 
                    titulo = 'Lista de Roles'
                />
                <div className="col-12 col-md-12">
                    <ListaRoles
                        // empleados = {this.props.empleados}
                        // borrarEmpleado = {this.props.borrarEmpleado}
                    />
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <Link to={`/rrhh/alta-rol`} className="btn btn-success">Nuevo Rol</Link> 
                    </div>          
                </div>
            </div>
        );
    }
}

export default Roles;