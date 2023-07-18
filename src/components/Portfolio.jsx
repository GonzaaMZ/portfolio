/* eslint-disable no-unused-vars */
import { Container, Divider, Grid, Typography, styled } from "@mui/material";


const ContainerGrid = styled(Grid)(({ theme }) => ({
    width: '65%',
}))
const Contenedor = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    height: '35rem',
    backgroundColor: '#DEDDDD'
}))


const Portfolio = () => {
    return ( 
        <Contenedor maxWidth="100%">
        <ContainerGrid container>
            <Grid item xl={12} md={12} xs={12} marginBottom={4}>
                <Divider>
                    <Typography variant="h3" sx={{ textShadow: 'grey 2px 3px' }} textAlign={'center'}>Proyectos</Typography>
                </Divider>
            </Grid>
        </ContainerGrid>
    </Contenedor>
     );
}
 
export default Portfolio;