// @flow
import * as TYPES from '../actions/types';

const INIT_STATE = {
    themeMode: 'ligth',
    newsLists: [],
    investingLists: [],
    manualNewsLists: [],
    stocksLists: [],
    feedData: {
        title: "",
        contents: "",
        image: "",
        link: ""
    },
    latestArticlesList: [],
    marketWatchMain: null,
    marketWatchLatest: [],
    searchValue: ""

};

const Reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case TYPES.SET_THEME_MODE:
            return {
                ...state,
                themeMode: action.themeMode
            };
        case TYPES.SET_NEWS_DATA:
            return {
                ...state,
                newsLists: (action.newsLists && action.newsLists.length) ? action.newsLists : []
            };
        case TYPES.SET_INVESTING_DATA:
            return {
                ...state,
                investingLists: (action.investingLists && action.investingLists.length) ? action.investingLists : []
            };
        case TYPES.SET_MANUAL_NEWS_DATA:
            return {
                ...state,
                manualNewsLists: (action.manualNewsLists && action.manualNewsLists.length) ? action.manualNewsLists : []
            };
        case TYPES.SET_STOCK_DATA:
            return {
                ...state,
                stocksLists: (action.stocksLists && action.stocksLists.length) ? action.stocksLists : []
            };
        case TYPES.GET_FEED_DATA:
            return {
                ...state,
                feedData: (action.feedData) ? action.feedData : state.feedData
            };
        case TYPES.Market_Watch_Main:
            return {
                ...state,
                marketWatchMain: (action.marketWatchMain) ? action.marketWatchMain : state.marketWatchMain
            };
        case TYPES.Market_Watch_Latest:
            return {
                ...state,
                marketWatchLatest: (action.marketWatchLatest) ? action.marketWatchLatest : state.marketWatchLatest
            };
        case TYPES.SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.searchValue
            };
        case TYPES.GET_LATEST_ARTICLES_DATA:
            return {
                ...state,
                latestArticlesList: (action.latestArticlesList && action.latestArticlesList.length) ? action.latestArticlesList : []
            };
        default:
            return state;
    }
};

export default Reducer;
