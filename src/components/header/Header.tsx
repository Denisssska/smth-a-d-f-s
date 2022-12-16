import React from 'react';
import NavComponent from "./NavComponent";
import FilterProductComponent from "./FilterProductComponent";

const Header = () => {
    return (
        <div style={{width:"100%",height:"20%",backgroundColor:"yellow"}}>
            <NavComponent/>
            <FilterProductComponent/>
        </div>
    );
};

export default Header;