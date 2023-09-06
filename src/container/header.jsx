import Btn from '../components/btn';

const Header = ({darkMode, changeDarkMode,english, changeLanguage}) => {

const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

    return (
        <header className='header'>
            <div className='start'>
                <Btn text="Hire Me" className="hire-me-btn hvr-rectangle-out" onClick={() => scrollToSection("contact")}></Btn>
                <Btn text="Home" className="header-btn hvr-underline-from-center" onClick={() => scrollToSection("home")}></Btn>
                <Btn text="Skills" className="header-btn hvr-underline-from-center" onClick={() => scrollToSection("skills")}></Btn>
                <Btn text="Projects" className="header-btn hvr-underline-from-center" onClick={() => scrollToSection("portfolio")}></Btn>
                {/*<Btn text="Jobs" className="header-btn" onClick={() => scrollToSection("jobs")}></Btn>*/}
                <Btn text="Studies" className="header-btn hvr-underline-from-center" onClick={() => scrollToSection("studies")}></Btn>
            </div>
            <div className='end'>
                <Btn text={darkMode ? "Light Mode" : "Dark Mode"} onClick={() => changeDarkMode()} className="header-btn"></Btn>
                <Btn className="header-btn" text={english ? "Español" : "English"} onClick={() => { changeLanguage() }}></Btn>     
            </div>
        </header>
    );
}

export default Header;
