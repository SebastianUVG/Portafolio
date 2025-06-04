import { Navbar } from "../components/navBar"
import { ThemeToggle } from "../components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
import {HomeSection} from "@/components/HomeSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
export const Home = () =>{
    return <div className= "min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Cambio de estilo de pagina */}
        <ThemeToggle/>
    
        {/* Efectos del fondo*/ }
        <StarBackground/>

        {/*NavBar*/}
        <Navbar/>
        {/*Contenido principal*/}
        <main>
            <HomeSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
        {/*Footer*/}

            <Footer/>
    </div>
}