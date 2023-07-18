/* eslint-disable no-unused-vars */
import { Grid, styled } from "@mui/material";


const Container = styled(Grid)(({theme}) => ({
    height: '50rem',
    width: '100%',
    borderRadius: '5rem'
}))

const ImagenFondo = styled('img')(({theme}) => ({
    opacity: '0.55',
    width: '100%',
    height: '100%',
    objectPosition: "center",
    OObjectFit: 'cover',
}))


const Presentacion = () => {
    return ( 
        <Container container>
            <ImagenFondo src="../public/man-made-road-in-the-mountains-wallpaper.jpg"/>
        </Container>
     );
}
 
export default Presentacion;