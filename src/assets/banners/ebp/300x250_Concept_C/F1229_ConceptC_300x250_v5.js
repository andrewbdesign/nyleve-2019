(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/ButtonTop.png", id:"ButtonTop"},
		{src:"images/Buttonbottompngcopy.png", id:"Buttonbottompngcopy"},
		{src:"images/Cta.png", id:"Cta"},
		{src:"images/Deletelatefeesfromyourlife.png", id:"Deletelatefeesfromyourlife"},
		{src:"images/Gradientpngcopy.png", id:"Gradientpngcopy"},
		{src:"images/Hand.png", id:"Hand"},
		{src:"images/Logopngcopy.png", id:"Logopngcopy"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ButtonTop = function() {
	this.initialize(img.ButtonTop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,74);


(lib.Buttonbottompngcopy = function() {
	this.initialize(img.Buttonbottompngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,74);


(lib.Cta = function() {
	this.initialize(img.Cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,96);


(lib.Deletelatefeesfromyourlife = function() {
	this.initialize(img.Deletelatefeesfromyourlife);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,97);


(lib.Gradientpngcopy = function() {
	this.initialize(img.Gradientpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,472);


(lib.Hand = function() {
	this.initialize(img.Hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,320);


(lib.Logopngcopy = function() {
	this.initialize(img.Logopngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,56);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1FAE4B").s().p("A2NWOQpOpNAAtBQAAtBJOpNQJNpNNAAAQNBAAJNJNQJOJNAANBQAANBpOJNQpNJOtBAAQtAAApNpOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.2,-201.2,402.5,402.5);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Gradientpngcopy();
	this.instance.setTransform(-158.4,-118,0.53,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.4,-118,317,236);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Buttonbottompngcopy();
	this.instance.setTransform(-68,-18.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-18.5,136,37);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(200,1,1).p("EAyCAAAQAAUuuqOqQuqOq0uAAQ0tAAuquqQuquqAA0uQAA0tOquqQOquqUtAAQUuAAOqOqQOqOqAAUtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.2,-420.2,840.6,840.6);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ButtonTop();
	this.instance.setTransform(-68,-18.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-18.5,136,37);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ButtonTop();
	this.instance.setTransform(-68,-18.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-18.5,136,37);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hand();
	this.instance.setTransform(-127.2,-80,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-80,254.5,160);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hand();
	this.instance.setTransform(-127.2,-80,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-80,254.5,160);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AgLANIAAgZIAXAAIAAAZg");
	this.shape.setTransform(188,44.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgIAzIgLgDQgJgEgHgIQgGgHgDgJQgDgJAAgLQAAgIADgJQADgKAGgIQAGgHAJgEIAKgEQAGgBAEAAQAHAAAGABQAFABAFADQAJAEAGAIQAFAHADAKQACAJAAAIIgBAIIhEAAQABAFACAEQABADADADQAEADAEABQAEACAEAAQAIAAAGgCQAGgCAFgGIARAQQgEAEgFAEIgKAFIgLAEIgMAAgAAYgIQgBgGgCgDQgBgEgDgDQgDgDgEgBIgKgBQgDAAgEABQgEABgDADQgFAGgCAKIAtAAIAAAAg");
	this.shape_1.setTransform(180.5,41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AAUAzIAAg4QAAgLgDgFQgCgDgDgCQgDgCgFAAQgEABgEACQgEACgEADQgEAEgCAEQgCAFAAAEIAAA2IgZAAIAAhkIAZAAIAAAMQAGgHAJgEQAFgCAIAAQAKgBAHAEQAHAEAFAFQAEAHADAIQACAGAAAJIAAA7g");
	this.shape_2.setTransform(168.9,40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgLBIIAAhlIAXAAIAABlgAgLgwIAAgXIAYAAIAAAXg");
	this.shape_3.setTransform(160,38.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgNBEQgCgCgCgEQgCgEAAgIIAAh6IAXAAIAAB0QAAAEACABQACABAFAAIAHAAIAAAVQgLACgHAAQgLgBgEgEg");
	this.shape_4.setTransform(154.9,39);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AAUAzIAAg4QAAgLgDgFQgCgDgDgCQgDgCgFAAQgEABgEACQgEACgEADQgEAEgCAEQgCAFAAAEIAAA2IgZAAIAAhkIAZAAIAAAMQAGgHAJgEQAFgCAIAAQAKgBAHAEQAHAEAFAFQAEAHADAIQACAGAAAJIAAA7g");
	this.shape_5.setTransform(145.3,40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgVAwQgJgDgHgIQgIgHgDgKQgEgKAAgKQAAgJAEgKQADgJAIgIQAHgHAJgEQAKgFALABQALgBAKAFQAKAEAHAHQAHAIAEAJQAEAKAAAJQAAAKgEAKQgEAKgHAHQgHAIgKADQgKAEgLAAQgLAAgKgEgAgKgbQgGADgDADQgDAFgCAFQgBAGAAAFQAAAGABAGQACAFADAFQADAEAGADQAEACAGAAQAGAAAFgCQAGgDACgEQAEgFACgFQABgGAAgGQAAgFgBgGQgCgFgEgFQgCgDgGgDQgFgCgGgBQgGABgEACg");
	this.shape_6.setTransform(133.1,41);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgMAyQgHgCgFgEQgGgEgEgFQgEgFgCgGIAUgJQADAHAEAEQADADADABQAEACADAAQAIAAAEgEQAFgEAAgEQAAgDgDgDIgFgDIgQgFQgMgEgGgDQgEgDgCgFQgCgFAAgGQAAgIADgGQAEgGAFgEQAFgDAHgCQAGgCAFAAQAHAAAGACQAGABAFADIAJAHIAFAJIgSAJQgCgFgEgDQgGgDgIAAQgEAAgEABQgDADAAAEQAAAEAIAEIAQAFIAKAEQAFACADAEQAEABACAFQACAGAAAHQAAAIgEAGQgDAHgGAFQgFADgHACQgHACgIAAQgGAAgHgCg");
	this.shape_7.setTransform(116.8,41);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgMBEQgEgCgBgEQgCgEABgIIAAh6IAWAAIAAB0QAAAEADABQACABAEAAIAGAAIAAAVQgKACgIAAQgKgBgDgEg");
	this.shape_8.setTransform(109.9,39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgNBEQgCgCgCgEQgCgEABgIIAAh6IAWAAIAAB0QAAAEADABQACABAEAAIAGAAIAAAVQgKACgIAAQgJgBgFgEg");
	this.shape_9.setTransform(104,39);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgLBIIAAhlIAXAAIAABlgAgLgwIAAgXIAXAAIAAAXg");
	this.shape_10.setTransform(97.7,38.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgJBGQgIgDgFgGIAAAKIgaAAIAAiPIAaAAIAAA1QAFgHAIgDQAHgCAHgBQAKABAJAEQAIAEAGAIQAFAHADAIQADAJAAALQAAALgDAJQgDAKgFAHQgGAHgIAEQgJAFgKAAQgHAAgHgDgAgKgGQgEACgEAEQgCACgCAGQgBAFAAAHQAAAHABAEQACAHACADQAEAFAEABQAFADAFAAQAFAAAFgDQAEgBAEgFQADgDABgHQACgEAAgHQAAgGgCgGQgBgGgDgCQgEgEgEgCQgFgDgFAAQgFAAgFADg");
	this.shape_11.setTransform(89.4,39);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgiAzIAAhkIAYAAIAAANQAFgIAFgDQAGgEAHABIALABQAGACAFADIgMAVQgEgEgHAAQgFAAgFADQgCACgDAFIgFAKIgCALIAAAvg");
	this.shape_12.setTransform(74.2,40.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgYAwQgHgEgFgGQgFgGgBgJQgDgHAAgIIAAg7IAZAAIAAA5QABAKADAGQACADADACQADABAFAAQADAAAFgCQAEgCAEgDQAEgDACgFQACgFAAgEIAAg3IAZAAIAABkIgZAAIAAgLQgFAGgJAEQgHAEgGAAQgKAAgIgEg");
	this.shape_13.setTransform(63,41.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgUAwQgKgDgHgIQgIgHgDgKQgEgKAAgKQAAgJAEgKQADgJAIgIQAHgHAKgEQAKgFAKABQALgBAKAFQAKAEAHAHQAHAIAEAJQAEAKAAAJQAAAKgEAKQgEAKgHAHQgHAIgKADQgKAEgLAAQgKAAgKgEgAgKgbQgFADgEADQgDAFgCAFQgBAGAAAFQAAAGABAGQACAFADAFQAEAEAFADQAFACAFAAQAGAAAGgCQAEgDADgEQAEgFABgFQACgGAAgGQAAgFgCgGQgBgFgEgFQgDgDgEgDQgGgCgGgBQgFABgFACg");
	this.shape_14.setTransform(51.1,41);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgfBJIATgvIgohiIAbAAIAZBHIAahHIAbAAIg5CRg");
	this.shape_15.setTransform(39.6,43.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgIAzIgLgDQgJgEgHgIQgGgHgDgJQgDgJAAgLQAAgIADgJQADgKAGgIQAGgHAJgEIAKgEQAGgBAEAAQAHAAAGABQAFABAFADQAJAEAGAIQAFAHADAKQACAJAAAIIgBAIIhEAAQABAFACAEQABADADADQAEADAEABQAEACAEAAQAIAAAGgCQAGgCAFgGIARAQQgEAEgFAEIgKAFIgLAEIgMAAgAAYgIQgBgGgCgDQgBgEgDgDQgDgDgEgBIgKgBQgDAAgEABQgEABgDADQgFAGgCAKIAtAAIAAAAg");
	this.shape_16.setTransform(213.9,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgPBQQgJgCgIgEQgIgEgEgHIgEgIIgBgJQAAgIACgEIAMgFQgGgEgDgHQgEgGAAgFQAAgGAEgEQACgGAGgFQgFgHAAgKQAAgIADgHQAEgHAFgFQAGgEAIgDQAIgDAHAAQAIAAAKAEIARgQIAPATIgPAKIAEAKQABAFAAAGQAAAIgCAIQgEAGgGAFQgFADgIADQgIACgHAAIgLgBIgKgEQgDAFAAADQAAAEAHACQAHACAMAAIAVACQAJACAFADQAGAEACAGQADAGgBAJQABAJgDAGQgDAGgGAEQgFAEgKACQgJACgMAAQgHAAgIgBgAgdAuQABADADADQACADAFACQAIAEAKAAQAOAAAGgDQAGgDABgGQAAgFgHgDQgGgCgMAAIgTgBgAgMgrQgDAFAAAIQAAAHADAFQAGAFAGAAQAHAAAFgFQAFgFAAgHQAAgIgFgFQgFgGgHAAQgGAAgGAGg");
	this.shape_17.setTransform(203.2,17.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgWAyQgGgCgGgFQgFgDgDgHQgDgGAAgHQAAgIADgHQAEgFAFgCQAGgEAIgBQAHgCAJAAIAZAAIgBgJQgCgEgCgCQgDgDgEgCQgEgBgFAAQgGAAgGAFQgGAEgEAFIgTgOIAJgJQAEgFAGgCQAFgDAGgBQAGgBAFAAQALAAAIADQAIACAGAGQAGAFADAIQADAIAAAJIAAA8IgUAAIgDgOIgHAIIgHAFQgIADgJAAQgHAAgHgCgAgPALQgEAEAAAFQAAAFAEADQAFADAHAAQADAAAFgBIAJgGQADgDACgFQADgEAAgFIgXAAQgJAAgFAEg");
	this.shape_18.setTransform(191.9,15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AAUAzIAAg4QAAgLgDgFQgCgDgDgCQgDgCgFAAQgEABgEACQgEACgEADQgEAEgCAEQgCAFAAAFIAAA1IgZAAIAAhkIAZAAIAAAMQAGgHAJgDQAFgDAIAAQAKgBAHAEQAHAEAFAFQAEAHADAIQACAGAAAJIAAA7g");
	this.shape_19.setTransform(180.5,15.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgWAyQgGgCgGgFQgFgDgDgHQgDgGAAgHQAAgIADgHQAEgFAFgCQAGgEAIgBQAHgCAJAAIAZAAIgBgJQgCgEgCgCQgDgDgEgCQgEgBgFAAQgGAAgGAFQgGAEgEAFIgTgOIAJgJQAEgFAGgCQAFgDAGgBQAGgBAFAAQALAAAIADQAIACAGAGQAGAFADAIQADAIAAAJIAAA8IgUAAIgDgOIgHAIIgHAFQgIADgJAAQgHAAgHgCgAgPALQgEAEAAAFQAAAFAEADQAFADAHAAQADAAAFgBIAJgGQADgDACgFQADgEAAgFIgXAAQgJAAgFAEg");
	this.shape_20.setTransform(168.8,15.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AAyA0IAAg5QAAgKgEgGQgBgDgEgCQgDgBgFAAQgFAAgEACQgEACgCADQgDADgCAFQgBAEAAAFIAAA3IgXAAIAAg5QAAgKgEgGIgFgFQgDgBgFAAQgFAAgEACIgHAFIgEAIQgBAEAAAFIAAA3IgZAAIAAhlIAZAAIAAALQAEgHAIgDQAGgDAHAAQAKAAAHAEQAHAEAEAIQAFgIAKgEQAIgDAKAAQAKAAAHADQAHAEAFAGQAFAGACAIQACAHAAAIIAAA8g");
	this.shape_21.setTransform(154.8,15.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AgXBEQgIgEgFgHQgGgHgDgKQgDgJAAgLQAAgLADgJQADgIAGgHQAFgIAIgEQAJgEAKgBQAHAAAHADQAIAEAFAGIAAg1IAaAAIAACPIgaAAIAAgKQgFAGgIAEQgHACgHAAQgKAAgJgFgAgJgGQgEACgDAEQgDACgCAGQgCAGAAAGQAAAHACAEQACAHADADQADAFAEABQAFADAEAAQAGAAAFgDQAEgBADgFQADgEACgFQABgGAAgGQAAgHgBgFQgCgGgDgCQgDgEgEgCQgFgDgGAAQgEAAgFADg");
	this.shape_22.setTransform(133.5,13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353535").s().p("AAUAzIAAg4QAAgLgDgFQgCgDgDgCQgDgCgFAAQgEABgEACQgEACgEADQgEAEgCAEQgCAFAAAFIAAA1IgZAAIAAhkIAZAAIAAAMQAGgHAJgDQAFgDAIAAQAKgBAHAEQAHAEAFAFQAEAHADAIQACAGAAAJIAAA7g");
	this.shape_23.setTransform(121.8,15.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353535").s().p("AgWAyQgGgCgGgFQgFgDgDgHQgDgGAAgHQAAgIADgHQAEgFAFgCQAGgEAIgBQAHgCAJAAIAZAAIgBgJQgCgEgCgCQgDgDgEgCQgEgBgFAAQgGAAgGAFQgGAEgEAFIgTgOIAJgJQAEgFAGgCQAFgDAGgBQAGgBAFAAQALAAAIADQAIACAGAGQAGAFADAIQADAIAAAJIAAA8IgUAAIgDgOIgHAIIgHAFQgIADgJAAQgHAAgHgCgAgPALQgEAEAAAFQAAAFAEADQAFADAHAAQADAAAFgBIAJgGQADgDACgFQADgEAAgFIgXAAQgJAAgFAEg");
	this.shape_24.setTransform(110.1,15.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353535").s().p("AgeBJIASgvIgohiIAcAAIAYBHIAZhHIAcAAIg4CRg");
	this.shape_25.setTransform(93.6,18);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353535").s().p("AgWAyQgGgCgGgFQgFgDgDgHQgDgGAAgHQAAgIADgHQAEgFAFgCQAGgEAIgBQAHgCAJAAIAZAAIgBgJQgCgEgCgCQgDgDgEgCQgEgBgFAAQgGAAgGAFQgGAEgEAFIgTgOIAJgJQAEgFAGgCQAFgDAGgBQAGgBAFAAQALAAAIADQAIACAGAGQAGAFADAIQADAIAAAJIAAA8IgUAAIgDgOIgHAIIgHAFQgIADgJAAQgHAAgHgCgAgPALQgEAEAAAFQAAAFAEADQAFADAHAAQADAAAFgBIAJgGQADgDACgFQADgEAAgFIgXAAQgJAAgFAEg");
	this.shape_26.setTransform(82.6,15.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353535").s().p("AgwBKIAAiRIAaAAIAAAKQAFgHAIgDQAHgCAHAAQAKAAAIAEQAIAEAHAIQAFAHADAKQACAJABALQgBALgCAJQgDAIgFAHQgHAIgIAEQgIAEgKAAQgHAAgHgDQgJgDgEgGIAAA3gAgKgwQgFACgDAEIgEAKQgCAFABAHQgBAHACAFQACAGACACQADAEAFACQAFACAFAAQAFAAAFgCQAEgCADgEQADgCACgGQACgFgBgHQABgHgCgFQgCgGgDgEQgDgEgEgCQgFgDgFAAQgFAAgFADg");
	this.shape_27.setTransform(71.6,17.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#353535").s().p("AgfBJIATgvIgohiIAbAAIAZBHIAahHIAbAAIg5CRg");
	this.shape_28.setTransform(54,18);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#353535").s().p("AgMBEQgDgCgCgEQgBgEgBgIIAAh6IAXAAIAAB0QAAAEACABQACABAFAAIAHAAIAAAVQgLACgHAAQgKgBgEgEg");
	this.shape_29.setTransform(46.2,13.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#353535").s().p("AgLBIIAAhlIAXAAIAABlgAgLgwIAAgXIAYAAIAAAXg");
	this.shape_30.setTransform(39.9,13.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#353535").s().p("AgMAyQgHgCgGgEQgFgEgEgFQgEgFgCgGIAUgJQADAHAEAEQACADAEABQAEACADAAQAIAAAFgEQADgEABgEQAAgDgCgDIgHgDIgPgFQgMgEgGgDQgEgDgBgFQgDgFAAgGQAAgIAEgGQADgGAFgEQAFgDAHgCQAGgCAFAAQAHAAAGACQAGABAFADIAJAHIAGAJIgSAJQgEgFgDgDQgGgDgIAAQgEAAgEABQgDADAAAEQAAAEAIAEIAQAFIAKAEQAEACAEAEQAEABACAFQACAGAAAHQAAAIgEAGQgCAHgHAFQgFADgHACQgHACgIAAQgFAAgIgCg");
	this.shape_31.setTransform(32.5,15.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#353535").s().p("AgWAyQgGgCgGgFQgFgDgDgHQgDgGAAgHQAAgIADgHQAEgFAFgCQAGgEAIgBQAHgCAJAAIAZAAIgBgJQgCgEgCgCQgDgDgEgCQgEgBgFAAQgGAAgGAFQgGAEgEAFIgTgOIAJgJQAEgFAGgCQAFgDAGgBQAGgBAFAAQALAAAIADQAIACAGAGQAGAFADAIQADAIAAAJIAAA8IgUAAIgDgOIgHAIIgHAFQgIADgJAAQgHAAgHgCgAgPALQgEAEAAAFQAAAFAEADQAFADAHAAQADAAAFgBIAJgGQADgDACgFQADgEAAgFIgXAAQgJAAgFAEg");
	this.shape_32.setTransform(22.4,15.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#353535").s().p("AgvBIIAAiPIBfAAIAAAYIhFAAIAAAkIBCAAIAAAWIhCAAIAAAkIBFAAIAAAZg");
	this.shape_33.setTransform(11.3,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.2,54.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ButtonTop();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136,37);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258,48);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Logopngcopy();
	this.instance.setTransform(0,0,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194.7,30.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(200,1,1).p("EAyCAAAQAAUuuqOqQuqOq0uAAQ0tAAuquqQuquqAA0uQAA0tOquqQOquqUtAAQUuAAOqOqQOqOqAAUtg");
	this.shape.setTransform(320.3,320.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,840.6,840.6);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween15("synched",0);
	this.instance.setTransform(158.5,118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,317,236);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.setTransform(201.3,201.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,402.5,402.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween14("synched",0);
	this.instance.setTransform(68,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136,37);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(68,18.5,1,1,0,0,0,68,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136,37);


// stage content:
(lib.F1229_ConceptC_300x250_v5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Borders
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("A3YziMAuxAAAMAAAAnFMguxAAAg");
	this.shape.setTransform(150.3,125.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(655));

	// Layer 1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(145.1,55.9,0.9,0.9,0,0,0,97.4,15.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({alpha:1},9).wait(108).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(102).to({_off:false},0).to({alpha:1},9).wait(108).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(102).to({_off:false},0).to({alpha:1},9).wait(93).to({startPosition:0},0).wait(1));

	// Layer 18
	this.instance_1 = new lib.Symbol18("synched",0);
	this.instance_1.setTransform(148,120,1,1,0,0,0,112.1,27.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118).to({_off:false},0).to({alpha:0.801},8).wait(93).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(118).to({_off:false},0).to({alpha:0.801},8).wait(93).to({startPosition:0},0).to({alpha:0},5).to({_off:true},103).wait(16).to({_off:false},0).to({alpha:0.801},8).wait(78).to({startPosition:0},0).wait(1));

	// Layer 13
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.setTransform(149.1,204.1,0.79,0.79,0,0,0,129.1,24.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(138).to({_off:false},0).to({scaleX:1.15,scaleY:1.15},6,cjs.Ease.get(1)).to({regX:129,regY:24,scaleX:1,scaleY:1,x:149,y:204},5,cjs.Ease.get(1)).wait(70).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(138).to({_off:false,regX:129.1,regY:24.1,scaleX:0.79,scaleY:0.79,x:149.1,y:204.1,alpha:1},0).to({scaleX:1.15,scaleY:1.15},6,cjs.Ease.get(1)).to({regX:129,regY:24,scaleX:1,scaleY:1,x:149,y:204},5,cjs.Ease.get(1)).wait(70).to({startPosition:0},0).to({alpha:0},5).to({_off:true},1).wait(138).to({_off:false,regX:129.1,regY:24.1,scaleX:0.79,scaleY:0.79,x:149.1,y:204.1,alpha:1},0).to({scaleX:1.15,scaleY:1.15},6,cjs.Ease.get(1)).to({regX:129,regY:24,scaleX:1,scaleY:1,x:149,y:204},5,cjs.Ease.get(1)).wait(55).to({startPosition:0},0).wait(1));

	// Borders
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#424143").ss(1,1,1).p("EgyNgMLMBkbAAAIAAYWMgiCAAAMhCZAAAIAAngIAAjRg");
	this.shape_1.setTransform(235.5,-172.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(0.1,1,1).p("ALaShIAAq/MAkhAAAIKeAAMAAAAj3I2QAAIAAMKMhehAAAMAAAglCIQsAAIAAgMEAkJArZI4vAAIAA44Eg1Zg0RIAAjRIABAAEgpsALdIAAhmEgpsAShMA1GAAA");
	this.shape_2.setTransform(255.7,191.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("EgvJA+WMAAAglCIQtAAIAAgMInAAAIAAmFMggMAAAMAAAgtcIbeAAIAAzEIACAAIAAHgMBCZAAAIAALkMAi5AAAMAAAAouMgkgAAAIAAK/IAAq/MAkgAAAIKfAAMAAAAj3I2QAAI4vAAIAA44Mg1GAAAMA1GAAAIAAY4IYvAAIAAMKgA+cSQIAAhlgA8sP+MAu7AAAMAAAgnGMgu7AAAgEAvZAyMgAWqZUgEAYRgl9MhCZAAAIAAngIAAjRIAAtnMBkbAAAIAAYYgEAYRgl9g");
	this.shape_3.setTransform(183.8,148.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},34).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},190).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},34).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},190).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},34).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},170).wait(1));

	// Hand
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(279.5,326.6);

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(257.5,210.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({startPosition:0},0).wait(1).to({x:278.4,y:320.7},0).wait(1).to({x:277.2,y:314.7},0).wait(1).to({x:276,y:308.4},0).wait(1).to({x:274.8,y:302},0).wait(1).to({x:273.6,y:295.5},0).wait(1).to({x:272.4,y:289},0).wait(1).to({x:271.2,y:282.7},0).wait(1).to({x:270,y:276.6},0).wait(1).to({x:268.9,y:270.9},0).wait(1).to({x:267.9,y:265.6},0).wait(1).to({x:267,y:260.7},0).wait(1).to({x:266.2,y:256.4},0).wait(1).to({x:265.5,y:252.5},0).wait(1).to({x:264.8,y:249},0).wait(1).to({x:264.2,y:246},0).wait(1).to({x:263.7,y:243.2},0).wait(1).to({x:263.2,y:240.5},0).wait(1).to({x:262.7,y:237.9},0).wait(1).to({x:262.3,y:235.6},0).wait(1).to({x:261.8,y:233.3},0).wait(1).to({x:261.4,y:231.2},0).wait(1).to({x:261.1,y:229.2},0).wait(1).to({x:260.7,y:227.2},0).wait(1).to({x:260.4,y:225.5},0).wait(1).to({x:260,y:223.8},0).wait(1).to({x:259.7,y:222.2},0).wait(1).to({x:259.5,y:220.7},0).wait(1).to({x:259.2,y:219.3},0).wait(1).to({x:259,y:218},0).wait(1).to({x:258.7,y:216.8},0).wait(1).to({x:258.5,y:215.7},0).wait(1).to({x:258.3,y:214.7},0).wait(1).to({x:258.1,y:213.7},0).wait(1).to({x:258,y:212.9},0).wait(1).to({x:257.9,y:212.2},0).wait(1).to({x:257.7,y:211.6},0).wait(1).to({x:257.6,y:211},0).wait(1).to({y:210.6},0).wait(1).to({x:257.5,y:210.3},0).wait(1).to({y:210.1},0).to({_off:true},1).wait(150).to({_off:false,x:279.5,y:326.6},0).wait(34).to({startPosition:0},0).wait(1).to({x:278.4,y:320.7},0).wait(1).to({x:277.2,y:314.7},0).wait(1).to({x:276,y:308.4},0).wait(1).to({x:274.8,y:302},0).wait(1).to({x:273.6,y:295.5},0).wait(1).to({x:272.4,y:289},0).wait(1).to({x:271.2,y:282.7},0).wait(1).to({x:270,y:276.6},0).wait(1).to({x:268.9,y:270.9},0).wait(1).to({x:267.9,y:265.6},0).wait(1).to({x:267,y:260.7},0).wait(1).to({x:266.2,y:256.4},0).wait(1).to({x:265.5,y:252.5},0).wait(1).to({x:264.8,y:249},0).wait(1).to({x:264.2,y:246},0).wait(1).to({x:263.7,y:243.2},0).wait(1).to({x:263.2,y:240.5},0).wait(1).to({x:262.7,y:237.9},0).wait(1).to({x:262.3,y:235.6},0).wait(1).to({x:261.8,y:233.3},0).wait(1).to({x:261.4,y:231.2},0).wait(1).to({x:261.1,y:229.2},0).wait(1).to({x:260.7,y:227.2},0).wait(1).to({x:260.4,y:225.5},0).wait(1).to({x:260,y:223.8},0).wait(1).to({x:259.7,y:222.2},0).wait(1).to({x:259.5,y:220.7},0).wait(1).to({x:259.2,y:219.3},0).wait(1).to({x:259,y:218},0).wait(1).to({x:258.7,y:216.8},0).wait(1).to({x:258.5,y:215.7},0).wait(1).to({x:258.3,y:214.7},0).wait(1).to({x:258.1,y:213.7},0).wait(1).to({x:258,y:212.9},0).wait(1).to({x:257.9,y:212.2},0).wait(1).to({x:257.7,y:211.6},0).wait(1).to({x:257.6,y:211},0).wait(1).to({y:210.6},0).wait(1).to({x:257.5,y:210.3},0).wait(1).to({y:210.1},0).to({_off:true},1).wait(150).to({_off:false,x:279.5,y:326.6},0).wait(34).to({startPosition:0},0).wait(1).to({x:278.4,y:320.7},0).wait(1).to({x:277.2,y:314.7},0).wait(1).to({x:276,y:308.4},0).wait(1).to({x:274.8,y:302},0).wait(1).to({x:273.6,y:295.5},0).wait(1).to({x:272.4,y:289},0).wait(1).to({x:271.2,y:282.7},0).wait(1).to({x:270,y:276.6},0).wait(1).to({x:268.9,y:270.9},0).wait(1).to({x:267.9,y:265.6},0).wait(1).to({x:267,y:260.7},0).wait(1).to({x:266.2,y:256.4},0).wait(1).to({x:265.5,y:252.5},0).wait(1).to({x:264.8,y:249},0).wait(1).to({x:264.2,y:246},0).wait(1).to({x:263.7,y:243.2},0).wait(1).to({x:263.2,y:240.5},0).wait(1).to({x:262.7,y:237.9},0).wait(1).to({x:262.3,y:235.6},0).wait(1).to({x:261.8,y:233.3},0).wait(1).to({x:261.4,y:231.2},0).wait(1).to({x:261.1,y:229.2},0).wait(1).to({x:260.7,y:227.2},0).wait(1).to({x:260.4,y:225.5},0).wait(1).to({x:260,y:223.8},0).wait(1).to({x:259.7,y:222.2},0).wait(1).to({x:259.5,y:220.7},0).wait(1).to({x:259.2,y:219.3},0).wait(1).to({x:259,y:218},0).wait(1).to({x:258.7,y:216.8},0).wait(1).to({x:258.5,y:215.7},0).wait(1).to({x:258.3,y:214.7},0).wait(1).to({x:258.1,y:213.7},0).wait(1).to({x:258,y:212.9},0).wait(1).to({x:257.9,y:212.2},0).wait(1).to({x:257.7,y:211.6},0).wait(1).to({x:257.6,y:211},0).wait(1).to({y:210.6},0).wait(1).to({x:257.5,y:210.3},0).wait(1).to({y:210.1},0).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).wait(1).to({startPosition:0},0).to({y:215.6},4).to({y:210.1},4).wait(1).to({x:257.9,y:210.8},0).wait(1).to({x:258.4,y:211.7},0).wait(1).to({x:259,y:212.8},0).wait(1).to({x:259.7,y:213.9},0).wait(1).to({x:260.4,y:215.2},0).wait(1).to({x:261.3,y:216.6},0).wait(1).to({x:262.2,y:218.1},0).wait(1).to({x:263.2,y:219.8},0).wait(1).to({x:264.2,y:221.7},0).wait(1).to({x:265.4,y:223.7},0).wait(1).to({x:266.7,y:225.9},0).wait(1).to({x:268.1,y:228.3},0).wait(1).to({x:269.6,y:230.9},0).wait(1).to({x:271.3,y:233.7},0).wait(1).to({x:273,y:236.7},0).wait(1).to({x:274.8,y:239.9},0).wait(1).to({x:276.8,y:243.2},0).wait(1).to({x:278.9,y:246.8},0).wait(1).to({x:281.1,y:250.5},0).wait(1).to({x:283.1,y:254},0).wait(1).to({x:285.1,y:257.4},0).wait(1).to({x:287.1,y:260.9},0).wait(1).to({x:289.3,y:264.6},0).wait(1).to({x:291.7,y:268.7},0).wait(1).to({x:294.3,y:273.2},0).wait(1).to({x:297.2,y:278.2},0).wait(1).to({x:300.6,y:284},0).wait(1).to({x:304.3,y:290.4},0).wait(1).to({x:308.5,y:297.6},0).wait(1).to({x:313,y:305.3},0).wait(1).to({x:317.7,y:313.4},0).wait(1).to({x:322.6,y:321.7},0).wait(1).to({x:327.5,y:330.1},0).wait(107).to({startPosition:0},0).to({_off:true},1).wait(75).to({_off:false,x:257.5,y:210.1},0).wait(1).to({startPosition:0},0).to({y:215.6},4).to({y:210.1},4).wait(1).to({x:257.9,y:210.8},0).wait(1).to({x:258.4,y:211.7},0).wait(1).to({x:258.9,y:212.6},0).wait(1).to({x:259.5,y:213.6},0).wait(1).to({x:260.1,y:214.7},0).wait(1).to({x:260.8,y:215.8},0).wait(1).to({x:261.6,y:217.1},0).wait(1).to({x:262.4,y:218.5},0).wait(1).to({x:263.2,y:219.9},0).wait(1).to({x:264.1,y:221.5},0).wait(1).to({x:265.1,y:223.2},0).wait(1).to({x:266.2,y:225},0).wait(1).to({x:267.3,y:226.9},0).wait(1).to({x:268.5,y:229.1},0).wait(1).to({x:269.9,y:231.3},0).wait(1).to({x:271.3,y:233.8},0).wait(1).to({x:272.8,y:236.4},0).wait(1).to({x:274.5,y:239.3},0).wait(1).to({x:276.3,y:242.4},0).wait(1).to({x:278.3,y:245.7},0).wait(1).to({x:280.4,y:249.4},0).wait(1).to({x:282.6,y:253.2},0).wait(1).to({x:284.8,y:257},0).wait(1).to({x:287,y:260.8},0).wait(1).to({x:289.3,y:264.7},0).wait(1).to({x:291.7,y:268.8},0).wait(1).to({x:294.5,y:273.6},0).wait(1).to({x:297.7,y:279.1},0).wait(1).to({x:301.7,y:285.9},0).wait(1).to({x:306.5,y:294.1},0).wait(1).to({x:312.4,y:304.2},0).wait(1).to({x:319.4,y:316.2},0).wait(1).to({x:327.5,y:330.1},0).wait(107).to({startPosition:0},0).to({_off:true},1).wait(75).to({_off:false,x:257.5,y:210.1},0).wait(1).to({startPosition:0},0).to({y:215.6},4).to({y:210.1},4).wait(1).to({x:257.9,y:210.8},0).wait(1).to({x:258.4,y:211.7},0).wait(1).to({x:258.9,y:212.6},0).wait(1).to({x:259.5,y:213.6},0).wait(1).to({x:260.1,y:214.7},0).wait(1).to({x:260.8,y:215.8},0).wait(1).to({x:261.6,y:217.1},0).wait(1).to({x:262.4,y:218.5},0).wait(1).to({x:263.2,y:219.9},0).wait(1).to({x:264.1,y:221.5},0).wait(1).to({x:265.1,y:223.2},0).wait(1).to({x:266.2,y:225},0).wait(1).to({x:267.3,y:226.9},0).wait(1).to({x:268.5,y:229.1},0).wait(1).to({x:269.9,y:231.3},0).wait(1).to({x:271.3,y:233.8},0).wait(1).to({x:272.8,y:236.4},0).wait(1).to({x:274.5,y:239.3},0).wait(1).to({x:276.3,y:242.4},0).wait(1).to({x:278.3,y:245.7},0).wait(1).to({x:280.4,y:249.4},0).wait(1).to({x:282.6,y:253.2},0).wait(1).to({x:284.8,y:257},0).wait(1).to({x:287,y:260.8},0).wait(1).to({x:289.3,y:264.7},0).wait(1).to({x:291.7,y:268.8},0).wait(1).to({x:294.5,y:273.6},0).wait(1).to({x:297.7,y:279.1},0).wait(1).to({x:301.7,y:285.9},0).wait(1).to({x:306.5,y:294.1},0).wait(1).to({x:312.4,y:304.2},0).wait(1).to({x:319.4,y:316.2},0).wait(1).to({x:327.5,y:330.1},0).wait(87).to({startPosition:0},0).wait(1));

	// White copy
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(200,1,1).p("EAyCAAAQAAUuuqOqQuqOq0uAAQ0tAAuquqQuquqAA0uQAA0tOquqQOquqUtAAQUuAAOqOqQOqOqAAUtg");
	this.shape_4.setTransform(149.5,157.3);

	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(146.9,160.4,1,1,0,0,0,320.2,320.2);

	this.instance_6 = new lib.Tween9("synched",0);
	this.instance_6.setTransform(149.5,157.2,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},83).to({state:[{t:this.instance_6},{t:this.instance_5}]},141).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},83).to({state:[{t:this.instance_6},{t:this.instance_5}]},141).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},83).to({state:[{t:this.instance_6},{t:this.instance_5}]},121).wait(1));

	// text
	this.instance_7 = new lib.Deletelatefeesfromyourlife();
	this.instance_7.setTransform(73.1,66.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(224).to({x:73.6},0).wait(1).to({x:73.1},0).wait(224).to({x:73.6},0).wait(1).to({x:73.1},0).wait(204).to({x:73.6},0).wait(1));

	// Layer 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_76 = new cjs.Graphics().p("A42Y3QqTqVAAuiQAAuhKTqVQKVqTOhAAQOiAAKVKTQKTKVAAOhQAAOiqTKVQqVKTuiAAQuhAAqVqTg");
	var mask_graphics_77 = new cjs.Graphics().p("A26W7QpfpiAAtZQAAtYJfpiQJipfNYAAQNZAAJiJfQJfJiAANYQAANZpfJiQpiJftZAAQtYAApipfg");
	var mask_graphics_78 = new cjs.Graphics().p("A1CVDQouowAAsTQAAsSIuowQIwouMSAAQMTAAIwIuQIuIwAAMSQAAMTouIwQowIusTAAQsSAAowoug");
	var mask_graphics_79 = new cjs.Graphics().p("AzQTRQn+oBAArQQAArPH+oBQIBn+LPAAQLQAAIBH+QH+IBAALPQAALQn+IBQoBH+rQAAQrPAAoBn+g");
	var mask_graphics_80 = new cjs.Graphics().p("AxiRjQnRnTAAqQQAAqPHRnTQHTnRKPAAQKQAAHTHRQHRHTAAKPQAAKQnRHTQnTHRqQAAQqPAAnTnRg");
	var mask_graphics_81 = new cjs.Graphics().p("AvnQ4QmmmnAApUQAApSGmmnQGnmmJSAAQJUAAGoGmQGmGnAAJSQAAJUmmGnQmoGmpUAAQpSAAmnmmg");
	var mask_graphics_82 = new cjs.Graphics().p("As+QbQl8l+AAoaQAAoYF8l+QF/l9IYAAQIaAAF+F9QF8F+AAIYQAAIal8F+Ql+F9oaAAQoYAAl/l9g");
	var mask_graphics_83 = new cjs.Graphics().p("AqdQAQlWlXAAnjQAAnhFWlXQFXlWHhAAQHjAAFXFWQFWFXAAHhQAAHjlWFXQlXFWnjAAQnhAAlXlWg");
	var mask_graphics_84 = new cjs.Graphics().p("AoFPmQkxkyAAmvQAAmtExkyQEykxGtAAQGvAAEyExQExEyAAGtQAAGvkxEyQkyExmvAAQmtAAkykxg");
	var mask_graphics_85 = new cjs.Graphics().p("Al2PNQkOkPAAl+QAAl8EOkPQEQkOF7AAQF+AAEPEOQEPEPAAF8QAAF+kPEPQkPEOl+AAQl7AAkQkOg");
	var mask_graphics_86 = new cjs.Graphics().p("AjvO2QjujvAAlPQAAlQDujsQDujuFOAAQFQAADuDuQDuDsAAFQQAAFPjuDvQjuDulQAAQlOAAjujug");
	var mask_graphics_87 = new cjs.Graphics().p("AhxOgQjPjQAAkkQAAklDPjNQDOjQEkAAQElAADQDQQDPDNAAElQAAEkjPDQQjQDPklAAQkkAAjOjPg");
	var mask_graphics_88 = new cjs.Graphics().p("AACOMQixizAAj8QAAj9CxizQCzixD9AAQD8AAC0CxQCyCzAAD9QAAD8iyCzQi0Czj8AAQj9AAizizg");
	var mask_graphics_89 = new cjs.Graphics().p("ABvN6QiXiZAAjYQAAjXCXiZQCZiYDXAAQDXAACZCYQCYCZAADXQAADYiYCZQiZCYjXAAQjXAAiZiYg");
	var mask_graphics_90 = new cjs.Graphics().p("ADTNoQiBiAAAi1QAAi1CBiBQCAiAC1AAQC1AACBCAQCACBAAC1QAAC1iACAQiBCBi1AAQi1AAiAiBg");
	var mask_graphics_91 = new cjs.Graphics().p("AEuNZQhqhrAAiVQAAiWBqhrQBqhqCWAAQCWAABqBqQBqBrAACWQAACVhqBrQhqBqiWAAQiWAAhqhqg");
	var mask_graphics_92 = new cjs.Graphics().p("AGANLQhWhXAAh5QAAh6BWhWQBXhWB5AAQB6AABWBWQBWBWAAB6QAAB5hWBXQhWBWh6AAQh5AAhXhWg");
	var mask_graphics_93 = new cjs.Graphics().p("AHKM+QhEhEAAhhQAAhgBEhEQBEhEBhAAQBgAABEBEQBEBEAABgQAABhhEBEQhEBEhgAAQhhAAhEhEg");
	var mask_graphics_94 = new cjs.Graphics().p("AILMzQg0g1AAhKQAAhKA0g0QA1g0BKAAQBKAAA0A0QA0A0AABKQAABKg0A1Qg0A0hKAAQhKAAg1g0g");
	var mask_graphics_95 = new cjs.Graphics().p("AJEMpQgngnAAg2QAAg3AngnQAmgmA3AAQA3AAAmAmQAnAnAAA3QAAA2gnAnQgmAng3AAQg3AAgmgng");
	var mask_graphics_96 = new cjs.Graphics().p("AJzMhQgbgbAAgmQAAgnAbgbQAcgbAmAAQAmAAAbAbQAbAbAAAnQAAAmgbAbQgbAbgmAAQgmAAgcgbg");
	var mask_graphics_97 = new cjs.Graphics().p("AKbMaQgSgRAAgZQAAgZASgSQARgRAZAAQAZAAARARQASASAAAZQAAAZgSARQgRASgZAAQgZAAgRgSg");
	var mask_graphics_98 = new cjs.Graphics().p("AK5MVQgKgKAAgPQAAgOAKgKQAKgLAPAAQAOAAAKALQAKAKAAAOQAAAPgKAKQgKAKgOAAQgPAAgKgKg");
	var mask_graphics_99 = new cjs.Graphics().p("ALPMRQgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAEAFQAFAFAAAHQAAAHgFAFQgEAFgHAAQgHAAgFgFg");
	var mask_graphics_100 = new cjs.Graphics().p("ALcMPQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	var mask_graphics_101 = new cjs.Graphics().p("ALgMOIgBgCIABgBIACgBIACABIAAABIAAACIgCABIgCgBg");
	var mask_graphics_224 = new cjs.Graphics().p("ALgMOIgBgCIABgBIACgBIACABIAAABIAAACIgCABIgCgBg");
	var mask_graphics_301 = new cjs.Graphics().p("A42Y3QqTqVAAuiQAAuhKTqVQKVqTOhAAQOiAAKVKTQKTKVAAOhQAAOiqTKVQqVKTuiAAQuhAAqVqTg");
	var mask_graphics_302 = new cjs.Graphics().p("A26W7QpfpiAAtZQAAtYJfpiQJipfNYAAQNZAAJiJfQJfJiAANYQAANZpfJiQpiJftZAAQtYAApipfg");
	var mask_graphics_303 = new cjs.Graphics().p("A1CVDQouowAAsTQAAsSIuowQIwouMSAAQMTAAIwIuQIuIwAAMSQAAMTouIwQowIusTAAQsSAAowoug");
	var mask_graphics_304 = new cjs.Graphics().p("AzQTRQn+oBAArQQAArPH+oBQIBn+LPAAQLQAAIBH+QH+IBAALPQAALQn+IBQoBH+rQAAQrPAAoBn+g");
	var mask_graphics_305 = new cjs.Graphics().p("AxiRjQnRnTAAqQQAAqPHRnTQHTnRKPAAQKQAAHTHRQHRHTAAKPQAAKQnRHTQnTHRqQAAQqPAAnTnRg");
	var mask_graphics_306 = new cjs.Graphics().p("AvnQ4QmmmnAApUQAApSGmmnQGnmmJSAAQJUAAGoGmQGmGnAAJSQAAJUmmGnQmoGmpUAAQpSAAmnmmg");
	var mask_graphics_307 = new cjs.Graphics().p("As+QbQl8l+AAoaQAAoYF8l+QF/l9IYAAQIaAAF+F9QF8F+AAIYQAAIal8F+Ql+F9oaAAQoYAAl/l9g");
	var mask_graphics_308 = new cjs.Graphics().p("AqdQAQlWlXAAnjQAAnhFWlXQFXlWHhAAQHjAAFXFWQFWFXAAHhQAAHjlWFXQlXFWnjAAQnhAAlXlWg");
	var mask_graphics_309 = new cjs.Graphics().p("AoFPmQkxkyAAmvQAAmtExkyQEykxGtAAQGvAAEyExQExEyAAGtQAAGvkxEyQkyExmvAAQmtAAkykxg");
	var mask_graphics_310 = new cjs.Graphics().p("Al2PNQkOkPAAl+QAAl8EOkPQEQkOF7AAQF+AAEPEOQEPEPAAF8QAAF+kPEPQkPEOl+AAQl7AAkQkOg");
	var mask_graphics_311 = new cjs.Graphics().p("AjvO2QjujvAAlPQAAlQDujsQDujuFOAAQFQAADuDuQDuDsAAFQQAAFPjuDvQjuDulQAAQlOAAjujug");
	var mask_graphics_312 = new cjs.Graphics().p("AhxOgQjPjQAAkkQAAklDPjNQDOjQEkAAQElAADQDQQDPDNAAElQAAEkjPDQQjQDPklAAQkkAAjOjPg");
	var mask_graphics_313 = new cjs.Graphics().p("AACOMQixizAAj8QAAj9CxizQCzixD9AAQD8AAC0CxQCyCzAAD9QAAD8iyCzQi0Czj8AAQj9AAizizg");
	var mask_graphics_314 = new cjs.Graphics().p("ABvN6QiXiZAAjYQAAjXCXiZQCZiYDXAAQDXAACZCYQCYCZAADXQAADYiYCZQiZCYjXAAQjXAAiZiYg");
	var mask_graphics_315 = new cjs.Graphics().p("ADTNoQiBiAAAi1QAAi1CBiBQCAiAC1AAQC1AACBCAQCACBAAC1QAAC1iACAQiBCBi1AAQi1AAiAiBg");
	var mask_graphics_316 = new cjs.Graphics().p("AEuNZQhqhrAAiVQAAiWBqhrQBqhqCWAAQCWAABqBqQBqBrAACWQAACVhqBrQhqBqiWAAQiWAAhqhqg");
	var mask_graphics_317 = new cjs.Graphics().p("AGANLQhWhXAAh5QAAh6BWhWQBXhWB5AAQB6AABWBWQBWBWAAB6QAAB5hWBXQhWBWh6AAQh5AAhXhWg");
	var mask_graphics_318 = new cjs.Graphics().p("AHKM+QhEhEAAhhQAAhgBEhEQBEhEBhAAQBgAABEBEQBEBEAABgQAABhhEBEQhEBEhgAAQhhAAhEhEg");
	var mask_graphics_319 = new cjs.Graphics().p("AILMzQg0g1AAhKQAAhKA0g0QA1g0BKAAQBKAAA0A0QA0A0AABKQAABKg0A1Qg0A0hKAAQhKAAg1g0g");
	var mask_graphics_320 = new cjs.Graphics().p("AJEMpQgngnAAg2QAAg3AngnQAmgmA3AAQA3AAAmAmQAnAnAAA3QAAA2gnAnQgmAng3AAQg3AAgmgng");
	var mask_graphics_321 = new cjs.Graphics().p("AJzMhQgbgbAAgmQAAgnAbgbQAcgbAmAAQAmAAAbAbQAbAbAAAnQAAAmgbAbQgbAbgmAAQgmAAgcgbg");
	var mask_graphics_322 = new cjs.Graphics().p("AKbMaQgSgRAAgZQAAgZASgSQARgRAZAAQAZAAARARQASASAAAZQAAAZgSARQgRASgZAAQgZAAgRgSg");
	var mask_graphics_323 = new cjs.Graphics().p("AK5MVQgKgKAAgPQAAgOAKgKQAKgLAPAAQAOAAAKALQAKAKAAAOQAAAPgKAKQgKAKgOAAQgPAAgKgKg");
	var mask_graphics_324 = new cjs.Graphics().p("ALPMRQgFgFAAgHQAAgHAFgFQAFgFAHAAQAHAAAEAFQAFAFAAAHQAAAHgFAFQgEAFgHAAQgHAAgFgFg");
	var mask_graphics_325 = new cjs.Graphics().p("ALcMPQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	var mask_graphics_326 = new cjs.Graphics().p("ALgMOIgBgCIABgBIACgBIACABIAAABIAAACIgCABIgCgBg");
	var mask_graphics_449 = new cjs.Graphics().p("ALgMOIgBgCIABgBIACgBIACABIAAABIAAACIgCABIgCgBg");
	var mask_graphics_526 = new cjs.Graphics().p("A42Y3QqTqVAAuiQAAuhKTqVQKVqTOhAAQOiAAKVKTQKTKVAAOhQAAOiqTKVQqVKTuiAAQuhAAqVqTg");
	var mask_graphics_527 = new cjs.Graphics().p("A21W2QpdpgAAtWQAAtVJdpgQJgpdNVAAQNWAAJgJdQJdJgAANVQAANWpdJgQpgJdtWAAQtVAApgpdg");
	var mask_graphics_528 = new cjs.Graphics().p("A04U5QoqorAAsOQAAsNIqorQIroqMNAAQMOAAIrIqQIqIrAAMNQAAMOoqIrQorIqsOAAQsNAAoroqg");
	var mask_graphics_529 = new cjs.Graphics().p("AzCTDQn4n7AArIQAArHH4n7QH7n4LHAAQLIAAH7H4QH4H7AALHQAALIn4H7Qn7H4rIAAQrHAAn7n4g");
	var mask_graphics_530 = new cjs.Graphics().p("AxQRSQnKnMAAqGQAAqFHKnLQHLnKKFAAQKGAAHLHKQHKHLAAKFQAAKGnKHMQnLHJqGAAQqFAAnLnJg");
	var mask_graphics_531 = new cjs.Graphics().p("AvDQyQmdmeAApIQAApGGdmeQGfmdJFgBQJIABGfGdQGdGeAAJGQAAJImdGeQmfGdpIAAQpFAAmfmdg");
	var mask_graphics_532 = new cjs.Graphics().p("AsVQUQlyl0AAoMQAAoKFyl0QF1lzIJAAQIMAAF1FzQFyF0AAIKQAAIMlyF0Ql1FzoMAAQoJAAl1lzg");
	var mask_graphics_533 = new cjs.Graphics().p("ApwP4QlLlMAAnUQAAnRFLlMQFMlLHSAAQHTAAFMFLQFLFMAAHRQAAHUlLFMQlMFLnTAAQnSAAlMlLg");
	var mask_graphics_534 = new cjs.Graphics().p("AnUPdQklkmAAmeQAAmcElknQEmklGcAAQGeAAEnElQElEnAAGcQAAGeklEmQknElmeAAQmcAAkmklg");
	var mask_graphics_535 = new cjs.Graphics().p("AlCPEQkCkDAAlsQAAlqECkDQEDkBFqAAQFsAAEDEBQEBEDAAFqQAAFskBEDQkDEClsAAQlqAAkDkCg");
	var mask_graphics_536 = new cjs.Graphics().p("Ai6OtQjgjiAAk9QAAk9DgjgQDgjgE9AAQE+AADhDgQDhDgAAE9QAAE9jhDiQjhDgk+AAQk9AAjgjgg");
	var mask_graphics_537 = new cjs.Graphics().p("Ag6OXQjCjDAAkRQAAkSDCjBQDAjBESAAQESAADCDBQDCDBAAESQAAERjCDDQjCDCkSAAQkSAAjAjCg");
	var mask_graphics_538 = new cjs.Graphics().p("AA5ODQijimAAjqQAAjpCjimQCmijDqAAQDpAACmCjQClCmAADpQAADqilCmQimCljpAAQjqAAimilg");
	var mask_graphics_539 = new cjs.Graphics().p("ACmNwQiLiLAAjFQAAjECLiLQCLiLDFAAQDEAACLCLQCLCLAADEQAADFiLCLQiLCLjEAAQjFAAiLiLg");
	var mask_graphics_540 = new cjs.Graphics().p("AEJNfQhzhzAAijQAAiiBzhzQBzhzCjAAQCiAABzBzQBzBzAACiQAACjhzBzQhzBziiAAQijAAhzhzg");
	var mask_graphics_541 = new cjs.Graphics().p("AFiNQQhdheAAiEQAAiDBdheQBehdCEAAQCDAABeBdQBdBeAACDQAACEhdBeQheBdiDAAQiEAAhehdg");
	var mask_graphics_542 = new cjs.Graphics().p("AGyNCQhJhKAAhoQAAhpBJhKQBLhKBoAAQBoAABKBKQBKBKAABpQAABohKBKQhKBKhoAAQhoAAhLhKg");
	var mask_graphics_543 = new cjs.Graphics().p("AH5M2Qg5g5AAhQQAAhQA5g5QA5g5BQAAQBQAAA5A5QA5A5AABQQAABQg5A5Qg5A5hQAAQhQAAg5g5g");
	var mask_graphics_544 = new cjs.Graphics().p("AI2MrQgpgqAAg7QAAg7ApgqQAqgqA7AAQA8AAAqAqQApAqAAA7QAAA7gpAqQgqAqg8AAQg7AAgqgqg");
	var mask_graphics_545 = new cjs.Graphics().p("AJqMiQgdgdAAgpQAAgqAdgdQAegdApAAQApAAAeAdQAdAdAAAqQAAApgdAdQgeAegpAAQgpAAgegeg");
	var mask_graphics_546 = new cjs.Graphics().p("AKVMbQgTgTAAgbQAAgbATgTQATgTAbAAQAaAAATATQATATAAAbQAAAbgTATQgTATgaAAQgbAAgTgTg");
	var mask_graphics_547 = new cjs.Graphics().p("AK2MWQgLgMAAgPQAAgQALgLQALgLAPAAQAQAAALALQALALAAAQQAAAPgLAMQgLALgQAAQgPAAgLgLg");
	var mask_graphics_548 = new cjs.Graphics().p("ALNMSQgFgGAAgHQAAgIAFgFQAFgFAIAAQAHAAAGAFQAFAFAAAIQAAAHgFAGQgGAFgHAAQgIAAgFgFg");
	var mask_graphics_549 = new cjs.Graphics().p("ALbMPQAAAAgBgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBg");
	var mask_graphics_550 = new cjs.Graphics().p("ALgMOIgBgCIABgBIACgBIACABIAAABIAAACIgCABIgCgBg");
	var mask_graphics_654 = new cjs.Graphics().p("ALgMOIgBgCIABgBIACgBIACABIAAABIAAACIgCABIgCgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(76).to({graphics:mask_graphics_76,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_77,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_78,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_79,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_80,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_81,x:146,y:150.3}).wait(1).to({graphics:mask_graphics_82,x:139,y:143.3}).wait(1).to({graphics:mask_graphics_83,x:132.3,y:136.6}).wait(1).to({graphics:mask_graphics_84,x:126,y:130.3}).wait(1).to({graphics:mask_graphics_85,x:120.1,y:124.4}).wait(1).to({graphics:mask_graphics_86,x:114.5,y:118.8}).wait(1).to({graphics:mask_graphics_87,x:109.3,y:113.6}).wait(1).to({graphics:mask_graphics_88,x:104.5,y:108.7}).wait(1).to({graphics:mask_graphics_89,x:100,y:104.2}).wait(1).to({graphics:mask_graphics_90,x:95.8,y:100.1}).wait(1).to({graphics:mask_graphics_91,x:92.1,y:96.3}).wait(1).to({graphics:mask_graphics_92,x:88.6,y:92.9}).wait(1).to({graphics:mask_graphics_93,x:85.6,y:89.9}).wait(1).to({graphics:mask_graphics_94,x:82.9,y:87.2}).wait(1).to({graphics:mask_graphics_95,x:80.5,y:84.8}).wait(1).to({graphics:mask_graphics_96,x:78.6,y:82.8}).wait(1).to({graphics:mask_graphics_97,x:77,y:81.2}).wait(1).to({graphics:mask_graphics_98,x:75.7,y:80}).wait(1).to({graphics:mask_graphics_99,x:74.8,y:79.1}).wait(1).to({graphics:mask_graphics_100,x:74.3,y:78.5}).wait(1).to({graphics:mask_graphics_101,x:74.1,y:78.3}).wait(123).to({graphics:mask_graphics_224,x:74.1,y:78.3}).wait(1).to({graphics:null,x:0,y:0}).wait(76).to({graphics:mask_graphics_301,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_302,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_303,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_304,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_305,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_306,x:146,y:150.3}).wait(1).to({graphics:mask_graphics_307,x:139,y:143.3}).wait(1).to({graphics:mask_graphics_308,x:132.3,y:136.6}).wait(1).to({graphics:mask_graphics_309,x:126,y:130.3}).wait(1).to({graphics:mask_graphics_310,x:120.1,y:124.4}).wait(1).to({graphics:mask_graphics_311,x:114.5,y:118.8}).wait(1).to({graphics:mask_graphics_312,x:109.3,y:113.6}).wait(1).to({graphics:mask_graphics_313,x:104.5,y:108.7}).wait(1).to({graphics:mask_graphics_314,x:100,y:104.2}).wait(1).to({graphics:mask_graphics_315,x:95.8,y:100.1}).wait(1).to({graphics:mask_graphics_316,x:92.1,y:96.3}).wait(1).to({graphics:mask_graphics_317,x:88.6,y:92.9}).wait(1).to({graphics:mask_graphics_318,x:85.6,y:89.9}).wait(1).to({graphics:mask_graphics_319,x:82.9,y:87.2}).wait(1).to({graphics:mask_graphics_320,x:80.5,y:84.8}).wait(1).to({graphics:mask_graphics_321,x:78.6,y:82.8}).wait(1).to({graphics:mask_graphics_322,x:77,y:81.2}).wait(1).to({graphics:mask_graphics_323,x:75.7,y:80}).wait(1).to({graphics:mask_graphics_324,x:74.8,y:79.1}).wait(1).to({graphics:mask_graphics_325,x:74.3,y:78.5}).wait(1).to({graphics:mask_graphics_326,x:74.1,y:78.3}).wait(123).to({graphics:mask_graphics_449,x:74.1,y:78.3}).wait(1).to({graphics:null,x:0,y:0}).wait(76).to({graphics:mask_graphics_526,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_527,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_528,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_529,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_530,x:147.9,y:156.4}).wait(1).to({graphics:mask_graphics_531,x:144.5,y:148.8}).wait(1).to({graphics:mask_graphics_532,x:137.3,y:141.6}).wait(1).to({graphics:mask_graphics_533,x:130.5,y:134.7}).wait(1).to({graphics:mask_graphics_534,x:124,y:128.3}).wait(1).to({graphics:mask_graphics_535,x:118,y:122.2}).wait(1).to({graphics:mask_graphics_536,x:112.3,y:116.6}).wait(1).to({graphics:mask_graphics_537,x:107.1,y:111.3}).wait(1).to({graphics:mask_graphics_538,x:102.2,y:106.4}).wait(1).to({graphics:mask_graphics_539,x:97.7,y:102}).wait(1).to({graphics:mask_graphics_540,x:93.6,y:97.9}).wait(1).to({graphics:mask_graphics_541,x:89.9,y:94.2}).wait(1).to({graphics:mask_graphics_542,x:86.6,y:90.8}).wait(1).to({graphics:mask_graphics_543,x:83.6,y:87.9}).wait(1).to({graphics:mask_graphics_544,x:81.1,y:85.4}).wait(1).to({graphics:mask_graphics_545,x:79,y:83.2}).wait(1).to({graphics:mask_graphics_546,x:77.2,y:81.5}).wait(1).to({graphics:mask_graphics_547,x:75.8,y:80.1}).wait(1).to({graphics:mask_graphics_548,x:74.9,y:79.1}).wait(1).to({graphics:mask_graphics_549,x:74.3,y:78.5}).wait(1).to({graphics:mask_graphics_550,x:74.1,y:78.3}).wait(104).to({graphics:mask_graphics_654,x:74.1,y:78.3}).wait(1));

	// Button
	this.instance_8 = new lib.ButtonTop();
	this.instance_8.setTransform(81.7,137.4,0.5,0.5);

	this.instance_9 = new lib.Tween3("synched",0);
	this.instance_9.setTransform(149.7,155.9);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.setTransform(149.7,159.4);
	this.instance_10._off = true;

	this.instance_11 = new lib.Symbol14("synched",0);
	this.instance_11.setTransform(149.7,155.9,1,1,0,0,0,68,18.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8}]},34).to({state:[{t:this.instance_9}]},42).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_9}]},140).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_8}]},28).to({state:[{t:this.instance_9}]},42).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_9}]},140).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_8}]},28).to({state:[{t:this.instance_9}]},42).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_9}]},120).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76).to({_off:false},0).to({_off:true,y:159.4},4).to({_off:false,y:155.9},4).wait(140).to({startPosition:0},0).to({_off:true},1).wait(76).to({_off:false},0).to({_off:true,y:159.4},4).to({_off:false,y:155.9},4).wait(140).to({startPosition:0},0).to({_off:true},1).wait(76).to({_off:false},0).to({_off:true,y:159.4},4).to({_off:false,y:155.9},4).wait(120).to({startPosition:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(76).to({_off:false},4).to({_off:true,y:155.9},4).wait(217).to({_off:false,y:159.4},4).to({_off:true,y:155.9},4).wait(217).to({_off:false,y:159.4},4).to({_off:true,y:155.9},4).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(225).to({_off:false},0).to({alpha:1},6).to({_off:true},28).wait(191).to({_off:false,alpha:0},0).to({alpha:1},6).to({_off:true},28).wait(171));

	// Button bottom
	this.instance_12 = new lib.Buttonbottompngcopy();
	this.instance_12.setTransform(81.9,141.5,0.5,0.5);

	this.instance_13 = new lib.Symbol15("synched",0);
	this.instance_13.setTransform(149.9,160,1,1,0,0,0,68,18.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_12.mask = this.instance_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(34).to({x:81.5},0).wait(190).to({_off:true},1).wait(34).to({_off:false},0).wait(190).to({x:81.9},0).to({_off:true},1).wait(34).to({_off:false,x:81.5},0).wait(170).to({x:81.9},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(225).to({_off:false},0).to({alpha:1},6).to({_off:true},28).wait(191).to({_off:false,alpha:0},0).to({alpha:1},6).to({_off:true},28).wait(171));

	// Gradient
	this.instance_14 = new lib.Gradientpngcopy();
	this.instance_14.setTransform(-8.5,14.2,0.53,0.5);

	this.instance_15 = new lib.Symbol17("synched",0);
	this.instance_15.setTransform(150,132.2,1,1,0,0,0,158.5,118);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_14.mask = this.instance_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(224).to({_off:true},1).wait(34).to({_off:false},0).wait(190).to({_off:true},1).wait(34).to({_off:false},0).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(225).to({_off:false},0).to({alpha:1},6).to({_off:true},28).wait(191).to({_off:false,alpha:0},0).to({alpha:1},6).to({_off:true},28).wait(171));

	// Green Bg
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1FAE4B").s().p("A2NWOQpOpNAAtBQAAtBJOpNQJNpNNAAAQNBAAJNJNQJOJNAANBQAANBpOJNQpNJOtBAAQtAAApNpOg");
	this.shape_5.setTransform(153,132.1);

	this.instance_16 = new lib.Symbol16("synched",0);
	this.instance_16.setTransform(153,132,1,1,0,0,0,201.2,201.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.shape_5.mask = this.instance_16.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(224).to({_off:true},1).wait(34).to({_off:false},0).wait(190).to({_off:true},1).wait(34).to({_off:false},0).wait(171));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(225).to({_off:false},0).to({alpha:1},6).to({_off:true},28).wait(191).to({_off:false,alpha:0},0).to({alpha:1},6).to({_off:true},28).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.7,-138,901.3,840.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;