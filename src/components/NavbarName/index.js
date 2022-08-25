import React from 'react';
import { useSelector } from 'react-redux';

const NavbarName = () => {
    const {navbarReducer} = useSelector((navbarState) => navbarState);

    return (
        <div>
            <h1>{navbarReducer.data.company_name}</h1>
        </div>
    )
}

export default NavbarName;