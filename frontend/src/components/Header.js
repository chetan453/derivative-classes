import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Header.css';

function Header() {
    return (
        <section className="header1 cid-s48MCQYojq mbr-fullscreen mbr-parallax-background" id="header1-f">
            <div className="mbr-overlay" style={{ opacity: 0.8, backgroundColor: "rgb(255, 255, 255)" }}></div>

            <div className="align-center container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>JEE Adv Crash Course</strong></h1>

                        <p className="mbr-text mbr-fonts-style display-5">6 weeks course<br />dedicated study material<br />affordable
                            price<br />mock test on JEE pattern</p>
                        <div className="mbr-section-btn mt-3">
                            <Link className="btn btn-success display-4" to="/register">
                                Register Here
                            </Link>
                            <Link className="btn btn-secondary display-4" to="/course-details" style={{ outline: "none", marginLeft: "10px" }} >
                                Course Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="jarallax-container-0">
                <div />
            </div>
        </section>
    )
}

export default Header
