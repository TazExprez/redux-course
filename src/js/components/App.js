import React, { Component } from "react";
import AllBooks from "./AllBooks.js";
import MyList from "./MyList.js";
import { connect } from "react-redux";
import { openingMyList } from "../actions/allActions.js";

// export default class App extends Component {
class App extends Component {
    constructor() {
        super();

        this.state = {
            name: "Joe",
        };
    }

    render() {
        return (
            // <div>
            //     <AllBooks />
            //     <MyList />
            // </div>
            // We are not going to be rendering the Modal component here because Joe wants to show us that you can render multiple components on a page.
            // Joe used class={"popupOpen"}, but that gave me errors.
            // <div id="approot" class={"popupOpen"}>
            // <div id="approot" className="popupOpen">
            <div id="approot" className={this.props.globalState.popupOpen == true ? "popupOpen" : ""}>
                <div className="container">
                    {/* <div className="open-list"> */}
                    <div className="open-list" onClick={this.props.openingMyList}>
                        <i className="fas fa-bars"></i>
                    </div>
                    {/* <!-- .all-books <section> --> */}
                    <AllBooks />
                </div>
                {/* <!-- #myList <section> --></section> */}
                <MyList />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
// export default connect(mapStateToProps)(App);
export default connect(
    mapStateToProps,
    {
        openingMyList,
    }
)(App);

// Redux is very powerful because it really gives you control of your application.  Being able to have all of your components connected to the same state really helps out because you can do so many conditionals, like the one in the line <div id="approot" className={this.props.globalState.popupOpen == true ? "popupOpen" : ""}>.  The one we used here blurred the background if you clicked on any of the comic book images and the modal popped up.  You can also have a conditional for when the hamburger menu gets clicked and the book list opens up.  There are so many different things that you can do with Redux.  If you go to websites like Zillow.com, you can see that every single action that you take on that website has a result, either changing the view, or changing the map, or changing everything that you see, or changing the URL, like litterally every single action that you do gets tracked.  This all happens because they have a global state.