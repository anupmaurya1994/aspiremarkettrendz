import React from "react";
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Authentication related pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import MarketPage from "../pages/MarketPage";
import NewsPage from "../pages/NewsPage";
import StocksPage from "../pages/StocksPage";
import PrivacyPage from "../pages/PrivacyPage";
import NewsDetail from "../pages/NewsDetail/NewsDetail";
import InvestingPage from "../pages/InvestingPage";
import Disclaimer from '../pages/Disclaimer/Disclaimer'
import AddNewsPage from "../pages/AddNewsPage";

// Dashboard

let userRoutes = [
	{ path: "/home", component: HomePage },
	{ path: "/login", component: LoginPage },
	{ path: "/signup", component: SignupPage },
	{ path: "/about", component: AboutPage },
	{ path: "/contact", component: ContactPage },
	{ path: "/market", component: MarketPage },
	{ path: "/news", component: NewsPage },
	{ path: "/stocks", component: StocksPage },
	{ path: "/investing", component: InvestingPage },
	{ path: "/privacy-poicy", component: PrivacyPage },
	{ path: "/story/:uud", component: NewsDetail },
	{ path: "/disclaimer", component: Disclaimer },
	{ path: "/", component: HomePage },
];

const authRoutes = [];

export { userRoutes, authRoutes };
