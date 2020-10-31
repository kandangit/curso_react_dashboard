import React from 'react';
import { useHistory } from 'react-router-dom';

import clsx from 'clsx';

// React Material UI Componnets 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge'; // Anotaciones

// React Material UI Icon Comoponents
import MenuIcon from '@material-ui/icons/Menu';
import NotificationIcon from '@material-ui/icons/Notifications'; // Icono de campana para las notificaciones
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; // Icono para el Logout

const drawerWidth = 240;

// Estilos para la configuración del Dashboard
const useStyles = makeStyles(theme => ({

    // estilos para el toolbar del menú lateral (drawer)
    toolbar: {
        paddingRight: 24
    },
    // estilos para nuestra barra de navegación
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    // estilos para el desplazamiento del menú lateral (drawer)
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    // estilos para el botón del menú
    menuButton: {
        marginRight: 36,
    },
    // estilos para el botón cuando el menú esté plegado
    menuButtonHidden: {
        display: 'none',
    },
    // estilos para el título de las opciones del menú
    title: {
        flexGrow: 1,
    }
}));

export default function AppBarView ({open, onMenuIconClicked}) {

    // classes servirá para personalizar los estilos de los componentes
    const classes = useStyles();

    // useHistory de react-router-dom
    let history = useHistory();

    // Manejar la apertura del menú desplegable
    const handleDrawerOpen = () => {
        onMenuIconClicked();
    }

    // función para desloguear al usuario
    const logout = () => {
        history.push('/login');
    }

    return (
        <AppBar 
            position='absolute'
            className={ clsx(classes.appBar, open && classes.appBarShift) }
        >
            <Toolbar className= { classes.toolbar }>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label= 'open drawer'
                    onClick= {handleDrawerOpen}
                    className = { clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    {/* Icono de Bocadillo para plegar y desplegar el menú lateral */}
                    <MenuIcon />
                </IconButton>

                {/* El nombre de la empresa o título de la aplicación */}
                <Typography component='h1' variant='h6' color='inherit' noWrap className={ classes.title }>
                        Mi Dashboard
                </Typography>

                {/* Sección de Notificaciones al usuario */}
                <IconButton color="inherit">
                    <Badge badgeContent= {10} color='secondary'>
                        <NotificationIcon />
                    </Badge>
                </IconButton>

                {/* Sección de Logout */}
                <IconButton color="inherit" onClick={logout}>
                        <ExitToAppIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
} 