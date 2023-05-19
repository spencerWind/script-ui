import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavTitle = ({ children, color }) => {
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
        if (color === "primary") {
            setTextColor("text-primary");
        }
        if (color === "secondary") {
            setTextColor("text-secondary");
        }
        if (color === "white") {
            setTextColor("text-slate-100");
        }
        if (color === "black") {
            setTextColor("text-slate-950");
        }
    }, [color]);

    return (
        <Link to={"/"}>
            <h1 className={`font-black text-xl ${textColor}`}>{children}</h1>
        </Link>
    );
};

NavTitle.propTypes = {
    children: PropTypes.any,
    color: PropTypes.string.isRequired,
};

export default NavTitle;
