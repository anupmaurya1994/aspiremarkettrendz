import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import TickerTapeHeader from './TickerTapeHeader';

// Layout Related Components
import Header from "./Header";
import Footer from "./Footer";


class Layout extends Component {
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
        <TickerTapeHeader  />
        <Children
          themeMode={themeMode}
        />
        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default (withRouter(Layout))