/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Tooltip, styled } from "@mui/material";


const Tecnologia = styled('img')(({ theme }) => ({
    width: '5rem',
    height: '5rem',
    transition: '0.5s',
    "&:hover": {
        scale: '1.20',
        background: 0,
        borderColor: '2px'
    },
}))

const Skill = ({title, src, alt}) => {
    return ( 
        <Tooltip title={title}>
            <Tecnologia src={src} alt={alt} />
        </Tooltip>
     );
}
 
export default Skill;