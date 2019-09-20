import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AvatarVacio from '../../assets/images/AvatarVacio.PNG';
import Drawer from '@material-ui/core/Drawer';
import { BrowserRouter as Redirect, Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menu:{
    background: '#232526'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  profileAvatar: {
    margin: 10,
    margin: 10,
    width: 200,
    height: 200,
    borderRadius: '127px',

  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: '82px',
    left: '100%',
    position: 'sticky'
  },
  bottomClose:{
    top: '100%',
    position: 'sticky'
  },
  openProfile:{
    left: '100%',
    position: 'sticky'
  },
  buttonsLogged:{
    display: 'contents'
  }

};
class Header extends React.Component {
    constructor(props, context) {
      super(props, context);
      const { classes } = props;
      this.ProfileOpen = this.ProfileOpen.bind(this)
      this.ProfileClose = this.ProfileClose.bind(this)
      this.state = {
        profile:false,
      }
    }
    
    ProfileClose(){
        this.setState({ profile: false})
    }

    ProfileOpen(){
        this.setState({ profile : true})
    }
    ToHome(){
            window.location.replace('/')  
    }
    ToChangePassword(){
        window.location.replace('/modulo')  
    }
    buttonLogged(classes){
    switch (this.props.auth.logged) {
        case null:
        return;
        case true:
        return <Button color="inherit">Cerrar Sesión</Button>
        case false:
        return <Button color="inherit">Iniciar Sesión</Button>
      }
};

    profileMenu(props){
        const { classes } = props;
        return(
        <Drawer anchor="right" open={this.state.profile}  >
            <img src={AvatarVacio} className={classes.profileAvatar}  />
                <Button color="inherit"  onClick= {this.ToHome}>Inicio</Button>
             {this.props.auth.logged &&   <Button color="inherit"  onClick= {this.ToChangePassword}>Cambiar Contraseña</Button>}
            {this.buttonLogged(classes)}
            <Button color="inherit" onClick= {this.ProfileClose} className={classes.bottomClose} >Cerrar</Button>

        </Drawer>
        )
    }

ImageAvatars(props) {
    const { classes } = props;
    return (
       <Button color="inherit" onClick= {this.ProfileOpen} ><img src={AvatarVacio} className={classes.bigAvatar}  /></Button>
    );
  }

 content(props){
    const { classes } = props;
     return(
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.menu}>
        <Toolbar>
          <IconButton  color="inherit" aria-label="Delete">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
           
          </Typography>
          {this.ImageAvatars(this.props)}
        </Toolbar>
        {this.profileMenu(this.props)}
      </AppBar>

    </div>
     )
 }


 render() {
  
  return (
    <div>
        {this.content(this.props)}
    </div>
  );
}
    
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
  }; 

export default withStyles(styles)(connect(mapStateToProps,actions)(Header));