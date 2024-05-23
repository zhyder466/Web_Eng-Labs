import React from "react";

export function Post(props) {
    return (
        <div key={props.index}>
            <p>Title: {props.title}</p>
            <p>Body: {props.body}</p>
        </div>
    )
}