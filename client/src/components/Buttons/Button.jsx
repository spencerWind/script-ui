import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// I need to figure out how to get the border to show up the correct color, I've been having problems with it

const Button = ({ children, text, style, color, type, onClick }) => {
    const [textColor, setTextColor] = useState("");
    const [fillColor, setFillColor] = useState("");
    const [buttonStyle, setButtonStyle] = useState("");

    useEffect(() => {
        setTextColor(text);
    }, [text]);

    useEffect(() => {
        setFillColor(color);
        console.log("fill color changed")
    }, [color]);

    useEffect(() => {
        if (style === "filled") {
            setButtonStyle(` bg-${fillColor} border-2 border-${fillColor} `);
        } else if (style === "outlined") {
            setButtonStyle(`bg-none border-2 border-${fillColor}`);
        } else if (style === "plain") {
            setButtonStyle("bg-none border-none");
        }
    }, [style, fillColor]);

    return (
        <motion.button
            whileHover={{
                scale: 1.1,
            }}
            whileTap={{
                scale: 0.9,
            }}
            type={type}
            onClick={onClick}
            className={` min-w-[96px] px-4 py-1 text-sm rounded uppercase font-semibold 
            text-${textColor} ${buttonStyle}`}>
            {children}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
