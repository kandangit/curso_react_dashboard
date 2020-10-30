import React from 'react';

// Material UI Helpers
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Componentes Propios
import Title from './Title';

// Mock Summary
import { MockSummary } from '../Mocks/Data';


function preventDefault(event){
    event.preventDefault();
}

const useStyles = makeStyles({
    summaryContext: { 
        flex: 1 
    }
});

export default function Summary(){

    const classes = useStyles();

    return (
        <React.Fragment>
            <Title>
                Resumen de Gastos
            </Title>
            <Typography component='p' variant='h4'>
                {MockSummary.total} €
            </Typography>
            <Typography color='textPrimary' className={ classes.summaryContext }>
                {MockSummary.date.toLocaleDateString()}
            </Typography>
            <Typography color='textSecondary' className={ classes.summaryContext }>
                {MockSummary.date.toLocaleTimeString()}
            </Typography>
            <div>
                <Link color='primary' href='#' onClick= { preventDefault }>
                    Ver más detalles
                </Link>
            </div>
        </React.Fragment>
    );
}

