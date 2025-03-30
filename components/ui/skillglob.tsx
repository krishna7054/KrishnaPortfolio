import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

const language = [
    "C++",
    "Python",
    "Java", 
    "JavaScript",
    "TypeScript",
]
const database = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "prisma"
]

const web = [
    "HTML5",
    " CSS",
    " JQuery",
    " Bootstrap",
    " React.JS",
    " Next.JS",
    " Node.JS",
     "Flask",
     "TailWind CSS",
     " Material-UI"
]
const tool=[
    "Visual Studio Code",
    "GitHub",
    "Figma",
    "Postman",
    "Docker",
    "AWS",
    "CI/CD",
    "Vercel",
    "Netlify",
    "Cloudflare",
]

export function IconCloudDemo() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-6 lg:p-10 w-full">
        <div className="motion-preset-blur-right  w-full lg:w-1/3 p-4 border border-[#27344a] rounded-lg bg-transparent">
         <h2 className="text-center text-xl md:text-2xl italic text-orange-300 border-b mb-5 p-2">Programming Languages</h2>
         <div className="flex flex-wrap gap-4 justify-center">
           {language.map((lang, index) => (
             <button key={index} className="hover:brightness-100 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-red-300 text-blue-600 font-mono">
               {lang}
             </button>
           ))}
         </div>
        
         <h2 className="text-center text-xl md:text-2xl italic text-orange-300 border-b mt-6 mb-5 p-2">Tools</h2>
         <div className="flex flex-wrap gap-4 justify-center">
           {tool.map((lang, index) => (
             <button key={index} className="hover:brightness-100 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-amber-200 text-black font-mono">
               {lang}
             </button>
           ))}
         </div>
        </div>
    <div className="w-full lg:w-1/3 flex items-center justify-center overflow-hidden ">
      <IconCloud iconSlugs={slugs} />
    </div>
    <div className="motion-preset-blur-left w-full lg:w-1/3 p-4 border border-[#27344a] rounded-lg bg-transparent ">
    <h2 className="text-center text-xl md:text-2xl italic text-orange-300 border-b mb-5 p-2">Web / Frameworks</h2>
         <div className="flex flex-wrap gap-4 justify-center">
           {web.map((lang, index) => (
             <button key={index} className="hover:brightness-100 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-amber-200 text-black font-mono">
               {lang}
             </button>
           ))}
         </div>
         <h2 className="text-center text-xl md:text-2xl italic text-orange-300 border-b mb-5 p-2">Databases / ORM</h2>
         <div className="flex flex-wrap gap-4 justify-center">
           {database.map((lang, index) => (
             <button key={index} className="hover:brightness-100 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-red-300 text-blue-600 font-mono">
               {lang}
             </button>
           ))}
         </div>
      
    </div>
    </div>
  )
}
