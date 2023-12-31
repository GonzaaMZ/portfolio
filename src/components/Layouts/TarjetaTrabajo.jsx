/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Grid, Typography, styled } from "@mui/material";


const Contenedor = styled(Grid)(({theme}) => ({
    marginTop: '1rem',
    width: '35rem',
    height: '6rem',
    backgroundColor: '#dedddd',
    boxShadow: 'unset',
    borderRadius: '1rem',
    border: '2px',
    borderColor: 'grey',
    padding: '1rem',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent:'center',
    transition: '0.5s',
    "&:hover": {
        scale: '1.20',
        borderColor: '2px grey'
    },
    [theme.breakpoints.down('md')]: {
        height: '12rem',
    }
}))


const TarjetaTrabajo = ({titulo, empresa, fecha, tiempo}) => {
    return ( 
        <Contenedor container>
            <Grid item xl={6} md={6} xs={12}>
                <Typography variant="h6">{titulo}</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'} fontStyle={'italic'}>Empresa: {empresa}</Typography>
                <Typography variant="subtitle1">{fecha}</Typography>
            </Grid>
            <Grid item xl={6} md={6} xs={12} alignContent={'center'}>
                <Typography marginTop={{xs: '2rem'}} variant="h5" fontWeight={'bold'}>{tiempo}</Typography>
            </Grid>
        </Contenedor>
     );
}
 
export default TarjetaTrabajo;