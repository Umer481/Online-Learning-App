import React from 'react'
const questions = (props) => {
    return (
       <React.Fragment>
        <div className="frequent-questions my-n4 mx-n5" >
            {/* header */}
           <h3 className="h3">Frequently asked questions</h3>
           {/* sub header */}
           <h5 className="h5">What happened after a booking request?</h5>
           {/* content area*/}
           <p className="questions">This is what happens for potential bookings requested have been submitted to tutors. 
              This is what happens for potential bookings requested have been submitted to tutors. 
              This is what happens for potential bookings requested have been submitted to tutors. 
              This is what happens for potential bookings requested have been submitted to tutors. 
           </p>
           <a href="#" className="p-3 anchor">Learn more</a>
        </div>
        {/* <!-- 2nd question --> */}
        <div className="frequent-questions my-3 mx-n5">
            {/* header */}
          <h5 className="h5">As a tutor can I declined lessons enquires or requests</h5>
          {/* content */}
          <p className="questions">This is what happens for potential bookings requested have been submitted to tutors. 
              This is what happens for potential bookings requested have been submitted to tutors. 
              This is what happens for potential bookings requested have been submitted to tutors. 
              This is what happens for potential bookings requested have been submitted to tutors. 
          </p>
          <a href="#" className="py-3 mx-n3 anchor">Learn more</a>
        </div>
        <div className="see-articles py-4 mx-n3">
            <a href="#" className="py-3 mx-n4 anchor">See more articles</a>
        </div>
       </React.Fragment>
    )
}
export default questions;