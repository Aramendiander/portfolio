import { useState, useEffect } from 'react';
import './aboutme.css';

export default function AboutMe() {



    return (
        <div id="about-me-wrapper">
            <div class="about-me">
                <div>
                    <h2>About me</h2>
                    <p>As you've seen before I'm Ander Aramendi, <b>Full Stack Developer</b>.</p>
                    <p>I'm focused on building and managing <b>marketing friendly websites</b>. </p>
                    <p>I've always been passioante about the IT World and the Internet. At 12 I began my journey engaging in various IT enthusiast forums, I even built my own forum.</p>
                    <p>I landed on my first job where I would do some simple HTML, CSS, Javascript and PHP as well as SEO. I loved the technical part of SEO so I specialized myself on it.</p>
                    <p>After that I got into one of the best SEO Agencies of Spain where I had the opportunity to work for huge brands but I missed that coding.</p>
                    <p>Thats where I decided to go all in for development. And I loved it, I started focusing on javascript for its versatility, where I learnt to build frontend apps using React and Angular and backend APIs using Node.js and Express. </p>
                </div>
            </div>
            <div className="skills">
                <h2>MySkills</h2>
                <h3>Programming Languages</h3>
                <div>
                    <span>Javascript</span>
                    <span>PHP</span>
                    <span>C#</span>
                </div>
                <h3>Technologies</h3>
                <div>
                    <span>React</span>
                    <span>Angular</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MySQL</span>
                    <span>MongoDB</span>
                    <span>Git</span>
                    <span>Docker</span>
                </div>
                <h3>Non programming related skills</h3>
                <div>
                    <span>SEO</span>
                    <span>Customer experience</span>
                    <span>Problem Solving</span>
                    <span>Team Work</span>
                    <span>Result driven</span>
                    <span>Critical thinking</span>
                </div>
            </div>
        </div >
    )

}