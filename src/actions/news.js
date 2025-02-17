import axios from './axiosService';
import * as TYPES from './types';

export const GetNewsState = (newsLists) => {
    return {
        type: TYPES.SET_NEWS_DATA,
        newsLists
    };
}

export const AddNewsManualState = (addNewsList) => {
    return {
        type: TYPES.SET_ADD_NEWS_MANUAL,
        addNewsList
    };
}
export const GetStockState = (stocksLists) => {
    return {
        type: TYPES.SET_STOCK_DATA,
        stocksLists
    };
}
export const GetInvestingState = (investingLists) => {
    return {
        type: TYPES.SET_INVESTING_DATA,
        investingLists
    };
}
export const GetAllManualNewsState = (manualNewsLists) => {
    return {
        type: TYPES.SET_MANUAL_NEWS_DATA,
        manualNewsLists
    };
}

export const GetLatestArticlesState = (latestArticlesList) => {
    return {
        type: TYPES.GET_LATEST_ARTICLES_DATA,
        latestArticlesList
    };
}
export const setSearchValue = (searchValue) => {
    return {
        type: TYPES.SET_SEARCH_VALUE,
        searchValue
    };
}
export const setThemeMode = (themeMode) => {
    return {
        type: TYPES.SET_THEME_MODE,
        themeMode
    };
}

export const GetFeedState = (feedData) => {
    return {
        type: TYPES.GET_FEED_DATA,
        feedData
    };
}
export const GetMarketWatchMainFeedState = (marketWatchMain) => {
    return {
        type: TYPES.Market_Watch_Main,
        marketWatchMain
    };
}
export const GetMarketWatchLatestState = (marketWatchLatest) => {
    return {
        type: TYPES.Market_Watch_Latest,
        marketWatchLatest
    };
}

export const GetNews = (payload) => async dispatch => {
    try {
        const res = await axios.apis("POST", `/api/get-finance-news-v3`, payload);
        dispatch(GetNewsState(res.data));
        return res;
    } catch (err) {
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}

export const GetSearchNews = (payload) => async dispatch => {
    try {
        const res = await axios.apis("POST", `/api/get-search-record`, payload);
        return res;
    } catch (err) {
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}

export const GetStock = (payload) => async dispatch => {
    try {
        const res = await axios.apis("POST", `/api/get-stock-news`, payload);
        dispatch(GetStockState(res.data));
        return res;
    } catch (err) {
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}

export const AddNewsManual = (payload) => async dispatch => {
    try {
        const res = await axios.apis("POST", `/api/add-news`, payload);
        dispatch(AddNewsManualState(res.data));
        return res;
    } catch (err) {
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}

export const GetInvesting = (payload) => async dispatch => {
    try {
        const res = await axios.apis("POST", `/api/get-investing`, payload);
        dispatch(GetInvestingState(res.data));
        return res;
    } catch (err) {
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}

export const GetAllManualNews = (payload) => async dispatch => {
    try {
        const res = await axios.apis("POST", `/api/get-manual-news`, payload);
        dispatch(GetAllManualNewsState(res.data));
        return res;
    } catch (err) {
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}

export const GetDashboard = () => async dispatch => {
    try {
        const res = await axios.apis("GET", `/api/get-dashboard-news`);
        if (res.status) {
            dispatch(GetFeedState(res.data.main_article));
            dispatch(GetLatestArticlesState(res.data.latest_news));


            if (res.data.marketWatchMainArticle) {
                console.log("-------res.data.marketWatchMainArticle-------", res.data.marketWatchMainArticle)
                dispatch(GetMarketWatchMainFeedState(res.data.marketWatchMainArticle));
            }

            if (res.data.marketWatchLatestArticles) {
                dispatch(GetMarketWatchLatestState(res.data.marketWatchLatestArticles));
            }

        }
        return res;
    } catch (err) {
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}

export const GetContactForm = (payload) => async dispatch => {
    try {
        const res = await axios.apis("POST", `/api/send-contactus`, payload);
        return res;
    } catch (err) {
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}

export const GetStory = (id) => async dispatch => {
    try {
        const res = await axios.apis("GET", `/api/get-stort/${id}`);
        return res;
    } catch (err) {
        console.log(err);
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}

export const CallSubscribe = (email) => async dispatch => {
    try {
        const res = await axios.apis("GET", `/api/send-Subscribe/${email}`);
        return res;
    } catch (err) {
        console.log(err);
        return { status: false, message: "Some thing wrong, Please try again." };
    }
}
