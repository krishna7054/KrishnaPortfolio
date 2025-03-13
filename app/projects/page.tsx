
import { AppleStyleDock } from "@/components/ui/botmbar";
import { MatrixText } from "@/components/ui/matrix-text";
import { CardHoverEffectDemo } from "@/components/ui/projectcards";


export default function page(){
  return (
    <div className="bg-black w-full h-full text-white">
        <MatrixText/>
       <CardHoverEffectDemo/>
        <AppleStyleDock/>
    </div>
  )
}
