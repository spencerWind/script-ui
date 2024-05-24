import PropTypes from "prop-types";

const PageView = ({ children }) => {
    return <div className="flex flex-col">{children}</div>;
};

export default PageView;

PageView.propTypes = {
    children: PropTypes.any,
};
