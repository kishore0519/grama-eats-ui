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
            <div className="mt-10 flex justify-center">
                <div className="w-[400px] rounded-xl border border-gray-300 bg-white p-6 text-left shadow-md">
                    <img
                        className="mx-auto mb-5 h-36 w-36 rounded-full border-4 border-gray-200 object-cover"
                        alt="logo"
                        src={avatar_url}
                    />

                    <h2 className="mb-4 text-2xl font-bold">
                        {name}
                    </h2>

                    <h3 className="mb-3 text-xl font-semibold text-gray-700">
                        Location: {location}
                    </h3>

                    <h4 className="mb-3 text-lg font-medium text-gray-600">
                        Contact: @kishore0519
                    </h4>

                    <p className="text-gray-500">
                        Component type: Class based
                    </p>
                </div>
            </div>
        );
    }
}

export default UserClass;
