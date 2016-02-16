require("p5/lib/addons/p5.dom");
var myp5 = new p5(function( s ) {
    s.setup = () => {
        "use strict";
        var width = 700,
            height = 300,
            margin = 30;

        s.createCanvas(width + margin*2, height + margin*2);

        s.push();
        s.translate(margin,margin);


        //y axis
        var D3yscale = d3.scale.linear()
            .domain([10,0])
            .range([0,height]);

        var D3yaxis = d3.svg.axis()
            .scale(D3yscale)
            .orient('left')

        var p5yaxis = D3p5axis(D3yaxis);
        //
        p5yaxis.drawTicks(function(txt) {
            s.stroke('gray');
            s.line(0,0,width,0);
            s.noStroke();
            s.fill('black');
            s.textAlign(s.RIGHT);
            s.text(txt, -5, 5);
        });

        p5yaxis.drawConnectingLine(function(startX, endX) {
            //no line connecting
        });

        //x axis
        var D3xscale = d3.scale.ordinal()
            .domain(['planes','trains','automobiles', 'ferries', 'subways', 'taxis', 'ubers', 'lyft'])
            .rangeRoundBands([0,width], .1);

        var D3xaxis = d3.svg.axis()
            .scale(D3xscale)

        var p5axis = D3p5axis(D3xaxis, 0, height);

        p5axis.drawTicks(function(txt) {
            s.fill('black');
            s.noStroke();
            s.textAlign(s.CENTER);
            s.text(txt, 0, 20);
            s.stroke('black');
            s.line(0,3,0,10);
        });

        p5axis.drawConnectingLine(function(startX, endX) {
            s.stroke('red');
            s.strokeWeight(2);
            s.line(startX, 0, endX, 0);
        });


        var data = [1,2,3,4,5,4.5,5,9.5];

        for(var i = 0; i < data.length; i++) {
            s.fill('blue');
            var xOffset = D3xscale.range()[i];
            var barWidth = D3xscale.rangeBand();
            var barHeight = D3yscale(data[i]);
            var maxHeight = D3yscale(0);
            s.push();
            s.translate(xOffset, 0);
            s.rect(0, barHeight, barWidth, maxHeight-barHeight);
            s.pop();
        }

        s.pop();


        //Add a title
        s.fill('#000');
        s.noStroke();
        s.textSize(15);
        s.text("Drawing D3 axes using p5 canvas methods", 30, 20);
    };
    function D3p5axis(d3Axis, x, y) {
        x = x || 0;
        y = y || 0;
        var D3scaleObj = d3Axis.scale();
        var customDOMaxis = d3.select('body').append('custom').style('display', 'none').call(d3Axis);
        var ticks = customDOMaxis.selectAll('g');

        var returnFunction = function() {}

        returnFunction.drawTicks = function(drawFunction) {
            s.push();
            s.translate(x,y);
            ticks.each(function() {
                var translateObj = d3.transform(d3.select(this).attr('transform'));
                var translateX = translateObj.translate[0];
                var translateY = translateObj.translate[1];
                s.push();
                s.translate(translateX, translateY);
                var txt = d3.select(this).select('text').text();
                drawFunction(txt);
                s.pop();
            });
            s.pop();
        }

        returnFunction.drawConnectingLine = function(drawFunction) {
            s.push();
            s.translate(x,y);

            ticks.each(function() {
                var translateObj = d3.transform(d3.select(this).attr('transform'));
                var translateX = translateObj.translate[0];
                var translateY = translateObj.translate[1];
                s.push();
                s.translate(translateX, translateY);
                drawFunction(D3scaleObj.range()[0],D3scaleObj.range()[1]);
                var txt = d3.select(this).select('text').text();
                drawFunction(txt);
                s.pop();
            });
            s.pop();
        }

        return returnFunction;
    }
}, '1');

