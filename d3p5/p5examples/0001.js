require("p5/lib/addons/p5.dom");
var myp5 = new p5(function(s) {
    s.setup = () => {
        "use strict";
        var c = s.createCanvas(800,600);
    };
    s.draw = () => {
        "use strict";
        s.background(204);
        var x1 = s.map(s.mouseX,0, 1920, 100, 400);
        s.ellipse(x1, 25, 25, 25);
        var x2 = s.map(s.mouseX,0, 1920, 0, 800);
        s.ellipse(x2, 75, 25, 25);
    };
}, 'example');
