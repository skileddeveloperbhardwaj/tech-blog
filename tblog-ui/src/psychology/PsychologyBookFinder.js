import React from "react";
import HowToEnjoyLifeJobView from "./HowToEnjoyLifeJobView";

class PsychologyBookFinder extends React.Component {
    constructor(props) {
        super(props);
        var url_string = window.location.href;
        var url = new URL(url_string);
        this.bookName = url.searchParams.get("name");
        console.log(this.bookName);
    }

    render() {
        var bookView = [];
        if (this.bookName == 'how_to_enjoy_your_life') {
            bookView = <HowToEnjoyLifeJobView />
            console.log("how to");
        }
        return (
            <>
                {bookView}
            </>
        );
    }
}

export default PsychologyBookFinder;