import { AppleStyleDock } from "@/components/ui/botmbar";
import { MatrixText } from "@/components/ui/matrix-text";
import { TimelineDemo } from "@/components/ui/timeCom";
import React from 'react';


 function certificate(){
  return (
    <div className=" w-full min-h-screen bg-black text-white ">
        <MatrixText  text="CERTIFICATEs"/>
        <TimelineDemo/>
         <AppleStyleDock/>
         <footer className=" text-end p-6 text-gray-500">
        <span className="text-cyan-300">© 2025 Krishna Kumar. All rights reserved.</span> 
        </footer>
    </div>
  )
}

export default React.memo(certificate);
