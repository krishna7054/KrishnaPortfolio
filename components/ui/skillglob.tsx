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
    "Redis"
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
    "Render",
    "Cloudflare",
]

export function IconCloudDemo() {
  return (
    <div className="flex justify-around p-10 gap-10 items-center">
        <div className="motion-preset-blur-right    p-2 bg-transparent border border-[#27344a] rounded-lg ">
         <h2 className="flex justify-center text-2xl italic text-orange-300 border-b mb-5 p-2">Programming Language's</h2>
         <div className="flex flex-wrap gap-4 justify-center">
           {language.map((lang, index) => (
             <button key={index} className="hover:brightness-100 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-red-300 text-blue-600 font-mono">
               {lang}
             </button>
           ))}
         </div>
        
         <h2 className="flex justify-center text-2xl italic text-orange-300 border-b mt-5 mb-5 p-2">Tool's</h2>
         <div className="flex flex-wrap gap-4 justify-center">
           {tool.map((lang, index) => (
             <button key={index} className="hover:brightness-100 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-amber-200 text-black font-mono">
               {lang}
             </button>
           ))}
         </div>
        </div>
    <div className="relative flex motion-preset-expand motion-duration-2000   items-center justify-center overflow-hidden rounded-sm   px-10 pb-20 pt-5 ">
      <IconCloud iconSlugs={slugs} />
    </div>
    <div className="motion-preset-blur-left   p-2 bg-transparent border border-[#27344a] rounded-lg ">
    <h2 className="flex justify-center text-2xl italic text-orange-300 border-b mb-5 p-2">Web / Frameworks</h2>
         <div className="flex flex-wrap gap-4 justify-center">
           {web.map((lang, index) => (
             <button key={index} className="hover:brightness-100 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-amber-200 text-black font-mono">
               {lang}
             </button>
           ))}
         </div>
         <h2 className="flex justify-center text-2xl italic text-orange-300 border-b mt-5 mb-5 p-2">Database's</h2>
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
