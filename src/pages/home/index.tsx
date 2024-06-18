import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import hero from '../../assets/hero2.jpeg';
import chessAI from '../../assets/ChessAI.png';   
import peerio from '../../assets/peerio.png';


const Hero = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row w-full justify-between md:items-center h-fit'>
            <div className="hero-bio md:mr-12 mt-12 md:mt-0 md:py-24 flex flex-col justify-center h-full w-full md:w-2/3">
                <h1 className="text-primary text-3xl md:text-6xl tracking-wider font-bold !leading-tight font-mono mb-5">
                    Hey, it's Parth.
                </h1>
                <p className='text-primary text-xl md:text-2xl !leading-8 md:tracking-wide font-sans !text-left mb-5 pr-2'>
                    Software Developer building scalable solutions that are innovative, future-driven & user-centric for a progressive growth.
                    🌱
                </p>
            </div>
            <div className="hero-image w-32 h-auto md:w-52 md:h-72 left-0 overflow-clip align-middle md:mb-0">
                <img className='rounded-t-[150px]' src={hero} alt="Hero Image" />
            </div>
        </div>
    )
}

const ProjectCard = ({ projImage, projTitle, projDesc, projLink }: { projImage: string, projTitle: string, projDesc: string, projLink: string }) => {
    return (
        <a className="project-card w-fit text-primary flex flex-col" title='GitHub Link' href={projLink}>
            <div className="img-container w-fit h-fit hover:scale-105 eas duration-200 overflow-clip">
                <img src={projImage} alt="Project Image" className="projectimage mx-auto h-full w-full bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-stops))] from-[#d8ddf8] from-10% via-[#d8ddf8] via-40% to-background to-60%" />
            </div>
            <div className="project-desc pt-5 mb-3">
                <h3 className="text-2xl md:text-3xl tracking-wide font-mono font-bold mb-6 text-left">{projTitle}</h3>
                <p className="text-xl md:text-xl tracking-wide font-light leading-5 text-left">{projDesc}</p>
            </div>
        </a>

    )
}

const Projects = () => {

    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mx-auto py-10">
            <ProjectCard projImage={peerio} projTitle='👔Peer.io' projDesc='React, Node, TypeScript, WebSocket, Redis, SQL • Real-time PWA chat application to connect like-minded users for productivity eg. Peer Programming' projLink='https://github.com/pjparties/peer-io-frontend' />
            <ProjectCard projImage={chessAI} projTitle='♟️ChessAI' projDesc='Python, Deep Learning, Flask, Computer Vision • Live Chessboard annotation implementing research papers and analysis using Stockfish API' projLink='https://github.com/pjparties/chessAI' />
        </div>
    )
}

const Home = () => {
    return (
        <div className='app-wrapper px-[24px] lg:px-[126px]'>
            <div className="bg-background ">
                <Navbar />
                <Hero />
                <Projects />
                <Footer />
            </div>
        </div>
    )
}

export default Home