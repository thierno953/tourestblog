import React from 'react'
import './blog.css'
import Blog1 from "../../images/popular-1.jpg"
import Blog2 from "../../images/blog-2.jpg"
import Blog3 from "../../images/popular-3.jpg"
import Avatar1 from "../../assets/IMG_20220506_092917-removebg-preview.png"
import Avatar2 from "../../assets/IMG_20220506_092917-removebg-preview.png"
import Avatar3 from "../../assets/IMG_20220506_092917-removebg-preview.png"


const Blog = () => {
    return (
        <main id="blog">
            <article>
                <section className="section blog">
                    <div className="container">

                        <p className="section-subtitle">From The Blog Post</p>

                        <h2 className="h2 section-title">Latest News & Articles</h2>

                        <ul className="blog-list">

                            <li>
                                <div className="blog-card">

                                    <figure className="card-banner">

                                        <a href="#">
                                            <img src={Blog1} width="740" height="518" loading="lazy"
                                                alt="A good traveler has no fixed plans and is not intent on arriving." className="img-cover" />
                                        </a>

                                        <span className="card-badge">
                                        <i className='bx bx-time'></i>

                                            <time datetime="12-04">04 Dec</time>
                                        </span>

                                    </figure>

                                    <div className="card-content">

                                        <div className="card-wrapper">

                                            <div className="author-wrapper">
                                                <figure className="author-avatar">
                                                    <img src={Avatar1} width="30" height="30" alt="Thierno" />
                                                </figure>

                                                <div>
                                                    <a href="#" className="author-name">Thierno</a>

                                                    <p className="author-title">Admin</p>
                                                </div>
                                            </div>

                                            <time className="publish-time" datetime="10:30">10:30 AM</time>

                                        </div>

                                        <h3 className="card-title">
                                            <a href="#">
                                                A good traveler has no fixed plans and is not intent on arriving.
                                            </a>
                                        </h3>

                                        <a href="#" className="btn-link">
                                            <span>Read More</span>

                                            <i className='bx bx-right-arrow-alt'></i>
                                        </a>

                                    </div>

                                </div>
                            </li>

                            <li>
                                <div className="blog-card">

                                    <figure className="card-banner">

                                        <a href="#">
                                            <img src={Blog2} width="740" height="518" loading="lazy"
                                                alt="A good traveler has no fixed plans and is not intent on arriving." className="img-cover" />
                                        </a>

                                        <span className="card-badge">
                                        <i className='bx bx-time'></i>

                                            <time datetime="12-04">04 Dec</time>
                                        </span>

                                    </figure>

                                    <div className="card-content">

                                        <div className="card-wrapper">

                                            <div className="author-wrapper">
                                                <figure className="author-avatar">
                                                    <img src={Avatar2} width="30" height="30" alt="Thierno" />
                                                </figure>

                                                <div>
                                                    <a href="#" className="author-name">Thierno</a>

                                                    <p className="author-title">Admin</p>
                                                </div>
                                            </div>

                                            <time className="publish-time" datetime="10:30">10:30 AM</time>

                                        </div>

                                        <h3 className="card-title">
                                            <a href="#">
                                                A good traveler has no fixed plans and is not intent on arriving.
                                            </a>
                                        </h3>

                                        <a href="#" className="btn-link">
                                            <span>Read More</span>
                                            <i className='bx bx-right-arrow-alt'></i>
                                        </a>

                                    </div>

                                </div>
                            </li>

                            <li>
                                <div className="blog-card">

                                    <figure className="card-banner">

                                        <a href="#">
                                            <img src={Blog3} width="740" height="518" loading="lazy"
                                                alt="A good traveler has no fixed plans and is not intent on arriving." className="img-cover" />
                                        </a>

                                        <span className="card-badge">
                                        <i className='bx bx-time'></i>

                                            <time datetime="12-04">04 Dec</time>
                                        </span>

                                    </figure>

                                    <div className="card-content">

                                        <div className="card-wrapper">

                                            <div className="author-wrapper">
                                                <figure className="author-avatar">
                                                    <img src={Avatar3} width="30" height="30" alt="Thierno" />
                                                </figure>

                                                <div>
                                                    <a href="#" className="author-name">Thierno</a>

                                                    <p className="author-title">Admin</p>
                                                </div>
                                            </div>

                                            <time className="publish-time" datetime="10:30">10:30 AM</time>

                                        </div>

                                        <h3 className="card-title">
                                            <a href="#">
                                                A good traveler has no fixed plans and is not intent on arriving.
                                            </a>
                                        </h3>

                                        <a href="#" className="btn-link">
                                            <span>Read More</span>

                                            <i className='bx bx-right-arrow-alt'></i>
                                        </a>

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

export default Blog
