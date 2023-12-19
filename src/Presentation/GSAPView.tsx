import * as React from "react";
import toast, { Toaster } from 'react-hot-toast';
import gsap from 'gsap';


export function GSAPView () {
// Create the arrow animation with GSAP
const arrow = document.querySelector('.arrow');

// Animate the arrow using GSAP
gsap.to(arrow, {
    duration: 1,
    x: 50, // Change the x-axis translation amount (in pixels)
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true
});
    const notify = () => toast('dont click my arrow');

  return (
    <div onClick={notify} className="arrow"></div>
  );
}
