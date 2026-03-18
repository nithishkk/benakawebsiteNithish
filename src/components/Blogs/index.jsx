
import React, { Component } from 'react';
import { Box, Typography } from '@mui/material';
import './style.scss'
import Building from './imges/MaskGroup.png'

class Blogs extends Component {
    render() {
        return (
            <Box className="blogs">
                <Box className="blog-image">
                    <Typography variant="h4" component="div" className="text-white bold"> Blogs</Typography>
                </Box>

                <Box className="content">
                    <Typography variant="h4" component="div" className="text-black bold"> Blog Heading goes here</Typography>
                    <Typography variant="body2" component="p"  className="text-grey">Here are the ways you can contact us with any questions you have</Typography>

                    <Box className="boxes">
                        <span>Real Estate</span>
                        <span>Premium Plots</span>
                        <span>Bangalore</span>
                    </Box>

                    <Typography variant="body2" component="p"  className="text-grey text-justify" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet nonummy nibh dolore magna aliquam erat they volutpat.euismod tincidunt ut laoreet nonummy nibh dolore magna lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet nonummy nibh dolore magna aliquam erat they volutpat.euismod tincidunt ut laoreet nonummy nibh dolore magna</Typography>

                    <Typography variant="body2" component="p"  className="text-grey text-justify" mt={3}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet nonummy nibh dolore magna aliquam erat they volutpat.euismod tincidunt ut laoreet nonummy nibh dolore magna lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet nonummy nibh dolore magna aliquam erat they volutpat.euismod tincidunt ut laoreet nonummy nibh dolore magna</Typography>
                </Box>

                <Box className="content">
                    <Typography variant="h5" component="div" className="text-black bold"> Sub Heading goes here </Typography>
                    <Typography variant="body2" component="p"  className="text-grey">Here are the ways you can contact us with any questions you have</Typography>

                    <Typography variant="body2" component="p"  className="text-grey text-justify" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet nonummy nibh dolore magna aliquam erat they volutpat.euismod tincidunt ut laoreet nonummy nibh dolore magna lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet nonummy nibh dolore magna aliquam erat they volutpat.euismod tincidunt ut laoreet nonummy nibh dolore magna</Typography>
                    <Box className="image" mt={3}>
                        <img src={Building} alt="image"/>
                    </Box>
                    <Typography variant="body2" component="p"  className="text-grey text-justify" mt={3}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet nonummy nibh dolore magna aliquam erat they volutpat.euismod tincidunt ut laoreet nonummy nibh dolore magna lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet nonummy nibh dolore magna aliquam erat they volutpat.euismod tincidunt ut laoreet nonummy nibh dolore magna</Typography>
                </Box>
            </Box>
            
        );
    }
}

export default Blogs;