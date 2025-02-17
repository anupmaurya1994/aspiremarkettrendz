import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from './utils/configureStore';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

function onError(e) {
  console.log("Error=> ", e)
}

root.render(
    <Router>
      <Provider store={store} onError={onError}>
        <App />
      </Provider>
    </Router>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
