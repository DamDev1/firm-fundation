import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const [changeToggle, setChangeToggle] = useState(false);
    const [changeNavBar, setChangNavBar] = useState(false)

    const change = () => {
        setChangeToggle(!changeToggle); // Toggle the state
        setChangNavBar(!changeNavBar)
    };

    return (
        <div className={changeNavBar ? "sidebar" : "active-sidebar"}>
            <div className="top">
                <div className="logo">
                    <img src="./assest/logo.png" alt="" width="100%" />
                </div>
                <div className="toggle" onClick={change}>
                    {changeToggle ? (
                        <img src="./assest/closeToggle.svg" alt="" width='50%' />
                    ) : (
                        <img src="./assest/toggle.svg" alt="" />
                    )}
                </div>
            </div>

            <div className="sidebar-links">
                <span>
                    <img src="./assest/dash.svg" alt="" />
                    <NavLink to="/">Dashboard</NavLink>
                </span>
                <span>
                    <img src="./assest/student.svg" alt="" />
                    <NavLink to="/student">Students</NavLink>
                </span>
                <span>
                    <img src="./assest/parent.svg" alt="" />
                    <NavLink to="/parent">Parents</NavLink>
                </span>
                <span>
                    <img src="./assest/teacher.svg" alt="" />
                    <NavLink to="/teachers">Teachers</NavLink>
                </span>
                <span>
                    <img src="./assest/account.svg" alt="" />
                    <NavLink to="/account">Account</NavLink>
                </span>
                <span>
                    <img src="./assest/book.svg" alt="" />
                    <NavLink to="/subjects">Subject</NavLink>
                </span>
                <span>
                    <img src="./assest/setting.svg" alt="" />
                    <NavLink to="/setting">Settings</NavLink>
                </span>
            </div>
        </div>
    );
}
