import React from 'react';

// Material Ui Components
import Link from '@material-ui/core/Link'; // Componente para crear Links
import Typography from '@material-ui/core/Typography'; // Componente para Textos

export default function CopyRight(){
    return (
        <Typography variant="body2" color="textSecondary" align='center'>
            {'CopyRight ©'}
            <Link color='inherit' href='https://www.imaginaformacion.com'>
                Imagina Formación
            </Link>
            {' '}
            { new Date().getFullYear() }
            {'.'}
        </Typography>
    );
}