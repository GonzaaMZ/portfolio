/* eslint-disable no-unused-vars */
import { Button, Divider, Grid, Stack, styled } from "@mui/material";


const Container = styled(Grid)(({ theme }) => ({
    height: '4.5rem',
    width: '100%',
    backgroundColor: '#1F1465'
}))

const BotonContacto = styled(Button)(({ theme }) => ({
    color: 'white',
    transition: '0.5s',
    "&:hover": {
        scale: '1.12',
        textShadow: '0 4px 16px rgba(49, 138, 172, 1)'
    },
}))



const Header = () => {

    const scrollAboutMe = () => {
        const element = document.getElementById('about_id');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const scrollSkills = () => {
        const element = document.getElementById('skills_id');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const scrollExperience = () => {
        const element = document.getElementById('experiencia_id');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const scrollPortfolio = () => {
        const element = document.getElementById('portfolio_id');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const scrollContact = () => {
        const element = document.getElementById('contact_id');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return (
        <Container container direction="row"
        justifyContent="center"
        alignItems="center">
            {/* <Grid item container direction={'row'} spacing={3}  alignItems="center"  justifyContent="center"> */}
                <Stack direction={'row'} spacing={3}  alignItems="center"  justifyContent="center">
                    <BotonContacto onClick={scrollAboutMe} >Sobre mi</BotonContacto>
                    <Divider orientation="vertical" sx={{bgcolor: 'white', height: '1.3rem'}} />
                    <BotonContacto onClick={scrollSkills}>Skills</BotonContacto>
                    <Divider orientation="vertical" sx={{bgcolor: 'white', height: '1.3rem'}} />
                    <BotonContacto onClick={scrollExperience}>Experiencia</BotonContacto>
                    <Divider orientation="vertical" sx={{bgcolor: 'white', height: '1.3rem'}} />
                    <BotonContacto onClick={scrollPortfolio}>Proyectos</BotonContacto>
                    <Divider orientation="vertical" sx={{bgcolor: 'white', height: '1.3rem'}} />
                    <BotonContacto onClick={scrollContact}>Contacto</BotonContacto>
                </Stack>
            {/* </Grid> */}

        </Container>
    );
}

export default Header;