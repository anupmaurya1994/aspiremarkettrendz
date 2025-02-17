import React, { useEffect } from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { conetent } from '../../assets/js/globalStyle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//image
import image from "../../assets/images/card-post-footer.png"



const useStyles = makeStyles((theme) => ({
    font: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "22px",
        color: "#ADADAD"
    },
    abouttitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#CCCCCC',
        paddingBottom: '20px'
    },
    paragraphcontentwidth: {
        width: '358px',
        height: '242px',
        // textAlign:'justify'
    },
    imageset: {
        width: '337px',
        height: '200px'
    },
    paddingleft: {
        paddingleft: "15px"
    },
    aboutcontent: {
        lineHeight: '100%',
    },
    containerpadding: {
        // padding: '0px 25px 5px 25px'
    },
    contraycontentwidth: {
        // width:'755px'
    },
    conetent: {
        position: "inherit",
        width: "880px",
        margin: "0 auto"
    }

}));

function AboutPage() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <Container maxWidth="lg" className={`${classes.conetent} container-about`}>
            <main>
                <div>
                    <Typography variant="h6" align="center" className={`${classes.abouttitle} about-content`}>
                        About US
                    </Typography>
                </div>
                {/* <Grid container className={classes.containerpadding}>
                    <Grid item lg={6} md={6} sm={6}    >
                        <div className={classes.paragraphcontentwidth}>
                            <Typography variant="p" className={`${classes.aboutcontent} ${classes.font} about-content`}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6}>
                        <img src={image} className={`${classes.imageset} ${classes.paddingleft}`} />
                    </Grid>
                </Grid>
                <Grid container className={classes.containerpadding}>
                    <Grid lg={6} md={6} sm={6} >
                        <img src={image} className={classes.imageset} />
                    </Grid>
                    <Grid lg={6} md={6} sm={6}>
                        <div className={classes.paragraphcontentwidth}>
                            <Typography variant="p" className={`${classes.aboutcontent} ${classes.font} about-content`}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the .
                            </Typography>
                        </div>

                    </Grid>
                </Grid> */}
                <div className={`${classes.containerpadding} ${classes.contraycontentwidth}`}>
                    <Typography variant="p" className={`${classes.aboutcontent} ${classes.font} about-content`}>
                        <u>AspireMarketTrendz </u>
                        is a financial publishing website that does not provide individual financial advice. We obtain content/data from a variety of reliable sources.
                        <br /><br /> You should understand that accuracy can never be guaranteed. We don't create material to suit your own needs, so you should know that we're not financial advisors and that we do not offer personalized advice to our readers/subscribers. Every article we publish is the opinion of the author, and it may be updated or changed without notice. Published material may become out-of-date, and there is no requirement to update it.
                        For those that subscribe to our free email list, we will send sponsored emails, which include paid advertisements. <br /><br />
                        For those that subscribe to our free email list, we will send sponsored emails, which include paid advertisements. The advertising and the product or service being advertised are not affiliated with or controlled by <u>AspireMarketTrendz</u>. You are solely responsible for your own actions. We are not compensated directly by our subscribers but by the advertisers/sponsors.
                    </Typography>
                </div><br />
                <div className={`${classes.containerpadding} ${classes.contraycontentwidth}`}>
                    <Typography variant="p" className={`${classes.aboutcontent} ${classes.font} about-content`}>
                        We do not keep or store any payment information of our subscribers.
                    </Typography>
                </div>
            </main>
        </Container >
    )
}

export default AboutPage;