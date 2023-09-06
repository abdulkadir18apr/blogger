import React from 'react';

import { LayoutDashboard } from 'lucide-react';
import { PenTool } from 'lucide-react';
import { Braces } from 'lucide-react';
import { LogOut } from 'lucide-react';
import {Link,NavLink, useLocation} from "react-router-dom";

import './css/sidebar.css' // Import the CSS file with the styles
import { useUserContext } from '../context/UserContext';

export const Sidebar=()=> {
    const {userLogout}=useUserContext()
    const location = useLocation();
    const pathname=location.pathname;

    return (
        <div className="sidebar">
            <div className="sidebar-header">
            <h3><span className='highlight'>Company</span>  Name</h3>
            </div>
            <nav className="sidebar-menu">
                <li className={pathname==="/user"?"active-nav":""}> <LayoutDashboard/> <NavLink to="/user" > Dashboard</NavLink></li>
                <li className={pathname==="/user/writeBlog"?"active-nav":""}><PenTool/><NavLink to="/user/writeBlog"   >Write Post</NavLink></li>
                <li className={pathname==="/user/myblogs"?"active-nav":""}><Braces /><NavLink  to="/user/myblogs">My Blogs</NavLink></li>
            </nav>
            <div className="logout-btn">
            <button className='primary-btn' onClick={()=>userLogout()}><LogOut/>   Logout</button>
            </div>
         
        </div>
    );
}


