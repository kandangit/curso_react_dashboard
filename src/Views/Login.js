import React from 'react';
import { useHistory } from 'react-router-dom'; // historial de navegación en el Router de React

// MakeStyles para personalizar los estilos de Material UI
import { makeStyles} from '@material-ui/core/styles';

// React Material UI Components
import Avatar from '@material-ui/core/Avatar'; // Componente Avatar
import Button from '@material-ui/core/Button'; // Componente Botón
import CssBaseLine from '@material-ui/core/CssBaseLine'; // Componente para estilos
import TextField from '@material-ui/core/TextField'; // Componente para los campos de texto
import FormControlLabel from '@material-ui/core/FormControlLabel'; // Componente de Labels
import Link from '@material-ui/core/Link'; // Componente para crear Links
import Checkbox from '@material-ui/core/Checkbox'; // Componente CheckBox
import Grid from '@material-ui/core/Grid'; // Componente Grid para estructurar nuestras vistas
import Box from '@material-ui/core/Box'; // Componente para crear una estructura para nuestro form
import Container from '@material-ui/core/Container'; // Componente para estructurar
import Typography from '@material-ui/core/Typography'; // Componente para Textos

// React Material UI Icons 
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; // Icono para Login

// Import de Componentes Propios
import CopyRight from '../Components/CopyRight';

const useStyles = makeStyles(theme => ({

    paper:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3,0,2)
    }

}));

export default function Login (){

    const classes = useStyles();
    let history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        history.push('/dashboard');
    }

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseLine />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Acceso
                </Typography>
                <form className={classes.form} onSubmit={submit} noValidate>
                    <TextField
                        required
                        fullWidth
                        autoFocus
                        id='email'
                        label='Email'
                        name='email'
                        variant='outlined'
                        margin='normal'
                        autoComplete='email'
                    />
                    <TextField
                        required
                        fullWidth
                        autoFocus
                        id='password'
                        label='Contraseña'
                        name='password'
                        type='password'
                        variant='outlined'
                        margin='normal'
                        autoComplete='current-password'
                    />
                    <FormControlLabel
                        control={<Checkbox value='remember' color='secondary' /> }
                        label='Recuérdame'
                    />
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.submit}
                    >
                        Acceder
                    </Button>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Link href='#' variant='body2'>
                                He Olvidado la Contraseña
                            </Link>
                        </Grid>
                        <Grid  item xs={12} sm={6}>
                            <Link href='#' variant='body2'>
                                {'No tengo cuenta'}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <CopyRight />
            </Box>
        </Container>
    );
} 