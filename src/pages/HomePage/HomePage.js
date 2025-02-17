import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import useStyles from "../../assets/js/useStyles";
import { connect } from "react-redux";

//import contant data
import { GetDashboard } from "../../actions/news";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

//Import Component
import FeedRightbar from "../../components/FeedRightbar";


function HomePage(props) {
    const {
        conetent,
        heading,
        LatestArticles,
        hrstyle,
        imagewdth
    } = useStyles();

    const [feedData, setFeedData] = useState({
        title: "",
        contents: "",
        image: "",
        link: ""
    });

    const [themeMode, setThemeMode] = useState(props.themeMode);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        props.GetDashboard();
    }, []);

    useEffect(() => {
        setFeedData(props.feedData)
        console.log("------>>>>", props)
    }, [props.feedData]);

    useEffect(() => {
        if (props.themeMode != themeMode) {
            setThemeMode(props.themeMode)
        }
    }, [props.themeMode]);

    useEffect(() => {
        if (props.marketWatchMain) {
            setFeedData(props.marketWatchMain)
        }

    }, [props.marketWatchMain]);


    const getCardLists = (latestArticlesList) => {
        return latestArticlesList.map(({ link, image, title, contents, social_links, list_contents, uuid }, index) => {
            const contentsData = contents.length != 0 ? contents[0].replaceAll("\n\n", "") : ""
            return (
                <RouterLink
                    className='card-list-link'
                    to={{
                        pathname: `/story/${uuid}`,
                        state: {
                            index,
                            title,
                            image,
                            contents,
                            contentsData,
                            link,
                            social_links,
                            list_contents
                        }
                    }}>
                    <div key={index}>
                        <div className='card-list'>
                            <div className="image-card" >
                                <img src={image} width="218" height="150" className={`${imagewdth}`} />
                                <div className='image-body'>
                                    <p className='text-primary'>{title}</p>
                                    <p className='text-secondary'> {contentsData}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            );
        });
    }

    const getCardLoader = () => {
        const baseColor = themeMode == "light" ? "#0e0e0e" : "#ebebeb";
        const highlightColor = themeMode == "light" ? "#061727" : "#f5f5f5";
        return [1, 2, 3, 4].map(() => {
            return (
                <div className="post">
                    <div className="left-col">
                        <div className="avatar">
                            <Skeleton
                                baseColor={baseColor}
                                highlightColor={highlightColor}
                                height="100%"
                                containerClassName="avatar-skeleton"
                            />
                        </div>
                        <div className="user-name">
                            <Skeleton
                                baseColor={baseColor}
                                highlightColor={highlightColor}
                                width={150} />
                        </div>
                    </div>
                    <div className="right-col">
                        <>
                            <Skeleton
                                baseColor={baseColor}
                                highlightColor={highlightColor}
                                height="100%"
                                width={"551px"}
                                count={1} />
                        </>
                    </div>
                </div>
            )
        })
    }


    const baseColor = themeMode == "dark" ? "#0e0e0e" : "#ebebeb";
    const highlightColor = themeMode == "dark" ? "#061727" : "#f5f5f5";
    const contentsData = feedData.contents.length != 0 ? feedData.contents[0].split("\n\n")[0] : ""
    const page = window.location.pathname.replaceAll("/", "")
    return (
        <Container maxWidth="lg" className={conetent}>
            <main>
                <div className='ads'>
                    <div id={`io_165143fcac3a71${page}`}></div>
                </div>
                <Grid container className='selection-one'>
                    <Grid item lg={8} sm={12} alignItems={'center'} justifyContent={'space-between'} className='grid-one' >
                        <div className="top-news-card">
                            <RouterLink
                                className='card-list-link'
                                to={{
                                    pathname: `/story/${feedData.uuid}`,
                                    state: {
                                        title: feedData.title,
                                        image: feedData.image,
                                        contents: feedData.contents,
                                        contentsData: feedData.contents,
                                        list_contents: feedData.list_contents,
                                        link: feedData.link,
                                        social_links: feedData.social_links
                                    }
                                }}>

                                {feedData.image != "" && <img src={feedData.image} className="home-amazon-image" />}
                                {feedData.image == "" &&
                                    <Skeleton
                                        baseColor={baseColor}
                                        highlightColor={highlightColor}
                                        width={"100%"}
                                        height={"437px"}
                                    />
                                }
                                {feedData.image != "" && <>
                                    <h2 className={`${heading} sm-font-size`}  >{feedData.title}</h2>
                                    <p className='simple-text'>{contentsData}</p>
                                </>}
                            </RouterLink>
                            {feedData.image == "" &&
                                <Skeleton
                                    baseColor={baseColor}
                                    highlightColor={highlightColor}
                                    width={"100%"}
                                    height={"98px"}
                                />
                            }
                        </div>
                        <div>
                            <Typography variant="h6" align="left" className={`${LatestArticles} text-theme`}>
                                Latest articles
                            </Typography>
                            <hr className={hrstyle} />
                            <div style={{ height: "672px", overflowY: 'scroll', width: '91%' }} className="scrollbar">
                                {props.marketWatchLatest.length != 0 && getCardLists(props.marketWatchLatest)}
                                {props.marketWatchLatest.length == 0 && getCardLoader()}
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} sm={12}>
                        <FeedRightbar />
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}


const mapStateToProps = ({ reducer }) => {
    return {
        feedData: reducer.feedData,
        themeMode: reducer.themeMode,
        latestArticlesList: reducer.latestArticlesList,
        marketWatchMain: reducer.marketWatchMain,
        marketWatchLatest: reducer.marketWatchLatest,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetDashboard: () => dispatch(GetDashboard())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
