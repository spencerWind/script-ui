import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavItem = ({ value, destination, isActive }) => {
    return (
        <Link to={destination}>
            <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={
                    isActive
                        ? "text-slate-100 relative font-light"
                        : "text-slate-400 relative font-light"
                }>
                {value}
                <span
                    className={
                        isActive
                            ? "absolute w-2 h-2 rounded-full bg-primary -bottom-2 left-1/2 -translate-x-1/2"
                            : "hidden"
                    }></span>
            </motion.li>
        </Link>
    );
};

NavItem.propTypes = {
    destination: PropTypes.string,
    value: PropTypes.string,
    isActive: PropTypes.bool,
};

export default NavItem;
