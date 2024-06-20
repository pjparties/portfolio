import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

// added new blog

const Footer = () => {
    return (
        <footer className="bg-background my-8">
            <div className=" socials flex flex-row gap-8">
                <a href="" title="Github" target="_blank">
                    <AiFillGithub size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://github.com/pjparties')} />
                </a>
                <a href="" title="LinkedIn" target="_blank">
                    <AiFillLinkedin size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/parthjuneja/')} />
                </a>
                <a href="" title="Twitter/X" target="_blank">
                    <AiFillTwitterSquare size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://twitter.com/pjparties')} />
                </a>
            </div>
            <div className="contact-me mt-6">
                <h1 className="getintouch text-secondary font-mono text-2xl font-semibold">
                    Get in touch at <a title="email me" href="mailto:parthhjuneja@gmail.com" className="hover:text-secondaryLight">parthhjuneja@gmail.com</a>
                </h1>
            </div>
            <div className="separator">
                <hr className="border-primary w-[100%] my-8" />
            </div>
            <div className="navigation-items text-primary flex flex-col md:flex-row items-center justify-center gap-6">
                <Link to="/" className="nav-item hover:text-accent hover:font-semibold">HOME</Link>
                <Link to="/about" className="nav-item hover:text-accent hover:font-semibold ">ABOUT</Link>
                <a href="https://parth-time-dev.vercel.app/" className="nav-item hover:text-accent hover:font-semibold">BLOG</a>
                <a href="https://drive.google.com/file/d/1DSsBQ-5B7PWgkvMxHWVFi76wBePdqePO/view" className="nav-item hover:text-accent hover:font-semibold">RESUME</a>
                
            </div>
        </footer>
    );
}

export default Footer;
