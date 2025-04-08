import React from 'react'
import './Content4.css'
function Content4() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1 id="contact">+Contact</h1>
                        <p>Drop me a line using contact from below</p>
                        <h4>+Contact info:</h4>
                        <div className=" col-lg-6 col-md-6 col-sm-12">
                            <div className="name-row">
                                <p>Name</p>
                                <div>John Doe Manhatan</div>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-sm-12">
                            <div className="name-row">
                                <p>Address</p>
                                <div>voluptatibus</div>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-sm-12">
                            <div className="name-row">
                                <p>Telephone</p>
                                <div>+123456898986</div>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-6 col-sm-12">
                            <div className="name-row">
                                <p>Email</p>
                                <div>John123@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>Name:</div>
                        <input type="text" />
                        <div>Email:</div>
                        <input type="text" />
                        <div>Message:</div>
                        <textarea name="msg" id="msg"></textarea>
                        <br />

                        <button className='send'>Send</button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content4
