import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate';
import { connect } from "react-redux";
import Skeleton from 'react-loading-skeleton'

//Import
import useStyles from "../assets/js/useStyles";
import 'react-loading-skeleton/dist/skeleton.css'
import { GetSearchNews, setSearchValue } from "../actions/news";
//Import Component
import FeedRightbar from "./FeedRightbar";



const itemsPerPage = 10;
const NewsPage = (props) => {
    const {
        conetent,
        imagewdth,
    } = useStyles();

    const [themeMode, setThemeMode] = useState(props.themeMode);
    const [Lists, setListst] = useState([])
    const [totalPages, setTotalPages] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPage, setSelectedPage] = useState(0);

    useEffect(() => {
        let selectedPgae = localStorage.getItem('selectedNewsPage')
        let loadPage = selectedPage;
        if ((selectedPgae && Number(selectedPgae))) {
            loadPage = Number(selectedPgae)
            setSelectedPage(loadPage)
        }
        onload(loadPage + 1, true);
    }, []);

    useEffect(() => {
        if (props.themeMode != themeMode) {
            setThemeMode(props.themeMode)
        }
    }, [props.themeMode]);

    const onload = async (pageCount) => {
        setIsLoading(true)
        const data = await props.GetSearchNews({ limit: 7, page: pageCount, search: props.searchValue });
        if (data.data) {
            const items = data.data
            setListst(items)
            setTotalPages(Math.ceil(data.total_recodes / 7));
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);
        }
    }

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Lists.length;
        console.log(`User requested page number ${event.selected + 1}, which is offset ${newOffset}`);
        let page = (event.selected + 1)
        localStorage.setItem('selectedNewsPage', event.selected)
        setSelectedPage(event.selected)
        onload(page);
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    };

    const getCardLists = (propscurrentItems) => {
        return propscurrentItems.map(({ index, title, media, link, image, contents, social_links, list_contents, uuid }) => {
            //const image =  (media && media.length != 0 && !media.role) ? media[0].url : "http://localhost:3000/kick/static/media/black-logo-sm-2.2b746481de2311fed3c3.png"
            const contentsData = contents.length != 0 ? contents[0].replaceAll("\n\n", "") : ""
            return (
                <div onClick={() => {
                    props.setSearchValue("")
                }} >
                    <RouterLink
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
                        }}
                        className='card-list-link'>
                        <div key={index} className='card-list'>
                            <div className="image-card" >
                                <img src={image} width="218" height="150" className={`${imagewdth}`} />
                                <div className='image-body'>
                                    <p className='text-primary'>{title}</p>
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        fontSize: "12px"
                                    }}>
                                    </div>
                                    <p className='text-secondary'> {contentsData}</p>
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>

            );
        });
    }


    const getCardLoader = () => {
        const baseColor = themeMode == "dark" ? "#0e0e0e" : "#ebebeb";
        const highlightColor = themeMode == "dark" ? "#061727" : "#f5f5f5";
        return [1, 2, 3, 4, 5, 6, 7, 8].map(() => {
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
    const page = window.location.pathname.replaceAll("/", "")
    return (
        <Container maxWidth="lg" className={conetent}>
            <main>
                <div className='ads'>
                    <div id={`io_165143fcac3a71${page}`}></div>
                </div>
                <Grid container className='selection-one'>
                    <Grid item lg={8} sm={12} className='grid-one' >

                        {(isLoading) && <>{getCardLoader()}</>}


                        {(!isLoading) && <>
                            {getCardLists(Lists)}
                        </>}

                        {!isLoading && Lists.length != 0 &&
                            <ReactPaginate
                                className='pagination'
                                breakLabel="..."
                                nextLabel=""
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={totalPages}
                                forcePage={selectedPage}
                                previousLabel=""
                                renderOnZeroPageCount={null}
                            />
                        }
                        {!isLoading && Lists.length == 0 &&
                            <>
                                <div style={{ textAlign: 'center', paddingTop: '200px' }}>
                                    <h2>No Data</h2>
                                    <p>No data,please try again.</p>
                                </div>
                            </>
                        }

                    </Grid>
                    <Grid item lg={4} sm={12}>
                        <FeedRightbar />
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetSearchNews: (data) => dispatch(GetSearchNews(data)),
        setSearchValue: (data) => dispatch(setSearchValue(data))
    };
}


export default connect(null, mapDispatchToProps)(NewsPage);