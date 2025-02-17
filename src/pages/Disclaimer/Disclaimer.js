import React from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { conetent } from '../../assets/js/globalStyle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { height, margin, padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    conetent: {
        maxWidth: '750px'
    },

    disclaimerpolicytitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#CCCCCC',
        marginBottom: '25px'
    },
    disclaimerparagraphsetup: {
        // width: "350px",
        // height: "385px",
        // margin: '0 auto'
    },
    disclaimerparagraphtitle: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#ADADAD',
        marginBottom: '10px'
    },
    disclaimercontent: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '18px',
        lineHeight: '22px',
        color: '#ADADAD',
    },
    disclaimerparagraphsetuptwo: {
        margin: '40px auto',
        // width:"92%"
    },
    paragraphspace: {
        margin: '30px auto'
    }


}));

function Disclaimer() {
    const classes = useStyles();

    return (<Container maxWidth="lg" className={` pp-container`}>
        <main>
            <div>
                <Typography variant="h6" align="center" className={classes.disclaimerpolicytitle}>
                    Disclaimer
                </Typography>
            </div>
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <div className={`${classes.disclaimerparagraphsetup} left-content`} >
                        <Typography variant="p" className={classes.disclaimercontent}>
                            This website contains information regarding CLM Media LLC, its affiliates, subsidiaries, licensees, employees, agents, officers, and independent contractors, hereinafter referred to as “The Company”. The website, AspireMarketTrendz.com is owned and operated by The Company and may contain advertisements, sponsored content, paid insertions, affiliate links or other forms of monetization.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <div className={`${classes.disclaimerparagraphsetup} left-content`} >
                        <Typography variant="p" className={classes.disclaimercontent}>
                            The Company abides by word of mouth marketing standards. We believe in honesty of relationship, opinion and identity. The compensation received may influence the advertising content, topics or posts made in this blog. That content, advertising space or post will be clearly identified as paid or sponsored content.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <div className={`${classes.disclaimerparagraphsetup} left-content`} >
                        <Typography variant="p" className={classes.disclaimercontent}>
                            The Company is never directly compensated to provide opinion on products, services, websites and various other topics. The views and opinions expressed on this website are purely those of the authors. This site does not contain any content which might present a conflict of interest.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <div className={`${classes.disclaimerparagraphsetup} left-content`} >
                        <Typography variant="p" className={classes.disclaimercontent}>
                            The Company makes no representations, warranties, or assurances as to the accuracy, currency or completeness of the content contain on this website or any sites linked to or from this site.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <div className={`${classes.disclaimerparagraphsetup} left-content`} >
                        <Typography variant="p" className={classes.disclaimercontent}>
                            The Company provides paid advertisements to our customers. Although we may have sent an email, The Company does not endorse this product nor is it responsible for the content of this ad. Furthermore, we make no guarantee or warranty about what is advertised above. Through this website and emails you are able to link to other websites which are not under the control of The Company. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <div className={`${classes.disclaimerparagraphsetup} left-content`} >
                        <Typography variant="p" className={classes.disclaimercontent}>
                            U.S. Government Required Disclaimer – Commodity Futures Trading Commission Futures and Options trading has large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the futures and options markets. Don’t trade with money you can’t afford to lose. This is neither a solicitation nor an offer to Buy/Sell futures or options. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on this web site. The past performance of any trading system or methodology is not necessarily indicative of future results.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <div className={`${classes.disclaimerparagraphsetup} left-content`} >
                        <Typography variant="p" className={classes.disclaimercontent}>
                            CFTC RULE 4.41 – HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS HAVE CERTAIN LIMITATIONS. UNLIKE AN ACTUAL PERFORMANCE RECORD, SIMULATED RESULTS DO NOT REPRESENT ACTUAL TRADING. ALSO, SINCE THE TRADES HAVE NOT BEEN EXECUTED, THE RESULTS MAY HAVE UNDER-OR-OVER COMPENSATED FOR THE IMPACT, IF ANY, OF CERTAIN MARKET FACTORS, SUCH AS LACK OF LIQUIDITY. SIMULATED TRADING PROGRAMS IN GENERAL ARE ALSO SUBJECT TO THE FACT THAT THEY ARE DESIGNED WITH THE BENEFIT OF HINDSIGHT. NO REPRESENTATION IS BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFIT OR LOSSES SIMILAR TO THOSE SHOWN.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <div className={`${classes.disclaimerparagraphsetup} left-content`} >
                        <Typography variant="p" className={classes.disclaimercontent}>
                            All trades, patterns, charts, systems, etc., discussed on our website or in messages and product materials are for illustrative purposes only and not to be construed as specific advisory recommendations. All ideas and material presented are entirely those of the author and do not necessarily reflect those of the publisher or The Company. No system or methodology has ever been developed that can guarantee profits or ensure freedom from losses. No representation or implication is being made that using the methodology or system will generate profits or ensure freedom from losses. The testimonials and examples used herein are exceptional results, which do not apply to the average member, and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual’s success depends on his or her background, dedication, desire, and motivation.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <div className={`${classes.disclaimerparagraphsetup} left-content`} >
                        <Typography variant="p" className={classes.disclaimercontent}>
                            Understand that The Company, its owners, subsidiaries, employees, affiliates and agents do not solicit or execute trades or give investment advice, are not registered as brokers or advisers with any federal or state agency, and encourage consultation with a licensed representative or registered investment professional prior to making any particular investment or using any investment strategy.                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <br />
        </main>
    </Container>
    )
}

export default Disclaimer;