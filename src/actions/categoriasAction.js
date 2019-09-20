import { MOSTRAR_CATEGORIAS, MOSTRAR_CATEGORIA, AGREGAR_CATEGORIA, EDITAR_CATEGORIA, BORRAR_CATEGORIA } from './types';
import axios from 'axios';

// CSS
import Swal from 'sweetalert2'

export const mostrarCategorias = () => async dispatch => {
    const categorias = await axios.get('http://localhost:1337/Category/Categories',
    { headers: { 'access-token': localStorage.getItem('access-token')}});

    dispatch({
        type : MOSTRAR_CATEGORIAS,
        payload : categorias.data
    })
}

export const mostrarCategoria = (id) => async dispatch => {
    const categoria = await axios.get(`http://localhost:1337/Category/Category?id=${id}`,
    { headers: { 'access-token': localStorage.getItem('access-token')}})


    dispatch({
        type: MOSTRAR_CATEGORIA,
        payload: categoria.data
    });
}

export const eliminarCategoria = (id) => async dispatch => {
    await axios.post("http://localhost:1337/Category/DeleteCategory",{'id': id},
    { headers: { 'access-token': localStorage.getItem('access-token')}})
        .then(res => {
            if(res.status === 200){
                Swal.fire({
                    title: 'Correcto!',
                    text: 'Se ha borrado una categoria',
                    type: 'success',
                    confirmButtonText: 'Sera Redirigido'
                })
                setTimeout(function(){ 
                    window.location.href = "http://localhost:3000/modulo";
                }, 3500);
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Se ha producido un error al intentar borrar la categoria',
                    type: 'error',
                    confirmButtonText: 'Reintentar'
                })
                return;
            }
            
        })
        .catch(err => {
            Swal.fire({
                title: 'Error!',
                text: 'El Servidor no ha respondido la solicitud',
                type: 'error',
                confirmButtonText: 'Reintentar'
            })
            return;
        })

    dispatch({
        type: BORRAR_CATEGORIA,
        payload: id
    })
}

export const editarCategoria = (categoria) => async dispatch => {
    // console.log(empleado);
    const {name, description, id} = categoria;

    const data = {
        Categoria : {
            id : id,
            Name : name,
            Description : description
        }
    }

    await axios.post("http://localhost:1337/Category/UpdateCategory",data,
    {headers: { 'access-token': localStorage.getItem('access-token')}})
    .then(res => {
        if(res.status === 200 || res.status === 500){
            Swal.fire({
                title: 'Correcto!',
                text: 'Se ha actualizado una categoria',
                type: 'success',
                confirmButtonText: 'Sera Redirigido'
            })
            setTimeout(function(){ 
                window.location.href = "http://localhost:3000/modulo";
            }, 3500);
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'Se ha producido un error al intentar actualizar la categoria',
                type: 'error',
                confirmButtonText: 'Reintentar'
            })
            return;
        }
        
    })
    .catch(err => {
        Swal.fire({
            title: 'Error!',
            text: 'El Servidor no ha respondido la solicitud',
            type: 'error',
            confirmButtonText: 'Reintentar'
        })
        return;
    })

    dispatch({
        type: AGREGAR_CATEGORIA,
        payload: categoria
    })
}

export const agregarCategoria = (categoria) => async dispatch => {

    // console.log(empleado);
    const {name, description} = categoria;

    const data = {
        Name : name,
        Description : description
    }
    await axios.post("http://localhost:1337/Category/CreateCategory",data,
    {headers: { 'access-token': localStorage.getItem('access-token')}})
    .then(res => {
        if(res.status === 200 || res.status === 500){
            Swal.fire({
                title: 'Correcto!',
                text: 'Se ha añadido una nueva categoria',
                type: 'success',
                confirmButtonText: 'Sera Redirigido'
            })
            setTimeout(function(){ 
                window.location.href = "http://localhost:3000/modulo";
            }, 3500);
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'Se ha producido un error al intentar crear la categoria',
                type: 'error',
                confirmButtonText: 'Reintentar'
            })
            return;
        }
        
    })
    .catch(err => {
        Swal.fire({
            title: 'Error!',
            text: 'El Servidor no ha respondido la solicitud',
            type: 'error',
            confirmButtonText: 'Reintentar'
        })
        return;
    })

    dispatch({
        type: AGREGAR_CATEGORIA,
        payload: categoria
    })
}