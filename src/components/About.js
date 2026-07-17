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
            <div className="py-10 text-center">
                <h1 className="mb-8 text-4xl font-bold text-gray-900">
                    About Page
                </h1>

                <div className="grid grid-cols-3 justify-items-center gap-6">
                    <UserClass
                        name={"Venkata Kishore Koppolu"}
                        location={"Ramanaidu Palli"}
                    />

                    {/* <User
      name={"Venkata Kishore Koppolu"}
      location={"Ramanaidu Palli"}
    /> */}
                </div>
            </div>
        );
    }
}

export default About;