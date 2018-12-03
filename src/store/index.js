    import { createStore, applyMiddleware } from "redux";
    import thunk from "redux-thunk";
    import createBrowserHistory from 'history/createBrowserHistory';
    import { routerMiddleware } from 'connected-react-router';
    import { composeWithDevTools } from 'redux-devtools-extension';
    
    import createRootReducer from "../reducers/index";
    
    export const history = createBrowserHistory();
    export const store = createStore(
      createRootReducer(history),
      composeWithDevTools(
        applyMiddleware(thunk, routerMiddleware(history))
      )
    );