import {
    AppBar,
    Toolbar,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
    Container,
    Avatar
} from "@material-ui/core";
import { connect } from "react-redux";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect, } from "react";
import { Link as RouterLink } from "react-router-dom";
import lightMode from "../../assets/images/light-mode.png";
import nightMode from "../../assets/images/night-mode.png";
import Applogoligth from "../../assets/images/white-logo-sm-2.png";
import Applogo from "../../assets/images/black-logo-sm-2.png";
import { setSearchValue, setThemeMode } from "../../actions/news";
import NewLightLogo from '../../assets/images/new-l-logo.png'
import NewDarkLogo from '../../assets/images/new-d-logo.png'

const headersData = [
    {
        label: "Admin",
        href: "/admin-panel",
    },
    {
        label: "Login",
        href: "/admin-login",
    },
    {
        label: "Contact",
        href: "/contact",
    },
    {
        label: "About",
        href: "/about",
    },
];

const useStyles = makeStyles(() => ({
    conetent: {
        backgroundColor: "#000000",
        boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)"
    },
    header: {
    },
    logo: {
        borderRight: "1px solid #514F4F",
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
        width: "210px"
    },
    menuButton: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: "17px",
        lineHeight: "21px",
        color: "#FFFFFF",
        textTransform: "capitalize",
        marginLeft: "7px",
        marginRight: "7px",
    },
    toolbar: {
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        height: "89px"
    },
    drawerContainer: {
        padding: "20px 30px",
        background: "#000000",
        color: "#fff"
    },
    modeButton: {
        marginLeft: "25px",
        marginRight: "7px",
        minWidth: "0px"
    },
    menuloginButton: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: "17px",
        lineHeight: "21px",
        color: "#FFFFFF",
        background: "rgba(188, 188, 188, 0.1)",
        borderRadius: "2px",
        marginLeft: "15px",
        marginRight: "7px",
        textTransform: "capitalize",
    },
    menusignupButton: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: "17px",
        lineHeight: "21px",
        color: "#FFFFFF",
        background: "#154691",
        borderRadius: "2px",
        textTransform: "capitalize"
    },
    menuloginButtonMobile: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: "17px",
        lineHeight: "21px",
        color: "#FFFFFF",
        background: "rgba(188, 188, 188, 0.1)",
        borderRadius: "2px",
        textTransform: "capitalize",
        width: "150px",
        marginBottom: "10px !important",
        margin: "0 auto"
    },
    menusignupButtonMobile: {
        fontFamily: 'Inter',
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: "17px",
        lineHeight: "21px",
        color: "#FFFFFF",
        background: "#154691",
        borderRadius: "2px",
        textTransform: "capitalize",
        width: "150px",
        marginBottom: "10px !important",
        margin: "0 auto"
    },
    drawercss: {
        background: "#000000",
        color: "#fff"
    },
    desktopContent: {
        maxWidth: "1500px"
    },

}));

function Header(props) {
    const {
        header,
        logo,
        menuButton,
        toolbar,
        drawerContainer,
        conetent,
        menuloginButton,
        menusignupButton,
        menuloginButtonMobile,
        menusignupButtonMobile,
        drawercss,
        modeButton,
        desktopContent,


    } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const [search, setSearch] = useState('')
    const [isSearch, setIsSearch] = useState(false)
    const [timer, setTimer] = useState(null)

    const { mobileView, drawerOpen } = state;
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        var element = document.body;
        props.onChangeMode('dark');

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);


    const inputChanged = e => {
        setSearch(e.target.value);
        clearTimeout(timer)
        const newTimer = setTimeout(() => {
            if (document.getElementById('search-bar').value == "") {
                props.setSearchValue(document.getElementById('search-bar').value);
            }
        }, 500)
        setTimer(newTimer)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        props.setSearchValue(document.getElementById('search-bar').value);
    }

    const displayDesktop = () => {
        return (
            <Container maxWidth="lg" className={desktopContent} >
                <Toolbar className={toolbar}>
                    {Logo}
                    <div>
                        <form onSubmit={onSubmit} class={'searchContainer'}>
                            <input type="text" id="search-bar" value={search} onChange={inputChanged} placeholder="Search today news..." />
                            <img id="search-click" onClick={(e) => { props.setSearchValue(search); setIsSearch(true) }} class={'searchIcon'} src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
                            {/* {isSearch == true && <img id="search-click" onClick={(e) => { setSearch(""); props.setSearchValue(""); setIsSearch(false) }} class={'searchcloseIcon'} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" />} */}
                        </form>
                    </div>
                    <div>
                        {getMenuButtons()}

                        <Button
                            onClick={(e) => {
                                var element = document.body;
                                element.classList.toggle("light-mode");
                                props.setThemeMode('light');
                            }}
                            {...{
                                color: "inherit",
                                className: `${modeButton} light-mode-button`,
                                startIcon: < Avatar src={lightMode} />
                            }}
                        >
                        </Button>

                        <Button
                            onClick={(e) => {
                                var element = document.body;
                                element.classList.toggle("light-mode");
                                props.setThemeMode('dark');
                            }}
                            {...{
                                color: "inherit",
                                className: `${modeButton} night-mode-button`,
                                startIcon: < Avatar src={nightMode} />
                            }}
                        >
                        </Button>
                    </div>
                </Toolbar>
            </Container >
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                        className: 'humber'
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                        className: 'drawer-mobile'
                    }}
                >
                    <div>{Logo}</div>

                    <div className={`${drawerContainer} drawerContainer`}>
                        {getDrawerChoices()}

                        <Button
                            onClick={(e) => {
                                var element = document.body;
                                element.classList.toggle("light-mode");
                                props.onChangeMode('dark');
                            }}
                            {...{
                                color: "inherit",
                                className: `${modeButton} light-mode-button`,
                                startIcon: < Avatar src={lightMode} />
                            }}
                        >

                        </Button>

                        <Button
                            onClick={(e) => {
                                var element = document.body;
                                element.classList.toggle("light-mode");
                                props.onChangeMode('light');
                            }}
                            {...{
                                color: "inherit",
                                className: `${modeButton} night-mode-button`,
                                startIcon: < Avatar src={nightMode} />
                            }}
                        >
                        </Button>

                    </div>
                </Drawer>

                <div>{Logo}</div>

            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const Logo = (


        <div className={`${logo}`}>
            <RouterLink to={'/home'}>
                <img className={`header-logo-dark`} src={NewDarkLogo} />
            </RouterLink>
            <RouterLink to={'/home'}>
                <img className={`header-logo-light`} src={NewLightLogo} />
            </RouterLink>
        </div>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    onClick={(e) => {
                        localStorage.removeItem('selectedNewsPage');
                        localStorage.removeItem('selectedInvestPage');
                        localStorage.removeItem('selectedStockPage');
                        localStorage.removeItem('manualNewsPage');
                        props.setSearchValue("")

                    }}
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: `${menuButton} nav-bar`,
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header className={conetent}>
            <AppBar className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}



const mapDispatchToProps = (dispatch) => {
    return {
        setSearchValue: (data) => dispatch(setSearchValue(data)),
        setThemeMode: (data) => dispatch(setThemeMode(data)),
    };
}


export default connect(null, mapDispatchToProps)(Header);