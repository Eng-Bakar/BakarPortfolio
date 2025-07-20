import AboutMe from "../Components/AboutMe"
import ContactMe from "../Components/ContactMe"
import EducationalBg from "../Components/EducationalBg"
import HeroSection from "../Components/HeroSection"
import Projects from "../Components/Projects"
import TechSkills from "../Components/TechStack"

function Home (){
    return <div>
        <HeroSection />
        <AboutMe />
        <EducationalBg />
        <TechSkills />
        <Projects />
        <ContactMe />
    </div>
}
export default Home