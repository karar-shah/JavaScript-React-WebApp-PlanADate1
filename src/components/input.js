import React from "react";

export  function Input({ type, name, placeholder,classname }) {
    return (
        <input
            className={classname}
            type={type}
            name={name}
            placeholder={placeholder}
        />
    );
}
