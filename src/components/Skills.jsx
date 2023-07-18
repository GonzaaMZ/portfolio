/* eslint-disable no-unused-vars */
import { Container, Divider, Grid, Typography, styled } from "@mui/material";
import Skill from "./Layouts/Skill";
import Tecnologias from '../data/Tecnologias.json'

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

const Skills = () => {

    return (
        <Contenedor maxWidth="100%">
            <ContainerGrid container>
                <Grid item xl={12} md={12} xs={12} marginBottom={4}>
                    <Divider>
                        <Typography variant="h3" sx={{ textShadow: 'grey 2px 3px' }} textAlign={'center'}>Skills</Typography>
                    </Divider>
                </Grid>
                {Tecnologias.map((t) => (
                    <Grid key={t.alt} item xl={3} md={4} xs={10} lg={4} textAlign={'center'} marginBottom={4}>
                        <Skill title={t.nombre} src={t.logo} alt={t.alt} />
                    </Grid>
                ))}
            </ContainerGrid>
        </Contenedor>
    );
}

export default Skills;