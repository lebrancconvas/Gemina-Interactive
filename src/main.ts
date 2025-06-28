import gsap from "gsap";
import $ from "jquery";


// GSAP
const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "green";
document.body.appendChild(box);

gsap.to(box, {
  rotation: 360,
  duration: 3,
  repeat: -1,
  ease: "none"
});

console.log(`GSAP is working at version: ${gsap.version}`);

// JQUERY

$(function() {
  console.log(`jQuery is working at version: ${$.fn.jquery}`);
})

