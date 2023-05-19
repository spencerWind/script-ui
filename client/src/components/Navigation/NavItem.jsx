import PropTypes from "prop-types";
import {Link} from "react-router-dom"

const NavItem = ({ value, destination, }) => {
    return (
        <Link to ={destination}>
            <li className="text-slate-400 relative font-light">
                {value}
                <span className="absolute w-6 h-[1.5px] bg-primary -bottom-1 left-1/2 -translate-x-1/2"></span>
                </li>
        </Link>
    );
};

NavItem.propTypes = {
    destination: PropTypes.string,
    value: PropTypes.string,
};

export default NavItem;
