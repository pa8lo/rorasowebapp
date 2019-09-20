import React, { Component } from 'react';
import Producto from './Producto';

//Redux

import { connect } from 'react-redux';
import { mostrarProductos } from '../../../actions/productosAction';

class ListadoProductos extends Component {

    componentDidMount(){
        this.props.mostrarProductos();
    }

    mostrarProductos = () => {
        const productos = this.props.productos;

        if(productos.length === 0) return null

        return (
            <React.Fragment>
                {productos.map(producto => (

                    <Producto
                        key = {producto.id}
                        info = {producto}
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
                        <th scope="col">Precio</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mostrarProductos()}
                    {/* {console.log(this.props.empleados)} */}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    productos : state.productos.productos
});

export default connect(mapStateToProps, {mostrarProductos}) (ListadoProductos);