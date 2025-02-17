import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate';
import { connect } from "react-redux";
import useStyles from "../../assets/js/useStyles";
import Skeleton from 'react-loading-skeleton';
import { GetStock } from "../../actions/news"
import './styles.scss'

//Import Component
import FeedRightbar from "../../components/FeedRightbar";

const itemsPerPage = 10;

const StockPage = (props) => {
    const {
        conetent,
        imagewdth,
    } = useStyles();

    const [themeMode, setThemeMode] = useState(props.themeMode);
    const [totalPages, setTotalPages] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPage, setSelectedPage] = useState(0);
    const [activeTab, setActiveTab] = useState('All');

    useEffect(() => {
        window.scrollTo({ top: 0 });
        let selectedPgae = localStorage.getItem('selectedStockPage')
        let loadPage = selectedPage;
        if ((selectedPgae && Number(selectedPgae))) {
            loadPage = Number(selectedPgae)
            setSelectedPage(loadPage)
        }
        onload(loadPage + 1, true);
    }, []);

    useEffect(() => {
        if (props.stocksLists.length != 0) {
            setIsLoading(false)
        }
    }, [props.stocksLists]);

    useEffect(() => {
        if (props.themeMode != themeMode) {
            setThemeMode(props.themeMode)
        }
    }, [props.themeMode]);

    const onload = async (pageCount, initial) => {
        setIsLoading(true)
        const data = await props.GetStock({ limit: 7, page: pageCount });
        if (data.data) {
            setTotalPages(Math.ceil(data.total_recodes / 7));
            setTimeout(() => {
                setIsLoading(false)
            }, 2000);

        }
    }

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % props.stocksLists.length;
        console.log(`User requested page number ${event.selected + 1}, which is offset ${newOffset}`);
        let page = (event.selected + 1)
        localStorage.setItem('selectedStockPage', event.selected)
        setSelectedPage(event.selected)
        onload(page, false);
    };

    const getCardLists = (propscurrentItems) => {
        return propscurrentItems.map(({ index, title, media, link, image, contents, social_links, list_contents, uuid }) => {
            //const image =  (media && media.length != 0 && !media.role) ? media[0].url : "http://localhost:3000/kick/static/media/black-logo-sm-2.2b746481de2311fed3c3.png"
            const contentsData = contents.length != 0 ? contents[0].replaceAll("\n\n", "") : ""
            return (
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
                                    {/* <p><strong>source :</strong> {source["_@ttribute"]}</p>
                                    <p style={{ fontSize: "12px", float: "right" }}>{time_ago(pubDate)}</p> */}
                                </div>

                                <p className='text-secondary'> {contentsData}</p>
                            </div>
                        </div>
                    </div>
                </RouterLink>
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

    const changeActiveTab = (tabName) => {
        setActiveTab(tabName);
    };

    const page = window.location.pathname.replaceAll("/", "")

    return (
        <Container maxWidth="lg" className={conetent}>
            <main>
                <div className='ads'>
                    <div id={`io_165143fcac3a71${page}`}></div>
                </div>
                <Grid container className='selection-one'>
                <Grid item lg={8} sm={12} className='grid-one' >
                <div id='stock-navbar' >
                <div className="segmented-card">
                    <div className="segmented">
                        <button className={`tabs ${activeTab === 'All' ? 'active' : ''}`} onClick={() => changeActiveTab('All')}>ALL</button>
                        <button className={`tabs ${activeTab === 'Today' ? 'active' : ''}`} onClick={() => changeActiveTab('Today')}>TODAY'S</button>
                        <button className={`tabs ${activeTab === 'Top Stories' ? 'active' : ''}`} onClick={() => changeActiveTab('Top Stories')}>TOP STORIES</button>
                        <button className={`tabs ${activeTab === 'Trending' ? 'active' : ''}`} onClick={() => changeActiveTab('Trending')}>TRENDING</button>
                    </div>
                </div>
                </div>
                <div>{activeTab}</div>
                </Grid>
                </Grid>
                <Grid container className='selection-one'>
                    <Grid item lg={8} sm={12} className='grid-one' >

                        {(isLoading) && <>{getCardLoader()}</>}


                        {(!isLoading) && <>
                            {getCardLists(props.stocksLists)}
                        </>}

                        {!isLoading && props.stocksLists.length != 0 &&
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
        stocksLists: reducer.stocksLists,
        themeMode: reducer.themeMode
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetStock: (data) => dispatch(GetStock(data))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(StockPage);