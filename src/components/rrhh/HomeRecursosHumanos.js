import React, { Component } from 'react';
import Header from '../header/Header';
// import '../../assets/css/empleados/ButtonsRRHH.css';
import { Link } from 'react-router-dom';

class HomeRecursosHumanos extends Component {
    render() {
        return (
            <div>
                <Header 
                    titulo="RECURSOS HUMANOS"
                />
                <Link to={`/rrhh/empleados`} className="btn btn-warning">
                        Empleados
                </Link>
                <Link to={`/rrhh/roles`} className="btn btn-success">
                        Roles
                </Link>
                <Link to={`/rrhh/turnos`} className="btn btn-info">
                        Turnos
                </Link>
            </div>
        );
    }
}

export default HomeRecursosHumanos;