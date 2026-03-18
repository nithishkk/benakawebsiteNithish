import React, { Component } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Tab,
  MenuItem,
  Modal,
  Paper,
  Divider,
  Avatar,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  getHomeData_action,
  getProject_action,
  getTestimonial_action
} from "../../redux/Home";
import { DocumentUrl } from "../../utils/ApiService";
import image from "./";
import { withStyles } from "@mui/styles";
import play from "./images/play.png";
import { Close } from "@mui/icons-material";
import "./style.scss";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import CableOutlinedIcon from "@mui/icons-material/CableOutlined";
import ChaletOutlinedIcon from "@mui/icons-material/ChaletOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import SettingsInputComponentOutlinedIcon from "@mui/icons-material/SettingsInputComponentOutlined";
import PagesOutlinedIcon from "@mui/icons-material/PagesOutlined";
import CameraswitchOutlinedIcon from "@mui/icons-material/CameraswitchOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Footer from "../Footer";
import { TextBox, TextArea } from "../TextBox";
import Youtube from "./youtube";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { styled } from "@mui/material/styles";
import kns from "../../Images/KNS-icon.png";
import KnsIcon from "../../Images/KnsIcon.png";
import MenuIcon from "./images/menuWhite.svg";
import { NavHashLink } from "react-router-hash-link";
import CountUp from "react-countup";

// import Home from '../../Images/home1.png'

import Image1 from "./cardIcons/Image1.png";
import Image2 from "./cardIcons/Image2.png";
import Image3 from "./cardIcons/Image3.png";
import Image4 from "./cardIcons/Image4.png";
import Image5 from "./cardIcons/Image5.png";
import Image6 from "./cardIcons/Image6.png";
import Image7 from "./cardIcons/Image7.png";
import Image8 from "./cardIcons/Image8.png";

import Invest1 from "./images/invest/badge.svg";
import Invest2 from "./images/invest/broken-cable.svg";
import Invest3 from "./images/invest/construction.svg";
import Invest4 from "./images/invest/engineer.svg";
import Invest5 from "./images/invest/investment.svg";
import Invest6 from "./images/invest/park.svg";
import Invest7 from "./images/invest/route.svg";
import Invest8 from "./images/invest/verify.svg";

import blog1 from "./cardIcons/blog1.png";
import blog2 from "./cardIcons/blog2.png";
import blog3 from "./cardIcons/blog3.png";

import RedIcon1 from "./images/RedBoxIcons/location.svg";
import RedIcon2 from "./images/RedBoxIcons/deal.svg";
import RedIcon3 from "./images/RedBoxIcons/hammer.svg";
import RedIcon4 from "./images/RedBoxIcons/deal2.svg";

import project from "./images/project.png";
import video from "./images/video1.png";
import $ from "jquery";
import FloatingIcons from "../FloatingIcons/index";
import InfoIcon from "@mui/icons-material/Info";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GavelIcon from "@mui/icons-material/Gavel"; // Ready to Register Plots
import ElectricBoltIcon from "@mui/icons-material/FlashOn"; // Underground Electric Cabling
import ParkIcon from "@mui/icons-material/Park"; // Landscaped Garden
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Investment Appreciation
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // World Class
import ConstructionIcon from "@mui/icons-material/Construction"; // Top Materials
import DesignServicesIcon from "@mui/icons-material/DesignServices"; // Best Consultants
import DirectionsIcon from "@mui/icons-material/Directions"; // Connectivity

