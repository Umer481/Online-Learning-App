import React from 'react'

const detail = (props) => {
    return (
        <React.Fragment>
             <h1 className = "py-5 m-2 header">Lesson details</h1>
            {/* <!--about the project --> */}
        <section className="about-section border">
           <div className="row mx-1 my-3 justify-content-end">
                <div className="col-sm-10">
                    <h5 className="active-header">Lesson Request</h5>
                    <h5 className="data-sub-header">Mawuli</h5>
                    <p>Expires in 08:30:16</p>
                    <p>Maths (GCSE) . £20 per lesson</p>
                </div>
                 {/* <!-- sign --> */}
                    <div className="col-sm-2 align-self-center justify-content-center"><div className="sign-box"><b>M</b></div></div>
           </div>
        </section>
        {/* <!--when to start-->
        <!--starting point--> */}
        <section className="project-start">
            <div>
                <div className="row justify-content-start details">
                    {/* <!--1st col--> */}
                    <div className="col-md-3 my-3 my-md-0">
                       <h4>Start date</h4>
                        <span>Mon 14 May(Weekly)</span>
                    </div>
                    {/* <!--2nd col--> */}
                    <div className="col-md-3 my-3 my-md-0">
                         <h4>Time</h4>
                        <span>(9:00A.M to 10:00A.M)</span>
                    </div>
                    {/* <!--3rd col--> */}
                    <div className="col-md-3 my-3 my-md-0">
                         <h4>Location</h4>
                        <span>Online classroom</span>
                    </div>
                    {/* <!--4th col--> */}
                    <div className="col-md-3 my-3 my-md-0">
                         <h4>Price</h4>
                        <span>£20 per lesson</span>
                    </div>
                </div>
            </div>
        </section>
        <hr></hr>
        </React.Fragment>
    )
}
export default detail;