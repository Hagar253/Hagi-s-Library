import React from 'react';
import Navbar from "../NavBar/NavBar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                    <p className='header-text fs-18 fw-3'>Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.</p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Header