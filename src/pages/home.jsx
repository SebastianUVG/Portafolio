import { ThemeToggle } from "../components/ThemeToggle"
import {StarBackground} from "@/components/StarBackground"
export const Home = () =>{
    return <div className= "min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Cambio de estilo de pagina */}
        <ThemeToggle/>

        {/* Efectos del fondo*/ }
        <StarBackground/>

        {/*NavBar*/}

        {/*Contenido principal*/}

        {/*Footer*/}
    </div>
}