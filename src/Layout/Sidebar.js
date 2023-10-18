import React from "react";

import { PiAddressBookBold } from 'react-icons/pi';
import { PiMicrosoftPowerpointLogoBold } from 'react-icons/pi';
import { MdWorkOutline } from 'react-icons/md';
import { GiAbstract016 } from 'react-icons/gi';
import { MdLiveHelp } from 'react-icons/md';
import { FiCodesandbox } from 'react-icons/fi';
import { FiBox } from 'react-icons/fi';
import '../Styles/Sidebar.css';


const Sidebar = () => {
    return <>
        <div className="sidebar">
            <a className="active" href="#dashboard"><FiBox size={26} />Dashboard</a>
            <a href="/fitpeo-assignment"><FiCodesandbox size={22} /> Dashboard</a>
            <a href="/Product"><PiMicrosoftPowerpointLogoBold size={22} /> Product</a>
            <a href="/Customer"><PiAddressBookBold size={22} /> Customer</a>
            <a href="/Income"><MdWorkOutline size={22} /> Income</a>
            <a href="/Promote"><GiAbstract016 size={22} /> Promote</a>
            <a href="/Help"><MdLiveHelp size={22} /> Help</a>
        </div>
   
    </>

}
export default Sidebar;