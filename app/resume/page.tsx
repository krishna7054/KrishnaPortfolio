import { AppleStyleDock } from "@/components/ui/botmbar";
import { MatrixText } from "@/components/ui/matrix-text";
import PdfViewer from "@/components/ui/pdfviewer";
import React from 'react';

function resume(){
  return (
    <div className="bg-black w-full min-h-screen text-white  items-center justify-between  px-4 sm:px-6 lg:px-24">
      
        <MatrixText text="Resume"/>
        <PdfViewer/>
        <AppleStyleDock/>
        <footer className=" text-center  text-gray-500  lg:text-end ">
        <span className="text-cyan-300">© 2025 Krishna Kumar. All rights reserved.</span> 
        </footer>
    </div>
  )
}
export default React.memo(resume);