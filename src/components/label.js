import React from "react";

export function Label({ classname, htmlfor, text }) {
    return (
        <label className={classname} htmlFor={htmlfor}>
            {text}
        </label>
    );
}
