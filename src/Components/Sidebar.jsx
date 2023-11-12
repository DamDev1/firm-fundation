import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [changeToggle, setChangeToggle] = useState(false);
  const [changeNavBar, setChangNavBar] = useState(false);

  // DropDowns for sidebar
  const [openDropdown, setOpenDropdown] = useState(true);
  const [openTeacher, setopenTeacher] = useState(true);
  const [OpenAccount, setOpenAccount] = useState(true);
  const change = () => {
    setChangeToggle(!changeToggle); // Toggle the state
    setChangNavBar(!changeNavBar);
  };

  const dropDown = () => {
    setOpenDropdown(!openDropdown);
  };

  const dropdownTeacher = () => {
    setopenTeacher(!openTeacher);
  };

  const dropdownAccount = () => {
    setOpenAccount(!OpenAccount);
  };

  return (
    <div className={changeNavBar ? "sidebar" : "active-sidebar"}>
      <div className="top">
        <div className="logo">
          <img src="./assest/logo.png" alt="" width="100%" />
        </div>
        <div className="toggle" onClick={change}>
          {changeToggle ? (
            <img src="./assest/closeToggle.svg" alt="" width="50%" />
          ) : (
            <img src="./assest/toggle.svg" alt="" />
          )}
        </div>
      </div>

      <div className="sidebar-links">
        <Link to="/">
          <span>
            <img src="./assest/dash.svg" alt="" />
            <NavLink to="/">Dashboard</NavLink>
          </span>
        </Link>
        <span className="dropdowns">
          <div className="dropdown-container" onClick={dropDown}>
            <img src="./assest/student.svg" alt="" />
            <NavLink to="/student">Students</NavLink>
            <div className="drop">
              {!openDropdown ? (
                <img src="./assest/drop2.svg" alt="" />
              ) : (
                <img src="./assest/drop.svg" alt="" />
              )}
            </div>
          </div>
          <div className={!openDropdown ? "dropdown" : "removeDrop"}>
            <div className="main-dropdown">
              <img src="./assest/drop.svg" alt="" />
              <NavLink>All Students</NavLink>
            </div>
            <div className="main-dropdown">
              <img src="./assest/drop.svg" alt="" />
              <NavLink>Add Students</NavLink>
            </div>
            <div className="main-dropdown">
              <img src="./assest/drop.svg" alt="" />
              <NavLink>Students Promotion</NavLink>
            </div>
          </div>
        </span>
        <Link to="/parent">
          <span>
            <img src="./assest/parent.svg" alt="" />
            <NavLink to="/parent">Parents</NavLink>
          </span>
        </Link>
        <span className="dropdowns">
          <div className="dropdown-container" onClick={dropdownTeacher}>
            <img src="./assest/teacher.svg" alt="" />
            <NavLink to="/teachers">Teachers</NavLink>
            <div className="drop">
              {!openTeacher ? (
                <img src="./assest/drop2.svg" alt="" />
              ) : (
                <img src="./assest/drop.svg" alt="" />
              )}
            </div>
          </div>
          <div className={!openTeacher ? "dropdown" : "removeDrop"}>
            <div className="main-dropdown">
              <img src="./assest/drop.svg" alt="" />
              <NavLink>All Teachers</NavLink>
            </div>
            <div className="main-dropdown">
              <img src="./assest/drop.svg" alt="" />
              <NavLink>Add Teachers</NavLink>
            </div>
          </div>
        </span>

        <span className="dropdowns">
          <div className="dropdown-container" onClick={dropdownAccount}>
            <img src="./assest/account.svg" alt="" />
            <NavLink to="/account">Account</NavLink>
            <div className="drop">
              {!OpenAccount ? (
                <img src="./assest/drop2.svg" alt="" />
              ) : (
                <img src="./assest/drop.svg" alt="" />
              )}
            </div>
          </div>
          <div className={!OpenAccount ? "dropdown" : "removeDrop"}>
            <div className="main-dropdown">
              <img src="./assest/drop.svg" alt="" />
              <NavLink>Fees Group</NavLink>
            </div>
            <div className="main-dropdown">
              <img src="./assest/drop.svg" alt="" />
              <NavLink>Student Fees</NavLink>
            </div>
            <div className="main-dropdown">
              <img src="./assest/drop.svg" alt="" />
              <NavLink>Expenses</NavLink>
            </div>
            <div className="main-dropdown">
              <img src="./assest/drop.svg" alt="" />
              <NavLink>Add Expenses</NavLink>
            </div>
          </div>
        </span>
        <Link to="/subjects">
          <span>
            <img src="./assest/book.svg" alt="" />
            <NavLink to="/subjects">Subject</NavLink>
          </span>
        </Link>
        <Link to="/setting">
          <span>
            <img src="./assest/setting.svg" alt="" />
            <NavLink to="/setting">Settings</NavLink>
          </span>
        </Link>
      </div>
    </div>
  );
}
