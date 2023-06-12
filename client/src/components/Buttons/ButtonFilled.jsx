import PropTypes from "prop-types";
import { motion } from "framer-motion";

// I need to figure out how to get the border to show up the correct color, I've been having problems with it

const Button = ({ children, fillColor, type, onClick, className }) => {

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
            className={`bg-${fillColor} ${className} py-1 rounded uppercase font-semibold `}>
            {children}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    textColor: PropTypes.string,
    style: PropTypes.string,
    fillColor: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
