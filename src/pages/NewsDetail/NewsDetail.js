import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Whatsapp from "@material-ui/icons/WhatsApp";
import Email from "@material-ui/icons/Email";
import Linkedin from "@material-ui/icons/LinkedIn";
import useStyles from "../../assets/js/useStyles";
import 'react-loading-skeleton/dist/skeleton.css';
import "./newsdetail.css";

//Import Action
import { GetStory } from "../../actions/news";

//Import Component
import FeedRightbar from "../../components/FeedRightbar";

const itemsPerPage = 10;


const NewsDetail = (props) => {
    const { uuid } = useParams();
    const {
        conetent,
        socialButton,
        socialRootButtons,
    } = useStyles();

    const [state, setState] = useState(null)
    const [contentList, setContentList] = useState(null)
    const [social_links, setSocialLinks] = useState(null)
    const [list_contents, listContents] = useState(null)

    useEffect(() => {
        if (props.location.state) {
            onSetLoad(props.location.state)
        } else {
            let path_name = props.location.pathname.replaceAll("/story/", "");
            props.GetStory(path_name).then((resData) => {
                console.log(resData)
                if (resData.status) {
                    onSetLoad(resData.data)
                }
            })
        }
    }, []);

    const onSetLoad = (props_location_state) => {
        const t_state = props_location_state;
        const t_contentList = t_state.contents.length != 0 ? t_state.contents[0].split("\n\n") : [];
        const t_social_links = t_state.social_links;
        const t_list_contents = t_state.list_contents ? t_state.list_contents : [];
        setState(t_state)
        setContentList(t_contentList)
        setSocialLinks(t_social_links)
        listContents(t_list_contents)
        setTimeout(() => {
            window.scrollTo({ top: 0 });
            // const grid = document.querySelector(".news-conetent").offsetHeight
            // if (grid > 1514) {
            //     window.addEventListener('scroll', handleScrollToElement);
            // }
            const grid = document.querySelector(".news-conetent");
            if (grid && grid.offsetHeight > 1514) {
                window.addEventListener('scroll', handleScrollToElement);
            }

        }, 1000)
    }
    const handleScrollToElement = () => {
        const scrollBar = document.getElementsByClassName('builder-sidebar_scroll')[0];
        const newsContent = document.querySelector(".news-conetent");
        if (!scrollBar || !newsContent) {
            console.warn("Required elements not found.");
            return;
        }

        const grid = newsContent.offsetHeight;
        const grid2 = scrollBar.offsetHeight + 100;

        if (window.scrollY === 0) {
            scrollBar.classList.remove('fixed-scroll');
            scrollBar.style.marginTop = "0px";
        }

        if (window.scrollY > 1250 && grid > window.scrollY - 500 &&
            !((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
            if (!scrollBar.classList.contains('fixed-scroll')) {
                scrollBar.style.paddingTop = `${window.scrollY - 1250}px`;
                scrollBar.style.maxHeight = `${window.scrollY}px`;
                scrollBar.style.marginBottom = "20px";
            }
        } else if (window.scrollY < 203) {
            scrollBar.classList.remove('fixed-scroll');
            scrollBar.style.paddingTop = "0px";
            scrollBar.style.maxHeight = "auto";
            scrollBar.style.marginBottom = "0px";
        } else {
            scrollBar.classList.remove('fixed-scroll');
        }
    };


    const getMenuButtons = () => {

        let headersData = [];

        if (social_links.facebook != "") {
            headersData.push({
                Iconview: Facebook,
                label: "Facebook",
                href: social_links.facebook,
            })
        }

        if (social_links.twitter != "") {
            headersData.push({
                Iconview: Twitter,
                label: "Twitter",
                href: social_links.twitter,
            })
        }

        if (social_links.whatsapp != "") {
            headersData.push({
                Iconview: Whatsapp,
                label: "Whatsapp",
                href: social_links.twitter,
            })
        }

        if (social_links.linkedin != "") {
            headersData.push({
                Iconview: Linkedin,
                label: "Linkedin",
                href: social_links.linkedin,
            })
        }

        if (social_links.mail != "") {
            headersData.push({
                Iconview: Email,
                label: "Mail",
                href: social_links.mail,
            })
        }

        return headersData.map(({ label, href, Iconview }) => {
            return (
                <a href={href} className='card-list-link text-white' target="_blank">
                    <Button
                        startIcon={<Iconview />}
                        {...{
                            key: 'lable',
                            color: "inherit",
                            className: `${socialButton} social-button`,
                        }}
                    >
                        {label}
                    </Button>
                </a>
            );
        });
    };
    const page = window.location.pathname.replaceAll("/", "")

    console.log(state);
    console.log(contentList);
    console.log(social_links);
    console.log(list_contents);
    if (!state || !contentList || !social_links || !list_contents) {
        return false;
    }

    return (
        <Container maxWidth="lg" className={conetent}>
            <main>
                <div className='ads'>
                    <div id={`io_165143fcac3a71${page}`}></div>
                </div>
                <Grid container className='selection-one'>
                    <Grid item lg={9} sm={12} alignItems={'center'} justifyContent={'space-between'} className='grid-one' >
                        <div className='news-conetent'>
                            <div>
                                <Typography variant="h6" align="left" style={{ "width": "90%" }} className={'newsdeatiltitle simple-text'}>
                                    {state.title}
                                </Typography>
                            </div>
                            {social_links &&
                                <div className={`${socialRootButtons} social-icon`}>{getMenuButtons()}</div>
                            }
                            <div className="news-details-top-news-card no-shadow">
                                <img src={state.image} className="amazon-image" />
                            </div>

                            <div className='simple-text more-information'>
                                {contentList.map(item => (
                                    <p>{item}</p>
                                ))}
                            </div>

                            <div className='simple-text more-information' >
                                {list_contents.slice(0, -1).map(item => (
                                    <div dangerouslySetInnerHTML={{ __html: item }}></div>
                                ))}
                            </div>

                            <a href={state.link} target={'_blank'} className="simple-text">Link</a>
                        </div>

                    </Grid>
                    <Grid item lg={3} sm={12} className="builder-sidebar_scroll">
                        <FeedRightbar />
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}

const mapStateToProps = ({ reducer }) => {
    return {
        newsLists: reducer.newsLists
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetStory: (data) => dispatch(GetStory(data))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);