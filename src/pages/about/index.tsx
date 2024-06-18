import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import about1 from '../../assets/about1.webp';
import pizza from '../../assets/pizza.webp';

const AboutMe = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 md:mt-8 lg:mt-0 md:gap-20 items-center'>
            <div className="about-text font-sans lg:tracking-wide text-left text-primary">
                <h1 className="text-3xl font-normal font-mono mb-5">
                    About Me
                </h1>
                <p className='text-xl !leading-loose mb-2 md:mb-5'>
                    <span className='font-bold'>TLDR; </span>I'm a dynamic and enthusiastic young engineer, driven by a passion
                    for innovation at the intersection of <span className='font-bold'>intuitive design, scalable and sustainable engineering </span>, and the application
                    of <span className='font-bold'>AI</span> to address real-world challenges.
                </p>
                <p className='text-xl !leading-loose mb-2 md:mb-5'>
                    I enjoy teaching and mentoring. Serving as a <span className='font-bold'>Section Leader at Stanford Code In Place</span> was a particularly rewarding experience.                </p>
                <p className='text-xl font-bold !leading-loose mb-5'>
                    My mission is to make a significant impact by creating strategic solutions that push boundaries and benefit communities. 🏘️
                </p>
            </div>
            <div className="img-container flex lg:h-screen items-center justify-end">
                <img src={about1} alt="hero" className='object-scale-down max-h-full md:py-10' />
            </div>
        </div >
    )
}
const AboutMe2 = () => {
    return (
        <div className='grid md:grid-cols-2 mt-10 lg:mt-0 grid-cols-1 md:gap-20 items-center'>
            <div className="about-text font-sans lg:tracking-wide text-left text-primary md:order-last">
                <h1 className="text-3xl !leading-8 font-normal font-mono mb-5">
                    About (the other side of) Me
                </h1>
                <p className='text-xl !leading-loose mb-5'>
                    I really enjoy cooking and eating good food <span className='italic'>(if you didn't really notice the pizza)</span>. 
                    I <span className="font-bold">meal-prep high-protein recipes</span> each week that keeps me on track with my diet. I am a huge music buff, 
                    I like playing <span className="font-bold">Guitar</span> and <span className="font-bold">Piano</span> in my free time. I listen to all kinds of music, but lately I've been into 70s Rock and 00s Hip-Hop.
                </p>
                <p className='text-xl !leading-loose mb-5'>
                    I really believe in the positive energy through working out and sports, I play <span className="font-bold">Football</span> and <span className="font-bold">Chess</span>. 
                    I am a huge <span className="font-bold">Manchester United</span> fan and follow Chess tournaments occasionally.
                </p>
                <p className='text-xl !leading-loose mb-5'>
                <span className="font-bold">P.S</span> Feel free to reach out to me if you need help with anything, I am always up for a quick chat. 🤝
                </p>
            </div>
            <div className="img-container flex items-center justify-start">
                <img src={pizza} alt="hero" className='object-scale-down max-h-full md:py-10' />
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