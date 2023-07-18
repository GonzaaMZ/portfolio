/* eslint-disable no-unused-vars */
import { Avatar, Container, Divider, Grid, Typography, styled } from "@mui/material";


const ContainerGrid = styled(Grid)(({ theme }) => ({
    width: '65%',

}))
const Contenedor = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    height: '30rem',
}))

const About = () => {
    return (
        <Contenedor maxWidth="100%">
            <ContainerGrid container>
                <Grid item xl={12} md={12} xs={12} marginBottom={4}>
                    <Divider>
                        <Typography variant="h3" sx={{ textShadow: 'grey 2px 3px' }} textAlign={'center'}>Sobre Mi</Typography>
                    </Divider>
                </Grid>
                <Grid item xl={6} md={5} xs={10} lg={5} sx={{ ml: 1 }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: '15rem', height: '15rem' }}
                    />
                </Grid>
                <Grid item xl={5} md={5} xs={10} lg={5}>
                    <Typography variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus culpa neque accusamus in odio, quae id illum debitis voluptatibus, totam ipsa exercitationem voluptates a commodi blanditiis illo ducimus facere soluta?</Typography>
                </Grid>
            </ContainerGrid>
        </Contenedor>
    );
}

export default About;