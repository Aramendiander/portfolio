import { useState, useEffect } from 'react';
import './contact.css';

export default function Contact() {


    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);

        const formData = new FormData(event.target);

        const response = await fetch('https://formspree.io/f/xbjnpqgj', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.status !== 200) {
            console.error('Form submission error', response);
        }
    };

    if (isSubmitted) {
        return (
            <div className="thankyou">
                <div className="WindowHeader">
                    <h1>Thank you!</h1>
                </div>
                <div className="WindowContent">
                    <p>Your message has been sent.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="contact">
            <div>
                <p className="intouch">Get in touch</p>
            </div>
            <div className="formwrapper">
                <form action="" method="POST" onSubmit={handleSubmit}>

                    <div className="formfield">
                        <label htmlFor="to">Your Name</label>
                        <input type="text" name="From" placeholder='Enter your name' required />
                    </div>
                    <div className="formfield">
                        <label htmlFor="to">Your email</label>
                        <input type="email" name="email" placeholder='Enter your email' required />
                    </div>
                    <div className="formfield">
                        <label htmlFor="message">Message</label>
                        <textarea required name="message" cols="30" rows="10" placeholder='Enter your message'></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
                <div className="contactme">
                    <div className="socials">
                        <a className="email" href="mailto:aramendiander@gmail.com">
                            <i className="fa-solid fa-envelope"></i> Email
                        </a>

                        <a className='email' rel="nofollow" href="https://github.com/aramendiander" target="_blank">
                            <i className="fa-brands fa-github"></i> Github
                        </a>

                        <a rel="nofollow" href="https://www.linkedin.com/in/ander-aramendi/" target="_blank">
                            <i className="fa-brands fa-linkedin"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}