"use client";

import React from "react";

const PdfViewer = () => {
  const pdfUrl = "/Krishna_Resume.pdf"; // Ensure the PDF is inside the public folder

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
    <div className="w-full flex flex-col items-center justify-center space-y-6" >
        
        
<button onClick={handleDownload}
  className="motion-preset-bounce border cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono text-xl "
>
  Resume
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    className="w-5 h-5 animate-bounce ml-2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    ></path>
  </svg>
</button>
    <div className="lg:w-full flex justify-center    motion-preset-slide-up">
      <iframe
        src={pdfUrl}
        className="lg:w-1/2 h-[500px] md:h-[700px]  border border-gray-300 rounded-lg shadow-xl md:w-[500px]"
      ></iframe>

    </div>
      
    </div>
  );
};

export default PdfViewer;
