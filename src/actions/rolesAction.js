import { MOSTRAR_ROLES, MOSTRAR_ROL, AGREGAR_ROL, EDITAR_ROL, BORRAR_ROL } from './types';
import axios from 'axios';

//CSS
import Swal from 'sweetalert2'

export const mostrarRoles = () => async dispatch => {
    const roles = await axios.get('http://localhost:1337/Rol/rols',
    { headers: { 'access-token': localStorage.getItem('access-token')}});

    dispatch({
        type : MOSTRAR_ROLES,
        payload : roles.data
    })
}

export const mostrarRol = (id) => async dispatch => {
    const rol = await axios.get(`http://localhost:1337/Rol/rol?id=${id}`,
    { headers: { 'access-token': localStorage.getItem('access-token')}});

    dispatch({
        type : MOSTRAR_ROL,
        payload : rol.data
    });
}


//Se elimino dispatch para sincronizar con el server
export const editarRol = (rol) => async dispatch => {
    
    const {id, nombre, descripcion, permisos} = rol;

    const data = {
        rol : {
            id : id,
            Name : nombre,
            Description : descripcion,
        },
        Authorizations : permisos
    }

    console.log(data);

    // await axios.post("http://localhost:1337/Rol/UpdateRol",data,
    // {headers: { 'access-token': localStorage.getItem('access-token')}})
    // .then(res => {
    //     if(res.status === 200){
    //         Swal.fire({
    //             title: 'Correcto!',
    //             text: 'Se ha editado un rol',
    //             type: 'success',
    //             confirmButtonText: 'Sera Redirigido'
    //         })
    //         setTimeout(function(){ 
    //             window.history.back();
    //         }, 3500);
    //     }
    //     else{
    //         Swal.fire({
    //             title: 'Error!',
    //             text: 'Se ha producido un error al intentar editar el rol',
    //             type: 'error',
    //             confirmButtonText: 'Reintentar'
    //         })
    //         return;
    //     }
    // })
    // .catch(err => {
    //     Swal.fire({
    //         title: 'Error!',
    //         text: 'El Servidor no ha respondido la solicitud',
    //         type: 'error',
    //         confirmButtonText: 'Reintentar'
    //     })
    //     return;
    // })

    dispatch({
        type: EDITAR_ROL,
        payload: rol
    })
    
}

export const eliminarRol = (id) => async dispatch => {
    await axios.post("http://localhost:1337/Rol/DeleteRol",{'id': id},
    { headers: { 'access-token': localStorage.getItem('access-token')}})
        .then(res => {
            if(res.status === 200){
                Swal.fire({
                    title: 'Correcto!',
                    text: 'Se ha borrado un rol',
                    type: 'success',
                    confirmButtonText: 'Sera Redirigido'
                })
                setTimeout(function(){ 
                    window.location.href = "http://localhost:3000/rrhh/roles";
                }, 3500);
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Se ha producido un error al intentar borrar el rol',
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
        type: BORRAR_ROL,
        payload: id
    })
}

export const agregarRol = (rol) => async dispatch => {

    const {nombre, descripcion, permisos} = rol;

    const data = {
        Name : nombre,
        Description : descripcion,
        Authorizations : permisos
    }

    await axios.post("http://localhost:1337/Rol/CreateRol",data,
    {headers: { 'access-token': localStorage.getItem('access-token')}})
        .then(res => {
            if(res.status === 200 || res.status === 500){
                Swal.fire({
                    title: 'Correcto!',
                    text: 'Se ha añadido un nuevo rol',
                    type: 'success',
                    confirmButtonText: 'Sera Redirigido'
                })
                setTimeout(function(){ 
                    window.location.href = "http://localhost:3000/rrhh/roles";
                }, 3500);
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Se ha producido un error al intentar crear el rol',
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
        type: AGREGAR_ROL,
        payload: rol
    })
}