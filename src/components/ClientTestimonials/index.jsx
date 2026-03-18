import React, { Component } from "react";
import { Typography, Grid, Box } from "@mui/material";
import "./style.scss";
import Group from "./images/Group1.png";
import { getTestimonial_action } from "../../redux/Home";

import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

import Youtube from "../Home/youtube";

class ClientTestimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: "1",
    };
  }

  async componentDidMount() {
    await this.props.getTestimonial_action();
  }

  render() {
    const { testimonialsLists } = this.props;
    return (
      <div className="client-testimonials">
        <Grid display="flex" justifyContent="center">
          <Grid>
            <Typography
              variant="h4"
              component="div"
              className="text-black bold"
            >
              {" "}
              Gallery
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid container pt={3}>
                    {
                        testimonialsLists.map(item =>{
                            return <Grid item xs={6} md={4} className="cardItem">
                                <Box className="item">
                                    <Typography variant="h4" component="div" className="text-black bold">''</Typography>
                                    <Typography variant="body1" component="p"  className="text-black0">
                                        Lorem ipsum dolor sit amet, consectetuer diam adipiscing elit, diam nonummy nibh euismo
                                        adipiscing incidunt ut laoreet dolore.
                                    </Typography>
                                    <Typography variant="h7" component="div" className="text-black bold" mt={1}>{item.testimonial_title}</Typography>
                                    <Typography variant="body2" component="p"  className="text-grey70" py={.5}>Location</Typography>
                                    </Box>
                            </Grid>
                        })
                    }
                </Grid> */}

        <Grid container pt={3}>
          {testimonialsLists.map((item) => {
            return (
              <Grid item xs={12} sm={6} lg={4} className="cardItem">
                <Box className="item">
                  <Youtube
                    url={item.testimonial_video.substring(
                      item.testimonial_video.indexOf("=") + 1
                    )}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* <Box>
                    <Grid container className="history-card">
                        <Grid item xs={12} sm={7} className="body">
                            <div className="title">
                                <Typography variant="h5" component="div" gutterBottom className="text-black bold header">
                                Planning to Buy Plot? Book a Free Site Visit Today
                                </Typography>
                                <div className="sub-title">
                                    <Typography variant="body2" gutterBottom mt={2}>
                                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </Typography>
                                </div>
                                <div className="sub-title">
                                    <Typography variant="body2" gutterBottom mt={2}>
                                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </Typography>
                                </div>
                                <div>
                                    <button>BOOK FREE SITE VISIT</button>
                                </div>
                                </div>
                        </Grid> 
                        <Grid item xs={12} sm={5} className="sidexyz-imageDiv">
                            <img src={Group} alt="image"/>
                        </Grid>
                        </Grid>
                </Box> */}
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    testimonialsLists: state.home.testimonialsLists,
  };
};
const mapActionsToProps = {
  getTestimonial_action: getTestimonial_action,
};

export default compose(
  connect(mapStatesToProps, mapActionsToProps),
  // withStyles(useStyles),
  withRouter
)(ClientTestimonials);
