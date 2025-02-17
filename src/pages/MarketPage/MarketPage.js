import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import useStyles from "../../assets/js/useStyles";
// import AdsComponent from "../../components/Layout/Ads";

//Import Images
import amazon from "../../assets/images/amazon.png";
import cardPostFooterImg from "../../assets/images/card-post-footer.png"
import { TickerTape, MarketOverview } from "react-tradingview-embed";
//import contant data
import { headersData, marketCardList, WhiteTextTypography } from '../../constantData';

function MarketPage() {
    const {
        conetent,
        sectionOne,
        advertisment,
        heading,
        cardComponent,
        socialButton,
        socialRootButtons,
        LatestArticles,
        cardPostDeliverd,
        inputEmail,
        subscribeButton,
        cardPostFooter,
        freeBook,
        advertismentText,
        hrstyle
    } = useStyles();

    const classes = useStyles();
    const [themeMode, setThemeMode] = useState('dark');

    const mode = document.body.className == "light-mode" ? 'light' : "dark";
    if (mode != themeMode) {
        setThemeMode(mode)
    }

    const getMenuButtons = () => {
        return headersData.map(({ label, href, Icon }) => {
            return (
                <Button
                    startIcon={<Icon />}
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: `${socialButton} social-button`,
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    const getCardLists = () => {
        return marketCardList.map(({ image, textPrimary, textSecondary }) => {
            return (
                <div className='card-list'>
                    <div className="image-card" >
                        <img src={image} width="218" height="150" />
                        <div className='image-body'>
                            <p className='text-primary'>{textPrimary}</p>
                            <p className='text-secondary'> {textSecondary}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }
    const page = window.location.pathname.replaceAll("/", "")
    return (
        <Container maxWidth="lg" className={conetent}>
            <main>
                <div className='ads'>
                    <div id={`io_165143fcac3a71${page}`}></div>
                </div>
                <Grid container className='selection-one'>
                    <Grid item lg={8} sm={12} alignItems={'center'} justifyContent={'space-between'} className='grid-one' >
                        {getCardLists()}
                        {getCardLists()}
                    </Grid>
                    <Grid item lg={4} sm={12}>
                        <div className={`${cardComponent} cardComponent`} >
                            {themeMode == mode &&
                                <MarketOverview
                                    widgetProps={{
                                        colorTheme: mode,
                                        isTransparent: true,
                                    }}
                                ></MarketOverview>
                            }
                        </div>
                        {/* <img src={cardPostFooterImg} className={freeBook} /> */}
                        <div className={`${cardPostDeliverd} cardPostDeliverd`}>
                            <WhiteTextTypography variant="h6" className="card-post-deliverd-title-1">
                                Get New Posts Delivered to Your Inbox
                            </WhiteTextTypography>
                            <WhiteTextTypography variant="subtitle1" className='card-post-deliverd-title-2'>
                                Subscribe to our mailing list and get interesting stuff and updates to your email inbox.
                            </WhiteTextTypography>
                            <input type="text" placeholder='Email' className={inputEmail} />
                            <Button
                                {...{
                                    color: "inherit",
                                    to: "#",
                                    component: RouterLink,
                                    className: subscribeButton,
                                }}>
                                SUBSCRIBE
                            </Button>
                            <p className={cardPostFooter}>
                                *by submitting your information you agree to the terms of our Privacy Policy. You will receive Weekly Stock Watch email and third party offers. You can unsubscribe anytime by selecting unsubscribe at the bottom of our emails.
                            </p>
                        </div>
                        {/* <AdsComponent /> */}

                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}

export default MarketPage;
