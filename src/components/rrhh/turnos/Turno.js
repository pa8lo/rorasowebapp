import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const columnButtonStyle = {
    maxWidth: 130,
    minWidth: 130,
    paddingTop: 10,
};

const buttonStyle = {
    marginLeft: 10
};

const tableStyle = {
    maxWidth: 50,
    minWidth: 50
}

class Turno extends Component {

    render() {
        const {Name} = this.props.info

        return (
            <React.Fragment>
            <tr>
                <td className="col-6 col-md-6" style={{tableStyle, textAlign: "center"}} >{Name}</td>
                <td style={columnButtonStyle}>
                    <Link style={buttonStyle} to={{
                        pathname : `/rrhh/empleados`,
                        state : this.props.info
                        }} className="btn btn-primary">
                        Ver
                    </Link>

                    <Link style={buttonStyle} to={{
                        pathname : `/rrhh/editar-empleados`,
                        state : this.props.info
                        }} className="btn btn-warning">
                        Editar
                    </Link>

                    <button style={buttonStyle} onClick={ this.eliminarEmpleado } type="button" className="btn btn-danger">Borrar</button>
                </td> 
            </tr>
            
            </React.Fragment>
        );
    }
}

export default Turno;