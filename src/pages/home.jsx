import { Navbar } from "../components/navBar"
import { ThemeToggle } from "../components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
import {HeroSection} from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
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
            <HeroSection/>
            <AboutSection/>
        </main>
        {/*Footer*/}
    </div>
}