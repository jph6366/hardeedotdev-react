import * as React from "react";
import { Document, Page, pdfjs,  } from "react-pdf";
import resume from "../assets/documents/Jhardee_Resume_Cesium.pdf";





export function PDFView () {

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`


  return (
    <div style={{display: 'flex', flexDirection: 'row', width: '100dvw', height: '790px', overflow: 'hidden'}}>
      <a target="_blank" href="https://www.overleaf.com/read/vvqrnzchjvjb#5c1432">view resume</a>
        <Document file={resume} >
          <Page pageNumber={1}/> 
        </Document>
    </div>
  );
}
