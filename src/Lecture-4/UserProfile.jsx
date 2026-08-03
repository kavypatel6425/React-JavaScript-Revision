import React from "react";

function UserProfile({
    username = "Kavy Patel",
    city = "Ahmedabad",
}) {
    return (
        <div>
            <h2>Task - 12</h2>
            <h4>Username: {username}</h4>
            <p>City: {city}</p>
        </div>
    );
}

export default UserProfile;