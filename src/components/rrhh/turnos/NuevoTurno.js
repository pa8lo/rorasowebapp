import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';

//Componentes
import Paper from '@material-ui/core/Paper';
import Header from '../../header/Header';

//Redux
import { connect } from 'react-redux';
import { agregarRol } from '../../../actions/rolesAction';

//CSS
import '../../../assets/css/empleados/form-alta-empleados.css';

class NuevoTurno extends Component {

    render() {
        return (
            
        <div>
            <Header titulo = 'Alta de Rol'/>
            <div className="table-empleados">
                <Paper className="col-md-8">
                    <div>
                    <form className="col-8">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input ref={this.nombreRef} type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Descripcion</label>
                            <input ref={this.descripcionRef} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Horarios</label>
                            <FormGroup style={{display: 'flex', justifyContent: 'space-between'}}>
                                <InputGroup>
                                <InputGroup.Addon>Horario Inicio</InputGroup.Addon>
                                <FormControl style={{width: 200}} type="time" />
                                </InputGroup>
                                <InputGroup>
                                <InputGroup.Addon>Horario Fin</InputGroup.Addon>
                                <FormControl style={{width: 200}} type="time" />
                                </InputGroup>
                            </FormGroup>
                        </div>
                        <div style={{marginLeft: 370}} className="form-group">
                            <input type="submit" value="Enviar" className="btn btn-primary"/>
                        </div>
                    </form>
                    </div>
                </Paper>
            </div>
        </div>
        );
    }
}


export default NuevoTurno;