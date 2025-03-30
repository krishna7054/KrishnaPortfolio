import { AppleStyleDock } from "@/components/ui/botmbar";
import { MatrixText } from "@/components/ui/matrix-text";
import { IconCloudDemo } from "@/components/ui/skillglob";


export default function skill(){
  return (
    <div className="bg-black w-full h-screen text-white">
        <MatrixText text="SKILLs"/>
       <IconCloudDemo/>
         <AppleStyleDock/>
         <footer className="mt-38 text-end p-6 text-gray-500">
        <span className="text-cyan-300">© 2025 Krishna Kumar. All rights reserved.</span> 
        </footer>
    </div>
  )
}
