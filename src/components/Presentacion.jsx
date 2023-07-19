/* eslint-disable no-unused-vars */
import { Button, Grid, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

const ImagenFondo = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectPosition: "center",
    OObjectFit: 'cover',
    opacity: '0.55',
}))

const Container = styled(Grid)(({ theme }) => ({
    height: '50rem',
    width: '100%',
    backgroundImage: 'url(../public/man-made-road-in-the-mountains-wallpaper.jpg)',
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

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, [checked])


    return (
        <Container container>
            <Grid item>
                <Typography className="animate__animated animate__lightSpeedInRight" fontWeight={'bold'} color={'white'} variant="h2">Hola,</Typography>
                <Typography className="animate__animated animate__lightSpeedInRight" variant="h2" color={'white'}>Soy Gonzalo Amaya</Typography>
                <Typography className="animate__animated animate__lightSpeedInRight" variant="h5" fontStyle={'italic'} color={'white'}>Desarrollador Full Stack</Typography>
                <a href="../../public/CV_GONZALO_AMAYA_DEVELOPER.pdf" download>
                    <BotonContacto variant="h5">Descargar CV</BotonContacto>
                </a>

            </Grid>
            {/* <ImagenFondo src="../public/man-made-road-in-the-mountains-wallpaper.jpg"/> */}
        </Container>
    );
}

export default Presentacion;