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
		{src:"images/_123.png", id:"_123"},
		{src:"images/_2345.png", id:"_2345"},
		{src:"images/_567pngcopy2.png", id:"_567pngcopy2"},
		{src:"images/_789.png", id:"_789"},
		{src:"images/Barline.png", id:"Barline"},
		{src:"images/bargraph.png", id:"bargraph"},
		{src:"images/Bgnotext.jpg", id:"Bgnotext"},
		{src:"images/Cta.png", id:"Cta"},
		{src:"images/numbers.png", id:"numbers"},
		{src:"images/Phone3.png", id:"Phone3"}
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



(lib._123 = function() {
	this.initialize(img._123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,408);


(lib._2345 = function() {
	this.initialize(img._2345);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,520);


(lib._567pngcopy2 = function() {
	this.initialize(img._567pngcopy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,385);


(lib._789 = function() {
	this.initialize(img._789);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,387);


(lib.Barline = function() {
	this.initialize(img.Barline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,443,160);


(lib.bargraph = function() {
	this.initialize(img.bargraph);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,272);


(lib.Bgnotext = function() {
	this.initialize(img.Bgnotext);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.Cta = function() {
	this.initialize(img.Cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,537,80);


(lib.numbers = function() {
	this.initialize(img.numbers);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,1436);


(lib.Phone3 = function() {
	this.initialize(img.Phone3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,1198);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._789();
	this.instance.setTransform(-5.8,-24.1,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-24.1,11.8,48.3);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._789();
	this.instance.setTransform(-5.8,-24.1,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-24.1,11.8,48.3);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._567pngcopy2();
	this.instance.setTransform(-5.8,-24,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-24,11.8,48.1);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._567pngcopy2();
	this.instance.setTransform(-5.8,-24,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-24,11.8,48.1);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2345();
	this.instance.setTransform(-5.8,-32.5,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-32.5,11.8,65);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2345();
	this.instance.setTransform(-5.8,-32.5,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-32.5,11.8,65);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AgKArQgGgCgFgEIgIgIQgDgEgCgFIARgIQADAHADADQACADADABQADABADAAQAHAAAEgDQADgEAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgEgDIgOgFQgKgDgFgCQgDgDgCgDQgCgFAAgFQAAgHADgGQADgEAEgDQAFgEAFgCQAGgBADAAQAGAAAGABIAJAEIAHAHIAGAHIgQAJQgDgFgDgDQgEgDgHAAQgEAAgDACQgCACAAADQgBAEAIADIANAFIAIADQAEACADADIAGAFQABAEAAAHQAAAHgDAFQgCAGgFADQgGAEgGACQgGACgGAAQgEAAgHgCg");
	this.shape.setTransform(72.8,78.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgKA6QgDgBgBgFQgCgEAAgFIAAhpIAUAAIAABjQAAABAAAAQAAABAAABQABAAAAABQAAAAABAAQABACAEAAIAGgBIAAASQgJACgHAAQgIgBgDgDg");
	this.shape_1.setTransform(66.9,76.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgKA6QgDgBgBgFQgCgEAAgFIAAhpIAUAAIAABjQAAABAAAAQAAABAAABQAAAAABABQAAAAABAAQABACAEAAIAGgBIAAASQgJACgHAAQgIgBgDgDg");
	this.shape_2.setTransform(61.8,76.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgJA9IAAhWIATAAIAABWgAgKgoIAAgVIAVAAIAAAVg");
	this.shape_3.setTransform(56.4,76.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgHA8QgIgDgEgGIAAAJIgWAAIAAh6IAWAAIAAAtQAFgFAHgDQAFgCAGAAQAJAAAHAEQAHADAFAHQAFAGACAHQADAIAAAIQAAAKgDAIQgCAIgFAHQgFAGgHADQgHAEgJAAQgFAAgGgCgAgIgFQgEABgDAEQgDACAAAEQgCAFAAAFQAAAGACAFQAAAEADAEIAHAFQAEACAEAAQAEAAAFgCIAGgFIAEgIIABgLIgBgKQgCgEgCgCIgGgFQgFgCgEgBQgEABgEACg");
	this.shape_4.setTransform(49.4,76.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgdAsIAAhWIAVAAIAAALQAFgGADgDQAFgDAGAAIAKABIAJAEIgKASQgEgDgGAAQgEAAgEACQgCACgCAEQgDAEgCAFQgBAFAAAEIAAApg");
	this.shape_5.setTransform(36.3,78.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgVApQgGgDgEgGQgEgFgCgGQgBgHAAgIIAAgyIAVAAIAAAxQAAAJADAFQACACADABQACACAEAAQADAAAEgCQAEgBADgDIAFgHQACgEAAgDIAAgwIAVAAIAABWIgVAAIAAgKQgFAGgHADQgGADgGAAQgIAAgHgDg");
	this.shape_6.setTransform(26.7,78.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgRApQgIgDgHgHQgGgGgDgIQgDgIAAgJQAAgIADgIQADgIAGgHQAHgGAIgEQAJgDAIAAQAKAAAIADQAIAEAHAGQAGAHADAIQADAIAAAIQAAAJgDAIQgDAIgGAGQgHAHgIADQgIAEgKAAQgIAAgJgEgAgJgXQgEACgDAEQgDADgBAFQgBAFAAAEQAAAFABAFQABAEADAEQADAEAEACQAFACAEABQAFgBAFgCQAEgCADgEQADgEABgEQABgFAAgFQAAgEgBgFQgBgFgDgDQgDgEgEgCQgFgDgFABQgEgBgFADg");
	this.shape_7.setTransform(16.5,78.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgaA+IAQgoIgihUIAXAAIAVA9IAWg9IAXAAIgwB8g");
	this.shape_8.setTransform(6.7,80.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgNBEQgIgBgGgEQgHgDgEgGIgDgHIgBgIQAAgGACgEIAKgEQgFgEgDgGQgCgFAAgEQAAgGACgDIAHgJQgEgGAAgIQAAgHADgGQADgGAFgEQAFgEAGgCQAHgDAGAAQAHAAAIAEIAPgPIANARIgNAJIADAIQACAEAAAFQAAAIgDAGQgDAGgFAEQgFACgGACQgGACgHAAIgJgBIgIgDQgDAEAAACQAAAEAGACQAGABAKABQAKAAAIABQAHACAFADQAEADADAFQACAGAAAHQAAAHgDAGQgCAFgFADQgFAEgIACQgIACgKAAQgGAAgHgCgAgYAnQAAADADACQACADADABQAIAEAIAAQAMAAAFgCQAGgDAAgFQAAgFgFgCQgFgCgLAAIgRgBgAgJglQgEAEAAAHQAAAHAEAEQAEAEAFAAQAGAAAEgEQAEgEAAgHQAAgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_9.setTransform(51.1,58.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AASAsIAAgwQAAgJgDgEQgCgDgDgCQgCgBgFAAQgDAAgDACQgEABgDADIgFAHQgCAEAAAEIAAAuIgVAAIAAhWIAVAAIAAALQAGgGAHgDQAEgDAHAAQAIAAAHADQAGADAEAFQAEAFABAHQACAGAAAIIAAAyg");
	this.shape_10.setTransform(41,56.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgJA9IAAhWIATAAIAABWgAgKgoIAAgVIAVAAIAAAVg");
	this.shape_11.setTransform(33.4,55.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgaA+IAQgoIgihUIAXAAIAVA9IAWg9IAXAAIgwB8g");
	this.shape_12.setTransform(26.4,58.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgSArQgGgCgEgEQgFgDgCgFQgDgGAAgGQAAgHADgGQACgEAGgCQAEgCAHgCQAGgBAIAAIAVAAIgBgIQgBgDgCgCIgGgEIgIgBQgFAAgFADQgFAEgDAFIgRgMIAIgIIAIgGQAFgDAFgBQAFgBAEAAQAJAAAHADQAHACAFAFQAFAFADAGQACAHAAAIIAAAzIgQAAIgDgMIgGAHIgGAEQgHADgHAAQgGAAgGgCgAgMAKQgEADAAAEQAAAEAEADQAEADAGAAIAHgCQAEgBADgDIAFgHQACgEAAgEIgUAAQgHAAgEAEg");
	this.shape_13.setTransform(16.9,57);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgpA/IAAh8IAWAAIAAAJQAFgGAHgDQAGgBAFAAQAJgBAHAEQAHADAFAHQAFAGACAJQADAIAAAJQAAAJgDAIQgCAHgFAGQgFAGgHAEQgHAEgJAAQgFAAgHgCQgHgEgEgFIAAAvgAgJgqQgDACgDAFQgDADgBAFQgBAFAAAFQAAAGABAEQABAFADACIAGAFQAFACAEAAQAEAAAEgCQAEgCADgDIAEgHIABgKIgBgKIgEgIQgDgFgEgCQgEgBgEAAQgEAAgFABg");
	this.shape_14.setTransform(7.6,58.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgaA+IAQgoIgihUIAXAAIAVA9IAWg9IAXAAIgwB8g");
	this.shape_15.setTransform(87.1,37.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgHArIgJgCQgIgDgGgHQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgGQAFgHAIgDIAJgEIAIgBIALABIAJAEQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACADACADIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAGIgJAFIgJADIgLAAgAAUgHIgCgIQgBgDgDgCQgCgDgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAFgCAIIAmAAIAAAAg");
	this.shape_16.setTransform(77.8,35.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AASAsIAAgwQAAgJgDgEQgCgDgDgCQgCgBgFAAQgDAAgDACQgEABgDADIgFAHQgCAEAAAEIAAAuIgVAAIAAhWIAVAAIAAALQAGgGAHgDQAEgDAHAAQAIAAAHADQAGADAEAFQAEAFABAHQACAGAAAIIAAAyg");
	this.shape_17.setTransform(67.9,35.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgRApQgIgDgHgHQgGgGgDgIQgDgIAAgJQAAgIADgIQADgIAGgHQAHgGAIgEQAJgDAIAAQAKAAAIADQAIAEAHAGQAGAHADAIQADAIAAAIQAAAJgDAIQgDAIgGAGQgHAHgIADQgIAEgKAAQgIAAgJgEgAgJgXQgEACgDAEQgDADgBAFQgBAFAAAEQAAAFABAFQABAEADAEQADAEAEACQAFACAEABQAFgBAFgCQAEgCADgEQADgEABgEQABgFAAgFQAAgEgBgFQgBgFgDgDQgDgEgEgCQgFgDgFABQgEgBgFADg");
	this.shape_18.setTransform(57.4,35.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AArAsIAAgwQAAgJgDgFIgFgEQgDgBgDAAQgEAAgEABIgGAFIgDAHIgBAIIAAAuIgVAAIAAgwQAAgJgCgFIgFgEQgDgBgDAAQgFAAgDABIgGAFQgDADAAAEIgCAIIAAAuIgWAAIAAhWIAWAAIAAAKQAEgGAHgDQAEgCAHAAQAIAAAHADQAFAEADAGQAFgGAIgEQAHgDAJAAQAIAAAHADQAGADAEAFQAEAFACAHQACAGAAAIIAAAyg");
	this.shape_19.setTransform(45,35.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgTA6QgHgDgFgGQgFgHgCgIQgCgIAAgKQAAgIACgIQACgHAFgGQAFgHAHgDQAHgEAJAAQAFAAAHADQAGACAFAFIAAgtIAVAAIAAB6IgVAAIAAgJQgFAGgGADQgHACgFAAQgJAAgHgEgAgHgFQgEACgDADQgCACgBAEQgCAFAAAFQAAAGACAFQABAEACAEQADADAEACQAEACADAAQAFAAAFgCQAEgCACgDQACgDACgFQABgEAAgHQAAgFgBgFQgCgEgCgCQgCgEgEgBQgFgCgFgBQgDABgEACg");
	this.shape_20.setTransform(26.7,33.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AASAsIAAgwQAAgJgDgEQgCgDgDgCQgCgBgFAAQgDAAgDACQgEABgDADIgFAHQgCAEAAAEIAAAuIgVAAIAAhWIAVAAIAAALQAGgGAHgDQAEgDAHAAQAIAAAHADQAGADAEAFQAEAFABAHQACAGAAAIIAAAyg");
	this.shape_21.setTransform(16.7,35.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AgSArQgGgCgEgEQgFgDgCgFQgDgGAAgGQAAgHADgGQACgEAGgCQAEgCAHgCQAGgBAIAAIAVAAIgBgIQgBgDgCgCIgGgEIgIgBQgFAAgFADQgFAEgDAFIgRgMIAIgIIAIgGQAFgDAFgBQAFgBAEAAQAJAAAHADQAHACAFAFQAFAFADAGQACAHAAAIIAAAzIgQAAIgDgMIgGAHIgGAEQgHADgHAAQgGAAgGgCgAgMAKQgEADAAAEQAAAEAEADQAEADAGAAIAHgCQAEgBADgDIAFgHQACgEAAgEIgUAAQgHAAgEAEg");
	this.shape_22.setTransform(6.6,35.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353535").s().p("AgHArIgJgCQgIgDgGgHQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgGQAFgHAIgDIAJgEIAIgBIALABIAJAEQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACADACADIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAGIgJAFIgJADIgLAAgAAUgHIgCgIQgBgDgDgCQgCgDgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAFgCAIIAmAAIAAAAg");
	this.shape_23.setTransform(75.6,13.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353535").s().p("AArAsIAAgwQAAgJgDgFIgFgEQgCgBgFAAQgEAAgDABIgGAFIgEAHIgBAIIAAAuIgTAAIAAgwQAAgJgEgFIgEgEQgCgBgFAAQgEAAgEABIgFAFQgDADgBAEIgBAIIAAAuIgVAAIAAhWIAVAAIAAAKQAEgGAGgDQAGgCAGAAQAIAAAGADQAGAEADAGQAFgGAIgEQAHgDAJAAQAIAAAHADQAGADAEAFQADAFADAHQACAGgBAIIAAAyg");
	this.shape_24.setTransform(63.5,13.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353535").s().p("AgJA9IAAhWIATAAIAABWgAgKgoIAAgVIAVAAIAAAVg");
	this.shape_25.setTransform(53.3,12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353535").s().p("AABA9QgDgCgEgEQgEgCgBgGQgCgFAAgFIAAgrIgOAAIAAgTIAOAAIAAgVIATgQIAAAlIAWAAIAAATIgWAAIAAArQAAADACACQACABAFABQAHAAAGgEIAAAUQgGADgKAAQgGAAgFgCg");
	this.shape_26.setTransform(47.7,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353535").s().p("AgHArIgJgCQgIgDgGgHQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgGQAFgHAIgDIAJgEIAIgBIALABIAJAEQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACADACADIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAGIgJAFIgJADIgLAAgAAUgHIgCgIQgBgDgDgCQgCgDgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAFgCAIIAmAAIAAAAg");
	this.shape_27.setTransform(35.1,13.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#353535").s().p("AgIArIgjhWIAYAAIATA7IAVg7IAXAAIgkBWg");
	this.shape_28.setTransform(25.8,13.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#353535").s().p("AgSArQgGgCgEgEQgFgDgCgFQgDgGAAgGQAAgHADgGQACgEAGgCQAEgCAHgCQAGgBAIAAIAVAAIgBgIQgBgDgCgCIgGgEIgIgBQgFAAgFADQgFAEgDAFIgRgMIAIgIIAIgGQAFgDAFgBQAFgBAEAAQAJAAAHADQAHACAFAFQAFAFADAGQACAHAAAIIAAAzIgQAAIgDgMIgGAHIgGAEQgHADgHAAQgGAAgGgCgAgMAKQgEADAAAEQAAAEAEADQAEADAGAAIAHgCQAEgBADgDIAFgHQACgEAAgEIgUAAQgHAAgEAEg");
	this.shape_29.setTransform(16.4,13.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#353535").s().p("AgNA9QgHgCgHgFQgGgFgFgGQgFgHgBgJIAWgGQABAFACAEQACAEAEADQADADAEABQAFACADAAQAFAAAEgCIAGgDIAEgFIABgIQAAgDgCgEQgCgCgFgDIgTgJIgKgEQgHgDgDgEQgEgEgDgFQgCgGAAgHQAAgHADgHQADgGAFgEQAFgFAHgCQAHgCAGAAQAFAAAGABQAGABAEADIAJAHQAFAEADAGIgSALQgEgGgFgEQgGgDgFAAQgFAAgEAEQgFAEAAAFQAAAEACADIAHAFIATAIIALAGIAKAFQAEAFACAFQADAGAAAIQAAAIgEAHQgDAHgGAFQgGAFgHADQgIACgJAAQgHAAgIgCg");
	this.shape_30.setTransform(6.9,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,90.4);


(lib.Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Phone3();
	this.instance.setTransform(0,0,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.5,149.8);


(lib.nunbersright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.numbers();
	this.instance.setTransform(0,0,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.8,531.3);


(lib.Numbersmiddle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.numbers();
	this.instance.setTransform(0,0,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.8,531.3);


(lib.numbersmasktransition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._123();
	this.instance.setTransform(0,0,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.8,151);


(lib.Numbersleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.numbers();
	this.instance.setTransform(0,0,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.8,531.3);


(lib.GreyphoneBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424143").s().p("Ai5BaIAAi0IFzAAIAAC0g");
	this.shape.setTransform(18.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.3,18.2);


(lib.graphline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Barline();
	this.instance.setTransform(0,0,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.8,21.6);


(lib.CTAAA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.5,40);


(lib.Billspaid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgTAiQgHgIAAgPQABgMAGgJQAGgIAMAAQAJAAAGAJIABAAIgBgKIAAgWIAMAAIAABSIgJAAIgCgIIgBAAQgGAJgKAAQgLAAgGgIgAgJgCQgDADAAAKQAAAKADAFQAEAGAFAAQAHAAAEgFQADgEABgKIAAgCQgBgLgDgDQgEgEgHAAQgFAAgEAFg");
	this.shape.setTransform(46,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgFAoIAAg5IAKAAIAAA5gAgEgcQgBgCAAgCQAAgEABgCQACgBACgBQADABACABQABACAAAEQAAACgBACQgCADgDAAQgCAAgCgDg");
	this.shape_1.setTransform(41.3,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgSAaQgGgFAAgJQABgJAGgDQAHgEAMgBIAKAAIAAgDQAAgGgDgDQgCgDgGAAQgDAAgEACIgIADIgDgJQAEgDAGgBIAJgBQALAAAGAFQAGAFAAAKIAAAmIgJAAIgDgIIgBAAQgEAFgEACQgEACgFAAQgJAAgEgEgAAEABQgGABgFACQgDADAAAFQAAAEACADQACACAFAAQAFAAAEgEQAEgEAAgHIAAgFg");
	this.shape_2.setTransform(36.4,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgZAnIAAhNIAXAAQAMAAAIAGQAHAGAAAMQABAMgJAFQgIAGgMAAIgJAAIAAAegAgMAAIAHAAQAIAAAEgDQAFgDAAgIQAAgGgEgEQgEgDgHAAIgJAAg");
	this.shape_3.setTransform(30.3,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgUAbIAAgLQAKAFAJAAQAKAAAAgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgDIgGgEQgKgDgEgDQgDgEAAgGQAAgIAGgEQAGgEAIAAQALAAAJAEIgEAKQgJgEgHAAQgIAAAAAFQAAADADACIAJAFIALAEIAFAFQABADAAAEQAAAJgGAFQgHAEgJAAQgMAAgHgDg");
	this.shape_4.setTransform(21.1,10.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgFApIAAhRIALAAIAABRg");
	this.shape_5.setTransform(16.9,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgFApIAAhRIALAAIAABRg");
	this.shape_6.setTransform(13.8,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgFAoIAAg5IALAAIAAA5gAgEgcQgBgCgBgCQABgEABgCQACgBACgBQACABADABQACACAAAEQAAACgCACQgDADgCAAQgCAAgCgDg");
	this.shape_7.setTransform(10.8,9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgaAnIAAhNIAWAAQAPAAAHAFQAHAFABAKQgBAHgDAEQgEAFgHABIAAABQAJAAAEAEQADAEAAAIQABALgIAGQgHAGgNAAgAgOAcIAOAAQAGAAAEgDQAEgDAAgHQAAgGgEgDQgFgDgGAAIgNAAgAgOgFIANAAQAFAAAFgDQADgCAAgHQAAgFgEgDQgEgCgGAAIgMAAg");
	this.shape_8.setTransform(5.9,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.8,19);


(lib.Bgnotext_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bgnotext();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Bargraph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bargraph();
	this.instance.setTransform(0,0,0.43,0.43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.3,117);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Billspaid("synched",0);
	this.instance.setTransform(67.3,26.7,2.67,2.67,0,0,0,25.2,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.3,50.6);


(lib.PHONNEE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Phone("synched",0);
	this.instance.setTransform(139.7,238.6,3.19,3.19,0,0,0,43.8,74.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279.1,477.6);


// stage content:
(lib.F1229_ConceptD_300x250_v14 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("A3YziMAuxAAAMAAAAnFMguxAAAg");
	this.shape.setTransform(150.3,125.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(605));

	// Barline
	this.instance = new lib.graphline("synched",0);
	this.instance.setTransform(162.6,87,1,1,0,0,0,29.9,10.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(37).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(144).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(37).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(144).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).wait(37).to({startPosition:0},0).wait(1));

	// Text new
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.setTransform(64,131.6,1,1,0,0,0,47,45.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77).to({_off:false},0).to({y:116.6,alpha:1},38).wait(81).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).wait(78).to({y:131.6},0).to({y:116.6,alpha:1},38).wait(81).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).wait(78).to({y:131.6},0).to({y:116.6,alpha:1},38).wait(81).to({startPosition:0},0).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#424143").ss(1,1,1).p("EAyPgMLIAAYWEgyOAMLIAAloIAAgeIAAgWIABhEIAAjRIAAtl");
	this.shape_1.setTransform(235.4,-172.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#444444").ss(0.1,1,1).p("ALaShIAAq/MAkhAAAIKeAAMAAAAj3I2QAAIAAMKMhehAAAMAAAglCIQsAAIAAmSIAAiYEAkJArZI4vAAIAA44Eg1Zg0RIAAjRIABAAEgpsAShMA1GAAA");
	this.shape_2.setTransform(255.7,191.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#444444").s().p("EgvJBPyMAAAglCIQtAAIAAmRMgnMAAAMAAAgtcIbeAAIAArkMBkdAAAIAALkIA3AAMAAAAouMgkgAAAIAAK/IAAq/MAkgAAAIKfAAMAAAAj3I2QAAI4vAAIAA44Mg1GAAAMA1GAAAIAAY4IYvAAIAAMKgEgecAkfIAAiZgEgcsAhZMAu7AAAMAAAgnFMgu7AAAgEAvZBDogEAWqAqwgEA6TgUhMhkcgGdIABhEIAAjQIAAtnMAAAgi4MBkbAAAMAAAAi4IAAYYgEgqKgcCIACAAIgBBEgEgqIgcCg");
	this.shape_3.setTransform(183.8,36.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#444444").s().p("EgvJBPyMAAAglCIQtAAIAAmRIAAiZIAACZMgnMAAAMAAAgtcIbeAAIAArkMBkdAAAIAALkIA3AAMAAAAouMgkgAAAIAAK/IAAq/MAkgAAAIKfAAMAAAAj3I2QAAI4vAAIAA44Mg1GAAAMA1GAAAIAAY4IYvAAIAAMKgEgcsAhZMAu7AAAMAAAgnFMgu7AAAgEAvZBDogEA6TgUhMhkbgHhIAAjQIAAtnMAAAgi4MBkbAAAMAAAAi4IAAYYgEgqKgcCIACAAIgBBEIABhEIgBBEgEgqIgcCg");
	this.shape_4.setTransform(183.8,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},196).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_1}]},8).to({state:[{t:this.shape_4},{t:this.shape_2},{t:this.shape_1}]},196).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},8).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},196).wait(1));

	// Cta
	this.instance_2 = new lib.CTAAA("synched",0);
	this.instance_2.setTransform(150.2,223,1,1,0,0,0,134.2,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(196).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(196).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(196).to({startPosition:0},0).wait(1));

	// Bills Paid
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(147.4,112.2,1,1,0,0,0,69.2,25.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({startPosition:0},0).to({regX:69.5,regY:25.8,scaleX:0.31,scaleY:0.31,x:163.3,y:149},24,cjs.Ease.get(1)).wait(127).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).wait(1).to({regX:69.2,regY:25.3,scaleX:1,scaleY:1,x:147.4,y:112.2},0).wait(2).to({alpha:1},0).wait(43).to({startPosition:0},0).to({regX:69.5,regY:25.8,scaleX:0.31,scaleY:0.31,x:163.3,y:149},24,cjs.Ease.get(1)).wait(127).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).wait(1).to({regX:69.2,regY:25.3,scaleX:1,scaleY:1,x:147.4,y:112.2},0).wait(2).to({alpha:1},0).wait(43).to({startPosition:0},0).to({regX:69.5,regY:25.8,scaleX:0.31,scaleY:0.31,x:163.3,y:149},24,cjs.Ease.get(1)).wait(127).to({startPosition:0},0).wait(1));

	// Bar
	this.instance_4 = new lib.Bargraph("synched",0);
	this.instance_4.setTransform(148.8,-21.3,1,0.35,0,0,0,91.4,116.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).to({regX:92.5,regY:118.6,scaleX:0.31,scaleY:0.07,x:162.5,y:108.2,alpha:1},25,cjs.Ease.get(1)).to({regX:92.3,regY:117.8,scaleY:0.31},126,cjs.Ease.get(0.89)).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(45).to({_off:false,regX:91.4,regY:116.5,scaleX:1,scaleY:0.35,x:148.8,y:-21.3},0).to({regX:92.5,regY:118.6,scaleX:0.31,scaleY:0.07,x:162.5,y:108.2,alpha:1},25,cjs.Ease.get(1)).to({regX:92.3,regY:117.8,scaleY:0.31},126,cjs.Ease.get(0.89)).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(45).to({_off:false,regX:91.4,regY:116.5,scaleX:1,scaleY:0.35,x:148.8,y:-21.3},0).to({regX:92.5,regY:118.6,scaleX:0.31,scaleY:0.07,x:162.5,y:108.2,alpha:1},25,cjs.Ease.get(1)).to({regX:92.3,regY:117.8,scaleY:0.31},126,cjs.Ease.get(0.89)).wait(1));

	// Phone
	this.instance_5 = new lib.PHONNEE("synched",0);
	this.instance_5.setTransform(151.7,30.6,1,1,0,0,0,139.6,238.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({startPosition:0},0).to({regX:140.2,regY:239.1,scaleX:0.31,scaleY:0.31,x:163.5,y:125.1},24,cjs.Ease.get(1)).wait(5).to({startPosition:0},0).wait(122).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).wait(1).to({regX:139.6,regY:238.8,scaleX:1,scaleY:1,x:151.7,y:30.6},0).to({alpha:1},4,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({regX:140.2,regY:239.1,scaleX:0.31,scaleY:0.31,x:163.5,y:125.1},24,cjs.Ease.get(1)).wait(5).to({startPosition:0},0).wait(122).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).wait(1).to({regX:139.6,regY:238.8,scaleX:1,scaleY:1,x:151.7,y:30.6},0).to({alpha:1},4,cjs.Ease.get(1)).wait(41).to({startPosition:0},0).to({regX:140.2,regY:239.1,scaleX:0.31,scaleY:0.31,x:163.5,y:125.1},24,cjs.Ease.get(1)).wait(5).to({startPosition:0},0).wait(122).to({startPosition:0},0).wait(1));

	// Mask 3
	this.instance_6 = new lib._789();
	this.instance_6.setTransform(172.7,94.5,0.125,0.125);

	this.instance_7 = new lib.Tween9("synched",0);
	this.instance_7.setTransform(178.5,118.7);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween10("synched",0);
	this.instance_8.setTransform(178.5,134.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},158).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},7).to({state:[]},1).to({state:[{t:this.instance_6}]},158).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},7).to({state:[]},1).to({state:[{t:this.instance_6}]},158).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_8}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(168).to({_off:false},0).to({_off:true,y:134.6},9,cjs.Ease.get(1)).wait(195).to({_off:false,y:118.7},0).to({_off:true,y:134.6},9,cjs.Ease.get(1)).wait(195).to({_off:false,y:118.7},0).to({_off:true,y:134.6},9,cjs.Ease.get(1)).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(168).to({_off:false},9,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({y:150.6},9,cjs.Ease.get(1)).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(168).to({_off:false,y:134.6,alpha:1},9,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({y:150.6},9,cjs.Ease.get(1)).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(168).to({_off:false,y:134.6,alpha:1},9,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({y:150.6},9,cjs.Ease.get(1)).wait(1));

	// Mask4
	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.setTransform(178.5,119.3);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween8("synched",0);
	this.instance_10.setTransform(178.5,135.3);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(131).to({_off:false},0).to({_off:true,y:135.3},9,cjs.Ease.get(1)).wait(195).to({_off:false,y:119.3},0).to({_off:true,y:135.3},9,cjs.Ease.get(1)).wait(195).to({_off:false,y:119.3},0).to({_off:true,y:135.3},9,cjs.Ease.get(1)).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(131).to({_off:false},9,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({y:151.3},9,cjs.Ease.get(1)).to({_off:true},1).wait(176).to({_off:false,y:135.3},9,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({y:151.3},9,cjs.Ease.get(1)).to({_off:true},1).wait(176).to({_off:false,y:135.3},9,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({y:151.3},9,cjs.Ease.get(1)).to({_off:true},1).wait(38));

	// Mask 3
	this.instance_11 = new lib.Tween3("synched",0);
	this.instance_11.setTransform(178.5,110.8);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween4("synched",0);
	this.instance_12.setTransform(178.5,126.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(72).to({_off:false},0).to({startPosition:0},3,cjs.Ease.get(0.99)).to({_off:true,y:126.9},10,cjs.Ease.get(0.99)).wait(191).to({_off:false,y:110.8},0).to({startPosition:0},3,cjs.Ease.get(0.99)).to({_off:true,y:126.9},10,cjs.Ease.get(0.99)).wait(191).to({_off:false,y:110.8},0).to({startPosition:0},3,cjs.Ease.get(0.99)).to({_off:true,y:126.9},10,cjs.Ease.get(0.99)).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(75).to({_off:false},10,cjs.Ease.get(0.99)).wait(10).to({startPosition:0},0).to({y:143.1},9,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({y:159.1},9,cjs.Ease.get(1)).to({_off:true},10).wait(147).to({_off:false,y:126.9},10,cjs.Ease.get(0.99)).wait(10).to({startPosition:0},0).to({y:143.1},9,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({y:159.1},9,cjs.Ease.get(1)).to({_off:true},10).wait(147).to({_off:false,y:126.9},10,cjs.Ease.get(0.99)).wait(10).to({startPosition:0},0).to({y:143.1},9,cjs.Ease.get(1)).wait(9).to({startPosition:0},0).to({y:159.1},9,cjs.Ease.get(1)).to({_off:true},10).wait(65));

	// masknumber3
	this.instance_13 = new lib.numbersmasktransition("synched",0);
	this.instance_13.setTransform(204.3,66.4,1,1,0,0,0,17.4,75.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(45).to({_off:false},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:202.3,y:71.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:200.4,y:77.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:198.5,y:82.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:196.7,y:86.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:195,y:91.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:193.4,y:95.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:191.9,y:99.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:190.5,y:103.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:189.1,y:107.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:187.9,y:111},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:186.6,y:114.3},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:184.9,y:118.7},0).to({regX:17.7,regY:75.9,scaleX:0.35,scaleY:0.35,x:180,y:151.5},9,cjs.Ease.get(1)).to({regX:17.5,regY:75.6,scaleX:0.34,scaleY:0.34,x:178.6,y:152.1},4,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({_off:true},1).wait(176).to({_off:false,regX:17.4,regY:75.5,scaleX:1,scaleY:1,x:204.3,y:66.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:202.3,y:71.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:200.4,y:77.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:198.5,y:82.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:196.7,y:86.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:195,y:91.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:193.4,y:95.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:191.9,y:99.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:190.5,y:103.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:189.1,y:107.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:187.9,y:111},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:186.6,y:114.3},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:184.9,y:118.7},0).to({regX:17.7,regY:75.9,scaleX:0.35,scaleY:0.35,x:180,y:151.5},9,cjs.Ease.get(1)).to({regX:17.5,regY:75.6,scaleX:0.34,scaleY:0.34,x:178.6,y:152.1},4,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({_off:true},1).wait(176).to({_off:false,regX:17.4,regY:75.5,scaleX:1,scaleY:1,x:204.3,y:66.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:202.3,y:71.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:200.4,y:77.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:198.5,y:82.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:196.7,y:86.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:195,y:91.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:193.4,y:95.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:191.9,y:99.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:190.5,y:103.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:189.1,y:107.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:187.9,y:111},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:186.6,y:114.3},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:184.9,y:118.7},0).to({regX:17.7,regY:75.9,scaleX:0.35,scaleY:0.35,x:180,y:151.5},9,cjs.Ease.get(1)).to({regX:17.5,regY:75.6,scaleX:0.34,scaleY:0.34,x:178.6,y:152.1},4,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({_off:true},1).wait(124));

	// masknumber2
	this.instance_14 = new lib.numbersmasktransition("synched",0);
	this.instance_14.setTransform(169.4,67.4,1,1,0,0,0,17.4,75.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45).to({_off:false},0).to({regX:18.5,regY:76.4,scaleX:0.33,scaleY:0.33,x:169.1,y:136.4},25,cjs.Ease.get(1)).wait(126).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(45).to({_off:false,regX:17.4,regY:75.5,scaleX:1,scaleY:1,x:169.4,y:67.4,alpha:1},0).to({regX:18.5,regY:76.4,scaleX:0.33,scaleY:0.33,x:169.1,y:136.4},25,cjs.Ease.get(1)).wait(126).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(45).to({_off:false,regX:17.4,regY:75.5,scaleX:1,scaleY:1,x:169.4,y:67.4,alpha:1},0).to({regX:18.5,regY:76.4,scaleX:0.33,scaleY:0.33,x:169.1,y:136.4},25,cjs.Ease.get(1)).wait(126).to({startPosition:0},0).wait(1));

	// masknumber
	this.instance_15 = new lib.numbersmasktransition("synched",0);
	this.instance_15.setTransform(134.4,19.5,1,1,0,0,0,17.4,75.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(45).to({_off:false},0).to({regX:17.8,regY:76.2,scaleX:0.33,scaleY:0.33,x:158.4,y:120.7},25,cjs.Ease.get(1)).wait(126).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(45).to({_off:false,regX:17.4,regY:75.5,scaleX:1,scaleY:1,x:134.4,y:19.5,alpha:1},0).to({regX:17.8,regY:76.2,scaleX:0.33,scaleY:0.33,x:158.4,y:120.7},25,cjs.Ease.get(1)).wait(126).to({startPosition:0},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(45).to({_off:false,regX:17.4,regY:75.5,scaleX:1,scaleY:1,x:134.4,y:19.5,alpha:1},0).to({regX:17.8,regY:76.2,scaleX:0.33,scaleY:0.33,x:158.4,y:120.7},25,cjs.Ease.get(1)).wait(126).to({startPosition:0},0).wait(1));

	// umbers 2
	this.instance_16 = new lib.Numbersmiddle("synched",0);
	this.instance_16.setTransform(169.4,-170.4,1,1,0,0,0,17.4,265.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(23).to({startPosition:0},0).to({y:-122.9},8,cjs.Ease.get(1)).wait(14).to({startPosition:0},0).to({_off:true},1).wait(158).to({_off:false,y:-170.4},0).wait(23).to({startPosition:0},0).to({y:-122.9},8,cjs.Ease.get(1)).wait(14).to({startPosition:0},0).to({_off:true},1).wait(158).to({_off:false,y:-170.4},0).wait(23).to({startPosition:0},0).to({y:-122.9},8,cjs.Ease.get(1)).wait(14).to({startPosition:0},0).to({_off:true},1).wait(151));

	// Numbers 1
	this.instance_17 = new lib.Numbersleft("synched",0);
	this.instance_17.setTransform(134.4,304.6,1,1,0,0,0,17.4,265.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(45).to({startPosition:0},0).to({_off:true},1).wait(158).to({_off:false},0).wait(45).to({startPosition:0},0).to({_off:true},1).wait(158).to({_off:false},0).wait(45).to({startPosition:0},0).to({_off:true},1).wait(151));

	// Numbers 3
	this.instance_18 = new lib.nunbersright("synched",0);
	this.instance_18.setTransform(204.2,209.1,1,1,0,0,0,17.4,265.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(8).to({startPosition:0},0).to({y:256.6},8,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({y:304.6},8,cjs.Ease.get(1)).wait(6).to({y:-170.2},0).wait(1).to({startPosition:0},0).to({y:-123.7},7,cjs.Ease.get(1)).to({_off:true},1).wait(158).to({_off:false,y:209.1},0).wait(8).to({startPosition:0},0).to({y:256.6},8,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({y:304.6},8,cjs.Ease.get(1)).wait(6).to({y:-170.2},0).wait(1).to({startPosition:0},0).to({y:-123.7},7,cjs.Ease.get(1)).to({_off:true},1).wait(158).to({_off:false,y:209.1},0).wait(8).to({startPosition:0},0).to({y:256.6},8,cjs.Ease.get(1)).wait(7).to({startPosition:0},0).to({y:304.6},8,cjs.Ease.get(1)).wait(6).to({y:-170.2},0).wait(1).to({startPosition:0},0).to({y:-123.7},7,cjs.Ease.get(1)).to({_off:true},1).wait(151));

	// Greyphone bg 2
	this.instance_19 = new lib.GreyphoneBG("synched",0);
	this.instance_19.setTransform(152,127.8,0.887,0.796,0,0,0,0.2,0.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(196).to({_off:false},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(196).to({_off:false,alpha:1},0).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(196).to({_off:false,alpha:1},0).wait(1));

	// Greyphone BG
	this.instance_20 = new lib.GreyphoneBG("synched",0);
	this.instance_20.setTransform(169.4,56.9,3.2,3.2,0,0,0,18.7,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(45).to({startPosition:0},0).to({regX:19.9,regY:9.6,scaleX:1.04,scaleY:1.04,x:168.9,y:136.6},24,cjs.Ease.get(1)).wait(26).to({regX:18.6,regY:9.1,scaleX:1,scaleY:1,x:168.6,y:134.1},0).wait(84).to({startPosition:0},0).to({_off:true},17).wait(8).to({_off:false,regX:18.7,regY:9.3,scaleX:2.85,scaleY:2.58,x:168.2,y:62.8,alpha:0},0).to({alpha:1},4,cjs.Ease.get(1)).wait(40).to({regY:9.2,scaleX:3.2,scaleY:3.2,x:169.4,y:56.9},0).to({regX:19.9,regY:9.6,scaleX:1.04,scaleY:1.04,x:168.9,y:136.6},24,cjs.Ease.get(1)).wait(26).to({regX:18.6,regY:9.1,scaleX:1,scaleY:1,x:168.6,y:134.1},0).wait(84).to({startPosition:0},0).wait(17).to({startPosition:0},0).to({_off:true},1).wait(8).to({_off:false,regX:18.7,regY:9.3,scaleX:2.85,scaleY:2.58,x:168.2,y:62.8,alpha:0},0).to({alpha:1},4,cjs.Ease.get(1)).wait(40).to({regY:9.2,scaleX:3.2,scaleY:3.2,x:169.4,y:56.9},0).to({regX:19.9,regY:9.6,scaleX:1.04,scaleY:1.04,x:168.9,y:136.6},24,cjs.Ease.get(1)).wait(26).to({regX:18.6,regY:9.1,scaleX:1,scaleY:1,x:168.6,y:134.1},0).wait(84).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(2));

	// Bg no text
	this.instance_21 = new lib.Bgnotext_1("synched",0);
	this.instance_21.setTransform(151,126.1,1,1,0,0,0,150,125);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(51).to({startPosition:0},0).to({alpha:1},18).wait(1).to({startPosition:0},0).wait(126).to({startPosition:0},0).to({alpha:0},7).wait(1).to({startPosition:0},0).wait(51).to({startPosition:0},0).to({alpha:1},18).wait(1).to({startPosition:0},0).wait(126).to({startPosition:0},0).to({alpha:0},7).wait(1).to({startPosition:0},0).wait(51).to({startPosition:0},0).to({alpha:1},18).wait(1).to({startPosition:0},0).wait(126).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.9,-349.1,892.5,1044.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;