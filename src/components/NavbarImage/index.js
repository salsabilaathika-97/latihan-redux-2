import React from 'react';
import { useSelector } from 'react-redux';

const NavbarImage = () => {
    const {navbarReducer} = useSelector((navbarState) => navbarState);

    return (
        <div>
            <img src = {navbarReducer.data.logo} />
        </div>
    )
}

export default NavbarImage;