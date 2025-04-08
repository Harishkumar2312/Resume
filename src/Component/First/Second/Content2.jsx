import React from "react";

function Content2() {
    return (
        <>
            <div className="container">
                {/* first row */}
                <div className="first-row">
                    <h1 className="a" id ="work">+ Work Experience</h1>
                    <p>
                        He trabajado en empresas de publicidad internacionale. Nullarn quis
                        risus eget urna  <br />mollis omare vei eu leo ras lit urus usce rem
                    </p>
                </div>
                <br />
                <br />
                {/* secondrow */}
                <div className="secondrow">
                    <div className="row">
                        <div className="col-6">
                            <h2>+ Employment</h2>
                            <hr />
                            <b>
                                <h6>Graphic designer,web designer,SEO and blogger</h6>
                            </b>
                            <p>2010.Present. Mad</p>
                            <b>Godigital.es</b>
                            <p>
                                Praesent commodo cursus magna vel scelerisque nisi consectetur
                                et.Cras mattis consectetur purus sit amet fermentum. Aenean eu
                                leo quam ellentesque omare sem lacina quam. Purus magna vel
                                scelerisque nisl consectur et.Cras mattis sectetur purus sit
                                amet femenllentesque omare sem lacina quam
                            </p>
                            <h6>Front-End Developer</h6>
                            <p>2008-201.Paris</p>
                            <b>Envato lnc</b>
                            <p>
                                Praesent commodo cursus magna. vel scelerisque nisi consectetur
                                et.Cras mattis consectetur purus sit amet fermentum. Aenean eu
                                leo quam ellentesque omare sem lacina quam
                            </p>
                        </div>
                        <div className="col-6">
                            <h5>Graphic Skills</h5>
                            <div className="progress">
                                <div className="progress-bar w-75" role='progress'>Photoshop</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar w-50" role='progress'>Illustrator</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar w-75" role='progress'>Indesign</div>
                            </div><br />
                            <h5>Web Development</h5>
                            <div className="progress">
                                <div className="progress-bar w-75" role='progress'>JQuery</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar w-50" role='progress'>Wordpress</div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar w-100" role='progress'>PHP</div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content2;
