import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import axios from 'axios'

import Home from './components/index/Home';
import HomeRecursosHumanos from './components/rrhh/HomeRecursosHumanos';

//Empleados
import Empleados from './components/rrhh/empleados/TablaEmpleados'
import EmpleadoIndividual from './components/rrhh/empleados/EmpleadoIndividual';
import NuevoEmpleado from './components/rrhh/empleados/NuevoEmpleado';
import EditarEmpleado from './components/rrhh/empleados/EditarEmpleado';

//Roles
import Roles from './components/rrhh/roles/TablaRoles';
import NuevoRol from './components/rrhh/roles/NuevoRol';
import RolIndividual from './components/rrhh/roles/RolIndividual';
import EditarRol from './components/rrhh/roles/EditarRol';

//Turnos
import Turnos from './components/rrhh/turnos/TablaTurnos';
import NuevoTurno from './components/rrhh/turnos/NuevoTurno';
import TurnoIndividual from './components/rrhh/turnos/TurnoIndividual';

//Productos
import Productos from './components/modulos/productos/TablaProductos';

//Categorias
import Categorias from './components/modulos/categorias/TablaCategorias';
import NuevaCategoria from './components/modulos/categorias/NuevaCategoria';
import EditarCategoria from './components/modulos/categorias/EditarCategoria';

// import Modulos from './pages/profile/ViewChangePassword';
// import UsersTableView from './pages/users/UsersTable/UsersTableView';
// import EditUser from './pages/profile/ViewEditUser';
// import ViewUser from './pages/profile/ViewViewUser';
// import RecursosHumanos from './pages/rrhh/App';

class Routes extends Component {

    // state = {
    //     users : []
    // }

    // componentDidMount(){
    //     this.ObtenerEmpleados();
    // }

    // ObtenerEmpleados = async () => {
    //     var accessToken =  localStorage.getItem('access-token');
        
    //     const headers = {
    //         'access-token': accessToken
    //     }

    //     const a = await axios.get('http://localhost:1337/User/users', { headers });

    //     console.log(a.data);

    //     await axios.get('http://localhost:1337/User/users', { headers })
    //         .then(res => {
    //             this.setState({
    //                 users : res.data
    //             })
    //         })
    //         .catch(err => {
    //             console.log('error obtener empleado'+err)
    //         })
        
    // }

    // borrarEmpleado = async (id) => {

    //     var accessToken =  localStorage.getItem('access-token');
    //     var data = {'id': id};

    //     await axios.patch("http://localhost:1337/User/DeleteUser",data,{headers: {'access-token': accessToken}})
    //     .then(res => {
    //         if(res.status === 200){
    //             const usersCopy = [...this.state.users];
                
    //             let resultado = usersCopy.filter( user => (
    //                 user.id != id
    //             ))

    //             this.setState({
    //                 users : resultado
    //             })
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })

    //     // alert('Usuario Eliminado');
    //     // console.log('id es: '+id);
    // }

    // altaEmpleado = async (empleado) =>{

    //     var accessToken =  localStorage.getItem('access-token');

    //     // console.log(empleado);
    //     const {dni, nombre, apellido, email, rol, primerTelefono, 
    //         segundoTelefono, direccion, departamento, piso, codigoPostal} = empleado;
            
    //     const user = {
    //         Dni : dni,
    //         Password : dni,
    //         Name : nombre,
    //         LastName : apellido,
    //         Email : email,
    //         rol : rol,
    //         PrimaryPhone : primerTelefono,
    //         SecondaryPhone : segundoTelefono,  
    //     }

    //     const address = {
    //         Adress : direccion,
    //         Department : departamento,
    //         Floor : piso,
    //         Cp : codigoPostal,
    //         LatLong :"56465",
    //     }

    //     const data = {
    //         User : user,
    //         Adress : address
    //     }

    //     await axios.post("http://localhost:1337/User/CreateUser",data,{headers: {'access-token': accessToken}})
    //         .then(res => {
    //             if(res.status === 200){
    //                 // console.log(this.state.users);
    //                 // this.setState({
    //                 //     users : data
    //                 // })
    //                 /** Crear copia del state y almacenar el nuevo valor
    //                  * 
    //                  * Verificar valores de Roles
    //                  */
    //             }else{
    //                 console.log(res.status);
    //             }
    //         })
    //         .catch(err => {
    //             console.log(err.response);
    //         })
    // }

    render() {
        return (
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        
                        <Route path="/rrhh" exact component={HomeRecursosHumanos} />

                        <Route path="/rrhh/empleados" exact component={Empleados}
                        
                        // render={ () => (
                        //     <Empleados 
                        //         empleados = {this.state.users}
                        //         borrarEmpleado = {this.borrarEmpleado}
                        //     />
                        // )} 
                        
                        />

                        <Route path="/rrhh/empleados/:empleadoId" exact component={EmpleadoIndividual}
                        
                        // render={ (props) => {
                        //     let idEmpleado = props.location.pathname.replace('/rrhh/empleados/', '');
                        //     const empleados = this.state.users;
                        //     let filtro;

                        //     filtro = empleados.filter( empleado => (
                        //         empleado.id == idEmpleado
                        //     ))

                        //     return (
                        //         <EmpleadoIndividual 
                        //             empleado = {filtro[0]}
                        //         />
                        //     )
                        // }} 
                        
                        />

                        <Route path="/rrhh/alta-empleado"  exact component={NuevoEmpleado}
                        
                        // render={ () => (
                        //     <NuevoEmpleado
                        //         altaEmpleado = {this.altaEmpleado}
                        //     />
                        // )} 
                         
                        />

                        <Route exact path="/rrhh/editar-empleados/:empleadoId"  exact component={EditarEmpleado} />

                        {/* Roles */}

                        <Route path="/rrhh/roles" exact component={Roles} />

                        <Route path="/rrhh/roles/:rolId" exact component={RolIndividual} />

                        <Route path="/rrhh/alta-rol" exact component={NuevoRol} />

                        <Route path="/rrhh/editar-roles/:rolId"  exact component={EditarRol} />

                        {/* Turnos */}

                        <Route path="/rrhh/turnos" exact component={Turnos} />

                        <Route path="/rrhh/turnos/:turnoId" exact component={TurnoIndividual} />

                        <Route path="/rrhh/alta-turno" exact component={NuevoTurno} />

                        {/* Categorias */}

                        <Route path="/modulo" exact component={Categorias} />

                        <Route path="/modulo/alta-categoria" exact component={NuevaCategoria} />

                        <Route path="/modulo/editar-categoria/:catId" exact component={EditarCategoria} />

                        {/* Productos */}

                        <Route path="/producto" exact component={Productos} />

                        {/* <Route path="/pedidos" exact  />
                        <Route path="/modulo" exact component={Modulos} />
                        <Route path="/reportes" exact component={UsersTableView} />
                        <Route path='/edit-user/:id' exact component={EditUser} />
                        <Route path='/view-user/:id' exact component={ViewUser} /> */}
                    </Switch>
                </Router>
        );
    }
}

export default Routes;