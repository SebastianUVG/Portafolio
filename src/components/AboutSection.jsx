import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                A cerca <span className="text-primary"> de mi</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    {/*Acerca de mi informacion*/}
                    <h3 className="text-2xl font-semibold">Web Developer apasionado por indagar mas en este mundo de creacion de paginas y servidores</h3>
                    <p className="text-muted-foreground">
                        Me gusta mucho hacer deporte, soy amigable y si tengo un trabajo que hacer, me esmero para elaborar un excelente trabajo.
                    </p>

                    <p className="text-muted-foreground">
                        Tengo experiencia laboral en creaciones de paginas web para instituciones gubernamentales.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Contactame
                        </a>
                        {/*No tengo CV*/}
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Descarga mi CV
                        </a>

                    </div>

                </div>
                {/*Habilidades que tengo respecto a la tecnologia utilizada*/}
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h1 className="font-semibold text-lg">Desarrollador Web</h1>
                                <p className="text-muted-foreground">Frontend y Backend</p>
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
                                <p className="text-muted-foreground">Especializado en css y diseño de paginas</p>
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
                                <p className="text-muted-foreground">En busca de realización de nuevos projectos</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
}