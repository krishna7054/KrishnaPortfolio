import { AppleStyleDock } from "@/components/ui/botmbar";
import { MatrixText } from "@/components/ui/matrix-text";
import PdfViewer from "@/components/ui/pdfviewer";

export default function project(){
  return (
    <div className="bg-black w-full h-full text-white">
      
        <MatrixText text="Resume"/>
        <PdfViewer/>
        <AppleStyleDock/>
        <footer className=" text-end p-6 text-gray-500">
        <span className="text-cyan-300">© 2025 Krishna Kumar. All rights reserved.</span> 
        </footer>
    </div>
  )
}