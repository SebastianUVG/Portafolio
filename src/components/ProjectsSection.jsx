import { ArrowRight, ExternalLink, Github, Key } from "lucide-react";

const projects = [
     {
          id: 1 , 
          title: "Lab 1: El internet antes de la web",
          description: "Laboratorio para observar como funcionaba el internet antes",
          image: "/projectsImage/lab1.png",
          tags: ["CLI"],
          Url: "/projectsFiles/lab1/Lab01.pdf",
          github: "#"
     },
     {
          id: 2 , 
          title: "Lab 2: Administración de servidores remotos",
          description: "Practica para conectarse a serviores de forma remota",
          image: "/projectsImage/lab2.png",
          tags: ["SSH"],
          Url: "/projectsFiles/lab2/Lab02.txt",
          github: "#"
     },
     {
          id: 3 , 
          title: "Lab 3: HTML only",
          description: "Practica para realizar paginas web simples",
          image: "/projectsImage/lab3.png",
          tags: ["HTML"],
          Url: "/projectsFiles/lab3/index.html",
          github: "https://github.com/SebastianUVG/lab3"
     },
     {
          id: 4 , 
          title: "Lab 4: CSS only",
          description: "Practica de CSS",
          image: "/projectsImage/lab4.png",
          tags: ["CSS"],
          Url: "/projectsFiles/lab4/dibujo2.html",
          github: "#"
     },
      {
          id: 5 , 
          title: "Lab 5: JS only",
          description: "Practica de realizacion de un chat en vivo mediante solo el uso de JS",
          image: "/projectsImage/lab5.png",
          tags: ["JS"],
          Url: "/projectsFiles/lab5/index.html",
          github: "#"
     },
     {
          id: 6 , 
          title: "Lab 6: Backend only",
          description: "Desarrollo del backend de una pagina de liga de futbol",
          image: "/projectsImage/lab6.png",
          tags: ["Docker","Apis","Go"],
          Url: "#",
          github: "https://github.com/SebastianUVG/Lab-6-Backend-only---Parte-1"
     },
    
     {
          id: 7 , 
          title: "Lab 7: React",
          description: "Practica de react con un juego de memoria",
          image: "/projectsImage/lab7.png",
          tags: ["HTML","CSS","REACT","JS"],
          Url: "/projectsFiles/lab7/index.html",
          github: "#"
     },
     
     {
          id: 8 , 
          title: "Projecto Final",
          description: "Realizacion de una Calculadora",
          image: "/projectsImage/calculadora.png",
          tags: ["React","CSS","HTML"],
          Url: "/projectsFiles/lab8/index.html",
          github: "https://github.com/SebastianUVG/Calculadora"
     },
     {
          id: 9 , 
          title: "Portafolio",
          description: "Realizacion del portafolio",
          image: "/projectsImage/lab9.png",
          tags: ["React","CSS","HTML","tailwindcss","JS"],
          Url: "#",
          github: "https://github.com/SebastianUVG/Portafolio"
     }
]



export const ProjectsSection = () => {
     return <section id= "projects" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                     Featured
                    <span className="text-primary"> Projects</span>
               </h2>
               <p className="text-center text-muted-foreground= mb-12 max-w-2xl mx-auto">
                    Projectos realizados durante el curso de Tecnologias Web
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                    <div key={project.id} className="group bg-card card-glow-hover led-glow-hover rounded-lg overflow-hidden shadow-xs card-hover">
                              <div className="h-48 overflow-hidden">
                                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                              </div>
                         <div className="p-6">
                              <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag, index) => (
                                   <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                   {tag}
                                   </span>
                              ))}
                              </div>
                                   <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                   <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                              <div className="flex space-x-3">
                                   {project.Url !== "#" && (
                                        <a href={project.Url} target="__blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                        </a>
                                   )}
                                   {project.github !== "#" && (
                                        <a href={project.github} target="__blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                        </a>
                                   )}
                              </div>
                         </div>
                    </div>
                    ))}
               </div>
               <div className="text-center mt-12">
                    <a href="https://github.com/SebastianUVG" 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="__blank">
                         Github <Github size= {16}/>
                    </a>

               </div>
          </div>

     </section>
};