import React from 'react';

import clsx from 'clsx';

// React Material UI Componnets 
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Componentes propios
import Chart from '../Components/Chart'; // Gráfico de Líneas
// Componente Pedidos
import OrdersTable  from '../Components/OrdersTable'
// Componente Resumen de Pedidos
import Summary from '../Components/Summary';


// Estilos para la configuración del Dashboard
const useStyles = makeStyles(theme => ({

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
    }

}));


export default function Dashboard (){

    // classes servirá para personalizar los estilos de los componentes
    const classes = useStyles();

    // Combinamos dos estilos para los Papers (Cards) de nuestro dashboard
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
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
    )
}