const headers = [
  {
    showMedium: true,
    label: "Home",
    showType: "true",
    path: "home"
  },
  {
    showMedium: true,
    label: "About Us",
    showType: "true",
    path: "#aboutUs"
  },
  {
    showMedium: true,
    label: "Projects",
    showType: "true",
    path: "#projects"
  },
  {
    showMedium: true,
    label: "Blogs",
    showType: "true",
    path: "#blogs"
  },
  {
    showMedium: true,
    label: "Testimonials",
    showType: "true",
    path: "#testimonial"
  },
  {
    showMedium: false,
    label: "Career",
    showType: "false",
    path: "carrier"
  },
  {
    showMedium: false,
    label: "NRI",
    showType: "false",
    path: "Nri"
  },
  {
    showMedium: true,
    label: "Contact Us",
    showType: "true",
    path: "#contactUs"
  }
];
const features = [
  {
    icon: <GavelIcon sx={{ fontSize: 48, color: "#111" }} />,
    label: "Ready to Register Plots"
  },
  {
    icon: <ElectricBoltIcon sx={{ fontSize: 48, color: "#111" }} />,
    label: "Underground Electric Cabling"
  },
  {
    icon: <ParkIcon sx={{ fontSize: 48, color: "#111" }} />,
    label: "Acer’s of Landscaped Garden"
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 48, color: "#111" }} />,
    label: "Scope for Investment Appreciation"
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 48, color: "#111" }} />,
    label: "World Class Amenities and Finishes"
  },
  {
    icon: <ConstructionIcon sx={{ fontSize: 48, color: "#111" }} />,
    label: "Top of the Line Materials"
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 48, color: "#111" }} />,
    label: "Designed by Best Consultants"
  },
  {
    icon: <DirectionsIcon sx={{ fontSize: 48, color: "#111" }} />,
    label: "Ease of Connectivity and Accessibility"
  }
];

