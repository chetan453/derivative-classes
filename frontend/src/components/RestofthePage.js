import React from 'react'
import './CSS/RestofthePage.css'

function RestofthePage(props) {

    return (
        <div>
            <div className="container" >
                <br /><br /><br /><br />
                <h1>Why us?</h1>
                <p>You can have multiple pages in your project. Find the menu icon at the top left corner. Move your cursor over it to open the main menu. Click on the Pages tab to manage your pages. Don't forget to set your page title and description. This info is used by browsers and search engines. The home page of your project cannot be removed.</p>
            </div>
            <br /><br />
            <div className="container">
                <h1>Free mock test based on JEE pattern</h1>
                <button className="btn btn-lg btn-primary"><h4>Click here</h4></button>
            </div>
            <br />
            <div id="aboutus" >
                <div className="container">
                    <div className="mbr-section-head">
                        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-3"><strong>About Us</strong></h4>
                    </div>
                    <div className="row mt-4">
                        <div className="item features-image сol-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">

                                <div className="item-content">
                                    <h5 className="item-title mbr-fonts-style display-5">Chetan Gaikwad</h5>
                                    <p className="mbr-text mbr-fonts-style mt-3 display-7">2 nd year student at <br />IIT delhi&nbsp;Computer Science
                                        <br />and Engineering</p>
                                    <h6 className="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Contact Number:-7724831419</strong></h6>
                                </div>

                            </div>
                        </div>
                        <div className="item features-image сol-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="item-content">
                                    <h5 className="item-title mbr-fonts-style display-5">Varun Choudhary</h5>
                                    <p className="mbr-text mbr-fonts-style mt-3 display-7">2nd-year student at <br />IIT kharagpur&nbsp;Electronics and
                                        <br />communication<br />
                                    </p>
                                    <h6 className="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Contact Number:-8770300465</strong></h6>
                                </div>

                            </div>
                        </div>
                        <div className="item features-image сol-12 col-md-6 col-lg-4">
                            <div className="item-wrapper">
                                <div className="item-content">
                                    <h5 className="item-title mbr-fonts-style display-5">Satish Pawar</h5>
                                    <p className="mbr-text mbr-fonts-style mt-3 display-7">2nd year student at<br /> NIT bhopal&nbsp;Computer Science and engineering&nbsp;</p>
                                    <h6 className="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Contact Number:-7089427074</strong></h6>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default RestofthePage
