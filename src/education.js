import React from 'react';
import './App.css';
import aboutmeimg from './about me.png';

function Education() {
    return (
        <section class="timeline">
            <h1 className='Education Title'></h1>
        <div>
            <div class="timeline-icon">📘</div>
            <div class="timeline-year">SEE</div>
            <p class="timeline-text">Completed Secondary Education Examination</p>
        </div>
        <div>
            <div class="timeline-icon">🎓</div>
            <div class="timeline-year">+2 (Science)</div>
            <p class="timeline-text">Graduated Higher Secondary (+2)</p>
        </div>
        <div>
            <div class="timeline-icon">🏫</div>
            <div class="timeline-year">Bachelor's Degree</div>
            <p class="timeline-text">Pursuing Bachelor's in IT </p>
        </div>
    </section>
    );
}

export default Education;

