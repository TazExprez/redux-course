// const { hot } = require("react-hot-loader");

// console.log("Hello World!");

import React, { Component } from "react";
import ReactDOM from "react-dom";
// Now we come back to the index.js file and here is where we connect everything that we did to our React application.
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App.js";
import Modal from "./components/Modal.js";
import allReducers from "./reducers/allReducers";

import "../sass/main.scss";

// The two stores below are technically two different stores.  You are creating two different instances.  If you want the two stores to communicate, you are going to have to create a single store, and then pass it down to both <Provider>s.
const store = createStore(allReducers);

// ReactDOM.render(<App />, document.getElementById("app"));
// Now we are going to wrap <Provider> around our application.  We are going to pass in a store property into the <Provider> as well.
ReactDOM.render(
    // Inside of our store, we are going to say createStore() and we are going to pass in allReducers.  We are getting allReducers from the allReducers.js file, which we have to import at the top of the index.js file.
    // <Provider store={createStore(allReducers)}>
    // This store and the one below, are now set to the same store that was created above.
    // Now our components are all synced up.  We are technically using the same store, which gives us access to the same data, the same globalState {}.  So now it does not matter which component you have, you can get in contact with all of them throughout your application.
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
// ReactDOM.render(<Modal />, document.getElementById("modalroot"));
ReactDOM.render(
    // <Provider store={createStore(allReducers)}>
    <Provider store={store}>
        {/* The <App /> and the <Modal /> are rendering in different places, but they are sharing the same store, which gives them access to the global state.  We are pretty much connecting all of our components even though they are not in the same tree.  Even though they are not in the same tree, they are still going to have the same global state and the same data. */}
        <Modal />
    </Provider>,
    document.getElementById("modalroot")
);

// In the last video we connected all of the reducers.  We also created a store and we passed that store to our <Provider>.  This gives our application access to the store.  To get access to the actions and to the reducers, we actually have to connect them to our components, individually.  To do this, we're going to go to the <AllBooks> and do a little change. 

module.hot.accept();

// We're going to learn how to integrate Redux with React using a library called React-Redux.

// We can pass local data or state from a root component to component 2 through props.  We can also pass this down from component 2 to component 3 through props.  Let's say we have a function that changes something inside of the root component.  We can pass that function through props to component 2 and component 3.  With this function, you can change either the data or the state of the root component.  You can do this by triggering the function in component 3, for example.  That function then goes up from component 3 and triggers the one in the root component.  Then now the data in the root component changes and all of the components change according to the new data that got changed.  This is the basics of how React works.

// With React-Redux, we still have our store from Redux and we still have our action creators. But now we have this React-Redux library to be able to connect to our component.  First of all, we have a Provider.  This Provider is a wrapper that's around your component, basically your root component.  From there, we have another part of the library called Connect.  This is a function that we can actually use to connect to a component and pass down our action creators and our store.

// For example, we can have a data about books.  It's a books reducer, a whole bunch of different books.  It could be an array with a whole bunch of different {}s inside of it that have details about books.  We have this books reducer and pass it down through the Provider.  Then we pass the books reducer down to the Connect.  The Connect makes it available for the component as a prop.  So now you can say this.props.booksReducer and you get access to all of that data.  From the Connect we can also have access to the action creators.  So we can say action creator, pass it down to the Connect and the Connect makes it available to the component as a prop.  So now you can say this.props.selectedBook.  Think of selectedBook as a function that creates an action.  So that's the action creator that we're passing down to Connect and Connect passes it down to the component.  Now we have access to that action here in the component.  We could just say this.props.selectedBook from inside the component.  And now we have access to change our data.  We could say, I selected a Harry Potter book in the component.  That comes up through the Connect, then comes up through the Provider.  The Provider passes it to the Redux store.  The store passes it to the reducers.  Then the location inside of the reducer that matches that action.type is found.  After this location is found, now the data changes.  This data comes right down, from the Provider, then the Connect, and finally to the component.  Now the component changes accordingly because the data changed.  These are basically all of the steps to follow to change the data inside of your store.

// Action Creators
// addBook adds a book to the myList book list.
// removeBook removes a book from the myList book list.
// openInfoOnBook opens a modal with the book information when you click on a book.
// closeInfoOnBook closes the modal with the book information when you click close on this modal.
// openMyList shows the myList book list.
// closeMyList removes the myList book list from the view.

// One of the reasons many people choose Redux is because it helps out a lot in managing your state, especially when you have a complex application, like Zillow, with many components inside of components.  Let's say you have 10 levels of components.  To pass props to the component at the tenth level, you will have to pass the props from the root component to the second level component, then from the second level component to the third level component.  This will continue until you get to the tenth level.  This will get really annoying and nobody will want to go through this.  At the same time, you can make mistakes and have a data loss and have a bunch of errors come up.  With Redux you don't have to deal with this.  You can pass down actions, which are just functions.  With Redux you can also pass down data.  You can pass these two things down without having to do it one by one, level by level.  Now we are using Redux.  Our store has our data and our global state.  We pass our store down to our <Provider>s.  Then we go down the ladder and see the connect().  This connect() gives us the ability to say that instead of passing things down by props, at any moment, as long as you can use the connect(), you can say I want to connect this component, even though it's at the 10th level, to the store.  I also want to pass down action creator functions to this component at the 10th level, so that we can give it a way to change the data or change the global state.  We use the connect().  It passes down the action creator functions to the component.  It also passes down the data.  The component changes according to the data.  If we have an action creator function, or an onClick, or some type of event that happens in this component, it comes back up through the connect().  It goes to the <Provider> and is passed to the store.  This will change the data in the reducers.  This change will come back down to the <Provider> and then to the component, through the same process it went up to the store, but in reverse.  After this, the component will change.  Other components may change, too, as long as they are using the data that's coming from the store.

// We are creating a store and we did this before with vanilla JavaScript.  The only things that are new and are coming from React-Redux are the <Provider> and the connect().  We have the <Provider> that we wrap around the root component.  In this application we have two root components, the <App> and the <Modal>.  We created a single store and passed in all of our reducers in the line const store = createStore(allReducers);.  We passed this store to the <Provider>s for the <App> and the <Modal> in the line <Provider store={store}> for each one.  So now the <App> and the <Modal> have access to the same data and the same global state.  Then we went to the <AllBooks> and imported the connect() from React-Redux in the line import { connect } from "react-redux";.  Next we created a function that returns back the state, mapStateToProps, in the line const mapStateToProps = state => { return state; }.  This will be passed down to the connect() as the first parameter.  The next parameter we passed down to the connect() is the action creator function, { openingInfoBook, }.  The property could have been called something else, like { clickPopup: openingInfoBook, }, but we decided to keep the same name as the action.  We imported the action creator function, openingInfoBook, from the allActions.js file in line import { openingInfoBook } from "../actions/allActions.js";.  The openingInfoBook() is just a function.  This function just returns back an {}, { type: "OPEN_INFO_BOOK", payload: book, }.  Currently we are not passing the book.  We are doing this to at least just see the change.  { openingInfoBook } is the action creator function that we are passing in.  The connect() will connect to the AllBooks class.  The connect() will pass down the state, mapStateToProps, as a prop, which is coming from our store.  The connect() will also pass down whichever action we decide to pass to the AllBooks class.  We can even create an action creator function right here, like billy: () => { type: "HEY_BILLY", payload: "nothing", }, if we wanted to.  The reason we are importing the actions is so that at any moment we can go into the allActions.js file and change the actions there.  This way these changes will show up in all of the component files.  Since we have access to this openingInfoBook(), whenever we click on a book, the book gets clicked and just like we did with vanilla JavaScript, this.props.openingInfoBook in the line onClick={this.props.openingInfoBook} will get dispatched to the reducer.  The reducer will look at the "OPEN_INFO_BOOK" action.type and it will notice that it matches a case in the switch statement.  This matches something inside of the appStateReducer.js reducer.  What the appStateReducer() is doing in the case of "OPEN_INFO_BOOK" is that it's changing the popupOpen property inside of the global state to true in the line newState=Object.assign({}, state, { popupOpen: true, });.  This property used to be false by default, but it was now changed to true by the appStateReducer().  We are doing this in an immutable way, which means that we are not mutating the data.  We are actually creating a new {} and returning it as a new state.  When this happens, every component that has a connection to this data will change, it rerenders.  The <Modal> is actually using the popupOpen data in the line className={this.props.globalState.popupOpen == true ? "active" : ""}.  If this ternary condition is true, this will return the .active, if not, it will return an "".  So when we go to the page and click on the book, it goes through the whole process.  It goes back to the <Modal> and rerenders because the popupOpen data changed to true and the .active was set in the line className={this.props.globalState.popupOpen == true ? "active" : ""}.  Before you click on the book, you get <section id="modal" class>, so the class is empty.  The moment you click on the book, you get <section id="modal" class="active">, so the class is now set to active.  This is basically all that happens.