import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({ children, borderColor, type, onClick, className }) => {
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
            className={`border-2 ${borderColor} ${className} py-1 rounded uppercase font-semibold `}>
            {children}
        </motion.button>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    textColor: PropTypes.string,
    style: PropTypes.string,
    borderColor: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default Button;
