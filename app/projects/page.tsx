

import { AppleStyleDock } from "@/components/ui/botmbar";
import { MatrixText } from "@/components/ui/matrix-text";
import { CardHoverEffectDemo } from "@/components/ui/projectcards";


export default function project(){
  return (
    <div className="bg-black w-full h-full text-white">
      
        <MatrixText text="PROJECTs"/>
       <CardHoverEffectDemo/>
        <AppleStyleDock/>
    </div>
  )
}
