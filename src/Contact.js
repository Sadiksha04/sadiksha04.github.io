import React from 'react';
import './App.css';

function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <h1>Get in Touch with me</h1>
                <p>Feel free to reach out if you have any questions, want to collaborate, or simply want to say hi!</p>

                <div className="contact-info">
                    <div className="contact-card">
                        <h2>Email</h2>
                        <p><a href="mailto:sadiksha@example.com">sadiksha@example.com</a></p>
                    </div>
                    <div className="contact-card">
                        <h2>Phone</h2>
                        <p><a href="tel:+1234567890">123456789</a></p>
                    </div>
                    <div className="contact-card">
                        <h2>Social</h2>
                        <ul className="social-links">
                            <li><a href="https://www.linkedin.com/in/sadikshaduwadi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://github.com/Sadiksha04" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>

               
                <div className="contact-form">
                    <h2>Contact Form</h2>

                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required placeholder="Your full name" />

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required placeholder="Your email address" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required placeholder="Write your message here..."></textarea>

                    <button type="submit" className="submit-btn">Send Message</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;
