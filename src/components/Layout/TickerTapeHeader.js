import React, { useState, useEffect, } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import { TickerTape, MarketOverview } from "react-tradingview-embed";

const sectionOne = {
    marginTop: "90px",
    marginBottom: "30px",
    minHeight: "41px",
    backgroundColor: "#0C0C0C",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
};

const TickerTapeHeader = (props) => {
    const [themeMode, setThemeMode] = useState(props.themeMode);

    useEffect(() => {
        if (props.themeMode != themeMode) {
            setThemeMode(props.themeMode)
        }
    }, [props.themeMode]);

    return (
        <div style={sectionOne} className="ticker-tape" >
            <Container maxWidth="lg">
                <TickerTape
                    widgetProps={{
                        colorTheme: themeMode,
                        displayMode: "adaptive",
                        isTransparent: true,
                    }}
                ></TickerTape>

            </Container>
        </div>
    )
}


const mapStateToProps = ({ reducer }) => {
    return {
        themeMode: reducer.themeMode,
    };
}

export default connect(mapStateToProps, null)(TickerTapeHeader);
