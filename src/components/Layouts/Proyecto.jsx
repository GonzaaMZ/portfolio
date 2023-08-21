/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Grid, Modal, Typography, styled } from "@mui/material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60rem',
    height: '50rem',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Contenedor = styled(Grid)(({ theme }) => ({
    width: '27rem',
    height: '18rem',
    boxShadow: 'unset',
    borderRadius: '1rem',
    border: '2px',
    borderColor: 'grey',
    padding: '1rem',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // transition: '0.5s',
    // "&:hover": {
    //     scale: '1.20',
    //     borderColor: '2px grey'
    // },
    [theme.breakpoints.down('md')]: {
        // marginTop: '0.5rem',
        width: '12rem',
        height: '18rem',
    },
    [theme.breakpoints.only('md')]: {
        // marginTop: '0.5rem',
        width: '21rem',
        height: '20rem',
    }
}))

const Imagen = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectPosition: "center",
    OObjectFit: 'cover',
    transition: '0.5s',
    "&:hover": {
        scale: '1.20',
        borderColor: '2px grey'
    },
}))

const ImagenCarousel = styled('img')(({ theme }) => ({
    width: '60rem',
    height: '45rem',
    objectPosition: "center",
    OObjectFit: 'cover',
}))




const Proyecto = ({ proyecto }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Contenedor container m={2}>
            <Grid width={'100%'} height={'100%'} item xl={6} lg={6} xs={12} md={6}>
                {proyecto.url
                    ?
                    <a href={proyecto.url}>
                        <Imagen component="a" src={proyecto.imagen} />
                    </a>
                    :
                    <Imagen component="a" onClick={handleOpen} src={proyecto.imagen} />
                }
            </Grid>
            <Grid item xl={6} lg={6} xs={12} md={6}>
                <Typography variant="h6">Stack Utilizado</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>Backend: </Typography>
                <Typography variant="body1" fontStyle={'italic'}>{proyecto.backend}</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>Frontend: </Typography>
                <Typography variant="body1" fontStyle={'italic'}>{proyecto.frontend}</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>Database: </Typography>
                <Typography variant="body1" fontStyle={'italic'}>{proyecto.bd}</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>Deploy in: </Typography>
                <Typography variant="body1">{proyecto.deploy}</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>Otro: </Typography>
                <Typography variant="body1">{proyecto.herramientas}</Typography>
            </Grid>
            {proyecto.url
                ?
                null
                :
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Carousel>
                            {proyecto.imgs.map(img => (
                                <ImagenCarousel key={img} src={img} alt="img" />
                            ))}
                        </Carousel>
                    </Box>
                </Modal>
            }


        </Contenedor>
    );
}

export default Proyecto;