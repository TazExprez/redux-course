// Finally we are doing some Redux.
import { combineReducers } from "redux";
// You don't have to put the .js after appStateReducer.js, but Joe likes to do it.
import { appStateReducer } from "./appStateReducer.js";
import { booksDataReducer } from "./booksDataReducer.js";

// We are going to be exporting this function, with this {} inside, where we are passing in the appStateReducer() and the booksDataReducer() and we are going to name them globalState and booksData, respectively.
export default combineReducers({
    // Joe is going to change these keys and give them more friendly names.  If Joe doesn't do this, we're going to have something like this.props.appStateReducer and Joe really doesn't like this.
    // appStateReducer: appStateReducer,
    globalState: appStateReducer,
    // booksDataReducer: booksDataReducer,
    booksData: booksDataReducer,
});