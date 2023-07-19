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
    height: '35rem',
    backgroundColor: '#DEDDDD',
    [theme.breakpoints.down('md')]: {
        height: '50rem',
    }
}))


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
                <Proyecto/>
            </Grid>
            {/* <Grid item xl={5} md={6} xs={12}>
                <Proyecto/>
            </Grid> */}
        </ContainerGrid>
    </Contenedor>
     );
}
 
export default Portfolio;