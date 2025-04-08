import React from 'react'
import './Content3.css'

function Content3() {
    return (
        <>
            <div className="container">
                {/* first row */}
                <div className="row">
                    <div className="col-6">
                        <h1 id="edu">+Education</h1>
                        <hr />
                        <h4>vubliadadd Marketing</h4>
                        <p>2000-2005 Mandnd</p>
                        <p>University Madrid</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sapiente, odit inventore similique quae facilis minus modi molestiae. </p>
                        <h4>Grapic design</h4>
                        <p>2000-2005. Mandidi</p>
                        <b>School of Arts</b>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, id enim vel suscipit nam voluptatibus, sint sunt omnis aspernatur.</p>

                    </div>
                    <div className="col-6">
                       <h2>Social media:</h2>
                       <div className="progress">
                        <div className="progress-bar w-75" role='progress'>Facebook</div>
                        </div>
                        <div className="progress">
                        <div className="progress-bar w-50" role='progress'>Twitter</div>
                        </div>
                        <div className="progress">
                        <div className="progress-bar w-75" role='progress'>Instagram</div>
                        </div>
                        <div className="progress">
                        <div className="progress-bar w-100" role='progress'>You Tube</div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content3
