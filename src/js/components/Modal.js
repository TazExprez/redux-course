import React, { Component } from "react";
import { connect } from "react-redux";
// Here we are importing the closingInfoBook() action creator function.  We use two dots because we have to go back to the js folder and then go into the actions folder.
// import { closingInfoBook } from "../actions/allActions.js";
import { closingInfoBook, addingBook } from "../actions/allActions.js";

// export default class Modal extends Component {
class Modal extends Component {
    constructor() {
        super();

        this.state = {
            name: "Joe",
        }
    }

    render() {
        return (
            // <!-- This modal will show book information. -->
            // Now we have access to the globalState {} and will be doing a conditional statement below with a ternary operator.
            // If this.props.globalState.popupOpen == true, then put in an .active, else leave it blank.
            <section id="modal" className={this.props.globalState.popupOpen == true ? "active" : ""}>
                <div className="modal-container">
                    {/* <div className="close-modal"> */}
                    {/* Here we are going to run the closingInfoBook() action creator function when the user clicks on a comic book cover image. */}
                    <div className="close-modal" onClick={this.props.closingInfoBook}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="modal-grid">
                        {/* <!-- These are the images. --> */}
                        <div className="images">
                            {/* <!-- This is the main image. --> */}
                            {/* <div className="cover" style={{backgroundImage: `url("../img/xMenDaysOfFuturePast.jpeg")`}}></div> */}
                            {/* Now we connected the <Modal> to the global state. */}
                            {/* <div className="cover" style={{backgroundImage: `url("${this.props.globalState.openInfoBook.coverURL}")`}}></div> */}
                            {/* This will fix the console error "GET http://localhost:8080/undefined 404 (Not Found)" that comes up because we don't have an image for the URL.  If this.props.globalState.openInfoBook.coverURL is undefined, the backgroundImage will be assigned an empty string. If it's not undefined and we are connecting to the reducer, the state, and the coverURL property has the URL of the comic book, then we want to return the comic book image. */}
                            <div className="cover" style={{backgroundImage: `url("${this.props.globalState.openInfoBook.coverURL == undefined ? "" : this.props.globalState.openInfoBook.coverURL}")`}}></div>
                        </div>
                        {/* <!-- This is the book information. --> */}
                        <div className="info">
                            {/* <h2>Title</h2> */}
                            <h2>{this.props.globalState.openInfoBook.title}</h2>
                            <div className="info-line">
                                <span className="bold">Author:</span>
                                {/* Chris Claremont */}
                                {this.props.globalState.openInfoBook.author}
                            </div>
                            <div className="info-line">
                                <span className="bold">Category:</span>
                                {/* Graphic Novel */}
                                {this.props.globalState.openInfoBook.category}
                            </div>
                            <div className="info-line">
                                <span className="bold">Published:</span>
                                {/* 1981 */}
                                {this.props.globalState.openInfoBook.published}
                            </div>
                            <p className="review">
                                {/* "Days of Future Past" is a storyline in the Marvel Comics comic book The Uncanny X-Men issues #141–142, published in 1981. It deals with a dystopian future in which mutants are incarcerated in internment camps. */}
                                {this.props.globalState.openInfoBook.review}
                            </p>
                            {/* <div className="add-btn"> */}
                            <div className="add-btn" onClick={() => this.props.addingBook(this.props.globalState.openInfoBook.title)}>
                            {/* Joe's way with bind().  The bind() is going to allow us to pass a parameter to the addingBook() without triggering it.  We are passing down the book title as the action.payload. */}
                            {/* <div className="add-btn" onClick={this.props.addingBook.bind(null, this.props.globalState.openInfoBook.title)}> */}
                                Add To My List
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return state;
};
// We don't need to pass any action creator function in here.  We just have to pass down the state.
// export default connect(mapStateToProps)(Modal);
// export default connect(
//     mapStateToProps,
//     // We are adding this action to our props for this <Modal>.
//     {
//         closingInfoBook,
//     }
//     )(Modal);
export default connect(
    mapStateToProps,
    {
        closingInfoBook,
        addingBook,
    }
)(Modal);

// All of our components are connected to the global state, so now we're able to communicate with each one of the these according to our application.