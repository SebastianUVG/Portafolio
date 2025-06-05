import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                A cerca <span className="text-primary"> de mí</span>
            </h2>

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/*Habilidades que tengo respecto a la tecnologia utilizada*/}
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h1 className="font-semibold text-lg">Desarrollador Web</h1>
                                <p className="text-muted-foreground">Especializado en CSS y diseño de páginas web, con experiencia tanto en el frontend como en el backend.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h1 className="font-semibold text-lg">Diseñador UI/UX</h1>
                                <p className="text-muted-foreground">Apasionado por el desarrollo de interfaces atractivas y funcionales.</p>
                            </div>
                        </div>

                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h1 className="font-semibold text-lg">Projecto Manager</h1>
                                <p className="text-muted-foreground">Coordinando equipos y asegurando que cada proyecto cumpla con sus objetivos.
                                    Siempre estoy en busca de nuevos proyectos que representen un reto y una oportunidad de crecimiento.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="space-y-6">
                    {/*Acerca de mi informacion*/}
                    <h3 className="text-2xl font-semibold">Desarrollador Web apasionado por explorar el mundo de la creación de páginas y servidores.</h3>
                    <p className="text-muted-foreground">
                        Me encanta hacer deporte, soy una persona amigable y, cuando tengo un trabajo que realizar, me esfuerzo al máximo para entregar resultados de alta calidad.
                    </p>

                    <p className="text-muted-foreground">
                        Cuento con experiencia laboral en el desarrollo de sitios web para instituciones gubernamentales.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            ¡Contáctame!
                        </a>
                        {/*No tengo CV*/}
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Descarga mi CV
                        </a>

                    </div>

                </div>
                

            </div>
        </div>
    </section>
}