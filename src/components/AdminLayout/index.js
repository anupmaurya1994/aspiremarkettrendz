import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { styled } from "@mui/system";
import Header from "./Header";

const DummyContainer = styled("div")({
    marginTop: '90px',
    marginBottom: '30px',
    minHeight: '4px',
});
// Layout Related Components



class AdminLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeMode: 'dark'
        }
    }

    render() {
        const Children = () => { return this.props.children };
        const { themeMode } = this.state;
        const mode = themeMode == "light" ? 'dark' : "light";

        return (
            <React.Fragment>
                {/* Header  */}
                <Header
                    themeMode={themeMode}
                    onChangeMode={(mode) => console.log("asdas")}
                />
                <DummyContainer />
                <Children
                    themeMode={themeMode}
                />
            </React.Fragment>
        );
    }
}

export default (withRouter(AdminLayout))