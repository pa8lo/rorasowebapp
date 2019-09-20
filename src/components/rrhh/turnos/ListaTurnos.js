import React, { Component } from 'react';
import Turno from './Turno'

//Redux
import { connect } from 'react-redux';
import { mostrarRoles } from '../../../actions/rolesAction';

class ListaTurnos extends Component {

    componentDidMount(){
        this.props.mostrarRoles();
    }

    mostrarRoles = () => {
        const roles = this.props.roles;

        if(roles.length === 0) return null

        return (
            <React.Fragment>
                {roles.map(rol => (

                    <Turno
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
            <table className="table col-12 col-md-12">
                <thead>
                    <tr>
                        <th scope="col" className="col-6 col-md-6" style={{textAlign: "center"}}>Turno</th>
                        <th scope="col" className="col-6 col-md-6">Acciones</th>
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

export default connect(mapStateToProps, {mostrarRoles}) (ListaTurnos);