import { combineReducers } from 'redux';
import authReducer from './authReducer';
import empleadosReducer from './empleadosReducer';
import rolesReducer from './rolesReducer';
import productosReducer from './productosReducer';
import categoriasReducer from './categoriasReducer';

export default combineReducers({
    auth : authReducer,
    empleados : empleadosReducer,
    roles : rolesReducer,
    productos : productosReducer,
    categorias : categoriasReducer
});
