import PropTypes from "prop-types";

const NavItems = ({children}) => {
    return (
    <ul className="flex flex-row items-center gap-16">
        {children}
    </ul>
    );
};

NavItems.propTypes = {
    children: PropTypes.any
};

export default NavItems;
