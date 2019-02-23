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
		{src:"images/Button.png", id:"Button"},
		{src:"images/Cta.png", id:"Cta"},
		{src:"images/Gradient.png", id:"Gradient"},
		{src:"images/Greenbar.png", id:"Greenbar"},
		{src:"images/Hand.png", id:"Hand"},
		{src:"images/Phonemore.png", id:"Phonemore"}
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



(lib.Button = function() {
	this.initialize(img.Button);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,170);


(lib.Cta = function() {
	this.initialize(img.Cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,78);


(lib.Gradient = function() {
	this.initialize(img.Gradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,230);


(lib.Greenbar = function() {
	this.initialize(img.Greenbar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,52);


(lib.Hand = function() {
	this.initialize(img.Hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,443,346);


(lib.Phonemore = function() {
	this.initialize(img.Phonemore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,496);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Greenbar();
	this.instance.setTransform(-15.5,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-13,31,26);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARApIghg4IAAA4IgPAAIAAhRIAPAAIAhA4IAAg4IAPAAIAABRg");
	this.shape.setTransform(-14.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIApIgIgCIgHgFIgFgEIgFgHIgDgIIgCgPQAAgEACgKIADgIIAFgGIAFgFIAHgFIAIgCIAIgBIAJABIAIACIAIAFIAFAFIAEAGIADAIQACAKAAAEQAAAKgCAFIgDAIIgEAHIgFAEIgIAFIgIACIgJABIgIgBgAgJgZQgFACgDAEQgDAEgCAFIgBAKIABALQACAFADAEQADAEAFADQAEACAFAAQAGAAAFgCQAEgDADgEIAFgJQABgFAAgGQAAgEgBgGIgFgJQgDgEgEgCQgFgDgGAAQgFAAgEADg");
	this.shape_1.setTransform(-23.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA5AAIAAAOIgqAAIAAAVIAlAAIAAAMIglAAIAAAig");
	this.shape_2.setTransform(24.7,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA5AAIAAAOIgqAAIAAAVIAlAAIAAAMIglAAIAAAig");
	this.shape_3.setTransform(17.9,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIApIgIgDIgHgDIgGgGIgEgGIgDgHIgDgQQABgEACgLIADgHIAEgGIAGgFIAHgFIAIgCIAIgBIAJABIAJACIAGAFIAGAFIAEAGIADAHQADALgBAEQAAAKgCAGIgDAHIgEAGIgGAGIgGADIgJADIgJABIgIgBgAgKgZQgEACgDAEQgDAEgCAGIgBAJIABALQACAFADAEQADAFAEACQAFACAFAAQAGAAAFgCQAFgCADgFIADgJQACgGAAgFQAAgFgCgEQgBgGgCgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_4.setTransform(9.6,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-9.3,59.7,18.7);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARApIghg4IAAA4IgPAAIAAhRIAPAAIAhA4IAAg4IAPAAIAABRg");
	this.shape.setTransform(-14.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIApIgIgCIgHgFIgFgEIgFgHIgDgIIgCgPQAAgEACgKIADgIIAFgGIAFgFIAHgFIAIgCIAIgBIAJABIAIACIAIAFIAFAFIAEAGIADAIQACAKAAAEQAAAKgCAFIgDAIIgEAHIgFAEIgIAFIgIACIgJABIgIgBgAgJgZQgFACgDAEQgDAEgCAFIgBAKIABALQACAFADAEQADAEAFADQAEACAFAAQAGAAAFgCQAEgDADgEIAFgJQABgFAAgGQAAgEgBgGIgFgJQgDgEgEgCQgFgDgGAAQgFAAgEADg");
	this.shape_1.setTransform(-23.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA5AAIAAAOIgqAAIAAAVIAlAAIAAAMIglAAIAAAig");
	this.shape_2.setTransform(24.7,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA5AAIAAAOIgqAAIAAAVIAlAAIAAAMIglAAIAAAig");
	this.shape_3.setTransform(17.9,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIApIgIgDIgHgDIgGgGIgEgGIgDgHIgDgQQABgEACgLIADgHIAEgGIAGgFIAHgFIAIgCIAIgBIAJABIAJACIAGAFIAGAFIAEAGIADAHQADALgBAEQAAAKgCAGIgDAHIgEAGIgGAGIgGADIgJADIgJABIgIgBgAgKgZQgEACgDAEQgDAEgCAGIgBAJIABALQACAFADAEQADAFAEACQAFACAFAAQAGAAAFgCQAFgCADgFIADgJQACgGAAgFQAAgFgCgEQgBgGgCgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_4.setTransform(9.6,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-9.3,59.7,18.7);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARApIghg4IAAA4IgPAAIAAhRIAPAAIAhA4IAAg4IAPAAIAABRg");
	this.shape.setTransform(-14.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIApIgIgCIgHgFIgFgEIgFgHIgDgIIgCgPQAAgEACgKIADgIIAFgGIAFgFIAHgFIAIgCIAIgBIAJABIAIACIAIAFIAFAFIAEAGIADAIQACAKAAAEQAAAKgCAFIgDAIIgEAHIgFAEIgIAFIgIACIgJABIgIgBgAgJgZQgFACgDAEQgDAEgCAFIgBAKIABALQACAFADAEQADAEAFADQAEACAFAAQAGAAAFgCQAEgDADgEIAFgJQABgFAAgGQAAgEgBgGIgFgJQgDgEgEgCQgFgDgGAAQgFAAgEADg");
	this.shape_1.setTransform(-23.4,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA5AAIAAAOIgqAAIAAAVIAlAAIAAAMIglAAIAAAig");
	this.shape_2.setTransform(24.7,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA5AAIAAAOIgqAAIAAAVIAlAAIAAAMIglAAIAAAig");
	this.shape_3.setTransform(17.9,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIApIgIgDIgHgDIgGgGIgEgGIgDgHIgDgQQABgEACgLIADgHIAEgGIAGgFIAHgFIAIgCIAIgBIAJABIAJACIAGAFIAGAFIAEAGIADAHQADALgBAEQAAAKgCAGIgDAHIgEAGIgGAGIgGADIgJADIgJABIgIgBgAgKgZQgEACgDAEQgDAEgCAGIgBAJIABALQACAFADAEQADAFAEACQAFACAFAAQAGAAAFgCQAFgCADgFIADgJQACgGAAgFQAAgFgCgEQgBgGgCgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_4.setTransform(9.6,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-9.3,59.7,18.7);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Greenbar();
	this.instance.setTransform(-15.5,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-13,31,26);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Greenbar();
	this.instance.setTransform(-15.5,-13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-13,31,26);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AgJALIAAgVIATAAIAAAVg");
	this.shape.setTransform(272.8,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgHArIgJgCQgIgDgGgHQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgGQAFgHAIgDIAJgEIAIgBIALABIAJAEQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACADACADIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAGIgJAFIgJADIgLAAgAAUgHIgCgIQgBgDgDgCQgCgDgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAFgCAIIAmAAIAAAAg");
	this.shape_1.setTransform(266.4,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgFQACgFAEgEQAEgDADgCQAFgBAGgBQAIABAIADIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAALIAUAAIAAAUIgUAAIAABCg");
	this.shape_2.setTransform(258.6,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgJA9IAAhWIATAAIAABWgAgKgoIAAgVIAVAAIAAAVg");
	this.shape_3.setTransform(253,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgKA7QgDgCgBgFQgCgEAAgFIAAhpIAUAAIAABjQAAABAAAAQAAABAAABQABAAAAABQAAAAABAAQABACAEAAIAGgBIAAASQgJACgHAAQgIgBgDgCg");
	this.shape_4.setTransform(248.7,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgdAsIAAhWIAVAAIAAALQAFgGADgDQAFgDAGAAIAKABIAJAEIgKASQgEgDgGAAQgEAAgEACQgCACgCAEQgDAEgCAGQgBAEAAAEIAAApg");
	this.shape_5.setTransform(238.1,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgVApQgGgDgEgGQgEgFgCgGQgBgHAAgIIAAgyIAVAAIAAAxQAAAJADAFQACACADABQACACAEAAQADAAAEgCQAEgBADgDIAFgHQACgEAAgDIAAgwIAVAAIAABWIgVAAIAAgKQgFAGgHADQgGADgGAAQgIAAgHgDg");
	this.shape_6.setTransform(228.5,13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgRApQgIgDgHgHQgGgGgDgIQgDgIAAgJQAAgIADgIQADgIAGgHQAHgGAIgEQAJgDAIAAQAKAAAIADQAIAEAHAGQAGAHADAIQADAIAAAIQAAAJgDAIQgDAIgGAGQgHAHgIADQgIAEgKAAQgIAAgJgEgAgJgXQgEACgDAEQgDADgBAFQgBAFAAAEQAAAFABAEQABAFADAEQADAEAEACQAFACAEABQAFgBAFgCQAEgCADgEQADgEABgFQABgEAAgFQAAgEgBgFQgBgFgDgDQgDgEgEgCQgFgDgFABQgEgBgFADg");
	this.shape_7.setTransform(218.3,13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgaA+IAQgoIgihUIAXAAIAVA9IAWg9IAXAAIgwB8g");
	this.shape_8.setTransform(208.5,15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AArAsIAAgwQAAgJgDgFIgEgEQgEgBgEAAQgDAAgEABIgGAFIgEAHIgBAIIAAAuIgTAAIAAgwQAAgJgEgFIgDgEQgEgBgEAAQgEAAgEABIgFAFQgDADgBAEIgBAIIAAAuIgVAAIAAhWIAVAAIAAAKQAEgGAGgDQAGgCAGAAQAIAAAGADQAGAEADAGQAFgGAIgEQAHgDAJAAQAJAAAGADQAFADAFAFQADAFADAHQACAGgBAIIAAAyg");
	this.shape_9.setTransform(191.6,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgRApQgIgDgHgHQgGgGgDgIQgDgIAAgJQAAgIADgIQADgIAGgHQAHgGAIgEQAJgDAIAAQAKAAAIADQAIAEAHAGQAGAHADAIQADAIAAAIQAAAJgDAIQgDAIgGAGQgHAHgIADQgIAEgKAAQgIAAgJgEgAgJgXQgEACgDAEQgDADgBAFQgBAFAAAEQAAAFABAEQABAFADAEQADAEAEACQAFACAEABQAFgBAFgCQAEgCADgEQADgEABgFQABgEAAgFQAAgEgBgFQgBgFgDgDQgDgEgEgCQgFgDgFABQgEgBgFADg");
	this.shape_10.setTransform(178.6,13.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgdAsIAAhWIAVAAIAAALQAFgGADgDQAFgDAGAAIAKABIAJAEIgKASQgEgDgGAAQgEAAgEACQgCACgCAEQgDAEgCAGQgBAEAAAEIAAApg");
	this.shape_11.setTransform(170.9,13.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgFQACgFAEgEQAEgDADgCQAFgBAGgBQAIABAIADIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAALIAUAAIAAAUIgUAAIAABCg");
	this.shape_12.setTransform(163.5,11.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgKArQgGgCgFgEIgIgIQgDgEgCgFIARgIQADAHADADQADADACABQADABADAAQAHAAAEgDQADgEAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgGgDIgNgFQgKgDgFgCQgDgDgCgDQgCgFAAgFQAAgHADgGQACgEAFgDQAEgEAGgCQAFgBAEAAQAHAAAFABIAJAEIAIAHIAEAHIgPAJQgDgFgDgDQgFgDgGAAQgDAAgDACQgEACAAADQAAAEAHADIAOAFIAIADQAEACADADIAGAFQABAEAAAHQAAAHgDAFQgDAGgFADQgEAEgGACQgHACgGAAQgFAAgGgCg");
	this.shape_13.setTransform(151.4,13.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgHArIgJgCQgIgDgGgHQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgGQAFgHAIgDIAJgEIAIgBIALABIAJAEQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACADACADIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAGIgJAFIgJADIgLAAgAAUgHIgCgIQgBgDgDgCQgCgDgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAFgCAIIAmAAIAAAAg");
	this.shape_14.setTransform(142.9,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgHArIgJgCQgIgDgGgHQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgGQAFgHAIgDIAJgEIAIgBIALABIAJAEQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACADACADIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAGIgJAFIgJADIgLAAgAAUgHIgCgIQgBgDgDgCQgCgDgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAFgCAIIAmAAIAAAAg");
	this.shape_15.setTransform(133.5,13.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgFQACgFAEgEQAEgDADgCQAFgBAGgBQAIABAIADIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAALIAUAAIAAAUIgUAAIAABCg");
	this.shape_16.setTransform(125.7,11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgHArIgJgCQgIgDgGgHQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgGQAFgHAIgDIAJgEIAIgBIALABIAJAEQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACADACADIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAGIgJAFIgJADIgLAAgAAUgHIgCgIQgBgDgDgCQgCgDgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAFgCAIIAmAAIAAAAg");
	this.shape_17.setTransform(113,13.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AABA9QgDgCgEgEQgDgCgCgGQgCgFAAgFIAAgrIgOAAIAAgTIAPAAIAAgVIASgQIAAAlIAWAAIAAATIgWAAIAAArQAAADACACQACABAFABQAHAAAGgEIAAAUQgHADgIAAQgHAAgFgCg");
	this.shape_18.setTransform(105,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgSArQgGgCgEgEQgFgDgCgFQgDgGAAgGQAAgHADgGQACgEAGgCQAEgCAHgCQAGgBAIAAIAVAAIgBgIQgBgDgCgCIgGgEIgIgBQgFAAgFADQgFAEgDAFIgRgMIAIgIIAIgGQAFgDAFgBQAFgBAEAAQAJAAAHADQAHACAFAFQAFAFADAGQACAHAAAIIAAAzIgQAAIgDgMIgGAHIgGAEQgHADgHAAQgGAAgGgCgAgMAKQgEADAAAEQAAAEAEADQAEADAGAAIAHgCQAEgBADgDIAFgHQACgEAAgEIgUAAQgHAAgEAEg");
	this.shape_19.setTransform(97,13.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgKA7QgDgCgBgFQgCgEAAgFIAAhpIAUAAIAABjQAAABAAAAQAAABAAABQABAAAAABQAAAAABAAQABACAEAAIAGgBIAAASQgJACgHAAQgIgBgDgCg");
	this.shape_20.setTransform(90.4,12.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgFQACgFAEgEQAEgDADgCQAFgBAGgBQAIABAIADIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAALIAUAAIAAAUIgUAAIAABCg");
	this.shape_21.setTransform(79.4,11.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgFQACgFAEgEQAEgDADgCQAFgBAGgBQAIABAIADIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAALIAUAAIAAAUIgUAAIAABCg");
	this.shape_22.setTransform(73.2,11.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353535").s().p("AgRApQgIgDgHgHQgGgGgDgIQgDgIAAgJQAAgIADgIQADgIAGgHQAHgGAIgEQAJgDAIAAQAKAAAIADQAIAEAHAGQAGAHADAIQADAIAAAIQAAAJgDAIQgDAIgGAGQgHAHgIADQgIAEgKAAQgIAAgJgEgAgJgXQgEACgDAEQgDADgBAFQgBAFAAAEQAAAFABAEQABAFADAEQADAEAEACQAFACAEABQAFgBAFgCQAEgCADgEQADgEABgFQABgEAAgFQAAgEgBgFQgBgFgDgDQgDgEgEgCQgFgDgFABQgEgBgFADg");
	this.shape_23.setTransform(64.8,13.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353535").s().p("AASA9IAAgyQAAgJgEgCIgEgEIgHgBQgFAAgGAEQgHADgBAGIAAA1IgWAAIAAh6IAWAAIAAAuQAFgGAFgDQAGgCAFgBQAJABAHADQAGADAEAGQAFAFABAHQACAEAAAIIAAAzg");
	this.shape_24.setTransform(49.8,12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353535").s().p("AgGAsIgJgDQgHgDgGgHQgGgGgCgJQgDgIAAgIQAAgHADgIQACgJAGgGQAFgHAIgDQAEgCAEgBIAIgBQAHAAAGACQAFABAGAEIAJAIIAFALIgUAHQgCgGgEgDQgFgEgHAAQgDAAgEACQgEACgCAEIgEAIIgBAIIABAJIADAIIAHAGQAEACADAAQAHAAAFgEQAEgDACgGIATAHQgCAGgDAFQgDAFgFADQgFADgGACQgFACgHAAIgIgBg");
	this.shape_25.setTransform(40.4,13.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353535").s().p("AABA9QgDgCgEgEQgDgCgCgGQgCgFAAgFIAAgrIgOAAIAAgTIAPAAIAAgVIASgQIAAAlIAWAAIAAATIgWAAIAAArQAAADABACQADABAFABQAHAAAGgEIAAAUQgHADgIAAQgHAAgFgCg");
	this.shape_26.setTransform(32.5,12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353535").s().p("AgJA9IAAhWIATAAIAABWgAgKgoIAAgVIAVAAIAAAVg");
	this.shape_27.setTransform(27,12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#353535").s().p("AgjAsIgbhXIAWAAIAQA1IARg1IAQAAIAQA1IAPg1IAXAAIgbBWIgTAAIgRg3IgQA4g");
	this.shape_28.setTransform(18.3,13.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#353535").s().p("AgNA9QgHgCgHgFQgGgFgFgGQgFgHgBgJIAWgGQABAFACAEQACAEAEADQADADAEABQAFACADAAQAFAAAEgCIAGgDIAEgFIABgIQAAgDgCgEQgCgCgFgDIgTgJIgKgEQgHgDgDgEQgEgEgDgFQgCgGAAgHQAAgHADgHQADgGAFgEQAFgFAHgCQAHgCAGAAQAFAAAGABQAGABAEADIAJAHQAFAEADAGIgSALQgEgGgFgEQgGgDgFAAQgFAAgEAEQgFAEAAAFQAAAEACADIAHAFIATAIIALAGIAKAFQAEAFACAFQADAGAAAIQAAAIgEAHQgDAHgGAFQgGAFgHADQgIACgJAAQgHAAgIgCg");
	this.shape_29.setTransform(6.9,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.8,25.6);


(lib.Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Phonemore();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177,248);


(lib.Hand_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Hand();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,221.5,173);


(lib.green2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1FAF4B").s().p("AhJCAIAAj/ICSAAIAAD/g");
	this.shape.setTransform(7.4,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,25.8);


(lib.expandinggreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1FAF4B").s().p("A0JUKQoXoXAArzQAArzIXoWQIWoXLzAAQLzAAIXIXQIWIWABLzQgBLzoWIXQoXIWrzABQrzgBoWoWg");
	this.shape.setTransform(182.5,182.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,365,365);


(lib.CTa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,39);


(lib.Button_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Button();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.5,85);


// stage content:
(lib.F1229_ConceptA_300x250_v2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Text
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(150.4,28.7,1,1,0,0,0,138.4,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.get(1)).wait(102).to({startPosition:0},0).to({alpha:1},36,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.get(1)).wait(102).to({startPosition:0},0).to({alpha:1},36,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.get(1)).wait(102).to({startPosition:0},0).to({alpha:1},36,cjs.Ease.get(1)).wait(54).to({startPosition:0},0).to({alpha:0},8,cjs.Ease.get(1)).wait(53));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJALIAAgVIATAAIAAAVg");
	this.shape.setTransform(284.8,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHArIgJgCQgIgEgGgGQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgHQAFgGAIgDIAJgDIAIgCIALACIAJADQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACAEACACIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAHIgJAEIgJADIgLAAgAAUgHIgCgIQgBgDgDgDQgCgCgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAEgCAJIAmAAIAAAAg");
	this.shape_1.setTransform(278.4,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgGQACgEAEgEQAEgDADgCQAFgCAGAAQAIAAAIAEIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAAMIAUAAIAAATIgUAAIAABCg");
	this.shape_2.setTransform(270.6,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA9IAAhVIATAAIAABVgAgKgoIAAgUIAVAAIAAAUg");
	this.shape_3.setTransform(265,27.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKA6QgDgBgBgFQgCgEAAgFIAAhoIAUAAIAABiQAAABAAAAQAAABAAABQAAAAABABQAAAAABAAQABACAEAAIAGgBIAAASQgJACgHABQgIgCgDgDg");
	this.shape_4.setTransform(260.7,28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAsIAAhWIAVAAIAAALQAFgGADgDQAFgDAGAAIAKABIAJAFIgKASQgEgEgGAAQgEAAgEACQgCADgCADQgDAEgCAFQgBAFAAAEIAAApg");
	this.shape_5.setTransform(250.1,29.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVApQgGgDgEgGQgEgFgCgGQgBgHAAgIIAAgxIAVAAIAAAwQAAAJADAFQACACADABQACACAEAAQADAAAEgCQAEgBADgDIAFgHQACgEAAgEIAAguIAVAAIAABVIgVAAIAAgKQgFAGgHADQgGADgGABQgIAAgHgEg");
	this.shape_6.setTransform(240.5,29.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRApQgIgDgHgGQgGgHgDgIQgDgIAAgJQAAgIADgIQADgIAGgHQAHgGAIgEQAJgDAIAAQAKAAAIADQAIAEAHAGQAGAHADAIQADAIAAAIQAAAJgDAIQgDAIgGAHQgHAGgIADQgIAEgKAAQgIAAgJgEgAgJgXQgEACgDAEQgDADgBAFQgBAFAAAEQAAAFABAEQABAFADAEQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEQADgEABgFQABgEAAgFQAAgEgBgFQgBgFgDgDQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_7.setTransform(230.3,29.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaA/IAQgpIgihTIAXAAIAVA8IAWg8IAXAAIgwB8g");
	this.shape_8.setTransform(220.5,31.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArAsIAAgwQAAgJgDgFIgFgEQgCgBgFAAQgEAAgDABIgGAFIgDAHIgCAIIAAAuIgTAAIAAgwQAAgJgDgFIgFgEQgCgBgFAAQgEAAgDABIgGAFQgCADgBAEIgCAIIAAAuIgWAAIAAhWIAWAAIAAAKQAEgGAHgDQAFgCAGAAQAIAAAGADQAGAEADAGQAFgGAIgEQAIgDAIAAQAJAAAGADQAFADAFAFQADAFADAHQABAGAAAIIAAAyg");
	this.shape_9.setTransform(203.6,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRApQgIgDgHgGQgGgHgDgIQgDgIAAgJQAAgIADgIQADgIAGgHQAHgGAIgEQAJgDAIAAQAKAAAIADQAIAEAHAGQAGAHADAIQADAIAAAIQAAAJgDAIQgDAIgGAHQgHAGgIADQgIAEgKAAQgIAAgJgEgAgJgXQgEACgDAEQgDADgBAFQgBAFAAAEQAAAFABAEQABAFADAEQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEQADgEABgFQABgEAAgFQAAgEgBgFQgBgFgDgDQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_10.setTransform(190.6,29.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAsIAAhWIAVAAIAAALQAFgGADgDQAFgDAGAAIAKABIAJAFIgKASQgEgEgGAAQgEAAgEACQgCADgCADQgDAEgCAFQgBAFAAAEIAAApg");
	this.shape_11.setTransform(182.9,29.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgGQACgEAEgEQAEgDADgCQAFgCAGAAQAIAAAIAEIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAAMIAUAAIAAATIgUAAIAABCg");
	this.shape_12.setTransform(175.5,27.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKArQgGgCgFgEIgIgIQgEgEgBgFIARgIQACAHAEADQADACADACQADABACAAQAHAAAEgDQADgEAAgDQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgFgDIgNgEQgKgDgFgDQgEgDgBgEQgCgEAAgFQAAgHADgFQADgFAEgDQAFgEAFgCQAFgBAFAAQAFAAAGABIAJAFIAIAGIAEAHIgOAIQgDgEgEgDQgFgDgGAAQgDAAgDACQgDACAAADQAAAEAGADIAOAFIAIADQAFACADADIAEAFQACAEAAAHQAAAHgDAFQgDAGgFADQgEAEgHACQgFACgHAAQgFAAgGgCg");
	this.shape_13.setTransform(163.4,29.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHArIgJgCQgIgEgGgGQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgHQAFgGAIgDIAJgDIAIgCIALACIAJADQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACAEACACIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAHIgJAEIgJADIgLAAgAAUgHIgCgIQgBgDgDgDQgCgCgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAEgCAJIAmAAIAAAAg");
	this.shape_14.setTransform(154.9,29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHArIgJgCQgIgEgGgGQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgHQAFgGAIgDIAJgDIAIgCIALACIAJADQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACAEACACIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAHIgJAEIgJADIgLAAgAAUgHIgCgIQgBgDgDgDQgCgCgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAEgCAJIAmAAIAAAAg");
	this.shape_15.setTransform(145.5,29.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgGQACgEAEgEQAEgDADgCQAFgCAGAAQAIAAAIAEIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAAMIAUAAIAAATIgUAAIAABCg");
	this.shape_16.setTransform(137.7,27.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHArIgJgCQgIgEgGgGQgFgGgDgIQgCgIAAgJQAAgHACgHQADgJAFgHQAFgGAIgDIAJgDIAIgCIALACIAJADQAIADAFAHQAEAGACAJQACAHAAAHIAAAGIg7AAIACAIQACAEACACIAHADIAGABQAIABAEgCQAGgCAEgFIAPAOIgIAHIgJAEIgJADIgLAAgAAUgHIgCgIQgBgDgDgDQgCgCgEgBQgDgCgFAAQgCAAgEACIgGAEQgEAEgCAJIAmAAIAAAAg");
	this.shape_17.setTransform(125,29.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AABA9QgDgCgEgEQgDgCgCgGQgCgEAAgHIAAgqIgPAAIAAgTIAQAAIAAgVIARgQIAAAlIAYAAIAAATIgYAAIAAAqQAAAEACACQADABAFABQAHAAAHgDIAAATQgHADgJAAQgHAAgFgCg");
	this.shape_18.setTransform(117,27.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSArQgGgCgEgEQgFgDgCgFQgDgGAAgGQAAgHADgGQACgEAGgCQAEgCAHgCQAGgBAIAAIAVAAIgBgIQgBgDgCgCIgGgEIgIgBQgFAAgFADQgFAEgDAFIgRgMIAIgIIAIgGQAFgDAFgBQAFgBAEAAQAJAAAHADQAHACAFAFQAFAFADAGQACAHAAAIIAAAzIgQAAIgDgMIgGAHIgGAEQgHADgHAAQgGAAgGgCgAgMAKQgEADAAAEQAAAEAEADQAEADAGAAIAHgCQAEgBADgDIAFgHQACgEAAgEIgUAAQgHAAgEAEg");
	this.shape_19.setTransform(109,29.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKA6QgDgBgBgFQgCgEAAgFIAAhoIAUAAIAABiQAAABAAAAQAAABAAABQAAAAABABQAAAAABAAQABACAEAAIAGgBIAAASQgJACgHABQgIgCgDgDg");
	this.shape_20.setTransform(102.4,28);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgGQACgEAEgEQAEgDADgCQAFgCAGAAQAIAAAIAEIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAAMIAUAAIAAATIgUAAIAABCg");
	this.shape_21.setTransform(91.4,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNA+IAAhCIgQAAIAAgTIARAAIAAgMQAAgGACgGQACgEAEgEQAEgDADgCQAFgCAGAAQAIAAAIAEIgHASQgDgCgEAAQgEAAgCACQgCACAAADIAAAMIAUAAIAAATIgUAAIAABCg");
	this.shape_22.setTransform(85.2,27.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRApQgIgDgHgGQgGgHgDgIQgDgIAAgJQAAgIADgIQADgIAGgHQAHgGAIgEQAJgDAIAAQAKAAAIADQAIAEAHAGQAGAHADAIQADAIAAAIQAAAJgDAIQgDAIgGAHQgHAGgIADQgIAEgKAAQgIAAgJgEgAgJgXQgEACgDAEQgDADgBAFQgBAFAAAEQAAAFABAEQABAFADAEQADAEAEACQAFACAEAAQAFAAAFgCQAEgCADgEQADgEABgFQABgEAAgFQAAgEgBgFQgBgFgDgDQgDgEgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_23.setTransform(76.8,29.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARA9IAAgyQAAgIgCgDIgFgEIgGgBQgHAAgGAEQgFADgCAGIAAA1IgWAAIAAh5IAWAAIAAAtQAFgGAFgDQAGgDAFAAQAJAAAHAEQAGADAFAGQADAFACAHQACAFAAAHIAAAzg");
	this.shape_24.setTransform(61.8,27.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGAsIgJgDQgIgDgFgHQgFgGgDgJQgDgIABgIQgBgHADgIQADgJAFgGQAFgHAIgDQAEgCAEgBQAGgBACAAQAHAAAGACQAGABAEAEIAJAIIAHALIgVAHQgBgGgFgDQgFgEgHAAQgDAAgEACQgDACgDAEIgEAIIgBAIIABAJIAEAIIAGAGQAEACADAAQAHAAAFgEQAFgDABgGIAUAHQgDAGgDAFQgEAFgFADQgEADgGACQgGACgGAAIgIgBg");
	this.shape_25.setTransform(52.4,29.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AABA9QgDgCgEgEQgDgCgCgGQgCgEAAgHIAAgqIgPAAIAAgTIAQAAIAAgVIARgQIAAAlIAYAAIAAATIgYAAIAAAqQAAAEACACQADABAFABQAHAAAHgDIAAATQgHADgJAAQgHAAgFgCg");
	this.shape_26.setTransform(44.5,27.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJA9IAAhVIATAAIAABVgAgKgoIAAgUIAVAAIAAAUg");
	this.shape_27.setTransform(39,27.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjAsIgbhXIAXAAIAOA1IARg1IAQAAIARA1IAQg1IAWAAIgbBWIgTAAIgRg3IgQA4g");
	this.shape_28.setTransform(30.3,29.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNA9QgHgCgHgFQgHgFgEgGQgEgHgCgJIAWgGQABAFACAEQACAEADADQAEADAEABQAFACACAAQAGAAADgCIAHgDIAEgFIABgIQAAgDgDgEQgCgCgEgDIgTgJIgKgEQgGgDgEgEQgEgEgDgFQgDgGABgHQAAgHACgHQADgGAGgEQAFgFAHgCQAHgCAFAAQAGAAAGABQAFABAGADIAJAHQAEAEADAGIgTALQgDgGgFgEQgGgDgGAAQgEAAgEAEQgFAEAAAFQAAAEADADIAGAFIATAIIALAGIAKAFQAEAFADAFQACAGAAAIQAAAIgDAHQgEAHgGAFQgFAFgJADQgHACgKAAQgGAAgIgCg");
	this.shape_29.setTransform(18.9,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(714));

	// Border
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#666666").ss(1,1,1).p("A3YziMAuxAAAMAAAAnFMguxAAAg");
	this.shape_30.setTransform(150.3,125.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(714));

	// Borders
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#424143").ss(1,1,1).p("EgyNgMLMBkbAAAIAAYWMgiCAAAMhCZAAAIAAngIAAjRg");
	this.shape_31.setTransform(235.5,-172.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#444444").ss(0.1,1,1).p("ALaNLIAAlpMAkhAAAIKeAAMAAAAj3I2QAAIAAMKMhehAAAIAAngEALaAj5IAAi3EAkJArZIm4AAEg1Zg0RIAAjRIABAAEgpsALBIAAhK");
	this.shape_32.setTransform(255.7,191.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#444444").s().p("EgvJA6mIm4AAMAAAgjzIvnAAMAAAgtcIbeAAIAAzEIACAAIAAHgMBCZAAAIAALkMAi5AAAMAAAAouMgkgAAAIAAFqIAAlqMAkgAAAIKfAAMAAAAj3I2QAAIm4AAIAAEqgEAPyAucIG4AAIAAi3Im4AAgA+cVkIAAhJgA8sTuMAu7AAAMAAAgnGMgu7AAAgEAYRgiNMhCZAAAIAAngIAAjRIAAtnMBkbAAAIAAYYgEAYRgiNg");
	this.shape_33.setTransform(183.8,124.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(714));

	// CTA
	this.instance_1 = new lib.CTa("synched",0);
	this.instance_1.setTransform(150.5,225,1,1,0,0,0,125,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({startPosition:0},0).to({regY:19.6,scaleX:1.19,scaleY:1.19,y:225.1},9,cjs.Ease.get(1)).wait(1).to({regY:19.5,scaleX:1.14,scaleY:1.14,x:150.4,y:225},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(101).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(88).to({startPosition:0},0).to({regY:19.6,scaleX:1.19,scaleY:1.19,y:225.1},9,cjs.Ease.get(1)).wait(1).to({regY:19.5,scaleX:1.14,scaleY:1.14,x:150.4,y:225},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(98).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(87).to({startPosition:0},0).to({regY:19.6,scaleX:1.19,scaleY:1.19,y:225.1},9,cjs.Ease.get(1)).wait(1).to({regY:19.5,scaleX:1.14,scaleY:1.14,x:150.4,y:225},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(99).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(81).to({startPosition:0},0).to({regY:19.6,scaleX:1.19,scaleY:1.19,y:225.1},9,cjs.Ease.get(1)).wait(1).to({regY:19.5,scaleX:1.14,scaleY:1.14,x:150.4,y:225},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.5},0).wait(1).to({scaleX:1,scaleY:1},0).wait(20));

	// Hand
	this.instance_2 = new lib.Hand_1("synched",0);
	this.instance_2.setTransform(291.1,332,1,1,0,0,0,110.8,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({startPosition:0},0).wait(1).to({x:286.2,y:325},0).wait(1).to({x:280.8,y:317.3},0).wait(1).to({x:274.8,y:308.7},0).wait(1).to({x:268.2,y:299.3},0).wait(1).to({x:261.1,y:289.2},0).wait(1).to({x:253.9,y:278.8},0).wait(1).to({x:247,y:269},0).wait(1).to({x:240.9,y:260.2},0).wait(1).to({x:235.8,y:253},0).wait(1).to({x:231.8,y:247.2},0).wait(1).to({x:228.7,y:242.7},0).wait(1).to({x:226.2,y:239.2},0).wait(1).to({x:224.4,y:236.6},0).wait(1).to({x:223.1,y:234.7},0).wait(1).to({x:222,y:233.1},0).wait(1).to({x:220.9,y:231.6},0).wait(1).to({x:220,y:230.3},0).wait(1).to({x:219.1,y:229.1},0).wait(1).to({x:218.4,y:228},0).wait(1).to({x:217.7,y:227},0).wait(1).to({x:217.1,y:226.2},0).wait(1).to({x:216.6,y:225.4},0).wait(1).to({x:216.1,y:224.8},0).wait(1).to({x:215.8,y:224.2},0).wait(1).to({x:215.4,y:223.8},0).wait(1).to({x:215.2,y:223.4},0).wait(1).to({x:215,y:223.1},0).wait(1).to({x:214.8,y:222.9},0).wait(1).to({x:214.7,y:222.7},0).wait(1).to({x:214.6,y:222.6},0).wait(1).to({y:222.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({x:217.9},0).wait(1).to({x:222.4,y:222.4},0).wait(1).to({x:228.3},0).wait(1).to({x:235.6,y:222.3},0).wait(1).to({x:242.7,y:222.2},0).wait(1).to({x:248.1,y:222.1},0).wait(1).to({x:251.6},0).wait(1).to({x:254},0).wait(1).to({x:255.6},0).wait(1).to({x:256.8,y:222},0).wait(1).to({x:257.8},0).wait(1).to({x:258.6},0).wait(1).to({x:259.3},0).wait(1).to({x:259.8},0).wait(1).to({x:260.2},0).wait(1).to({x:260.5},0).wait(1).to({x:260.7},0).wait(1).to({x:260.8},0).wait(1).to({x:260.9},0).wait(1).to({x:261},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:261.1},0).to({x:261.2,y:221.9},2,cjs.Ease.get(0.2)).to({x:265.6,y:219},93).to({x:391.6,y:328},25,cjs.Ease.get(1)).wait(11).to({startPosition:0},0).wait(1).to({x:291.1,y:332},0).wait(9).to({startPosition:0},0).wait(1).to({x:286.2,y:325},0).wait(1).to({x:280.8,y:317.3},0).wait(1).to({x:274.8,y:308.7},0).wait(1).to({x:268.2,y:299.3},0).wait(1).to({x:261.1,y:289.2},0).wait(1).to({x:253.9,y:278.8},0).wait(1).to({x:247,y:269},0).wait(1).to({x:240.9,y:260.2},0).wait(1).to({x:235.8,y:253},0).wait(1).to({x:231.8,y:247.2},0).wait(1).to({x:228.7,y:242.7},0).wait(1).to({x:226.2,y:239.2},0).wait(1).to({x:224.4,y:236.6},0).wait(1).to({x:223.1,y:234.7},0).wait(1).to({x:222,y:233.1},0).wait(1).to({x:220.9,y:231.6},0).wait(1).to({x:220,y:230.3},0).wait(1).to({x:219.1,y:229.1},0).wait(1).to({x:218.4,y:228},0).wait(1).to({x:217.7,y:227},0).wait(1).to({x:217.1,y:226.2},0).wait(1).to({x:216.6,y:225.4},0).wait(1).to({x:216.1,y:224.8},0).wait(1).to({x:215.8,y:224.2},0).wait(1).to({x:215.4,y:223.8},0).wait(1).to({x:215.2,y:223.4},0).wait(1).to({x:215,y:223.1},0).wait(1).to({x:214.8,y:222.9},0).wait(1).to({x:214.7,y:222.7},0).wait(1).to({x:214.6,y:222.6},0).wait(1).to({y:222.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({x:217.9},0).wait(1).to({x:222.4,y:222.4},0).wait(1).to({x:228.3},0).wait(1).to({x:235.6,y:222.3},0).wait(1).to({x:242.7,y:222.2},0).wait(1).to({x:248.1,y:222.1},0).wait(1).to({x:251.6},0).wait(1).to({x:254},0).wait(1).to({x:255.6},0).wait(1).to({x:256.8,y:222},0).wait(1).to({x:257.8},0).wait(1).to({x:258.6},0).wait(1).to({x:259.3},0).wait(1).to({x:259.8},0).wait(1).to({x:260.2},0).wait(1).to({x:260.5},0).wait(1).to({x:260.7},0).wait(1).to({x:260.8},0).wait(1).to({x:260.9},0).wait(1).to({x:261},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:261.1},0).to({x:265.6,y:219},95,cjs.Ease.get(0.2)).to({x:391.6,y:328},25,cjs.Ease.get(1)).wait(11).to({startPosition:0},0).wait(1).to({x:291.1,y:332},0).wait(9).to({startPosition:0},0).wait(1).to({x:286.2,y:325},0).wait(1).to({x:280.8,y:317.3},0).wait(1).to({x:274.8,y:308.7},0).wait(1).to({x:268.2,y:299.3},0).wait(1).to({x:261.1,y:289.2},0).wait(1).to({x:253.9,y:278.8},0).wait(1).to({x:247,y:269},0).wait(1).to({x:240.9,y:260.2},0).wait(1).to({x:235.8,y:253},0).wait(1).to({x:231.8,y:247.2},0).wait(1).to({x:228.7,y:242.7},0).wait(1).to({x:226.2,y:239.2},0).wait(1).to({x:224.4,y:236.6},0).wait(1).to({x:223.1,y:234.7},0).wait(1).to({x:222,y:233.1},0).wait(1).to({x:220.9,y:231.6},0).wait(1).to({x:220,y:230.3},0).wait(1).to({x:219.1,y:229.1},0).wait(1).to({x:218.4,y:228},0).wait(1).to({x:217.7,y:227},0).wait(1).to({x:217.1,y:226.2},0).wait(1).to({x:216.6,y:225.4},0).wait(1).to({x:216.1,y:224.8},0).wait(1).to({x:215.8,y:224.2},0).wait(1).to({x:215.4,y:223.8},0).wait(1).to({x:215.2,y:223.4},0).wait(1).to({x:215,y:223.1},0).wait(1).to({x:214.8,y:222.9},0).wait(1).to({x:214.7,y:222.7},0).wait(1).to({x:214.6,y:222.6},0).wait(1).to({y:222.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({x:217.9},0).wait(1).to({x:222.4,y:222.4},0).wait(1).to({x:228.3},0).wait(1).to({x:235.6,y:222.3},0).wait(1).to({x:242.7,y:222.2},0).wait(1).to({x:248.1,y:222.1},0).wait(1).to({x:251.6},0).wait(1).to({x:254},0).wait(1).to({x:255.6},0).wait(1).to({x:256.8,y:222},0).wait(1).to({x:257.8},0).wait(1).to({x:258.6},0).wait(1).to({x:259.3},0).wait(1).to({x:259.8},0).wait(1).to({x:260.2},0).wait(1).to({x:260.5},0).wait(1).to({x:260.7},0).wait(1).to({x:260.8},0).wait(1).to({x:260.9},0).wait(1).to({x:261},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:261.1},0).to({x:265.6,y:219},95,cjs.Ease.get(0.2)).to({x:391.6,y:328},25,cjs.Ease.get(1)).wait(11).to({startPosition:0},0).wait(1).to({x:291.1,y:332},0).wait(9).to({startPosition:0},0).wait(1).to({x:286.2,y:325},0).wait(1).to({x:280.8,y:317.3},0).wait(1).to({x:274.8,y:308.7},0).wait(1).to({x:268.2,y:299.3},0).wait(1).to({x:261.1,y:289.2},0).wait(1).to({x:253.9,y:278.8},0).wait(1).to({x:247,y:269},0).wait(1).to({x:240.9,y:260.2},0).wait(1).to({x:235.8,y:253},0).wait(1).to({x:231.8,y:247.2},0).wait(1).to({x:228.7,y:242.7},0).wait(1).to({x:226.2,y:239.2},0).wait(1).to({x:224.4,y:236.6},0).wait(1).to({x:223.1,y:234.7},0).wait(1).to({x:222,y:233.1},0).wait(1).to({x:220.9,y:231.6},0).wait(1).to({x:220,y:230.3},0).wait(1).to({x:219.1,y:229.1},0).wait(1).to({x:218.4,y:228},0).wait(1).to({x:217.7,y:227},0).wait(1).to({x:217.1,y:226.2},0).wait(1).to({x:216.6,y:225.4},0).wait(1).to({x:216.1,y:224.8},0).wait(1).to({x:215.8,y:224.2},0).wait(1).to({x:215.4,y:223.8},0).wait(1).to({x:215.2,y:223.4},0).wait(1).to({x:215,y:223.1},0).wait(1).to({x:214.8,y:222.9},0).wait(1).to({x:214.7,y:222.7},0).wait(1).to({x:214.6,y:222.6},0).wait(1).to({y:222.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({x:217.9},0).wait(1).to({x:222.4,y:222.4},0).wait(1).to({x:228.3},0).wait(1).to({x:235.6,y:222.3},0).wait(1).to({x:242.7,y:222.2},0).wait(1).to({x:248.1,y:222.1},0).wait(1).to({x:251.6},0).wait(1).to({x:254},0).wait(1).to({x:255.6},0).wait(1).to({x:256.8,y:222},0).wait(1).to({x:257.8},0).wait(1).to({x:258.6},0).wait(1).to({x:259.3},0).wait(1).to({x:259.8},0).wait(1).to({x:260.2},0).wait(1).to({x:260.5},0).wait(1).to({x:260.7},0).wait(1).to({x:260.8},0).wait(1).to({x:260.9},0).wait(1).to({x:261},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:261.1},0).wait(46));

	// Button
	this.instance_3 = new lib.Button_1("synched",0);
	this.instance_3.setTransform(124.7,150,1,1,0,0,0,42.2,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({startPosition:0},0).wait(1).to({x:129.1},0).wait(1).to({x:134.3},0).wait(1).to({x:140.5},0).wait(1).to({x:147},0).wait(1).to({x:152.7},0).wait(1).to({x:157},0).wait(1).to({x:160.1},0).wait(1).to({x:162.2},0).wait(1).to({x:163.9},0).wait(1).to({x:165.2},0).wait(1).to({x:166.3},0).wait(1).to({x:167.2},0).wait(1).to({x:167.9},0).wait(1).to({x:168.5},0).wait(1).to({x:169},0).wait(1).to({x:169.4},0).wait(1).to({x:169.6},0).wait(1).to({x:169.9},0).wait(1).to({x:170},0).wait(1).to({x:170.1},0).wait(1).to({x:170.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(95).to({startPosition:0},0).to({x:394.7},18,cjs.Ease.get(1)).wait(1).to({x:-99.2},0).to({x:124.7},17,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).wait(45).to({startPosition:0},0).wait(1).to({x:129.1},0).wait(1).to({x:134.3},0).wait(1).to({x:140.5},0).wait(1).to({x:147},0).wait(1).to({x:152.7},0).wait(1).to({x:157},0).wait(1).to({x:160.1},0).wait(1).to({x:162.2},0).wait(1).to({x:163.9},0).wait(1).to({x:165.2},0).wait(1).to({x:166.3},0).wait(1).to({x:167.2},0).wait(1).to({x:167.9},0).wait(1).to({x:168.5},0).wait(1).to({x:169},0).wait(1).to({x:169.4},0).wait(1).to({x:169.6},0).wait(1).to({x:169.9},0).wait(1).to({x:170},0).wait(1).to({x:170.1},0).wait(1).to({x:170.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(95).to({startPosition:0},0).to({x:394.7},18,cjs.Ease.get(1)).wait(1).to({x:-99.2},0).to({x:124.7},17,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).wait(45).to({startPosition:0},0).wait(1).to({x:129.1},0).wait(1).to({x:134.3},0).wait(1).to({x:140.5},0).wait(1).to({x:147},0).wait(1).to({x:152.7},0).wait(1).to({x:157},0).wait(1).to({x:160.1},0).wait(1).to({x:162.2},0).wait(1).to({x:163.9},0).wait(1).to({x:165.2},0).wait(1).to({x:166.3},0).wait(1).to({x:167.2},0).wait(1).to({x:167.9},0).wait(1).to({x:168.5},0).wait(1).to({x:169},0).wait(1).to({x:169.4},0).wait(1).to({x:169.6},0).wait(1).to({x:169.9},0).wait(1).to({x:170},0).wait(1).to({x:170.1},0).wait(1).to({x:170.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(95).to({startPosition:0},0).to({x:394.7},18,cjs.Ease.get(1)).wait(1).to({x:-99.2},0).to({x:124.7},17,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).wait(45).to({startPosition:0},0).wait(1).to({x:129.1},0).wait(1).to({x:134.3},0).wait(1).to({x:140.5},0).wait(1).to({x:147},0).wait(1).to({x:152.7},0).wait(1).to({x:157},0).wait(1).to({x:160.1},0).wait(1).to({x:162.2},0).wait(1).to({x:163.9},0).wait(1).to({x:165.2},0).wait(1).to({x:166.3},0).wait(1).to({x:167.2},0).wait(1).to({x:167.9},0).wait(1).to({x:168.5},0).wait(1).to({x:169},0).wait(1).to({x:169.4},0).wait(1).to({x:169.6},0).wait(1).to({x:169.9},0).wait(1).to({x:170},0).wait(1).to({x:170.1},0).wait(1).to({x:170.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46));

	// Layer 10
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAQApIggg4IAAA4IgOAAIAAhRIAOAAIAhA4IAAg4IAOAAIAABRg");
	this.shape_34.setTransform(133.3,149.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgIAqIgIgEIgHgDIgGgGIgEgGIgDgHIgDgQQABgEACgLIADgHIAEgGIAGgGIAHgDIAIgDIAIgBIAJABIAJADIAGADIAGAGIAEAGIADAHQACALAAAEQAAAKgCAGIgDAHIgEAGIgGAGIgGADIgJAEIgJAAIgIAAgAgKgaQgEADgDAEQgDAEgBAGIgBAJIABALQABAFADAEQADAEAEADQAFACAFAAQAGAAAFgCQAEgDAEgEIADgJQACgGAAgFQAAgEgCgFQgBgGgCgEQgEgEgEgDQgFgCgGAAQgFAAgFACg");
	this.shape_35.setTransform(124.7,149.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA5AAIAAAOIgqAAIAAAVIAlAAIAAAMIglAAIAAAig");
	this.shape_36.setTransform(172.8,149.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcApIAAhRIA5AAIAAAOIgqAAIAAAVIAlAAIAAAMIglAAIAAAig");
	this.shape_37.setTransform(166,149.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgIAqIgIgDIgHgFIgFgEIgFgHIgDgIIgCgPQgBgEADgLIADgHIAFgGIAFgGIAHgDIAIgDIAIgBIAJABIAIADIAHADIAGAGIAEAGIADAHQADALAAAEQgBALgCAEIgDAIIgEAHIgGAEIgHAFIgIADIgJAAIgIAAgAgKgaQgEADgDAEQgDAEgBAGIgBAJIABALQABAFADAEQADAEAEACQAFADAFAAQAGAAAFgDQAEgCADgEIAFgJQABgFAAgGQAAgFgBgEQgCgGgDgEQgDgEgEgDQgFgCgGAAQgFAAgFACg");
	this.shape_38.setTransform(157.7,149.6);

	this.instance_4 = new lib.Tween9("synched",0);
	this.instance_4.setTransform(148.1,150.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween10("synched",0);
	this.instance_5.setTransform(372.6,150.3);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween11("synched",0);
	this.instance_6.setTransform(148.1,150.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]}).to({state:[{t:this.instance_4}]},163).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},17).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.instance_4}]},163).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},17).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.instance_4}]},163).to({state:[{t:this.instance_5}]},18).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},17).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(163).to({_off:false},0).to({_off:true,x:372.6},18,cjs.Ease.get(1)).wait(182).to({_off:false,x:148.1},0).to({_off:true,x:372.6},18,cjs.Ease.get(1)).wait(182).to({_off:false,x:148.1},0).to({_off:true,x:372.6},18,cjs.Ease.get(1)).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(163).to({_off:false},18,cjs.Ease.get(1)).wait(1).to({x:-79.8},0).to({_off:true,x:148.1},17,cjs.Ease.get(1)).wait(164).to({_off:false,x:372.6},18,cjs.Ease.get(1)).wait(1).to({x:-79.8},0).to({_off:true,x:148.1},17,cjs.Ease.get(1)).wait(164).to({_off:false,x:372.6},18,cjs.Ease.get(1)).wait(1).to({x:-79.8},0).to({_off:true,x:148.1},17,cjs.Ease.get(1)).wait(115));

	// More green
	this.instance_7 = new lib.green2("synched",0);
	this.instance_7.setTransform(125.9,150,0.62,1,0,0,0,-0.1,12.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},0).wait(1).to({regX:7.4,regY:12.9,scaleX:0.85,x:132.2,y:150.3},0).wait(1).to({scaleX:1.13,x:134.4},0).wait(1).to({scaleX:1.48,x:137},0).wait(1).to({scaleX:1.84,x:139.7},0).wait(1).to({scaleX:2.15,x:142},0).wait(1).to({scaleX:2.36,x:143.6},0).wait(1).to({scaleX:2.5,x:144.7},0).wait(1).to({scaleX:2.59,x:145.3},0).wait(1).to({scaleX:2.65,x:145.8},0).wait(1).to({scaleX:2.71,x:146.2},0).wait(1).to({scaleX:2.75,x:146.5},0).wait(1).to({scaleX:2.79,x:146.8},0).wait(1).to({scaleX:2.82,x:147},0).wait(1).to({scaleX:2.84,x:147.2},0).wait(1).to({scaleX:2.86,x:147.3},0).wait(1).to({scaleX:2.88,x:147.4},0).wait(1).to({scaleX:2.89,x:147.5},0).wait(1).to({scaleX:2.9,x:147.6},0).wait(1).to({scaleX:2.9,x:147.7},0).wait(1).to({scaleX:2.91},0).wait(1).to({scaleX:2.91},0).wait(1).to({scaleX:2.91},0).wait(1).to({regX:-0.1,regY:12.6,x:125.9,y:150},0).wait(95).to({startPosition:0},0).to({x:348.9},18,cjs.Ease.get(1)).to({_off:true},1).wait(63).to({_off:false,scaleX:0.62,x:125.9},0).wait(1).to({regX:7.4,regY:12.9,scaleX:0.85,x:132.2,y:150.3},0).wait(1).to({scaleX:1.13,x:134.4},0).wait(1).to({scaleX:1.48,x:137},0).wait(1).to({scaleX:1.84,x:139.7},0).wait(1).to({scaleX:2.15,x:142},0).wait(1).to({scaleX:2.36,x:143.6},0).wait(1).to({scaleX:2.5,x:144.7},0).wait(1).to({scaleX:2.59,x:145.3},0).wait(1).to({scaleX:2.65,x:145.8},0).wait(1).to({scaleX:2.71,x:146.2},0).wait(1).to({scaleX:2.75,x:146.5},0).wait(1).to({scaleX:2.79,x:146.8},0).wait(1).to({scaleX:2.82,x:147},0).wait(1).to({scaleX:2.84,x:147.2},0).wait(1).to({scaleX:2.86,x:147.3},0).wait(1).to({scaleX:2.88,x:147.4},0).wait(1).to({scaleX:2.89,x:147.5},0).wait(1).to({scaleX:2.9,x:147.6},0).wait(1).to({scaleX:2.9,x:147.7},0).wait(1).to({scaleX:2.91},0).wait(1).to({scaleX:2.91},0).wait(1).to({scaleX:2.91},0).wait(1).to({regX:-0.1,regY:12.6,x:125.9,y:150},0).wait(95).to({startPosition:0},0).to({x:348.9},18,cjs.Ease.get(1)).to({_off:true},1).wait(63).to({_off:false,scaleX:0.62,x:125.9},0).wait(1).to({regX:7.4,regY:12.9,scaleX:0.85,x:132.2,y:150.3},0).wait(1).to({scaleX:1.13,x:134.4},0).wait(1).to({scaleX:1.48,x:137},0).wait(1).to({scaleX:1.84,x:139.7},0).wait(1).to({scaleX:2.15,x:142},0).wait(1).to({scaleX:2.36,x:143.6},0).wait(1).to({scaleX:2.5,x:144.7},0).wait(1).to({scaleX:2.59,x:145.3},0).wait(1).to({scaleX:2.65,x:145.8},0).wait(1).to({scaleX:2.71,x:146.2},0).wait(1).to({scaleX:2.75,x:146.5},0).wait(1).to({scaleX:2.79,x:146.8},0).wait(1).to({scaleX:2.82,x:147},0).wait(1).to({scaleX:2.84,x:147.2},0).wait(1).to({scaleX:2.86,x:147.3},0).wait(1).to({scaleX:2.88,x:147.4},0).wait(1).to({scaleX:2.89,x:147.5},0).wait(1).to({scaleX:2.9,x:147.6},0).wait(1).to({scaleX:2.9,x:147.7},0).wait(1).to({scaleX:2.91},0).wait(1).to({scaleX:2.91},0).wait(1).to({scaleX:2.91},0).wait(1).to({regX:-0.1,regY:12.6,x:125.9,y:150},0).wait(95).to({startPosition:0},0).to({x:348.9},18,cjs.Ease.get(1)).to({_off:true},1).wait(63).to({_off:false,scaleX:0.62,x:125.9},0).wait(1).to({regX:7.4,regY:12.9,scaleX:0.85,x:132.2,y:150.3},0).wait(1).to({scaleX:1.13,x:134.4},0).wait(1).to({scaleX:1.48,x:137},0).wait(1).to({scaleX:1.84,x:139.7},0).wait(1).to({scaleX:2.15,x:142},0).wait(1).to({scaleX:2.36,x:143.6},0).wait(1).to({scaleX:2.5,x:144.7},0).wait(1).to({scaleX:2.59,x:145.3},0).wait(1).to({scaleX:2.65,x:145.8},0).wait(1).to({scaleX:2.71,x:146.2},0).wait(1).to({scaleX:2.75,x:146.5},0).wait(1).to({scaleX:2.79,x:146.8},0).wait(1).to({scaleX:2.82,x:147},0).wait(1).to({scaleX:2.84,x:147.2},0).wait(1).to({scaleX:2.86,x:147.3},0).wait(1).to({scaleX:2.88,x:147.4},0).wait(1).to({scaleX:2.89,x:147.5},0).wait(1).to({scaleX:2.9,x:147.6},0).wait(1).to({scaleX:2.9,x:147.7},0).wait(1).to({scaleX:2.91},0).wait(1).to({scaleX:2.91},0).wait(1).to({scaleX:2.91},0).wait(1).to({regX:-0.1,regY:12.6,x:125.9,y:150},0).wait(46));

	// Green
	this.instance_8 = new lib.Greenbar();
	this.instance_8.setTransform(109.7,137.3,0.5,0.5);

	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.setTransform(125.2,150.3);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween8("synched",0);
	this.instance_10.setTransform(350,150.3);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween12("synched",0);
	this.instance_11.setTransform(125.2,150.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},163).to({state:[{t:this.instance_10}]},18).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},17).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},163).to({state:[{t:this.instance_10}]},18).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},17).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},163).to({state:[{t:this.instance_10}]},18).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},17).to({state:[{t:this.instance_8}]},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(163).to({_off:false},0).to({_off:true,x:350},18,cjs.Ease.get(1)).wait(182).to({_off:false,x:125.2},0).to({_off:true,x:350},18,cjs.Ease.get(1)).wait(182).to({_off:false,x:125.2},0).to({_off:true,x:350},18,cjs.Ease.get(1)).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(163).to({_off:false},18,cjs.Ease.get(1)).wait(1).to({x:-99.9},0).to({_off:true,x:125.2},17,cjs.Ease.get(1)).wait(164).to({_off:false,x:350},18,cjs.Ease.get(1)).wait(1).to({x:-99.9},0).to({_off:true,x:125.2},17,cjs.Ease.get(1)).wait(164).to({_off:false,x:350},18,cjs.Ease.get(1)).wait(1).to({x:-99.9},0).to({_off:true,x:125.2},17,cjs.Ease.get(1)).wait(115));

	// Phone copy
	this.instance_12 = new lib.Phone("synched",0);
	this.instance_12.setTransform(-76,175.6,1,1,0,0,0,88.5,124);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(182).to({_off:false},0).to({x:149},17,cjs.Ease.get(1)).to({_off:true},1).wait(182).to({_off:false,x:-76},0).to({x:149},17,cjs.Ease.get(1)).to({_off:true},1).wait(182).to({_off:false,x:-76},0).to({x:149},17,cjs.Ease.get(1)).to({_off:true},1).wait(114));

	// Phone
	this.instance_13 = new lib.Phone("synched",0);
	this.instance_13.setTransform(149,175.6,1,1,0,0,0,88.5,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(163).to({startPosition:0},0).to({x:374},18,cjs.Ease.get(1)).wait(18).to({startPosition:0},0).wait(1).to({x:149},0).wait(163).to({startPosition:0},0).to({x:374},18,cjs.Ease.get(1)).wait(18).to({startPosition:0},0).wait(1).to({x:149},0).wait(163).to({startPosition:0},0).to({x:374},18,cjs.Ease.get(1)).wait(18).to({startPosition:0},0).wait(1).to({x:149},0).wait(114));

	// Gradient
	this.instance_14 = new lib.Gradient();
	this.instance_14.setTransform(0.5,138.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(714));

	// Layer 9
	this.instance_15 = new lib.expandinggreen("synched",0);
	this.instance_15.setTransform(148,149.6,0.31,0.31,0,0,0,182.8,182.6);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(45).to({_off:false},0).to({regY:182.8,scaleX:1.19,scaleY:1.19},23,cjs.Ease.get(1)).wait(95).to({startPosition:0},0).to({alpha:0},36,cjs.Ease.get(0.99)).to({_off:true},1).wait(45).to({_off:false,regY:182.6,scaleX:0.31,scaleY:0.31,alpha:1},0).to({regY:182.8,scaleX:1.19,scaleY:1.19},23,cjs.Ease.get(1)).wait(95).to({startPosition:0},0).to({alpha:0},36,cjs.Ease.get(0.99)).to({_off:true},1).wait(45).to({_off:false,regY:182.6,scaleX:0.31,scaleY:0.31,alpha:1},0).to({regY:182.8,scaleX:1.19,scaleY:1.19},23,cjs.Ease.get(1)).wait(95).to({startPosition:0},0).to({alpha:0},36,cjs.Ease.get(0.99)).to({_off:true},1).wait(45).to({_off:false,regY:182.6,scaleX:0.31,scaleY:0.31,alpha:1},0).to({regY:182.8,scaleX:1.19,scaleY:1.19},23,cjs.Ease.get(1)).wait(46));

	// Bg
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#424143").ss(1,1,1).p("A6Z17MA0zAAAMAAAAr3Mg0zAAAg");
	this.shape_39.setTransform(158,127.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DADADA").s().p("A6YV8MAAAgr3MA0xAAAMAAAAr3g");
	this.shape_40.setTransform(158,127.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_40},{t:this.shape_39}]},199).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},199).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},199).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.9,-126.9,892.5,800.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;