/* eslint-disable no-unused-vars */
import { Button, Container, Divider, Grid, IconButton, Typography, styled } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContainerGrid = styled(Grid)(({ theme }) => ({
    width: '65%',
}))
const Contenedor = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    height: '11rem',
    backgroundColor: 'white',
    transition: '0.7s',
    "&:hover": {
        scale: '1.12',
        borderColor: '2px grey'
    },
}))

const BotonContacto = styled(Button)(({theme}) => ({
    border: '1px',
    borderRadius: '1rem',
    backgroundColor: '#dedddd',
    transition: '0.5s',
    "&:hover": {
        scale: '1.12',
        boxShadow: '0 4px 16px rgba(49, 138, 172, 1)'
    },
}))

const Contacto = () => {
    return (
        <Contenedor maxWidth="100%">
            <ContainerGrid container textAlign={'center'}>
                <Grid item xl={12} md={12} xs={12} marginBottom={4}>
                    <Divider>
                        <Typography id="contact_id" variant="h5" sx={{ textShadow: 'grey 1px 2px' }} textAlign={'center'}>Contacto</Typography>
                    </Divider>
                </Grid>
                <Grid item xs={12} xl={6}>
                        <BotonContacto variant="h5" href="mailto:gonzaloamaya1999@gmail.com">Contactame</BotonContacto>
                </Grid>
                <Grid item xs={12} xl={6}>
                        <IconButton href="https://github.com/GonzaaMZ"><GitHubIcon/></IconButton>
                        <IconButton href="https://www.linkedin.com/in/gonzaloamaya/"><LinkedInIcon/></IconButton>
                </Grid>

            </ContainerGrid>
        </Contenedor>
    );
}

export default Contacto;