/*Importo componentes y funciones*/
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from './actions';

/*Importo Views*/
import Routes from './Routes';

class App extends Component {

  componentWillMount(){
    this.LogearUsuario();
  }

  componentDidMount() {
    this.props.fetchCurrentUser();
  }

  LogearUsuario = async () => {

    const data = {
      Dni : '35111111',
      Password : '123456'
    }

    await axios.post("http://localhost:1337/User/login",data)
      .then(res => {
        localStorage.setItem('access-token', res.data.token);
    })

  }

  render() {
      return (
        <Routes />
      );
    }
  }

  function mapStateToProps(state) {
    return {
        auth: state.auth
    };
  }; 

export default connect(mapStateToProps, actions)(App);

