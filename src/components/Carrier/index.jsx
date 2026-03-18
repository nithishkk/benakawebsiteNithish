import React, { Component } from "react";
import { Typography, Grid, Box } from "@mui/material";
import "./style.scss";

import { getCarrier_action } from "../../redux/Home";

import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

class Carrier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: "1",
    };
  }

  async componentDidMount() {
    await this.props.getCarrier_action();
  }
  render() {
    const { carrierLists } = this.props;
    console.log(carrierLists);
    return (
      <div className="carrier">
        <Grid>
          <Grid pl={2}>
            <Typography
              variant="h4"
              component="div"
              className="text-black bold"
            >
              {" "}
              Current Openings
            </Typography>
            <Typography variant="body2" component="p" className="text-grey">
              Here are the ways you can contact us with any questions you have
            </Typography>
          </Grid>
        </Grid>
        <Grid container pt={3}>
          {carrierLists.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} className="cardItem">
                <Box className="item">
                  <Typography
                    variant="h6"
                    component="div"
                    className="Itemheader text-black bold"
                  >
                    {item.job_title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    className="ItemBody text-black0"
                  >
                    {item.job_description}
                  </Typography>
                  <Box className="button">
                    <button>Apply Now</button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    carrierLists: state.home.carrierLists,
  };
};
const mapActionsToProps = {
  getCarrier_action: getCarrier_action,
};

export default compose(
  connect(mapStatesToProps, mapActionsToProps),
  // withStyles(useStyles),
  withRouter
)(Carrier);
