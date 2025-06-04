import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import {cn} from "@/lib/utils";

export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in 
                    <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Tienes algun proyecto en mente o quieres colaborar?
                    No te preocupes y podemos hablar. Siempre estoy dispuesto a nuevos proyectos y oportunidades.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Informacion de contacto</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:example@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        example@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Telefono</h4>
                                    <a href="tel:+55550505050" className="text-muted-foreground hover:text-primary transition-colors">
                                        +555 50505050
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Ubicación</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Guatemala, USA, España
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Redes Sociales</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://gt.linkedin.com" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="https://www.facebook.com" target="_blank">
                                    <Facebook />
                                </a>
                                <a href="https://x.com" target="_blank">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha: Formulario de mensaje */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Enviame un mensaje</h3>
                        <form className="space-y-6" action="">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" 
                                    placeholder="Juan Pedro.."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Correo</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" 
                                    placeholder="JuanPedro@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" 
                                    placeholder="Hola, me gustaría hablar respecto a una propuesta..."
                                />
                            </div>

                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                Enviame un mensaje
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

