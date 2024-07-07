import React from 'react';
import "./About.css";
import aboutImg from "../../Images/about-img.jpg";

const About = () => {
    return (
        <section className='about'>
            <div className='container'>
                <div className='section-title'>
                    <h2>About</h2>
                </div>

                <div className='about-content grid'>
                    <div className='about-img'>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='about-text'>
                        <h2 className='about-title fs-26 ls-1'>About Hagi's Library</h2>
                        <p className='fs-17'> Hagi's Library is an innovative online book hub that connects readers from around the world with a vast digital collection of books.

                            <p className='fs-17'> Whether you're a voracious bookworm, a curious researcher, or simply someone seeking literary inspiration, Hagi's Library is the ultimate online destination to explore the boundless realms of the written word. Join this vibrant community of book lovers and embark on a journey of discovery, one page at a time.</p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About






