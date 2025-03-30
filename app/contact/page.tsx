

import { AppleStyleDock } from "@/components/ui/botmbar";
import ContactComponent from "@/components/ui/contact";
import { MatrixText } from "@/components/ui/matrix-text";


export default function contact(){
  return (
    <div className="bg-black w-full h-screen text-white">
      
        <MatrixText text="Contact"/>
        <ContactComponent/>
        <AppleStyleDock/>
        <footer className=" text-end p-6 text-gray-500">
        <span className="text-cyan-300">© 2025 Krishna Kumar. All rights reserved.</span> 
        </footer>
    </div>
  )
}
