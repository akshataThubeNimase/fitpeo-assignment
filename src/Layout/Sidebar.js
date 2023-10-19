import React from "react";

import { PiAddressBookBold } from 'react-icons/pi';
import { PiMicrosoftPowerpointLogoBold } from 'react-icons/pi';
import { MdWorkOutline } from 'react-icons/md';
import { GiAbstract016 } from 'react-icons/gi';
import { MdLiveHelp } from 'react-icons/md';
import { FiCodesandbox } from 'react-icons/fi';
import { FiBox } from 'react-icons/fi';
import '../Styles/Sidebar.css';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    
    const navigateToPage=(path)=>{
        navigate(path);
    }

    return <>
        <div className="sidebar">
            <p className="active" href="#dashboard"><FiBox size={26} />Dashboard</p>
            <p onClick={()=>navigateToPage("/fitpeo-assignment")}><FiCodesandbox size={22} /> Dashboard</p>
            <p onClick={()=>navigateToPage("/product")}><PiMicrosoftPowerpointLogoBold size={22} /> Product</p>
            <p onClick={()=>navigateToPage("/customer")}><PiAddressBookBold size={22} /> Customer</p>
            <p onClick={()=>navigateToPage("/income")}><MdWorkOutline size={22} /> Income</p>
            <p onClick={()=>navigateToPage("/promote")}><GiAbstract016 size={22} /> Promote</p>
            <p onClick={()=>navigateToPage("/help")}><MdLiveHelp size={22} /> Help</p>
        </div>
   
    </>

}
export default Sidebar;