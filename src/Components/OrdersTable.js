import React from 'react';

// Material UI Style Helpers
import { makeStyles } from '@material-ui/core/styles';

// Material Ui Components
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Link from '@material-ui/core/Link';

// Import de componentes propios
import Title from './Title';

// Import MOCK DATA para los pedidos -> Filas e la tabla
import { MockedOrdersData } from '../Mocks/Data';

// Función para prevenir el comportamiento propio del evento y así gestionarlo nosotros
function preventDefault(event){
    event.preventDefault();
}

// Establecer estilos para el componente con el helper makeStyles de Material UI
const useStyles = makeStyles(theme => ({
    verMas: {
        marginTop: theme.spacing(3)
    }
}));

export default function OrdersTable() {

    const classes = useStyles();

    return (
        <React.Fragment>
            {/* Componente propio para el título */}
            <Title>
                Pedidos de Hoy
            </Title>
            {/* Tabla de pedidos de usuarios */}
            <Table size= 'small'>
                {/* Nombres de las Columnas */}
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha Pedido</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Dirección</TableCell>
                        <TableCell>Método de Pago</TableCell>
                        <TableCell align='right'>Cantidad (€)</TableCell>
                    </TableRow>
                </TableHead>
                {/* Contenido de la Tabla */}
                <TableBody>
                    {MockedOrdersData.map(pedido => (
                        <TableRow key= { pedido.id }>
                            <TableCell>{ pedido.date }</TableCell>
                            <TableCell>{ pedido.name }</TableCell>
                            <TableCell>{ pedido.address }</TableCell>
                            <TableCell>{ pedido.paymentMethod }</TableCell>
                            <TableCell align='right'>{ pedido.amount } €</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className= { classes.verMas }>
                <Link color='primary' onClick={ preventDefault } href='#'>
                    Ver Más Pedidos
                </Link>
            </div>
        </React.Fragment>
    );
}