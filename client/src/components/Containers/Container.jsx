import PropTypes from "prop-types";

const Container = ({children}) => {
    return <div className="p-4 max-w-[1440px]">{children}</div>;
};

export default Container;

Container.propTypes = {
    children: PropTypes.any
}