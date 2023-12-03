import { TypeAnimation } from "react-type-animation";

const  skills = () => {
    return (
        <div>
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                    500,
                    'Web Development',
                    1000,
                    'Technical SEO',
                    1000,
                    'Web Analytics',
                    1000,
                    'WordPress',
                    1000,
                    'Web Performance',
                    1000,
                    'Link Building',
                    1000,
                    'Web Auditing',
                    1000,
                    'Keyword Research',
                    1000,
                    'Content Creation',
                    1000,
                    'Content Strategy',
                    1000,
                    'Content Marketing',
                    1000,
                    'Social Media Marketing',
                    1000,
                    'Email Marketing',
                    1000,
                ]}
                speed={10}
                style={{ fontSize: '1.5rem' }}
                repeat={Infinity}

            />
        </div>
    )
}


export default skills;