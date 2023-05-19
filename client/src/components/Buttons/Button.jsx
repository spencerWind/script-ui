import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Button = ({ value, text, style, color, type, onClick }) => {
    const [buttonType, setButtonType] = useState("");
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
        if (text === "white") {
            setTextColor("text-slate-100");
        }
        if (text === "black") {
            setTextColor("text-slate-950");
        }
        if (style === "filled") {
            setButtonType(` bg-${color} border-2 border-${color} `);
        }
        if (style === "outlined") {
            setButtonType(` bg-none border-2 border-${color} `);
        }
        if (style === "plain") {
            setButtonType("bg-none border-none");
        }
    }, [style, color, text]);

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
            className={` min-w-[96px] px-4 py-1 text-sm rounded uppercase font-semibold ${buttonType} ${textColor}`}>
            {value}
        </motion.button>
    );
};

Button.propTypes = {
    value: PropTypes.string.isRequired,
    text: PropTypes.string,
    style: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
