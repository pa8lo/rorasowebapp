import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListaTurnos from './ListaTurnos';
import Header from '../../header/Header';

class Turnos extends Component {
    render() {
        return (
            <div>
                <Header 
                    titulo = 'Lista de Turnos'
                />
                <div className="col-12 col-md-12">
                    <ListaTurnos/>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: 500, marginLeft: 350, paddingTop: 50}}>
                        <div style={{justifyContent:'left'}}>
                            <Link to={`/rrhh/alta-turno`} className="btn btn-success">Nuevo Turno</Link> 
                        </div>
                        {/* <div style={{justifyContent:'right'}}>
                            <Link to={`/rrhh/alta-rol`} className="btn btn-success">Asignar Turno</Link>  
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Turnos;