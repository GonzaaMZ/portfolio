/* eslint-disable no-unused-vars */
import { Button, Grid, Typography, styled } from "@mui/material";

const Container = styled(Grid)(({ theme }) => ({
    height: '57rem',
    width: '100%',
    backgroundImage: "url('https://i.imgur.com/pFZLz7m.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // objectPosition: "center",
    // OObjectFit: 'cover',
}))

const BotonContacto = styled(Button)(({ theme }) => ({
    marginTop: '2rem',
    border: '1px',
    borderRadius: '1rem',
    backgroundColor: '#dedddd',
    transition: '0.5s',
    color: 'black',
    "&:hover": {
        scale: '1.12',
        boxShadow: '0 4px 16px rgba(49, 138, 172, 1)',
        color: 'white'
    },
}))



const Presentacion = () => {

    return (
        <Container container>
            <Grid item>
                <Typography className="animate__animated animate__lightSpeedInRight" fontWeight={'bold'} color={'white'} variant="h2">Hola,</Typography>
                <Typography className="animate__animated animate__lightSpeedInRight" variant="h2" color={'white'}>Soy Gonzalo Amaya</Typography>
                <Typography className="animate__animated animate__lightSpeedInRight" variant="h5" fontStyle={'italic'} color={'white'}>Desarrollador Full Stack</Typography>
                <a href="./CV-GONZALO-AMAYA-2024.pdf" download>
                    <BotonContacto variant="h5">Descargar CV</BotonContacto>
                </a>
            </Grid>
        </Container>
    );
}

export default Presentacion;