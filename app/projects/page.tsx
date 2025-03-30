

import { AppleStyleDock } from "@/components/ui/botmbar";
import { MatrixText } from "@/components/ui/matrix-text";
import { CardHoverEffectDemo } from "@/components/ui/projectcards";


export default function project(){
  return (
    <div className="bg-black w-full min-h-screen text-white">
      
        <MatrixText text="PROJECTs"/>
       <CardHoverEffectDemo/>
        <AppleStyleDock/>
        <footer className=" text-end p-6 text-gray-500">
        <span className="text-cyan-300">© 2025 Krishna Kumar. All rights reserved.</span> 
        </footer>
    </div>
  )
}
