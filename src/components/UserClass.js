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
            <div className="user-container">
                <div className="user-info">
                    <img alt="logo" src={avatar_url}></img>
                    <h2>{name}</h2>
                    <h3>Location: {location}</h3>
                    <h4>Contact: @kishore0519</h4>
                    <p>Component type: Class based</p>
                </div>
            </div>
        );
    }
}

export default UserClass;
