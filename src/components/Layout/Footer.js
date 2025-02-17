import React from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Applogo from "../../assets/images/logo-small-2.png";
import NewApplogo from "../../assets/images/new-d-logo-removebg-preview.png";
import fb from "../../assets/images/fb.png";
import instal from "../../assets/images/instal.png";
import twitter from "../../assets/images/twitter.png";


const useStyles = makeStyles((theme) => ({
  footer: {
    background: "rgba(156, 156, 156, 0.08)",
    borderTop: "1px solid #505050",
    backdropFilter: "blur(10px)",
    padding: "theme.spacing(8)",
    color: "#fff",
    minHeight: "327px"
  },
  footerSocialLogo: {
    width: "35px",
    height: "35px"
  },
  footercopyright: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={`${classes.footer}`}>
      <Container maxWidth="lg">
        <Grid container style={{ marginTop: "80px" }}>
          <Grid item lg={4} md={12} sm={12}
            className={'border img-logo'}>
            <Link to={'/home'}><img width={'90%'} src={NewApplogo} className="footer-img" /></Link>
          </Grid>
          <Grid item lg={4} md={6} sm={6} className={'border'}>
            <div style={{ display: "flex", margin: "0 auto", width: "279px" }}>
              <ul className='list'>
                <Link to={"/home"}> <li><i className="arrow right"></i>Home</li></Link>
                <Link to={"/news"}> <li><i className="arrow right"></i>News</li></Link>
                <Link to={"/stocks"}> <li><i className="arrow right"></i>Stocks</li></Link>


              </ul>
              <ul className="list">
                <Link to={"/investing"}> <li><i className="arrow right"></i>Markets</li></Link>
                <Link to={"/contact"}> <li><i className="arrow right"></i>Contact US</li></Link>
                <Link to={"/about"}> <li><i className="arrow right"></i>About US</li></Link>
              </ul>

            </div>
            <div style={{ display: "flex", margin: "0 auto", width: "279px" }}>
              <Link className='ms-4' style={{ textDecoration: 'none' }} to={"/admin-panel"}> <li><i className="arrow right"></i>Admin Panel</li></Link>
            </div>
          </Grid>
          <Grid item lg={4} md={6} sm={6} >
            <div style={{ display: "flex", margin: "0 auto", width: "211px" }}>
              <ul className="list">
                <Link to={"/privacy-poicy"}> <li> Privacy & Terms of Use </li></Link>
                <Link to={"/disclaimer"}> <li> Disclaimers </li></Link>

                <li> Advertise</li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <div className={classes.footercopyright}>
          <p className="copyright">
            &copy; Aspire Market Trendz @ {new Date().getFullYear()}, All rights reserved.
          </p>
          <div className="icon-social">
            <img src={fb} className={classes.footerSocialLogo} />
            <img src={instal} className={classes.footerSocialLogo} />
            <img src={twitter} className={classes.footerSocialLogo} />
          </div>
        </div>
      </Container>
    </footer>
  );
}

