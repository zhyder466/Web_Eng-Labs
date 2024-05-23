import React from "react";

export function User(props) {
    return (
        <div key={props.index}>
            <h2>Username: {props.username}</h2>
            <p>Email: {props.email}</p>
            <p>City: {props.address.city}</p>
        </div>
    )
}