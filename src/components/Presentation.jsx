import { useEffect, useState, useRef } from 'react';
import { skills, technologies } from '../common/arrays';
import { CSSTransition } from 'react-transition-group';

const Presentation = () => {
    const [skill, setSkill] = useState(skills[0])
    const [inProp, setInProp] = useState(true);
    const nodeRef = useRef(null);



    useEffect(() => {
        const intervalId = skillRotation();
        return () => clearInterval(intervalId);
    }, []);

    const skillRotation = () => {
        let i = 0;
        return setInterval(() => {
            setInProp(false);
            setTimeout(() => {
                setSkill(skills[i]);
                setInProp(true);
            }, 500);
            i = (i + 1) % skills.length;
        }, 5000);
    }



    return (
        <div className="aboutme">
            <h1>Hi, I'm Ander Aramendi</h1>
            <p>SEO Driven Web Developer</p>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={500} classNames="skillrotation">
                <p ref={nodeRef}>{skill}</p>
            </CSSTransition>
                
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