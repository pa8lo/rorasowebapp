import { MOSTRAR_PRODUCTOS, MOSTRAR_PRODUCTO, AGREGAR_PRODUCTO, EDITAR_PRODUCTO, BORRAR_PRODUCTO } from './types';
import axios from 'axios';

//CSS
// import Swal from 'sweetalert2'

export const mostrarProductos = () => async dispatch => {
    const productos = await axios.get('http://localhost:1337/Product/Products',
    { headers: { 'access-token': localStorage.getItem('access-token')}});

    dispatch({
        type : MOSTRAR_PRODUCTOS,
        payload : productos.data
    })
}