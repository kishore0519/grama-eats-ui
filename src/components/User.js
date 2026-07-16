import { useEffect, useState } from 'react';

const User = ({ name, location }) => {

    useEffect(() => {
        const i = setInterval(() => {
        }, 1000);

        return () => {
            clearInterval(i);
        }
    }, []);

    return (
        <div className="user-container">
            <div className="user-info">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @kishore0519</h4>
                <p>Component type: Functional</p>
            </div>
        </div>
    );
}

export default User;
