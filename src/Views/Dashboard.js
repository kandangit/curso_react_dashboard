import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import clsx from 'clsx';

// React Material UI Componnets 
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer'; // Menú lateral desplegable
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'; // División entre los elementos del menú
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge'; // Anotaciones
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';



// React Material UI Icon Comoponents
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationIcon from '@material-ui/icons/Notifications'; // Icono de campana para las notificaciones
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; // Icono para el Logout


// Componentes propios
import Chart from '../Components/Chart'; // Gráfico de Líneas
// Componente Lista de elementos del menú
import { mainListItems, settingsListItems } from '../Components/ListItems';
// Componente Pedidos
import OrdersTable  from '../Components/OrdersTable'
// Componente Resumen de Pedidos
import Summary from '../Components/Summary';

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
    // estilos para el desplazamiento del menú lateral (drawer)
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    // estilos para la separación entre elementos del menú
    appBarSpacer: theme.mixins.toolbar,
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
    },
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
    // estilos para el paper general
    paper: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        padding: theme.spacing(2),
    },
    // estilo para fijar la altura
    fixedHeight: {
        height: 240
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
        paddingBottom: theme.spacing(4)
    },

}));


export default function Dashboard (){

    // classes servirá para personalizar los estilos de los componentes
    const classes = useStyles();

    // State Hook para manejar la variable de estado 'open'
    const [open, setOpen] = useState(true);

    // useHistory de react-router-dom
    let history = useHistory();

    // Combinamos dos estilos para los Papers (Cards) de nuestro dashboard
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    // Manejar la apertura del menú desplegable
    const handleDrawerOpen = () => {
        setOpen(true);
    }

    // Manejar el cierre del menú desplegable
    const handleDrawerClose = () => {
        setOpen(false);
    }

    // función para desloguear al usuario
    const logout = () => {
        history.push('/login');
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* Barra de Navegación Superior */}
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
            {/* Drawer o Menú lateral plegable */}
            <Drawer
                variant='permanent'
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                }}
                open= { open }
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
                        <Grid container spacing= { 3 }>
                            <Grid item xs= { 12 } md= { 8 } lg= { 9 }>
                                {/* Paper para Gráfico de Líneas*/}
                                <Paper className= { fixedHeightPaper }>
                                    <Chart />
                                </Paper>
                            </Grid>
                            <Grid item xs= { 12 } md = { 4 } lg = { 3 } >
                                {/* Paper para Gráfico de Líneas*/}
                                <Paper className= { fixedHeightPaper }>
                                    <Summary />
                                </Paper>
                            </Grid>
                            <Grid item xs= { 12 }>
                                {/* Paper para Gráfico de Líneas*/}
                                <Paper className= { fixedHeightPaper }>
                                    <OrdersTable />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </div>
    )
} 