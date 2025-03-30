import { AppleStyleDock } from "@/components/ui/botmbar";
import { MatrixText } from "@/components/ui/matrix-text";
import { IconCloudDemo } from "@/components/ui/skillglob";


export default function skill(){
  return (
    <div className="bg-black min-h-screen flex flex-col  justify-between text-white px-4  lg:px-24">
        <MatrixText text="SKILLs"/>
       <IconCloudDemo/>
         <AppleStyleDock/>
         <footer className="mt-15 lg:text-end p-2 text-gray-500 text-center">
        <span className="text-cyan-300">© 2025 Krishna Kumar. All rights reserved.</span> 
        </footer>
    </div>
  )
}
