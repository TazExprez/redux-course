import React, { Component } from "react";
import { connect } from "react-redux";
import { openingInfoBook } from "../actions/allActions.js";

// export default class AllBooks extends Component {
// We removed the export default because we are going to connect this class to the Redux store after the function definition.  We are going to use the connect() and the mapStateToProps() below.
class AllBooks extends Component {
    constructor() {
        super();
        this.state = {
            name: "Joe",
        }
        // Binding not necessary when using the @babel/plugin-proposal-class-properties plugin.
        // this.showAllBooks = this.showAllBooks.bind(this);
    }

    // This function will loop over all of the books data and place the books on the screen.  Remember that each book is represented by an {}.  We will show each cover.  If we click on any book, the modal with the book information will be shown.
    showAllBooks = () => {
        return this.props.booksData.map(book => {
            return (
                <div 
                    // The key should be in the parent <div>.  We had to move it here because we were getting errors when the key was in the child <div>.
                    key={book.id}
                    className="book-container">
                    {/* Here we are returning the <div> which has the image for each cover for each book. */}
                    <div
                        // For the key we have to use something that is unique to each book. 
                        // key={book.id}
                        // onClick={this.props.openingInfoBook} 
                        // We want to pass in the book to the openingInfoBook() action creator function.
                        // This is Joe's way of passing a book to the openingInfoBook().
                        // onClick={this.props.openingInfoBook.bind(null, book)}
                        // This is my way of passing a book to the openingInfoBook().
                        onClick={() => this.props.openingInfoBook(book)}
                        className="book" 
                        style={{backgroundImage: `url("${book.coverURL}")`}}>    
                    </div>
                </div>
            );
        });
    };

    render() {
        // This will show that we have everything we want from Redux.  We have the booksData [], the globalState {}, and the openingInfoBook action creator function.  All of this will be available to the <AllBooks>.
        // This is great because now we can communicate with all of our components at the same time.
        console.log(this.props);
        return (
            // <!-- This is going to be the component for all of the books. -->
            <section className="all-books">
                {/* <div className="book-container"> */}
                    {/* <div className="book" style={{backgroundImage: `url('../img/xmenDaysOfFuturePast.jpeg')`}}></div> */}
                    {/* We are going to add an onClick handler to this for Test 1A.  We are also going to put a console.log() inside of the appStateReducer() for Test 1A.  Btw, I chose the name Test 1A, in case we do more tests.  Once you click on this book, the popupOpen property will be changed from false to true because the popup is now supposed to be open.  For testing purposes, the popup did not actually open. */}
                    {/* <div onClick={this.props.openingInfoBook} className="book" style={{backgroundImage: `url('../img/xMenDaysOfFuturePast.jpeg')`}}></div> */}
                    {this.showAllBooks()}
                {/* </div> */}
            </section>
        );
    }
};
// Here we are going to pass in the state and return the state.
const mapStateToProps = state => {
    // This console.log() is just to test this out.
    console.log(state);
    // return state;
    // Because all we care about is the booksData [] in the <AllBooks>, we can actually come here and say to just return an {} with state.booksData.
    console.log(state.booksData);
    // return {
    //     booksData: state.booksData,
    // };
    // If you want, you can just keep it simple with return state;.  This gives you access to both the globalState {} and the booksData [].  Joe prefers it like this.
    return state;
};
// In here, we are going to pass in the mapStateToProps() to the connect().  We are also going to pass in the <AllBooks> here.
// Now we are injecting the state that we have from our store, so we have the booksData [] and the globalState {}, as shown in the console.log() above with {globalState: {...}, booksData: Array(6)}.  Technically we have access to the store data now.
// export default connect(mapStateToProps)(AllBooks);
// Now we are going to add another parameter for the actions.  This is where things get dispatched to the props, as far as the actions.
// In the <AllBooks>, what actions do we need.  This component shows all of the books.
// The only action we need for the <AllBooks> is that when we click on a book, we want to open up the popup.
// We are going to come down here and pass in an {} as the second parameter.  This {} is going to have just the name of the action.
export default connect(
    mapStateToProps,
    {
        // openingInfoBook: openingInfoBook,
        // The ES6 way.
        openingInfoBook,
    }
    )(AllBooks);

// What basically just happened once we clicked the button on top in Test 1A.  We have Redux connected to our application.  We did this before with vanilla JavaScript.  Now we have a <Provider> and created a store within it.  We passed all of the reducers to this store.  We have actions and remember that actions are just functions.  Now with React-Redux, we are able to pass in the store, or the globalState of the application, to any component at any time.  Same thing with the action creator functions, we can pass all of these down just by saying like in the line export default connect(mapStateToProps, {openingInfoBook})(AllBooks);.  Here we are passing an {} with the name of the action creator function.  In this case it's openingInfoBook.  Now we basically have access to all of these props like in the line onClick={this.props.openingInfoBook}.

// Remember that book is an {}.  When we pass a book {} to the openingInfoBook() action creator function, in the line onClick={() => this.props.openingInfoBook(book)}, the program will go to the allAction.js file, to the openingInfoBook().  We pass the book to the openingInfoBook() and the book {} becomes the action.payload.  Then we are passing the action {} to the reducer and it will go to all of the reducers in the allReducers.js file, until a reducer is found that matches the "OPEN_INFO_BOOK" action.type of the action {} returned by the openingInfoBook().  The reducer that matches the "OPEN_INFO_BOOK" action.type is the appStateReducer() reducer function.  The switch statement in the appStateReducer() has a case for "OPEN_INFO_BOOK".  Currently the "OPEN_INFO_BOOK" case only changes the popupOpen property to true in the global state {} in the line newState=Object.assign({}, state, {popupOpen: true}).  We can also change the openInfoBook {} property in the global state {} if we want.  We did not do it at first, but now we will set this up.  We are going to add the other property that we want to change, the openInfoBook {}, to the "OPEN_INFO_BOOK" case.  Now the line where the new state is assigned will look like this newState = Object.assign({}, state, {openInfoBook: action.payload, popupOpen: true,});.  So now the book is being passed to the "OPEN_INFO_BOOK" case of the appStateReducer().