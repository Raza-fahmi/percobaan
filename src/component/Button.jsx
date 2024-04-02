import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../component/Button.css";

const Button = (props) => {
    const BtnStyle = {
        backgroundColor: "#176B87",
        border: "none",
        borderRadius: "15px",
        fontWeight: "500",
        color: "white",
        fontSize: "14px",
        height: "45px",
        width: props.width,
    };

    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        navigate(props.path);
    };

    return (
        <button
            className={isHovered ? "hovered" : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={BtnStyle}
            onClick={handleClick}
        >
            {props.name}
        </button>
    );
};

export default Button;