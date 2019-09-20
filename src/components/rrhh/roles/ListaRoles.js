import React, { Component } from 'react';
import Rol from './Rol'

//Redux
import { connect } from 'react-redux';
import { mostrarRoles } from '../../../actions/rolesAction';

class ListaRoles extends Component {

    componentDidMount(){
        this.props.mostrarRoles();
    }

    mostrarRoles = () => {
        const roles = this.props.roles;

        if(roles.length === 0) return null

        return (
            <React.Fragment>
                {roles.map(rol => (

                    <Rol
                        key = {rol.id}
                        info = {rol}
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
                        <th scope="col">Nombre</th>
                        <th scope="col">Detalle</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mostrarRoles()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    roles : state.roles.roles
});

export default connect(mapStateToProps, {mostrarRoles}) (ListaRoles);