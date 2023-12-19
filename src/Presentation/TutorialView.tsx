import * as React from "react";
import toast, { Toaster } from 'react-hot-toast';


export function TutorialView () {
    
    const notify = () => toast('just keep trying');

  return (
    <div className="tutorial">
    {/* <button style={{
              width: '50dvw',
    }} onClick={notify}>Click here for help</button> */}
      <Toaster />
    </div>
    
  );
}
