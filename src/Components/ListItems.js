import React from 'react';
import { useHistory } from 'react-router-dom';

// Materail UI Components
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material UI Icons
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

// Lista de navegación a vistas de la aplicación
export default function MainListItems() {
    // useHistory de react-router-dom
    let history = useHistory();

    const navegar = (ruta) => {
        history.push(ruta);
    }

    return (
    <div>
        {/* Opción para navegar a la home */}
        <ListItem button onClick={ () => {navegar('/');} }>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
        </ListItem>
        {/* Opción para navegar a Pedidos */}
        <ListItem button onClick={ () => {navegar('/pedidos');} }>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary='Pedidos' />
        </ListItem>
        {/* Opción para navegar a Usuarios */}
        <ListItem button onClick={ () => {navegar('/usuarios');} }>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Usuarios' />
        </ListItem>
        {/* Opción para navegar a Informes */}
        <ListItem button onClick={ () => {navegar('/informes');} }>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary='Informes' />
        </ListItem>
    </div>
    );
}

// Lista de navegación a vistas de Settings
export const settingsListItems = (
    <div>
        {/* Opción para navegar a la home */}
        <ListItem button onClick={ () => alert('TODO') }>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
        </ListItem>
    </div>
);