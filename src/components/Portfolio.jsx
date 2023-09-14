/* eslint-disable no-unused-vars */
import { Container, Divider, Grid, Typography, styled } from "@mui/material";
import Proyecto from "./Layouts/Proyecto";


const ContainerGrid = styled(Grid)(({ theme }) => ({
    width: '65%',
}))
const Contenedor = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    height: '50rem',
    backgroundColor: '#DEDDDD',
    [theme.breakpoints.down('md')]: {
        height: '50rem',
    }
}))

const wiki = {
    backend: 'Java - Spring Boot',
    frontend: 'React',
    bd: 'PostgreSQL',
    deploy: 'Railway - Vercel',
    imagen: 'https://i.imgur.com/TeFApjJ.png',
    url: 'https://cliente-api-futbol.vercel.app/',
    herramientas: '-'
}

const gadev = {
    backend: '-',
    frontend: 'Astro',
    bd: '',
    deploy: 'Netlify',
    imagen: 'https://i.imgur.com/RiIxfXH.jpg',
    url: 'https://endearing-sunshine-8b0225.netlify.app/',
    herramientas: '-'
}

const catalogo = {
    backend: 'Java - Spring Boot',
    frontend: 'React - Redux',
    bd: 'MongoDB',
    deploy: 'en desarrollo',
    imagen: 'https://i.imgur.com/SzYzMtp.jpg',
    imgs: [
        'https://i.imgur.com/SzYzMtp.jpg',
        'https://i.imgur.com/bzQ1N4U.png',
        'https://i.imgur.com/G6AUPmy.jpg',
        'https://i.imgur.com/X5kBRI4.jpg'
    ],
    herramientas: 'Docker'
}

const Portfolio = () => {
    return ( 
        <Contenedor maxWidth="100%">
        <ContainerGrid container display={'flex'} justifyContent="center">
            <Grid item xl={12} md={12} xs={12} marginBottom={4}>
                <Divider>
                    <Typography component={'section'} id="portfolio_id"  sx={{ textShadow: 'grey 2px 3px', typography: { md: 'h3', xs: 'h4' } }} textAlign={'center'}>Proyectos</Typography>
                </Divider>
            </Grid>
            <Grid item xl={5} md={6} xs={12} display={'flex'} justifyContent={'center'}>
                <Proyecto proyecto={wiki}/>
            </Grid>
            <Grid item xl={5} md={6} xs={12}>
                <Proyecto proyecto={catalogo}/>
            </Grid>
            <Grid item xl={5} md={6} xs={12}>
                <Proyecto proyecto={gadev}/>
            </Grid>
        </ContainerGrid>
    </Contenedor>
     );
}
 
export default Portfolio;