import React from 'react'
import './about.css'
import AboutImage from '../../assets/destination.jpg'

const About = () => {
    return (
        <main id="about">
            <article>
                <section className="section about">
                    <div className="container">

                        <div className="about-content">

                            <p className="section-subtitle">About Us</p>

                            <h2 className="h2 section-title">Explore all tour of the world with us.</h2>

                            <p className="about-text">
                                Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                                randomised words
                                which don't look even slightly believable.
                            </p>

                            <ul className="about-list">

                                <li className="about-item">

                                    <div className="about-item-icon">
                                    <i className='bx bx-check'></i>
                                    </div>

                                    <div className="about-item-content">
                                        <h3 className="h3 about-item-title">Tour guide</h3>

                                        <p className="about-item-text">
                                            Lorem Ipsum available, but the majority have suffered alteration in some.
                                        </p>
                                    </div>

                                </li>

                                <li className="about-item">

                                    <div className="about-item-icon">
                                    <i className='bx bx-check'></i>
                                    </div>

                                    <div className="about-item-content">
                                        <h3 className="h3 about-item-title">Friendly price</h3>

                                        <p className="about-item-text">
                                            Lorem Ipsum available, but the majority have suffered alteration in some.
                                        </p>
                                    </div>

                                </li>

                                <li className="about-item">

                                    <div className="about-item-icon">
                                    <i className='bx bx-check'></i>
                                    </div>

                                    <div className="about-item-content">
                                        <h3 className="h3 about-item-title">Reliable tour</h3>

                                        <p className="about-item-text">
                                            Lorem Ipsum available, but the majority have suffered alteration in some.
                                        </p>
                                    </div>

                                </li>

                            </ul>

                            <a href="#" className="btn btn-primary">Booking Now</a>

                        </div>

                        <figure className="about-banner">
                            <img src={AboutImage} width="756" height="842" loading="lazy" alt="" className="w-100" />
                        </figure>

                    </div>
                </section>
            </article>
        </main>

    )
}

export default About
