import React, { Component, useLayoutEffect } from "react";
import { connect } from "react-redux";
// import { closingMyList } from "../actions/allActions.js";
import { closingMyList, removingBook } from "../actions/allActions.js";

// export default class MyList extends Component {
class MyList extends Component {
    constructor() {
        super();

        this.state = {
            name: "Joe",
        };
    }

    showListOfBooks = () => {
        return this.props.globalState.myList.map(book => {
            return (
                // We used a key of book because we didn't pass down an object, or anything else in the parameters section.
                // <li key={book}>{book} <span className="delete-btn">Delete</span></li>
                <li key={book}>{book} <span className="delete-btn" onClick={() => this.props.removingBook(book)}>Delete</span></li>
                // Joe's way of doing the above.
                // <li key={book}>{book} <span className="delete-btn" onClick={this.props.removingBook.bind(null, book)}>Delete</span></li>
                // When we click delete inside of the list of selected books, we are saying find this book inside of the myList [] and return back an [] that doesn't have this book.  This basically deletes this book.
            );
        });
    };

    render() {
        return (
            // <!-- Now we are creating the myList <section>.  We could have created it anywhere.  I think that this is a modal. -->
        // <section id="myList">
        <section id="myList" className={this.props.globalState.listOpen == true ? "active" : ""}>
            <h3>My List of Books</h3>
            <ul>
                {/* <li>Harry Potter <span className="delete-btn">Delete</span></li> */}
                {this.showListOfBooks()}
            </ul>
            {/* <div className="close-list">Close List</div> */}
            {/* After adding the onClick handler, when we click on this button, the #myList <section> will close. */}
            <div className="close-list" onClick={this.props.closingMyList}>Close List</div>
        </section>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
// export default connect(mapStateToProps)(MyList);
// export default connect(
//     mapStateToProps,
//     {
//         closingMyList,
//     }
// )(MyList);
export default connect(
    mapStateToProps,
    {
        closingMyList,
        removingBook,
    }
)(MyList);

// The console error "GET http://localhost:8080/undefined 404 (Not Found)" is coming up because we don't have an image for the URL.  To fix this, let's go to the <Modal>.