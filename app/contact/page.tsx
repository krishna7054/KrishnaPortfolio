

import { AppleStyleDock } from "@/components/ui/botmbar";
import ContactComponent from "@/components/ui/contact";
import { MatrixText } from "@/components/ui/matrix-text";
import React from 'react';


function contact(){
  return (
    <div className="bg-black min-h-screen  text-white ">
      
        <MatrixText text="Contact"/>
        <ContactComponent/>
        <AppleStyleDock/>
        <footer className=" text-center p-6 text-gray-500  lg:text-end">
        <span className="text-cyan-300">© 2025 Krishna Kumar. All rights reserved.</span> 
        </footer>
    </div>
  )
}

export default React.memo(contact);
