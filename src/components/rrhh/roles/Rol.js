import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { eliminarRol } from '../../../actions/rolesAction'

const columnButtonStyle = {
    maxWidth: 130,
    minWidth: 130,
    paddingTop: 10,
};

const buttonStyle = {
    marginLeft: 10
};

const tableStyle = {
    maxWidth: 130,
    minWidth: 130
}

class Rol extends Component {

    eliminarRol = () => {

        const {id} = this.props.info;

        this.props.eliminarRol(id);
    }

    render() {
        const {id, Name, Description} = this.props.info

        return (
            <React.Fragment>
            <tr>
                <td style={tableStyle}>{Name}</td>
                <td style={tableStyle}>{Description}</td>
                <td style={columnButtonStyle}>
                    <Link style={buttonStyle} to={{
                        pathname : `/rrhh/roles/${id}`,
                        state : this.props.info
                        }} className="btn btn-primary">
                        Ver
                    </Link>

                    <Link style={buttonStyle} to={{
                        pathname : `/rrhh/editar-roles/${id}`,
                        state : this.props.info
                        }} className="btn btn-warning">
                        Editar
                    </Link>

                    <button style={buttonStyle} onClick={ this.eliminarRol } type="button" className="btn btn-danger">Borrar</button>
                </td> 
            </tr>
            
            </React.Fragment>
        );
    }
}

export default connect(null, {eliminarRol}) (Rol);