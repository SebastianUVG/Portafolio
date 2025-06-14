import { useState } from "react";
import {cn} from "@/lib/utils"

const skills = [
    //frontend

    {name:"HTML",level: 95, category: "frontend"},
    {name:"JavaScript",level: 95, category: "frontend"},
    {name:"React",level: 85, category: "frontend"},
    {name:"Next.js",level: 80, category: "frontend"},
    {name:"Node.js",level: 85, category: "frontend"},
    {name:"CSS",level: 70, category: "frontend"},
    {name:"TailwindCSS",level: 70, category: "frontend"},
    

    //backend
    {name:"Node.js",level: 85, category: "backend"},
    {name:"PostgresSQL",level: 95, category: "backend"},
    {name:"Vite",level: 80, category: "backend"},
    {name:"Apis",level: 80, category: "backend"},
    {name:"Python",level: 100, category: "backend"},
    {name:"Neo4j",level: 80, category: "backend"},
    
    // Tools

    {name: "Github", level: 100, category: "tools"},
    {name: "Figma", level: 90, category: "tools"},
    {name: "Docker", level: 80, category: "tools"},
    {name: "Vs Code", level: 100, category: "tools"},
    {name: "Kotlin", level: 75, category: "tools"},
];

const categories = ["all","frontend","backend","tools"];

export const SkillsSection = () => {

    const [activeCategory,setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-2-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Mis <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category,key) => (
                    <button 
                    key={key} 
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}
                    onClick={() => setActiveCategory(category)}
                    >
                        
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key) => (
                    <div key={key} className="bg-card  led-glow-hover p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]" 
                            style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    </section>
};
