/* eslint-disable no-unused-vars */
import { Container, Divider, Grid, Typography, styled } from "@mui/material";
import TarjetaTrabajo from "./Layouts/TarjetaTrabajo";


const ContainerGrid = styled(Grid)(({ theme }) => ({
    width: '65%',
}))
const Contenedor = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    height: '35rem',
    backgroundColor: 'white'
}))


const Experiencia = () => {
    return (
        <Contenedor container>
            <ContainerGrid >
                <Grid item xl={12} md={12} xs={12} marginBottom={4}>
                    <Divider>
                        <Typography variant="h3" sx={{ textShadow: 'grey 2px 3px' }} textAlign={'center'}>Experiencia</Typography>
                    </Divider>
                </Grid>
                <Grid item xl={12} md={12} xs={12} display={'flex'} justifyContent="center">
                    <TarjetaTrabajo titulo={'Desarrollador Full Stack'} fecha={'07/2022 - 02/2023'} tiempo={'7 meses'} empresa={'afrus'}/>
                </Grid>
            </ContainerGrid>
        </Contenedor>
    );
}

export default Experiencia;