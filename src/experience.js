import React from 'react';
import './App.css';
import aboutmeimg from './about me.png';

function Experience() {
    return (
      <section class="timeline">
      <div>
          <div class="timeline-icon">👩‍💻</div>
          <div class="timeline-year">Jun 2021 - Dec 2022</div>
          <p class="timeline-text"><strong>FrontEnd Developer</strong></p>
      </div>
      <div>
          <div class="timeline-icon">🧑‍💻</div>
          <div class="timeline-year">Jan 2023 - Present</div>
          <p class="timeline-text"> <strong>React Developer</strong></p>
      </div>
  </section>
    );
}

export default Experience;
