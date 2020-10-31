import React, { useState } from 'react';

import clsx from 'clsx';

import './App.css';

// React Router Dom
import { BrowserRouter as Router, 
        Switch, 
        Route,
        Redirect
      } from 'react-router-dom';

// React Material UI Componnets
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer'; // Menú lateral desplegable
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider'; // División entre los elementos del menú
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';

// React Material UI Icon Comoponents
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Nuestras Vistas para enrutar (Login y Dashboard)
import Login from './Views/Login';
import SignUp from './Views/SignUp'
import Dashboard from './Views/Dashboard';
import AppBarView from './Views/AppBarView';

// Componentes propios
// Componente Lista de elementos del menú
import { mainListItems, settingsListItems } from './Components/ListItems';

const drawerWidth = 240;

// Estilos para la configuración del Dashboard
const useStyles = makeStyles(theme => ({

  root:{
      display: 'flex',
  },
  // estilos para el toolbar del menú lateral (drawer)
  toolbar: {
      paddingRight: 24
  },
  // estilos para los iconos del Toolbar
  toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar
  },
  // estilos para nuestra barra de navegación
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
      })
  },
  // estilos para la separación entre elementos del menú
  appBarSpacer: theme.mixins.toolbar,
  // estilos para el Drawer cuando esté abierto
  drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
      })
  },
  // estilos para el Drawer cuando esté plegado
  drawerPaperClose: {
      overflowX: 'hidden',
      width: theme.spacing(7),
      transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
      }
  },
  // estilos para el contenido del Dashboard
  content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto'
  },
  // estilos para el Container que agrupará todo el contenido del Dashboard
  container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      marginTop: 40
  },

}));

function App() {

  let loggedIn = true; // La que nos indica si el usuario está o no logueado

  // classes servirá para personalizar los estilos de los componentes
  const classes = useStyles();

  // State Hook para manejar la variable de estado 'open'
  const [open, setOpen] = useState(true);

  // Manejar el cierre del menú desplegable
  const handleDrawerClose = () => {
      //alert("Close from parent");
      setOpen(false);
  }

  return (
      <Router>
          <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
              <Route>
                  <div className={classes.root}>
                      <CssBaseline />
              
                      {/* Barra de Navegación Superior */}
                      <AppBarView open={open} onMenuIconClicked={() => {setOpen(true)}} />
                      {/* Drawer o Menú lateral plegable */}
                      <Drawer
                        variant='permanent'
                        classes={{
                          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                        }}
                        open={open}
                      >
                          <div className={ classes.toolbarIcon }>
                              <IconButton onClick= { handleDrawerClose }>
                                  <ChevronLeftIcon />
                              </IconButton>
                          </div>
                          <Divider />
                          {/* Menu List Component */}
                          <List>
                              {mainListItems}
                          </List>
                          <Divider />
                          {/* Settings List Component */}
                          <List>
                              {settingsListItems}
                          </List>
                      </Drawer>

                      {/* Contenido del Dashboard */}
                      <main className= { classes.content }>
                          {/* Separamos el contenido de la barra de navegación superior */}
                          <div className = { classes.appBarSpacer }>
                              <Container className={ classes.container } maxWidth= 'lg'>
                                  {/* Aquí van nuestros componentes */}
                                  <Switch>
                                      <Route exact path='/'>
                                          {loggedIn ?
                                          <Redirect from= '/' to='/dashboard' />
                                          :
                                          <Redirect from='/' to='/login' />}
                                      </Route>
                                      <Route exact path='/dashboard'>
                                          {loggedIn ?
                                          <Dashboard />
                                          :
                                          <Redirect from='/dashboard' to='/login' />
                                          }
                                      </Route>
                                  </Switch>
                              </Container>
                          </div>
                      </main>
                  </div>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
