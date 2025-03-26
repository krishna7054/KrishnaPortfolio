import { AppleStyleDock } from "@/components/ui/botmbar";
import { MatrixText } from "@/components/ui/matrix-text";
import { TimelineDemo } from "@/components/ui/timeCom";


export default function certificate(){
  return (
    <div className=" w-full h-full bg-black text-white ">
        <MatrixText  text="CERTIFICATEs"/>
        <TimelineDemo/>
         <AppleStyleDock/>
    </div>
  )
}
