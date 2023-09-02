import React from 'react';

import { LayoutDashboard } from 'lucide-react';
import { PenTool } from 'lucide-react';
import { Braces } from 'lucide-react';
import { LogOut } from 'lucide-react';
import {Link} from "react-router-dom";

import './css/sidebar.css' // Import the CSS file with the styles

export const Sidebar=()=> {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
            <h3><span className='highlight'>Company</span>  Name</h3>
            </div>
            <ul className="sidebar-menu">
                <li className='active-nav'> <LayoutDashboard/> <Link to="/user"> Dashboard</Link></li>
                <li><PenTool/><a href="#">Write Post</a></li>
                <li><Braces /><Link to="/user/myblogs">My Blogs</Link></li>
            </ul>
            <div className="logout-btn">
            <button className='primary-btn'><LogOut/>   Logout</button>
            </div>
         
        </div>
    );
}


