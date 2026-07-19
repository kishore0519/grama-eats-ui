import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="py-10 text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    About
                </h1>

                <div className="justify-items-center gap-6">
                    <UserClass
                        name={"Venkata Kishore Koppolu"}
                        location={"Ramanaidu Palli"}
                    />
                </div>
            </div>
        );
    }
}

export default About;