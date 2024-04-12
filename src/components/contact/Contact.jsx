import { useState, useEffect } from 'react';
import './contact.css';

export default function Contact() {

    return (
        <div className="contact">
            <div>
                <p className="intouch">Get in touch</p>
            </div>
            <div className="contactme">
                <div className="socials">
                    <a className="email" href="mailto:aramendiander@gmail.com">
                        <i class="fa-solid fa-envelope"></i> Email
                    </a>
                    <p>
                        <a className='email' rel="nofollow" href="https://github.com/aramendiander" target="_blank">
                            <i className="fa-brands fa-github"></i> Github
                        </a>
                    </p>
                    <a rel="nofollow" href="https://www.linkedin.com/in/ander-aramendi/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}