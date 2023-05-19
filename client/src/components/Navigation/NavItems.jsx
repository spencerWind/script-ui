import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NavItems = ({ children}) => {
    const [activeLink, setActiveLink] = useState("");
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    const location = useLocation();


    useEffect(() => {
        setActiveLink("/" + location.pathname.split("/")[1]);
        console.log(activeLink);

        return () => {};
    }, [location, activeLink]);

    return (
        <section className="flex items-center relative">
            <ul
                className={
                    mobileMenuIsOpen
                        ? "flex flex-col items-center justify-center gap-16 fixed w-screen h-screen bg-slate-700 left-0 top-0 z-0 text-xl font-bold"
                        : "hidden md:flex flex-row items-center gap-12 lg:gap-16"
                }>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            isActive: child.props.destination === activeLink,
                        });
                    }
                    return child;
                })}
                <button
                    onClick={() => {
                        setMobileMenuIsOpen(!mobileMenuIsOpen);
                    }}
                    className="w-8 h-8 border md:hidden">
                    X
                </button>
            </ul>

            <button
                onClick={() => {
                    setMobileMenuIsOpen(!mobileMenuIsOpen);
                }}
                className="w-8 h-8 border md:hidden">
                X
            </button>
        </section>
    );
};

NavItems.propTypes = {
    children: PropTypes.any,
};

export default NavItems;
