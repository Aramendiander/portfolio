import { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import TextAnimations from '../common/TextAnimations';
import cvicon from '../assets/cvicon.png'

const Presentation = () => {
    const [inProp, setInProp] = useState(true);
    const nodeRef = useRef(null);







    return (
        <div className="aboutme">
            <h1>Hi, I'm Ander Aramendi</h1>
            <p>SEO Driven Web Developer</p>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={500} classNames="skillrotation">
                <TextAnimations />
            </CSSTransition>

            <div className="mylinks">
                <a rel="nofollow" href="https://github.com/aramendiander" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a rel="nofollow" href="https://www.linkedin.com/in/ander-aramendi/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a rel="nofollow" href="">
                    <img src={cvicon} alt="" />
                </a>
                <a rel="nofollow" href="">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </div>

        </div>
    )
}

export default Presentation