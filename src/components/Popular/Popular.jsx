import React from 'react'
import './popular.css'
import Popular1 from "../../images/popular-1.jpg"
import Popular2 from "../../images/popular-2.jpg"
import Popular3 from "../../images/popular-3.jpg"

const Popular = () => {
    return (
        <main id="popular">
            <article>
                <section className="section popular">
                    <div className="container">

                        <p className="section-subtitle">Featured Tours</p>

                        <h2 className="h2 section-title">Most Popular Tours</h2>

                        <ul className="popular-list">

                            <li>
                                <div className="popular-card">

                                    <figure className="card-banner">
                                        <a href="#">
                                            <img src={Popular1} width="740" height="518" loading="lazy"
                                                alt="Kuala Lumpur, Malaysia" className="img-cover" />
                                        </a>

                                        <span className="card-badge">
                                            <ion-icon name="time-outline"></ion-icon>

                                            <time datetime="P12D">12 Days</time>
                                        </span>
                                    </figure>

                                    <div className="card-content">

                                        <div className="card-wrapper">
                                            <div className="card-price">From €10.00</div>

                                            <div className="card-rating">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star-half'></i>
                                                <data value="2">(2)</data>
                                            </div>
                                        </div>

                                        <h3 className="card-title">
                                            <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                                        </h3>

                                        <address className="card-location">Kuala Lumpur, Malaysia</address>

                                    </div>

                                </div>
                            </li>

                            <li>
                                <div className="popular-card">

                                    <figure className="card-banner">
                                        <a href="#">
                                            <img src={Popular2} width="740" height="518" loading="lazy"
                                                alt="Kuala Lumpur, Malaysia" className="img-cover" />
                                        </a>

                                        <span className="card-badge">
                                            <ion-icon name="time-outline"></ion-icon>

                                            <time datetime="P12D">12 Days</time>
                                        </span>
                                    </figure>

                                    <div className="card-content">

                                        <div className="card-wrapper">
                                            <div className="card-price">From $€10.00</div>

                                            <div className="card-rating">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star-half'></i>
                                                <data value="2">(2)</data>
                                            </div>
                                        </div>

                                        <h3 className="card-title">
                                            <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                                        </h3>

                                        <address className="card-location">Kuala Lumpur, Malaysia</address>

                                    </div>

                                </div>
                            </li>

                            <li>
                                <div className="popular-card">

                                    <figure className="card-banner">
                                        <a href="#">
                                            <img src={Popular3} width="740" height="518" loading="lazy"
                                                alt="Kuala Lumpur, Malaysia" className="img-cover" />
                                        </a>

                                        <span className="card-badge">
                                            <ion-icon name="time-outline"></ion-icon>

                                            <time datetime="P12D">12 Days</time>
                                        </span>
                                    </figure>

                                    <div className="card-content">

                                        <div className="card-wrapper">
                                            <div className="card-price">From $€10.00</div>

                                            <div className="card-rating">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star-half'></i>
                                                <data value="2">(2)</data>
                                            </div>
                                        </div>

                                        <h3 className="card-title">
                                            <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                                        </h3>

                                        <address className="card-location">Kuala Lumpur, Malaysia</address>

                                    </div>

                                </div>
                            </li>

                        </ul>

                    </div>
                </section>
            </article>
        </main>
    )
}

export default Popular
