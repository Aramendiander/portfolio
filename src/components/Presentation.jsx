import { useEffect, useState, } from 'react';
import { skills, technologies } from '../common/arrays';

const Presentation = () => {
    const [skill, setSkill] = useState(skills[0])


    useEffect(() => {
        skillRotation();
    },[skill])

    const skillRotation = () => {
        for (let i = 0; i < skills.length; i++) {
            setTimeout(() => {
                setSkill(skills[i])
            }, 5000 * i)
        }
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