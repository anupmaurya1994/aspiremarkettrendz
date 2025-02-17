import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import reducers from '../reducers';


export const configureStore = () => {

  
  const middlewares = [thunk.withExtraArgument()];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(
      createLogger({
        colors: {
          title: () => "inherit",
          prevState: () => "red",
          action: () => "#03A9F4",
          nextState: () => "#4CAF50",
          error: () => "#F20404"
        }
      })
    );
  }

  const store = createStore(reducers, applyMiddleware(...middlewares));

  return store;
};


