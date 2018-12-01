import p5 from "p5/lib/p5";
import "p5/lib/addons/p5.dom";
import "p5/lib/addons/p5.sound";

new p5(function sketch(p) {
  p.setup = () => {
    p.createCanvas(640, 480);
  };

  p.draw = () => {
    p.ellipse(50, 50, 80, 80);
  };
});
