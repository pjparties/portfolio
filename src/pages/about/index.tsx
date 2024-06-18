import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import about1 from '../../assets/about1.jpeg';
import pizza from '../../assets/pizza.jpeg';

const AboutMe = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 pt-16 md:gap-20 items-center'>
            <div className="about-text text-left text-primary">
                <h1 className="text-3xl md:text-3xl tracking-wide font-normal font-mono mb-5">
                    About Me
                </h1>
                <p className='text-primary text-xl md:text-xl tracking-wide !leading-loose font-sans !text-left mb-5'>
                    <span className='font-bold'>TLDR; </span>I'm a dynamic and enthusiastic young engineer, driven by a passion
                    for innovation at the intersection of <span className='font-bold'>intuitive design, scalable and sustainable engineering </span>, and the application
                    of <span className='font-bold'>AI</span> to address real-world challenges.
                </p>
                <p className='text-primary text-xl md:text-xl tracking-wide !leading-loose font-sans !text-left mb-5'>
                    I enjoy teaching and mentoring. Serving as a <span className='font-bold'>Section Leader at Stanford Code In Place</span> was a particularly rewarding experience.                </p>
                <p className='text-primary text-xl md:text-xl tracking-wide font-bold !leading-loose font-sans !text-left mb-5'>
                    My mission is to make a significant impact by creating strategic solutions that push boundaries and benefit communities. 🏘️
                </p>
            </div>
            <div className="img-container flex md:h-screen items-center justify-end">
                <img src={about1} alt="hero" className='object-scale-down max-h-full md:py-20' />
            </div>
        </div >
    )
}
const AboutMe2 = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 pt-16 md:gap-20 items-center'>
            <div className="about-text md:order-last text-left text-primary">
                <h1 className="text-3xl md:text-3xl !leading-8 font-normal font-mono mb-5">
                    About (the other side of) Me
                </h1>
                <p className='text-primary text-xl md:text-xl tracking-wide !leading-loose font-sans !text-left mb-5'>
                    I really enjoy cooking and eating good food <span className='italic'>(if you didn't really notice the pizza)</span>. 
                    I <span className="font-bold">meal-prep high-protein recipes</span> each week that keep me on track with my diet. I am a huge music buff, 
                    I like playing <span className="font-bold">Guitar</span> and <span className="font-bold">Piano</span> in my free time. I listen to all kinds of music, but lately I've been into 70s Rock and 00s Hip-Hop.
                </p>
                <p className='text-primary text-xl md:text-xl tracking-wide !leading-loose font-sans !text-left mb-5'>
                    I really believe in the positive energy through working out and sports, I play <span className="font-bold">Football</span> and <span className="font-bold">Chess</span>. 
                    I am a huge <span className="font-bold">Manchester United</span> fan and follow Chess tournaments occasionally.
                </p>
                <p className='text-primary text-xl md:text-xl tracking-wide !leading-loose font-sans !text-left mb-5'>
                <span className="font-bold">P.S</span> Feel free to reach out to me if you need help with anything, I am always up for a quick chat. 🤝
                </p>
            </div>
            <div className="img-container flex md:h-screen items-center justify-start">
                <img src={pizza} alt="hero" className='object-scale-down max-h-full md:py-20' />
            </div>
        </div >
    )
}


const About = () => {
    return (
        <div className='app-wrapper px-[24px] lg:px-[126px]'>
            <div className="bg-background ">
                <Navbar />
                <AboutMe />
                <AboutMe2 />
                <Footer />
            </div>
        </div>
    )
}

export default About