class Home extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      tabValue: "1",
      openYoutube: false,
      openProjectDetails: false,
      modelProjectData: {},
      youTubeLink: "",
      clickFirst: true
    };
  }
  handleClose = (type, show, val) => {
    if (type == 1) {
      this.setState({ openYoutube: show, youTubeLink: val });
    } else if (type == 2) {
      this.setState({ openProjectDetails: show, modelProjectData: val });
    }
    return false;
  };

  async componentDidMount() {
    await this.props.getHomeData_action();
    await this.props.getProject_action();
    await this.props.getTestimonial_action();

    // setTimeout(() => {
    if (this?.state?.clickFirst) {
      // document.getElementsByClassName("slide")[0].style['visibility'] = "visible !important";
      var hangoutButton = document.getElementsByClassName("control-next")[0];
      hangoutButton?.click();
      this.setState({ clickFirst: false });
      // document.getElementsByClassName("slide")[0].style['visibility'] = "hidden !important";
    }
    //   }, 0);

    // $('.menu').on('click', function(){
    //     $('.sidebar').toggleClass('active');
    //     $('.sidebar').toggleClass('inactive');
    //  });
    //  $('.sidebar .close').on('click', function(){
    //     $('.sidebar').removeClass('active');
    //     $('.sidebar').addClass('inactive');
    //  });
  }

  renderMenu = (item, i) => {
    // const show = item.showMedium ?
    return (
      <li
        key={item.label}
        className={i == 0 ? `Linkactive ${item.showType}` : `${item.showType}`}
      >
        {/* <a href={item.path} >{item.label}</a> */}
        <NavHashLink to={`/${item.path}`}>{item.label}</NavHashLink>
      </li>
    );
  };

  handleTabChange = (event, tabValue) => {
    this.setState({
      tabValue
    });
  };
  render() {
    const { homeScreenData, projectLists, testimonialsLists } = this.props;

    let isolatedLocation = [];
    let isolatedLocationName = [];
    projectLists.map((ele) => {
      if (!isolatedLocation.includes(ele.web_project_location)) {
        isolatedLocation.push(ele.web_project_location);
        isolatedLocationName.push(ele);
      }
    });
    isolatedLocationName.sort(function (a, b) {
      return a.web_project_location - b.web_project_location;
    });



    return (
      <div className={"root"}>
        {
          <Box className={this.state.clickFirst && "d-none"}>
            <Carousel
              autoFocus={true}
              autoPlay={true}
              interval={10000}
              infiniteLoop={true}
            >
              {homeScreenData.map((ScreenData) => {
                return (
                  <Box
                    // className={"image_body zoom"}
                    className={"image_body"}
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 40%) 35%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 100%), url(${DocumentUrl}/${ScreenData.screen_image})`
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        sm={10}
                        md={8}
                        lg={6}
                        className="imageText"
                      >
                        {/* {
                                         ScreenData.screen_title_visibility == 'Visible' && 
                                         <Typography variant="h4" gutterBottom component="div"><b>{ScreenData.screen_title}</b></Typography>
                                     }
                                     {
                                         ScreenData.screen_description_visibility == 'Visible' && 
                                         <Typography variant="body2">{ScreenData.screen_description}</Typography>
                                     }
                                     <Button>BOOK SITE VISIT</Button> */}

                        {/* <Typography variant="body4" gutterBottom component="div">LAUNCHING</Typography>
                                         <Typography variant="h6" gutterBottom component="div"><b>KNS GROUPS</b></Typography> */}
                        {ScreenData.screen_title_visibility == "Visible" && (
                          <Typography variant="h4" gutterBottom component="div">
                            <b className="text-uppercase">
                              {ScreenData.web_project_name}
                            </b>
                          </Typography>
                        )}
                        {ScreenData.screen_title_visibility == "Visible" && (
                          <Typography
                            variant="body4"
                            gutterBottom
                            component="div"
                            className="text-capitalize"
                            style={{ fontSize: "14px" }}
                          >
                            {ScreenData.screen_description}
                          </Typography>
                        )}
                        <Typography
                          variant="body2"
                          gutterBottom
                          component="div"
                          className="text-uppercase"
                          style={{ fontSize: "16px", fontWeight: "600" }}
                        >
                          {" "}
                          {ScreenData.project_city}
                        </Typography>
                        {/*<Button><a href="https://www.knsgroup.in/" target="_blank">EXPLORE NOW</a></Button>*/}
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}
            </Carousel>
          </Box>
        }
        {/* <Box>
                    <Grid container className={'title_header'}>
                        <Grid item xs={6} md={3}>
                            <div className={'item'}>
                                <img src={RedIcon1} alt="image"/>
                                Location
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div className={'item'} style={{backgroundColor : "#0A2553"}}>
                            <img src={RedIcon2} alt="image"/>
                                Cost vs Value 
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div className={'item'} >
                            <img src={RedIcon3} alt="image"/>
                                Legal Coverage
                            </div>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <div className={'item'} style={{backgroundColor : "#0A2553"}}>
                            <img src={RedIcon4} alt="image"/>
                                Cost vs Value 
                            </div>
                        </Grid>
                    </Grid>
                </Box> */}
        <Box
          id="about-section"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: "80vh",
            // bgcolor: "#f4f9fb",
            bgcolor: "#f3f8fc", //lilte blue
            py: { xs: 3, md: 6 },
            px: { xs: 1, md: 2 },
                //  p: { xs: 3, md: 5 },
          }}
        >
          {/* <Paper
            elevation={6}
            sx={{
              // maxWidth: 900,
              width: "100%",
              borderRadius: 4,
              p: { xs: 3, md: 5 },
              background: "linear-gradient(135deg, #fff, #f5fafcff 60%, #fff)",
              boxShadow: "0 6px 32px rgba(0,70,140,0.06)"
            }}
          > */}
            {/* Section Timeline Accent */}
            <Box
              sx={{
                width: 6,
                minHeight: { xs: 70, md: 210 },
                bgcolor: "primary.main",
                borderRadius: 4,
                position: "absolute",
                left: -18,
                top: 60,
                display: { xs: "none", md: "block" }
              }}
            />

            {/* Main Content */}
            <Grid container spacing={6}>
              {/* About Us Block */}
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mb={2}
                  textAlign="center"
                >
                  <Avatar
                    sx={{ bgcolor: "#1565c0", width: 56, height: 56, mb: 1 }}
                  >
                    <InfoIcon fontSize="large" />
                  </Avatar>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#000000"
                    gutterBottom
                  >
                    About Us
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  mb={1}
                  align="center"
                >
                  We develop quality infrastructure and real estate projects
                  since 2015
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  align="center"
                >
                  Since 2015, our company has been at the forefront of
                  developing superior infrastructure and real estate projects.
                  Our reputation is built on a track record of delivering
                  exceptional quality, safety, and sustainability in every
                  project. With a team of highly-skilled professionals dedicated
                  to excellence, we've earned trust as a reliable partner for
                  both private and public clients. Our aim: create spaces that
                  enrich communities and provide innovative solutions,
                  delivering exceptional projects for years to come.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Divider
                  sx={{ my: { xs: 2, md: 3 }, borderColor: "#90caf9" }}
                />
              </Grid>

              {/* Mission + Vision in same row on desktop, stacked on mobile */}
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mb={2}
                  textAlign="center"
                >
                  <Avatar sx={{ bgcolor: "#43a047", mb: 1 }}>
                    <EmojiObjectsIcon />
                  </Avatar>
                  <Typography variant="h5" fontWeight="medium" color="#258a46">
                    Mission
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Through the development of residential spaces in prime
                  locations nation-wide, our objective is to be the top choice
                  for clients and partners seeking their own space. We achieve
                  this through a data-driven approach, innovative design,
                  cutting-edge technology, and consistently offering real value.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mb={2}
                  textAlign="center"
                >
                  <Avatar sx={{ bgcolor: "#fbc02d", mb: 1 }}>
                    <VisibilityIcon />
                  </Avatar>
                  <Typography variant="h5" fontWeight="medium" color="#ac8600">
                    Vision
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  We are determined to be the most trusted real estate partner.
                  By innovating with data, design, and technology, we create
                  places people are proud to call their own, while always
                  delivering a valuable experience for our customers.
                </Typography>
              </Grid>
            </Grid>
          {/* </Paper> */}
        </Box>

        <Box
          className={"newly-lanch color-grey"}
          id="projects"
          sx={{ bgcolor: "#f3f8fc" }}
        >
          <TabContext value={this.state.tabValue}>
            <Box className={"color-grey"}>
              <Typography variant="h3" gutterBottom component="div">
                <b>Our Projects</b>
              </Typography>
              {/* <Typography variant="h4" gutterBottom component="div"><b>Our Projects</b></Typography> */}
              <Typography variant="body2">
                See Some Active Projects Over Here{" "}
              </Typography>
            </Box>
            <Box px={5} className={"color-grey"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }} px={2}>
                <TabList
                  onChange={this.handleTabChange}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#0A2553"
                    }
                  }}
                  aria-label="lab API tabs example"
                >
                  {isolatedLocationName.map((ele) => {
                    console.log(ele.web_project_location);
                    return (
                      <Tab
                        key={parseInt(ele.web_project_location)}
                        label={ele.location_name}
                        value={ele.web_project_location}
                        className="tabButton"
                      />
                    );
                  })}
                </TabList>
              </Box>
              {isolatedLocation.map((item) => {
                return (
                  <TabPanel
                    key={parseInt(item)}
                    value={item}
                    className={"newly color-grey"}
                  >
                    <Grid container className="newly-card">
                      {projectLists
                        .filter((sub) => {
                          console.log(sub.web_project_location, item);
                          return sub.web_project_location == item;
                        })
                        .map((ele) => {
                          return (
                            <Grid
                              key={ele.web_project_order}
                              item
                              xs={12}
                              sm={8}
                              md={1}
                              lg={4}
                            >
                              <Box className="item">
                                <Box>
                                  <img
                                    src={`${DocumentUrl}${ele.web_project_icon}`}
                                    alt="image"
                                  />
                                </Box>
                                <Box className="address" m={1}>
                                  <Typography variant="body">
                                    {ele.web_project_name}
                                  </Typography>
                                </Box>
                                {/* <Box className="address" m={1}>
                                  <Typography variant="body">
                                    {ele.web_project_status}
                                  </Typography>
                                </Box> */}
                                <Box className="address" m={0}>
                                  <Typography variant="body2">
                                    {ele.web_project_address}
                                  </Typography>
                                </Box>
                                <Box mt={1}>
                                  <Button
                                    variant="outlined"
                                    onClick={() =>
                                      this.handleClose(2, true, ele)
                                    }
                                  >
                                    {" "}
                                    VIEW DETAILS{" "}
                                  </Button>
                                </Box>
                              </Box>
                            </Grid>
                          );
                        })}
                    </Grid>
                  </TabPanel>
                );
              })}
            </Box>
          </TabContext>
        </Box>

        <Box
          id="infrastructure"
          sx={{
            px: { xs: 2, md: 8 },
            py: 6,
            // bgcolor: "#f3f8fc",
            bgcolor: "#f3f8fc",
            minHeight: "100vh"
          }}
        >
          <Typography
            variant="h4"
            mb={1}
            pt={3}
            align="center"
            color="#000000"
            fontWeight="bold"
            letterSpacing={1}
          >
            Why Invest in Jayaram Infracon 1
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            align="center"
            fontWeight={500}
            mb={4}
          >
            Hassle free plot purchase with End-to-End assistance
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((item, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.label}
                sx={{ padding: 4 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    boxShadow: "0 4px 24px 4px rgba(36,135,184,0.09)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.04)",
                      boxShadow: "0 10px 32px 6px rgba(36,135,184,0.15)"
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    bgcolor: "#fff"
                  }}
                  elevation={0}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: "#f4f4f4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      m: 2
                    }}
                  >
                    {item.icon}
                  </Box>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="600"
                      align="center"
                      color="text.primary"
                    >
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          className={"newly-lanch color-grey"}
          id="infrastructure1"
          sx={{ bgcolor: "#f3f8fc" }}
        >
          <Grid container spacing={2} marginTop={2} marginBottom={2}>
            <Grid item xs={2.4} align="center">
              <Typography variant="h4">
                <CountUp end={2} duration={2} />+
              </Typography>
              <Typography variant="body2">Active projects</Typography>
            </Grid>

            <Grid item xs={2.4} align="center">
              <Typography variant="h4">
                <CountUp end={15} duration={2} />+
              </Typography>
              <Typography variant="body2">Completed projects</Typography>
            </Grid>

            <Grid item xs={2.4} align="center">
              <Typography variant="h4">
                <CountUp end={210} duration={2.5} />+
              </Typography>
              <Typography variant="body2">Happy customers</Typography>
            </Grid>

            <Grid item xs={2.4} align="center">
              <Typography variant="h4">
                <CountUp end={2220} duration={3} separator="," />+
              </Typography>
              <Typography variant="body2">sq.ft sold</Typography>
            </Grid>

            <Grid item xs={2.4} align="center">
              <Typography variant="h4">All</Typography>
              <Typography variant="body2">Premium Location</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          className={"newly client color-white text-black"}
          id="testimonial"
          sx={{ bgcolor: "#f3f8fc" }}
        >
          {/* old gallery */}
          {/* <div>
            <Typography variant="h3" gutterBottom component="div">
              <b>Gallery</b>
            </Typography>
        
            <Typography variant="body2">
              View all our client testimonials{" "}
            </Typography>
          </div>
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
          </Grid> */}
          <div className="client-testimonials">
            <Grid display="flex" justifyContent="center">
              <Grid>
                {/* <Typography
                  variant="h4"
                  component="div"
                  className="text-black bold"
                >
                  {" "}
                  Client Testimonials
                </Typography> */}
                <Typography variant="h3" gutterBottom component="div">
                  <b>Gallery</b>
                </Typography>
                {/* <Typography variant="body2" component="p" className="text-grey">
                  Here are the ways you can contact us with any questions you
                  have
                </Typography> */}
              </Grid>
            </Grid>

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
          </div>
          <Box display="flex" justifyContent="center" m={2}>
            <Link to="/client-testimonials" className="d-flex ">
              View more <ChevronRightIcon />
            </Link>
          </Box>
        </Box>

        <Box
          className={"latest color-grey text-black"}
          id="blogs"
          sx={{ bgcolor: "#f3f8fc" }}
        >
          <div>
            <Typography variant="h3" gutterBottom component="div">
              <b>Latest Blog</b>
            </Typography>
            {/* <Typography variant="h4" gutterBottom component="div"><b>Latest Blog</b></Typography> */}
            <Typography variant="body2">View all our blog </Typography>
          </div>
          <Grid container>
            <Grid item xs={12} sm={6} md={4} p={2}>
              <div className={"latestImage"}>
                <img src={blog1} alt="image" />
              </div>
              <div className={"latestCard"}>
                <Typography variant="h6" gutterBottom component="div">
                  <b>Lorem ipsum dummy text</b>
                </Typography>
                <p>
                  Simply dummy text of the printing and types industry has been
                  standard dummy.Simply dummy text of the printing and types
                  industry has been standard dummy.
                </p>
              </div>
              <Box display="flex" justifyContent="end">
                <Link to="/blogs" className="d-flex ">
                  Read more <ChevronRightIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} p={2}>
              <div className={"latestImage"}>
                <img src={blog2} alt="image" />
              </div>
              <div className={"latestCard"}>
                <Typography variant="h6" gutterBottom component="div">
                  <b>Lorem ipsum dummy text</b>
                </Typography>
                <p>
                  Simply dummy text of the printing and types industry has been
                  standard dummy.Simply dummy text of the printing and types
                  industry has been standard dummy.
                </p>
              </div>
              <Box display="flex" justifyContent="end">
                <Link to="/blogs" className="d-flex ">
                  Read more <ChevronRightIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} p={2}>
              <div className={"latestImage"}>
                <img src={blog3} alt="image" />
              </div>
              <div className={"latestCard"}>
                <Typography variant="h6" gutterBottom component="div">
                  <b>Lorem ipsum dummy text</b>
                </Typography>
                <p>
                  Simply dummy text of the printing and types industry has been
                  standard dummy.Simply dummy text of the printing and types
                  industry has been standard dummy.
                </p>
              </div>
              <Box display="flex" justifyContent="end">
                <Link to="/blogs" className="d-flex ">
                  Read more <ChevronRightIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} p={2}>
              <div className={"latestImage"}>
                <img src={blog1} alt="image" />
              </div>
              <div className={"latestCard"}>
                <Typography variant="h6" gutterBottom component="div">
                  <b>Lorem ipsum dummy text</b>
                </Typography>
                <p>
                  Simply dummy text of the printing and types industry has been
                  standard dummy.Simply dummy text of the printing and types
                  industry has been standard dummy.
                </p>
              </div>
              <Box display="flex" justifyContent="end">
                <Link to="/blogs" className="d-flex ">
                  Read more <ChevronRightIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} p={2}>
              <div className={"latestImage"}>
                <img src={blog2} alt="image" />
              </div>
              <div className={"latestCard"}>
                <Typography variant="h6" gutterBottom component="div">
                  <b>Lorem ipsum dummy text</b>
                </Typography>
                <p>
                  Simply dummy text of the printing and types industry has been
                  standard dummy.Simply dummy text of the printing and types
                  industry has been standard dummy.
                </p>
              </div>
              <Box display="flex" justifyContent="end">
                <Link to="/blogs" className="d-flex ">
                  Read more <ChevronRightIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} p={2}>
              <div className={"latestImage"}>
                <img src={blog3} alt="image" />
              </div>
              <div className={"latestCard"}>
                <Typography variant="h6" gutterBottom component="div">
                  <b>Lorem ipsum dummy text</b>
                </Typography>
                <p>
                  Simply dummy text of the printing and types industry has been
                  standard dummy.Simply dummy text of the printing and types
                  industry has been standard dummy.
                </p>
              </div>
              <Box display="flex" justifyContent="end">
                <Link to="/blogs" className="d-flex ">
                  Read more <ChevronRightIcon />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* <Grid item xs={12}>
          <Divider sx={{ my: { xs: 2, md: 3 }, borderColor: "#000000ff" }} />
        </Grid> */}
        <Box className={"contactUs"} id="contactUs" sx={{ bgcolor: "#f3f8fc" }}>
          <div>
            <Typography variant="h3" gutterBottom component="div">
              <b>Contact Us</b>
            </Typography>
            <Typography variant="body2">
              Here are the ways you can contact us with any questions you have{" "}
            </Typography>
          </div>
          <Grid container className="contactContainer">
            <Grid item xs={12} sm={6} lg={6} className="contact-item" p={0}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6491845788546!2d77.5804408!3d12.9942757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ebf6e4709808a33%3A0x24d2539043094c9!2sJayaram%20Infracon%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1755320742633!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map - Jayaram Infracon Pvt Ltd"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6} className="contact-item">
              <Box className="form">
                <TextField
                  className="TextFieldcss"
                  id="input-with-icon-textfield"
                  label="Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                  variant="standard"
                />
                <br />
                <br />
                <TextField
                  className="TextFieldcss"
                  id="input-with-icon-textfield"
                  label="Phone Number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneAndroidIcon />
                      </InputAdornment>
                    )
                  }}
                  variant="standard"
                />
                <br /> <br />
                <TextField
                  className="TextFieldcss"
                  id="input-with-icon-textfield"
                  label="Email ID"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                  variant="standard"
                />
                <br /> <br />
                <TextField
                  className="TextFieldcss"
                  id="input-with-icon-textfield"
                  label="Your Message"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MessageIcon />
                      </InputAdornment>
                    )
                  }}
                  variant="standard"
                />
                <Button variant="contained">SEND NOW</Button>
              </Box>
            </Grid>
            {/* <Grid item xs={12} sm={6} lg={6} className="contact-item" p={0}>
              <Box display="flex" className="item">
              </Box>
              <Box display="flex" className="item">
                <div className="icon">
                  <CallOutlinedIcon />
                </div>
                <div className="content">
                  <Typography
                    component="h1"
                    variant="h5"
                    align="left"
                    color="text.primary"
                    gutterBottom
                  >
                    Contact
                  </Typography>
                  <Typography variant="h6" align="center" paragraph>
                    +91 - 88802 26669
                  </Typography>
                </div>
              </Box>
              <Box display="flex" className="item">
                <div className="icon">
                  <EmailOutlinedIcon />
                </div>
                <div className="content">
                  <Typography
                    component="h1"
                    variant="h5"
                    align="left"
                    color="text.primary"
                    gutterBottom
                  >
                    Email Id
                  </Typography>
                  <Typography variant="h6" align="center" paragraph>
                    jayaram@jayaramgroup.com
                  </Typography>
                </div>
              </Box>
              <Box display="flex" className="item">
                <div className="icon">
                  <ContactMailOutlinedIcon />
                </div>
                <div className="content">
                  <Typography
                    component="h1"
                    variant="h5"
                    align="left"
                    color="text.primary"
                    gutterBottom
                  >
                    Address
                  </Typography>
                  <Typography variant="h6" align="left" paragraph>
                    First Floor, No 25, Kumara Park, West, Bengaluru, Serpentine Road, Seshadripuram-560020
                  </Typography>
                </div>
              </Box>
            </Grid> */}
          </Grid>
        </Box>

        {this.state.openYoutube && (
          <Modal
            open={this.state.openYoutube}
            onClose={() => this.handleClose(1, false, "")}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <div className="youtubeDiv">
              <div
                className="close"
                onClick={() => this.handleClose(1, false, "")}
              >
                {" "}
                <Close />
              </div>
              <Youtube url="pmVOYMPIkU0" />
            </div>
          </Modal>
        )}

        {this.state.openProjectDetails && (
          <Modal
            open={this.state.openProjectDetails}
            onClose={() => this.handleClose(2, false, {})}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Grid container className="projectModal">
              <Grid container>
                <div
                  className="close"
                  onClick={() => this.handleClose(2, false, {})}
                >
                  <div className="icon">
                    {" "}
                    <Close />{" "}
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={8} className={"root"}>
                {/* <img src={} alt="image"/> */}
                {/* <div style={{width : '100%', height: '100%', backgroundImage : `url(${DocumentUrl}documents/homeScreen/202111101636551797.jpeg)`}}>

                                </div> */}
                <Carousel autoPlay={true}>
                  {this.state.modelProjectData["web_project_images"].map(
                    (ScreenData) => {
                      return (
                        <Box
                          className={"image_body zoom"}
                          style={{
                            backgroundImage: `url(${
                              DocumentUrl + ScreenData.web_project_image_name
                            }`
                          }}
                        ></Box>
                      );
                    }
                  )}
                </Carousel>
              </Grid>
              <Grid item xs={12} md={4} className="details item">
                <div style={{ textAlign: "center" }}>
                  <img
                    src={`${DocumentUrl}${this.state.modelProjectData["web_project_icon"]}`}
                    alt="image"
                  />
                  <Typography variant="h6" gutterBottom component="div">
                    <b>{this.state.modelProjectData["web_project_name"]}</b>
                  </Typography>
                  <Typography
                    variant="body4"
                    gutterBottom
                    component="div"
                    pt={2}
                  >
                    {this.state.modelProjectData["web_project_address"]}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    component="div"
                    pb={2}
                  >
                    {this.state.modelProjectData["location_name"]}
                  </Typography>
                  {/* <Typography variant="body2" gutterBottom component="div"> <b>Rare No. {this.state.modelProjectData['web_project_added_by']}</b></Typography> */}
                  <Box mt={1} className="viewButton">
                    {" "}
                    {/* <a
                      href={this.state.modelProjectData["web_project_url"]}
                      target="_blank"
                    >
                      <button>Download Brochure </button>
                    </a> */}
                             <Button
  variant="outlined"
  href={DocumentUrl + this.state.modelProjectData["web_project_url"]}
  target="_blank"
  rel="noopener"
>
  Download Brochure
</Button>

                  </Box>
                </div>
              </Grid>
            </Grid>
          </Modal>
        )}
        <FloatingIcons />
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    homeScreenData: state.home.homeScreenData,
    projectLists: state.home.projectLists,
    testimonialsLists: state.home.testimonialsLists
  };
};
const mapActionsToProps = {
  getHomeData_action: getHomeData_action,
  getProject_action: getProject_action,
  getTestimonial_action: getTestimonial_action
};

export default compose(
  connect(mapStatesToProps, mapActionsToProps),
  // withStyles(useStyles),
  withRouter
)(Home);
