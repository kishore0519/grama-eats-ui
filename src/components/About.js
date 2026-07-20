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
                <h1 className="mb-8 text-3xl font-bold text-gray-900">
                    About
                </h1>

                <div className="mx-auto flex max-w-6xl justify-center px-4">
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
