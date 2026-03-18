import {
  Box,
  Typography,
  Grid,
  IconButton,
  Container,
  Divider
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Rocket,
} from "@mui/icons-material";
import "./style.scss";
import "./style.css";
import KnsIcon from "../../Images/jayaramLogo.png";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

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
  }
];
const Footer = () => {
  const renderMenu = (item, i) => {
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
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.50",
        borderTop: 1,
        borderColor: "grey.200",
        backgroundColor: "#0A2553",
        // maxWidth:"100vh"
        padding:8,
      }}
    >
      <Grid  sx={{ py: 6 }} >
        <Grid container spacing={2}>
          {/* Logo and Description */}
          <Grid item xs={12} md={3} lg={3}>
            <img className="logoicon" src={KnsIcon} alt="image" />
          </Grid>

          {/* Navbar Column */}
          <Grid item xs={12} sm={6} md={2} lg={3}>
            {/* <Typography
              variant="h6"
              color="#ffffff"
              sx={{ mb: 2, fontWeight: 600 }}
            >
             &nbsp;
            </Typography> */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography
                variant="body2"
                component="a"
                href="#"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
              >
                <Link to={{ pathname: "home" }} style={{ textDecoration: "none",   color:"#ffffff" }}>Home</Link>
              </Typography>
                     <Typography
                variant="body2"
                component="a"
                href="#"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
              >
                <Link to={{ pathname: "aboutUs" }} style={{ textDecoration: "none",   color:"#ffffff" }}>About Us</Link>
              </Typography>
                     <Typography
                variant="body2"
                component="a"
                href="#"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
              >
                <Link to={{ pathname: "projects" }} style={{ textDecoration: "none",   color:"#ffffff" }}>Projects</Link>
              </Typography>
                     <Typography
                variant="body2"
                component="a"
                href="#"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
              >
                <Link to={{ pathname: "blogs" }} style={{ textDecoration: "none",   color:"#ffffff" }}>Blogs</Link>
              </Typography>
                     <Typography
                variant="body2"
                component="a"
                href="#"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
              >
                <Link to={{ pathname: "testimonial" }} style={{ textDecoration: "none",   color:"#ffffff" }}>Testimonials</Link>
              </Typography>

            </Box>
          </Grid>

          {/* Company Column */}
          <Grid item xs={12} sm={6} md={2} lg={3}>
            {/* <Typography
              variant="h6"
              color="#ffffff"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Company Info
            </Typography> */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {/* {["Analyst", "Commerce", "Marketing", "Insight"].map((item) => ( */}
              <Typography
                //   key={item}
                variant="body2"
                component="a"
                href="#"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
              >
                <Link to={{ pathname: "/CompanyInfo/TeamsofService" }}  style={{ textDecoration: "none",   color:"#ffffff" }}>
                  Terms of Service
                </Link>
                {/* {item} */}
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href="#"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
              >
                <Link to={{ pathname: "/CompanyInfo/Disclaimer" }} style={{ textDecoration: "none",   color:"#ffffff" }}>
                  Disclaimer
                </Link>
              </Typography>

              <Typography
                //   key={item}
                variant="body2"
                component="a"
                href="#"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
              >
                <Link to={{ pathname: "/CompanyInfo/PrivacyPolicy" }} style={{ textDecoration: "none",   color:"#ffffff" }}>
                  Privacy Policy
                </Link>
                {/* {item} */}
              </Typography>
              {/* ))} */}
            </Box>
          </Grid>

          {/* Contact us Column */}
          <Grid item xs={12} sm={6} md={2} lg={3}>
            {/* <Typography
              variant="h6"
              color="#ffffff"
              sx={{ mb: 2, fontWeight: 600 }}
            >
              Contact Us
            </Typography> */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {/* {["Commerce", "Analyst", "Insight", "Marketing"].map((item) => ( */}

              <Typography
                //   key={item}
                variant="body2"
                component="a"
               href="tel:+918880226669"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
                tel="08880226669"
              >
              <IconButton
                component="a"
                href="tel:+918880226669"
                size="small"
                sx={{ color: "#ffffff", "&:hover": { color: "#ffffff" } }}
              >
                <LocalPhoneIcon sx={{fontSize:"small"}}/>
              </IconButton> +91 - 88802 26669
              </Typography>
              <Typography
                //   key={item}
                variant="body2"
                component="a"
               href="mailto:jayaram@jayaramgroup.com"
                color="#ffffff"
                sx={{
                  textDecoration: "none",
                  "&:hover": { color: "#ffffff" }
                }}
              >
                 <IconButton
                component="a"
                 href="mailto:jayaram@jayaramgroup.com"
                size="small"
                sx={{ color: "#ffffff", "&:hover": { color: "#ffffff" } }}
              >
                <MailIcon sx={{fontSize:"small"}} />
              </IconButton>  jayaram@jayaramgroup.com
              </Typography>
              {/* ))} */}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ mt: 6, pt: 4 }}>
          <Divider sx={{ mb: 4, borderColor: "#ffffff" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2
            }}
          >
            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href="#"
                size="small"
                sx={{ color: "#ffffff", "&:hover": { color: "#ffffff" } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                size="small"
                sx={{ color: "#ffffff", "&:hover": { color: "#ffffff" } }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                size="small"
                sx={{ color: "#ffffff", "&:hover": { color: "#ffffff" } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="#"
                size="small"
                sx={{ color: "#ffffff", "&:hover": { color: "#ffffff" } }}
              >
                <LinkedIn />
              </IconButton>
            </Box>

            {/* Copyright */}
            <Typography variant="body2" color="#ffffff">
              © 2025 Jayaram-Infracon - All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
