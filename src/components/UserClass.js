import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "NoName",
                location: "AP",
                avatar_url: "Dummy"
            }
        }
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/kishore0519");

        const json = await data.json();

        this.setState({
            userInfo: json
        });

        this.timer = setInterval(() => {
        }, 1000)
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {

        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="mt-8 flex justify-center px-4">
                <div className="w-full max-w-md rounded-xl border border-gray-300 bg-white p-6 text-left shadow-md">
                    <img
                        className="mx-auto mb-8 h-24 w-24 rounded-full border-4 border-gray-200 object-cover sm:h-28 sm:w-28"
                        alt="logo"
                        src={avatar_url}
                    />

                    <h2 className="mb-4 text-center text-xl font-bold sm:text-2xl">
                        {name}
                    </h2>

                    <h3 className="text-center text-lg font-semibold text-gray-700 sm:text-xl">
                        Location: {location}
                    </h3>
                </div>
            </div>
        );
    }
}

export default UserClass;
