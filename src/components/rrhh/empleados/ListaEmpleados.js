import React, { Component } from 'react';
import Empleado from './Empleado';

//Redux

import { connect } from 'react-redux';
import { mostrarEmpleados } from '../../../actions/empleadosAction';

class ListadoEmpleados extends Component {

    componentDidMount(){
        this.props.mostrarEmpleados();
    }

    mostrarEmpleados = () => {
        const empleados = this.props.empleados;

        if(empleados.length === 0) return null

        return (
            <React.Fragment>
                {empleados.map(empleado => (

                    <Empleado
                        key = {empleado.id}
                        info = {empleado}
                        borrarEmpleado = {this.props.borrarEmpleado}
                    />

                ))}

                {/* { Object.keys(posts).map(post => (
                    <Post
                        key = {post}
                        info = {this.props.posts[post]}
                    />
                ))} */}
                
            </React.Fragment>
        )
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">DNI</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mostrarEmpleados()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    empleados : state.empleados.empleados
});

export default connect(mapStateToProps, {mostrarEmpleados}) (ListadoEmpleados);