import React from 'react'

const lessonRequirements = (props) => {
    return (
        <React.Fragment>
            
              {/* <!-- requirements --> */}
        <section className="requirements">
            <h4 className="py-4">Lesson requirements:</h4>
            <p className="py-2">I love to teach. Helping students understand complicated concepts and ideas of course, their worthwhile. I  graduated from university of liverpool, Liverpool with B.SC. in Mathematics with tutor, teaching mathemtaics and bussiness-related subjects in GCSE and A level of students</p>
            {/* <!--btns--> */}
            <a className="btn btn-success mx-auto d-block w-100 py-3 my-4" href="#">Accept</a>
            <a className="btn btn-otline-success mx-auto d-block w-100 py-3 my-4 decline" href="#">Decline</a>
        </section>
         <hr></hr>

         {/* <!--question/Help --> */}
        <section className="question-container my-5 mx-n3">
            <h4 className="py-3 px-0 font-weight-bold mx-n4">Do you have any queries or questions about this lesson request?</h4>
            <a className="py-3 px-0 anchor mx-n1" href="#">Send message</a>
        </section>
        <hr></hr>
        
        </React.Fragment>
    )
}
export default lessonRequirements;