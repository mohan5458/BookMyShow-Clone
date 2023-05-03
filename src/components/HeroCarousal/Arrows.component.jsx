import React from "react";

export const NextArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "black", height: "44px", padding: "13px 45px 0 4px", borderRadius: "8px 0 0 8px", opacity: "0.6" }}
                onClick={props.onClick}
            />
        </>
    );
};

export const PrevArrow = (rest) => {
    return (
        <>
            <div
                className={rest.className}
                style={{ ...rest.style, backgroundColor: "black", width: "50px", height: "44px", padding: "13px 3px 0 20px", borderRadius: "0 8px 8px 0", opacity: "0.6" }}
                onClick={rest.onClick}
            />
        </>
    );
};

