import React from 'react'
import './TutorRequestFlow/Lesson/Lesson.css';
import Detail from './TutorRequestFlow/Lesson/LessonDetails';
import Lessonrequirements from './TutorRequestFlow/Lesson/LessonRequirements';
import Lessonsummary from './TutorRequestFlow/Lesson/LessonSummary';
import Questions from './TutorRequestFlow/Lesson/Questions';
import 'bootstrap/dist/css/bootstrap.css';


const lessonDetails = (props) => {
    debugger
    return (
        <section className="container-box">
             <Detail />
            <Lessonrequirements />
            <Lessonsummary />
            <Questions />
        </section>
    )
}
export default lessonDetails;