import './App.css';
import aboutmeimg from './about me.png';
function MyIntro() {
  return (
<section className='myintro'>

<h1><span class="welcome">Welcome</span> <span className='portfolio'>to my portfolio</span></h1>
    <div className='Aboutcontent'>
    <img src={aboutmeimg}></img>
    <p>Hi, I’m <strong> Sadiksha</strong>,<br></br>a tech enthusiast and IT student with a creative mindset and a love for problem-solving. I’m passionate about exploring the intersection of technology and innovation to create solutions that make an impact.

Currently, I’m honing my skills in web development and programming with hands-on experience in HTML, CSS, and JavaScript. My journey in tech is driven by curiosity and a commitment to continuous learning.
 My goal is to build a future where technology simplifies lives and opens new possibilities.

</p>
</div>
</section>
  );
}
export default MyIntro;