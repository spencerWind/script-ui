import PropTypes from "prop-types";

const Section = ({ children, className }) => {
    return <div className={`py-8 md:py-20 ${className} `} >{children}</div>;
};

export default Section;

Section.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
}
