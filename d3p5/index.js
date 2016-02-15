require("p5/lib/addons/p5.dom");
var myp5 = new p5(function( sketch ) {
    sketch.setup = () => {
        var margin = 30;
        var width = 700;
        var height = 300;
        var c = sketch.createCanvas(width, height);
        sketch.translate(margin,margin);
        var data = d3.range(8).map(function() { return 1+Math.random() * 10; });

        var lineGeneratorBasis = d3.svg.line()
            .x(function(data,index) { return sketch.map(index,0,8,0,width-margin*2); })
            .y(function(data,index) { return sketch.map(data,0,10,0,height-margin*2); })
            .interpolate('basis');

        var lineGeneratorLinear = d3.svg.line()
            .x(function(data,index) { return sketch.map(index,0,8,0,width-margin*2); })
            .y(function(data,index) { return sketch.map(data,0,10,0,height-margin*2); })
            .interpolate('linear');

        var lineGeneratorStep = d3.svg.line()
            .x(function(data,index) { return sketch.map(index,0,8,0,width-margin*2); })
            .y(function(data,index) { return sketch.map(data,0,10,0,height-margin*2); })
            .interpolate('step-before');


        sketch.stroke('black');
        var cPathBasis = new Path2D(lineGeneratorBasis(data));
        var cPathLinear = new Path2D(lineGeneratorLinear(data));
        var cPathStep = new Path2D(lineGeneratorStep(data));

        sketch.strokeWeight(3);
        sketch.stroke('#033E8C');

        c.canvas.getContext('2d').stroke(cPathBasis);
        sketch.stroke('#F2B705');
        c.canvas.getContext('2d').stroke(cPathLinear);
        sketch.stroke('#00D96F');
        c.canvas.getContext('2d').stroke(cPathStep);

        sketch.fill('#fff');
        sketch.stroke('#000');
        sketch.strokeWeight(1);
        for(var i = 0; i < data.length; i++) {
            sketch.ellipse(sketch.map(i,0,8,0,width-margin*2),sketch.map(data[i],0,10,0,height-margin*2), 10, 10)
        }
    };
}, '1');

