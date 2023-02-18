import React from 'react'
const lessonSummary = (props) => {
    return (
        <React.Fragment>
             {/* <!-- lesson summary --> */}
      <section className="lesson-summary py-4 mx-n2">
          {/* <!-- header --> */}
          <h4 className="py-5 text-dark">Lesson Summary</h4>
        <table className="table">
        {/* <!--1st row--> */}
        <tr>
         <td>Lesson</td>
         <td className="item">Maths(GCSE)</td>
        </tr>
        {/* <!--2nd row--> */}
        <tr>
         <td>Start Date</td>
         <td  className="item">Mon 14 May (Weekly)</td>
        </tr>
        {/* <!--3rd row--> */}
        <tr>
         <td>Frequency</td>
         <td  className="item">Weekly(Every Monday)</td>
        </tr>
        {/* <!--4th row--> */}
        <tr>
         <td>Location</td>
         <td  className="item">Online classroom</td>
        </tr>
        {/* <!--5th row--> */}
        <tr>
         <td>Confirmation Number</td>
         <td  className="item">ASK893T6TJ</td>
        </tr>
     
    </table>
      </section>
      {/* <!--end lesson summary--> */}
      <section className="potential-earnings py-4 mx-n2">
          {/* header */}
          <h4 className="py-5 text-dark">Potential Earnings</h4>
          <table className="table">
        {/* <!--1st row--> */}
        <tr>
         <td>Estimated fee per lesson</td>
         <td className="item">£ 20.0</td>
        </tr>
        {/* <!--2nd row--> */}
        <tr>
         <td>Service fee</td>
         <td  className="item">£ 4.00</td>
        </tr>
        {/* <!--3rd row--> */}
        <tr>
         <td>Total earning for each lesson</td>
         <td  className="item">£ 16.0</td>
        </tr>
        {/* <!--4th row--> */}
        <tr>
         <td><a href="#" className="anchor py-3 mx-0">Report</a></td>
         <td  class="item">&nbsp;</td>
        </tr>
        {/* <!--5th row--> */}
        <tr>
         <td><a href="#" className="anchor py-3 mx-0">Help</a></td>
         <td  class="item">&nbsp;</td>
        </tr>
     
    </table>
         </section>
        </React.Fragment>
    )
}
export default lessonSummary;