/* eslint-disable no-unused-vars */
import { Grid, Typography, styled } from "@mui/material";


const Contenedor = styled(Grid)(({ theme }) => ({
    width: '27rem',
    height: '18rem',
    boxShadow: 'unset',
    borderRadius: '1rem',
    border: '2px',
    borderColor: 'grey',
    padding: '1rem',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    transition: '0.5s',
    "&:hover": {
        scale: '1.20',
        borderColor: '2px grey'
    },
}))

const Imagen = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectPosition: "center",
    OObjectFit: 'cover',
}))


const Proyecto = () => {
    return (
        <Contenedor container m={2}>
            <Grid width={'100%'} height={'100%'} item xl={6} lg={6} xs={12} md={12}>
                    <a href="https://cliente-api-futbol.vercel.app/">
                        <Imagen component="a" src="https://i.imgur.com/TeFApjJ.png" />
                    </a>
            </Grid>
            <Grid item xl={6} lg={6} xs={12} md={12}>
                <Typography variant="h6">Stack Utilizado</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>Backend: </Typography>
                <Typography variant="body1" fontStyle={'italic'}>Java/Spring Boot</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>Frontend: </Typography>
                <Typography variant="body1" fontStyle={'italic'}>React</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>Database: </Typography>
                <Typography variant="body1" fontStyle={'italic'}>PostgreSQL</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>Deploy in: </Typography>
                <Typography variant="body1">Railway - Vercel</Typography>
            </Grid>
        </Contenedor>
    );
}

export default Proyecto;