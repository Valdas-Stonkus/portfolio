import React from 'react'
// import devPicture from '../..public/images/valdas_wb.jpg'

const Home = () => (

    <div className="container">
        {/* <img className="welcome__image" src="/images/valdas_wb.jpg" alt="Valdas's in greyscale" /> */}

        <header>
            <nav className="nav">
                <div className="nav__logo">VS</div>
                <div className="nav__links">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#work" onClick="closeNav()">Work</a></li>
                        <li className="nav__item"><a href="#contact" onClick="closeNav()">Contact</a></li>
                    </ul>
                </div>
                <div className="nav__social-icons">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="https://github.com/MrStonkus" target="_blank" rel="noreferrer">
                                <i className="bi-github" />
                                ???
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="https://www.linkedin.com/in/valdas-stonkus/" target="_blank" rel="noreferrer">
                                <i
                                    className="bi-linkedin"
                                />
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="mailto:https://stonkus.lt"
                            >
                                <i
                                    className="bi-share"
                                />
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="nav__side-menu">
                    {/* <i className="bi-list" style="font-size:30px;cursor:pointer" onClick="openNav()" /> */}
                </div>
            </nav>
        </header>

        <main>
            <section className="welcome" id="welcome">

                <div className="welcome__pic-wrapper">
                    <img className="welcome__image" src="/images/valdas_wb.jpg" alt="Valdas's in greyscale" />
                    <div className="welcome__img-holder welcome__top-holder">
                        <div className="welcome__holder-dot">
                            {' '}
                            . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        </div>
                    </div>
                    <div className="welcome__img-holder welcome__bottom-holder">
                        <div className="welcome__holder-dot">
                            {' '}
                            . . . . . . . . . . . . . . . . .
                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                        </div>
                    </div>
                </div>

                <div className="welcome__text-wrapper">
                    <h1 className="welcome__title">
                        <span>
                            Hi, I&apos;m Valdas and I&apos;m
                            <br />
                        </span>
                        a&nbsp;
                        <span className="welcome__title highlight">
                            Front-end Developer.
                        </span>
                    </h1>
                    <p>
                        I live in Šiauliai, Lithuania. I have more that 1 year studies
                        experience of creating web and some backend applications. I very love team work and I&apos;m open for new oportunities and interesting projects.
                    </p>
                    <p> Check out my works please.</p>
                    <div className="welcome__buttons">
                        <button className="btn welcome__button-dark"><a href="#contact">Contact me</a></button>
                        <button className="btn welcome__button"><a href="#work">Resume</a></button>
                    </div>
                </div>
            </section>

            <section id="work" className="work">
                <h2 className="title-section">Work</h2>
                <p className="work__title-description">
                    Check my projects. If you have any questions feel free to ask me for more
                    information.
                </p>
                {/* <!-- work tags --> */}
                <div className="work__tags-filter">
                    <input id="rad1" type="radio" name="rad" checked="checked" />
                    {/* <label htmlFor="rad1">All</label> */}
                </div>
                {/* <!-- TODO: add tag buttons filter --> */}

                {/* <!-- work cards from data.js--> */}
                <div className="work__container" />

            </section>

            <section id="contact" className="work">

                <div id="contact-section" className="container mt-5 text-center">
                    <h1 className="title-section">Let&apos;s work together!</h1>

                    <div className="container-fluid mb-5 d-flex justify-content-center">
                        <div className="row p-2">

                            <div className="p-2">
                                <div>
                                    <h4>Valdas Stonkus</h4>
                                </div>
                                <hr className="my-0" />
                                <div>
                                    <i className="bi-telephone mr-1" />
                                    {' '}
                                    +370-600-80084
                                </div>
                                <div>
                                    <i className="bi-envelope mr-1" />
                                    {' '}
                                    valdas@stonkus.lt
                                </div>
                                <div>
                                    <i className="bi-geo-alt mr-1" />
                                    {' '}
                                    Šiauliai-Vilnius, Lithuania
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <footer>Made by Valdas Stonkus</footer>
        </main>
    </div>
)
export default Home
