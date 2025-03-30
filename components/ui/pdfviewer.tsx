"use client";

import React from "react";

const PdfViewer = () => {
  const pdfUrl = "/Krishna_Kumar_Resume.pdf"; // Ensure the PDF is inside the public folder

  const handleDownload = () => {
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Krishna_Resume.pdf"; // Set download file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading the file:", error));
  };

  return (
    <div >
        {/* Download Button */}
        
<button onClick={handleDownload}
  className="motion-preset-bounce border ml-[80%] cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
>
  Resume
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    className="w-5 h-5 animate-bounce"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    ></path>
  </svg>
</button>

      {/* <a
        href={pdfUrl}
        download="sample.pdf"
        className="mt-4 px-4 py-2 ml-[90%]  bg-blue-600 text-white rounded hover:bg-blue-700 transition "
      >
        Download PDF
      </a> */}
    <div className="flex  items-center justify-center    motion-preset-slide-up">
      
     

      {/* PDF Viewer */}
      <iframe
        src={pdfUrl}
        className="w-full max-w-4xl h-[900px] border border-gray-300 rounded-lg shadow-xl"
      ></iframe>

    </div>
      
    </div>
  );
};

export default PdfViewer;
