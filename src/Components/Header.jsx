import React from 'react'

export default function Header() {
  return (
    <header>
        <nav>
            <div className="nav-left">
                <span className='search-icon'>
                    <img src="./assest/search.svg" alt="" width="70%"/>
                </span>
                <span className='search-input'>
                    <input type="search" name="" id="" placeholder='Search...'/>
                </span>
            </div>

            <div className="nav-right">
                <span className='email'>
                    <img src="./assest/email.svg" alt="" />
                </span>
                <span className='notification'>
                    <img src="./assest/bell.svg" alt="" />
                </span>
                <span className='line'></span>
                <span className='user'>
                    <div className="userProfile"></div>
                </span>
            </div>
        </nav>
    </header>
  )
}
