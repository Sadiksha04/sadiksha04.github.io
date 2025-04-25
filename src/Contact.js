import React from 'react';
import './App.css';
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <h1>Get in Touch</h1>
                <p className="contact-intro">
                    Feel free to reach out if you have any questions, want to collaborate, or simply want to say hi!
                </p>

                <div className="contact-info">
                    <p className="location">Kathmandu, Nepal</p>

                    <p className="phone">
                        <a href="tel:+1234567890">123456789</a>
                    </p>

                    <p className="email">
                        <a href="mailto:sadiksha@gmail.com" className="email-link">
                            <FaEnvelope className="icon email-icon" />
                            sadiksha@gmail.com
                        </a>
                    </p>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/sadikshaduwadi/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin className="icon" />
                            LinkedIn
                        </a>
                        <a href="https://github.com/Sadiksha04" target="_blank" rel="noopener noreferrer" className="social-link">
                            <AiFillGithub className="icon" />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
