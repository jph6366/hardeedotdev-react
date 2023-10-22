import * as React from "react";
import { Document, Page, pdfjs,  } from "react-pdf";
import resume from "../assets/documents/resume.pdf";
import resumeImg from "../assets/documents/resume.png";




export function PDFView () {

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`


  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <a target="_blank" href="  https://www.overleaf.com/read/trqgxytxrrjs">view resume</a>
        {/* <Document file={resume} >
          <Page pageNumber={1} width={400}/> 
        </Document> */}
        <img src={resumeImg} alt=""></img>
    </div>
  );
}
