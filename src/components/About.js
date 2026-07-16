import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className="about-container">
                <h1>About Page</h1>
                <div className="user-info-container">
                    <UserClass name={"Venkata Kishore Koppolu"} location={"Ramanaidu Palli"} />
                    {/* <User name={"Venkata Kishore Koppolu"} location={"Ramanaidu Palli"} /> */}
                </div>
            </div>
        );
    }
}

export default About;