import React, { Component } from 'react';
import Categoria from './Categoria';

//Redux

import { connect } from 'react-redux';
import { mostrarCategorias } from '../../../actions/categoriasAction';

class ListadoCategorias extends Component {

    componentDidMount(){
        this.props.mostrarCategorias();
    }

    mostrarCategorias = () => {
        const categorias = this.props.categorias;

        if(categorias.length === 0) return null

        return (
            <React.Fragment>
                {categorias.map(categoria => (

                    <Categoria
                        key = {categoria.id}
                        info = {categoria}
                        // borrarEmpleado = {this.props.borrarEmpleado}
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
                        <th scope="col">Descripcion</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mostrarCategorias()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    categorias : state.categorias.categorias
});

export default connect(mapStateToProps, {mostrarCategorias}) (ListadoCategorias);