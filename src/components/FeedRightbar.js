import React, { useState, useEffect, } from "react";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Box, Modal, Typography } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import { MarketOverview } from "react-tradingview-embed";
// import AdsComponent from "./Layout/Ads";
import { WhiteTextTypography } from '../constantData';
import useStyles from "../assets/js/useStyles";
import { CallSubscribe } from "../actions/news";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const FeedRightbar = (props) => {
    const {
        cardComponent,
        cardPostDeliverd,
        inputEmail,
        subscribeButton,
        cardPostFooter,
    } = useStyles();
    const [themeMode, setThemeMode] = useState(props.themeMode);
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (props.themeMode != themeMode) {
            setThemeMode(props.themeMode)
        }
    }, [props.themeMode]);

    const onSubmit = (e) => {
        e.preventDefault()
        const value = document.getElementById('email').value
        console.log(value);
        if (value == "") {
            setMsg('Please enter the email!');
        } else {
            props.CallSubscribe(value).then(res => {
                if (res.status) {
                    handleOpen();
                    document.getElementById('email').value = "";
                    setMsg('');
                } else {
                    document.getElementById('email').value = "";
                    setMsg('Something went wrong, Please try again!');
                }
            });
        }
    }

    const Message = () => {
        return (

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div class="success-container">
                        <div class="row">
                            <div class="modalbox success col-sm-8 col-md-6 col-lg-5 center animate">
                                <div class="icon">
                                    <CheckIcon style={{ color: "#fff ", marginTop: '14px', height: '3em' }} />
                                </div>
                                <p style={{ paddingTop: '15px', paddingBottom: '15px' }}>Thanks for signing up, please check your inbox for our email with free eBook.</p>
                                <Button
                                    onClick={handleClose}
                                    {...{
                                        color: "inherit",
                                        to: "#",
                                        className: `${subscribeButton} subscribe subscribe-btn`,
                                    }}>
                                    OK
                                </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        )
    }

    return (
        <div >
            {Message()}
            <div className={`${cardPostDeliverd} cardPostDeliverd`}>
                <WhiteTextTypography variant="h6" className="card-post-deliverd-title-1">
                    Get New Posts Delivered to Your Inbox
                </WhiteTextTypography>
                <WhiteTextTypography variant="subtitle1" className='card-post-deliverd-title-2'>
                    Subscribe to our mailing list and get interesting stuff and updates to your email inbox.
                </WhiteTextTypography>
                <input type="text" placeholder='Email' id="email" className={`${inputEmail} subscribe-input`} />
                <Button
                    onClick={onSubmit}
                    {...{
                        color: "inherit",
                        to: "#",
                        component: RouterLink,
                        className: `${subscribeButton} subscribe subscribe-btn`,
                    }}>
                    SUBSCRIBE
                </Button>
                {msg != "" && <span className="text-danger" style={{ 'marginLeft': '77px', color: 'red' }}>{msg}</span>}
                <p className={cardPostFooter}>
                    *by submitting your information you agree to the terms of our Privacy Policy. You will receive <b><u>AspireMarketTrendz</u></b> email and third party offers. You can unsubscribe anytime by selecting unsubscribe at the bottom of our emails.
                </p>
            </div>
            <br />
            {/* <AdsComponent /> */}
            <br />
            <div className={`${cardComponent} cardComponent`} >
                {themeMode == props.themeMode &&
                    <MarketOverview
                        widgetProps={{
                            colorTheme: themeMode,
                            isTransparent: true,
                        }}
                    >

                    </MarketOverview>
                }
            </div>
        </div>
    )
}


const mapStateToProps = ({ reducer }) => {
    return {
        themeMode: reducer.themeMode,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        CallSubscribe: (email) => dispatch(CallSubscribe(email))
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(FeedRightbar);
