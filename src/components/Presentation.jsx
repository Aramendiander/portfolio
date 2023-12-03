import { useEffect, useState, } from 'react';
import { skills, technologies } from '../common/arrays';

const Presentation = () => {
    const [skill, setSkill] = useState(skills[0])


    useEffect(() => {
        skillRotation();
    },[skill])

    const skillRotation = () => {
       setInterval(() => {
        for (let i = 0; i < skills.length; i++) {
            if (skill === skills[i]) {
                if (i === skills.length - 1) {
                    setSkill(skills[0])
                } else {
                    setSkill(skills[i + 1])
                }
            }
        }
       }, 5000);
    }



    return (
        <div className="aboutme">
            <h1>Hi, I'm Ander Aramendi</h1>
            <p>SEO Driven Web Developer</p>
            <p>{skill}</p>
            <div className="mylinks">
                <div>
                    <i className="fa-brands fa-github"></i>
                    <p>Github</p>
                </div>
                <div>
                    <i className="fa-solid fa-file"></i>
                    <p>Traditional CV</p>
                </div>
            </div>

        </div>
    )
}

export default Presentation