import PropTypes from "prop-types";
import {Link} from "react-router-dom"

const NavItem = ({ value, destination }) => {
    return (
        <Link to ={destination}>
            <li className="">{value}</li>
        </Link>
    );
};

NavItem.propTypes = {
    destination: PropTypes.string,
    value: PropTypes.string,
};

export default NavItem;
