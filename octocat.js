/*
  p5.js is a JavaScript library to make coding accessible
  for artists, designers, educators, and beginners.

  Read the docs at https://p5js.org/reference/
  Check out examples at https://p5js.org/examples/

  octocat.js is a JavaScript library to make octocats.
  Read the docs at https://github.com/octocademy/octocat.js
*/
import p5 from "p5.js";
import Octocat from "octocat.js";

let octocat;

p5.setup = () => {
  createCanvas(300, 300);
  octocat = new Octocat();

  octocat.setEyes("Contempt")
  octocat.setEyes("Contempt")
  octocat.setBodyColor({ primary: "#282828", underside: "#99C7C9", suctions: "#494949" })
  octocat.setBodyColor({ primary: "#282828", underside: "#494949", suctions: "#99C7C9" })
  octocat.setFaceColor({ face: "#D9B6A5", nose: "#814B41" })
  octocat.setFaceColor({ face: "#FFC5AF", nose: "#A34F3E" })
  octocat.setEyeColor("#5DB088")
  octocat.setEyeColor("#503B37")
  octocat.setMouth("Underbite")
  octocat.setMouth("Sad")
  octocat.setHair("Pixie")
  octocat.setHairColor("#000000")
  octocat.setTop("Business Suit")
  octocat.setBottom("Suit Pants")
  octocat.setFootwear("Kraftwerk Shoes")
  octocat.setHeadgear("Fedora")
  octocat.setEyewear("Monocle")
  octocat.setAccessory("Bolo Tie")
  octocat.setPuddleColor("#503B37")
  octocat.setEyeColor("#B3682B")
  octocat.setPuddleColor("#5CDFF2")
  octocat.setProp("Laptop")
};

// ♻️ The draw method gets called repeatedly
// you can make changes here to animate!
p5.draw = () => {
  background("white");
  octocat.draw();
};
