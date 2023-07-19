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
    transition: '0.7s',
    "&:hover": {
        scale: '1.12',
        borderColor: '2px grey'
    },
}))

const About = () => {
    return (
        <Contenedor maxWidth="100%">
            <ContainerGrid container>
                <Grid item xl={12} md={12} xs={12} marginBottom={4}>
                    <Divider>
                        <Typography component="section" id="about_id" variant="h3" sx={{ textShadow: 'grey 2px 3px' }} textAlign={'center'}>Sobre Mi</Typography>
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
                    <Typography variant="body1">Bienvenido/a, Mi nombre es Gonzalo y actualmente me desempeño como Full Stack developer aunque considero mi especialidad Backend. 

Mi formación autodidacta se ha conformado de múltiples cursos y formación online, también he participado de trabajos en grupo como Egg Educación y Alkemy.

Forme parte del equipo de la startup afrus, una plataforma que ofrece soluciones a organizaciones sin fines de lucro desempeñándome como technical writer, QA tester y desarrollador con AdonisJs, VueJs y PostgreSQL como herramientas.

Si deseas charlar conmigo acerca de cómo podría ayudar, colaborar o simplemente solicitar información sobre mí o sobre cualquiera de los trabajos expuestos en mi portafolio, por favor, contacta conmigo, estaré encantado de atenderte.</Typography>
                </Grid>
            </ContainerGrid>
        </Contenedor>
    );
}

export default About;