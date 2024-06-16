import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-background my-8">
            <div className=" socials flex flex-row gap-8">
                <a href="" target="_blank">
                    <AiFillGithub size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://github.com/pjparties')} />
                </a>
                <a href="" target="_blank">
                    <AiFillLinkedin size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/parthjuneja/')} />
                </a>
                <a href="" target="_blank">
                    <AiFillTwitterSquare size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://twitter.com/pjparties')} />
                </a>
            </div>
            <div className="contact-me mt-6">
                <h1 className="getintouch text-secondary font-mono text-2xl font-semibold">
                    Get in touch at <a href="mailto:parthhjuneja@gmail.com" className="hover:text-secondaryLight">parthhjuneja@gmail.com</a>
                </h1>
            </div>
            <div className="separator">
                <hr className="border-primary w-[100%] my-8" />
            </div>
            <div className="navigation-items text-primary flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="/" className="nav-item hover:text-accent hover:font-semibold">HOME</a>
                <a href="/about" className="nav-item hover:text-accent hover:font-semibold ">ABOUT</a>
                <a href="https://drive.google.com/file/d/1DSsBQ-5B7PWgkvMxHWVFi76wBePdqePO/view" className="nav-item hover:text-accent hover:font-semibold">RESUME</a>
            </div>
        </footer>
    );
}

export default Footer;
