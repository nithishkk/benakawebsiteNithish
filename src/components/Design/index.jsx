import React, { Component } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import './style.scss'
import Image from './image1.jpg'

class Design extends Component {
    render() {
        return (
            <Box className="design">
               
               <img src={Image} class="full zoom" alt="image" />

               <div className="textdiv">Hello </div>
            </Box>
        );
    }
}

export default Design;