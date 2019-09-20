import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { eliminarEmpleado } from '../../../actions/empleadosAction'

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

class Producto extends Component {

    // eliminarEmpleado = () =>{
    //     const {id} = this.props.info;

    //     this.props.eliminarEmpleado(id);
    // }
    
    render() {
        const {id, Name, Description, Amount, Category} = this.props.info

        return (
            <React.Fragment>
            <tr>
                <td style={tableStyle}>{Name}</td>
                <td style={tableStyle}>{Description}</td>
                <td style={tableStyle}>{Amount}</td>
                <td style={tableStyle}>{Category}</td>
                <td style={columnButtonStyle}>
                    <Link style={buttonStyle} to={{
                        pathname : `/rrhh/empleados/${id}`,
                        state : this.props.info
                        }} className="btn btn-primary">
                        Ver
                    </Link>

                    <Link style={buttonStyle} to={{
                        pathname : `/rrhh/editar-empleados/${id}`,
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

export default connect(null, {}) (Producto);