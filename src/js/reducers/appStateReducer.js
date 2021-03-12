// In the appStateReducer.js file we are going to create the initial state.

import AllBooks from "../components/AllBooks";
import { booksDataReducer } from "./booksDataReducer";

// This initialState {} is going to have all of the things that we are doing for this app.
const initialState = {
    // In the myList [] we are going to have different {}s that are going to be the books that we are adding to our list.  For now, it's going to be an empty [].
    // The myList [] is just going to be an [] full of names of books.
    myList: [],
    // When openInfoBook gets triggered, we are going to change the openInfoBook and the popupOpen properties.  openInfoBook is going to have the book that is open.  popupOpen is going to be for us to know if the popup is open and it's either going to be true or false.  For the initial state, openInfoBook is going to be an empty {} and popupOpen is going to be false because there is no book selected.
    // For closeInfoBook, popupOpen is going to be set to true, and openInfoBook is going to be set to an {} with whichever book is opened.
    openInfoBook: {},
    popupOpen: false,
    // For openMyList, we also want to create something.  We'll change listOpen to true whenever we open it and to false whenever we close it.
    listOpen: false,
};
// This is pretty much it for the initial state, now we are going to create the reducer itself.

// We are just declaring newState, so it can be empty for now.  We will use it in the AppStateReducer().
let newState;

// The state will be set to initialState if there is nothing passed there already.
export const appStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            // What we are doing here is that we are taking all of the properties inside of the myList [].  And now we are adding all of these properties to a new [] and we are also adding in a new book, action.payload, to that new [].
            // state.myList is empty at first and we are adding action.payload, which is the book title.
            var myList = [...state.myList, action.payload];
            
            // Here we pass in an empty {}, we pass in the state, and then we pass in an {} with the myList property being set to the new myList [].
            // Now we are adding the myList [] to an object by assigning it to a property.  Then we are merging this {} to the old state {} and creating a new {} with all this content.  We are merging the new {} that contains the myList property with the older state {}, or whichever is the current state {}.
            newState = Object.assign({}, state, {
                myList: myList,
            });
            // Here we return the new state.
            return newState;
            break;
        case "REMOVE_BOOK":
            // We are going to search for an id.  It could be a title, or some type of number, or something unique that we can associate to a book.  We are going to use it like this, item.id is not equal to whatever the book is, or item.id !== action.payload.  We are going to filter out everything from this [] of books.
            // Explanation for those that are lost.
            // We have an array of books and each book is an {} with an id property.
            // Each book has a unique id.
            // Because each book has a unique id, you can come and filter them out.  You can go over the list of the books that you have in the myList [] and then return back the ones that match, like in the line var myList = state.filter(item => item.id !== action.payload);.
            // So if you have three books with the ids 23, 64, and 500, you can return back anything that does not match 23, if you'd like.  The will return back a new array that only has the books with ids 64 and 500.  That's the perfect way to keep the state immutable.
            // [
            //     {
            //         id: 23,
            //     },
            //     {
            //         id: 64,
            //     },
            //     {
            //         id: 500,
            //     },
            // ]
            // var myList = state.myList.filter(item => {
            //     return item.id !== action.payload;
            // });
            // We are changing the reducer here because Joe decided to use a string [], instead of an {} [] for myList.
            var myList = state.myList.filter(book => {
                return book !== action.payload;
            });
            // The filter() returns back a new [] that depends on the condition you give it in the return statement.  If you wanted to filter an [] that has the book matching the action.payload, then the filter() will only return the book that it matched.  We set the return statement to send us back an [] of books that don't match the action.payload book for this case.  What is happening here is that the filter() is taking the old myList [], whatever it was, and then returning it back without the book that we selected.  This basically deletes the book.

            // We put the new myList [] and assigned it to the myList property in the newState {}.
            // We're taking a new {}, we're merging the old state with the new state, {myList: myList,}, and then getting a new {}.  Then now all this will be assigned to newState, so there will be a new state.
            newState = Object.assign({}, state, {
                myList: myList,
            });
            return newState;
            break;
        // openingInfoBook() is the action creator function and "OPEN_INFO_BOOK" is the action.type.
        case "OPEN_INFO_BOOK":
            // To show that we have opened the info book, all we have to do is to change popupOpen to true.  We'll take the old state, state, and merge it with something new.  We are merging the popupOpen and we're going to turn it to true.
            newState = Object.assign({}, state, {
                // Now we are passing in the book {} to this reducer in the "OPEN_INFO_BOOK" switch statement case.
                openInfoBook: action.payload,
                popupOpen: true,
            });
            // The two following console.log()s are for the Test 1A that we are conducting in the <AllBooks>.  Joe is doing this to show us that the "OPEN_INFO_BOOK" case is going to get triggered when we click on "The Uncanny X-Men" comic book.  This is when there is only one book that can be selected.
            console.log("===============NEW STATE");
            console.log(newState);
            return newState;
            break;
        case "CLOSE_INFO_BOOK":
            newState = Object.assign({}, state, {
                popupOpen: false,
            });
            return newState;
            break;
        case "OPEN_MY_LIST":
            newState = Object.assign({}, state, {
                listOpen: true,
            });
            console.log("===============NEW STATE");
            console.log(newState);
            return newState;
            break;
        case "CLOSE_MY_LIST":
            newState = Object.assign({}, state, {
                listOpen: false,
            });
            return newState;
            break;
        default:
            // By default, we are going to return the state.  Whenever a new action that gets matched comes in, we are going to return the new state and not this one.
            return state;
            break;
    }
};