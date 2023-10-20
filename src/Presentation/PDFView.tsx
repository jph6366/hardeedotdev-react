import * as React from "react";
import { Document, Page, pdfjs,  } from "react-pdf";
import resume from "../assets/documents/resume.pdf";



export function PDFView () {

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`


  return (
    <div>
      <a target="_blank" href="  https://www.overleaf.com/read/trqgxytxrrjs">view resume</a>
        <Document file={resume} >
          <Page pageNumber={1} width={400}/> 
        </Document>
    </div>
  );
}
