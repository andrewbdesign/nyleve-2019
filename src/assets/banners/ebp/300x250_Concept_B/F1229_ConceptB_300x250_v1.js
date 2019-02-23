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
		{src:"images/Bg300x250_retinajpg.jpg", id:"Bg300x250_retinajpg"},
		{src:"images/checked2.png", id:"checked2"},
		{src:"images/Cta.png", id:"Cta"},
		{src:"images/PHONEEETHISONE.png", id:"PHONEEETHISONE"},
		{src:"images/Phonescreen.jpg", id:"Phonescreen"},
		{src:"images/Text300x250.png", id:"Text300x250"}
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



(lib.Bg300x250_retinajpg = function() {
	this.initialize(img.Bg300x250_retinajpg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,846,500);


(lib.checked2 = function() {
	this.initialize(img.checked2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,413,245);


(lib.Cta = function() {
	this.initialize(img.Cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,537,80);


(lib.PHONEEETHISONE = function() {
	this.initialize(img.PHONEEETHISONE);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,530);


(lib.Phonescreen = function() {
	this.initialize(img.Phonescreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,727);


(lib.Text300x250 = function() {
	this.initialize(img.Text300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,146);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bg300x250_retinajpg();
	this.instance.setTransform(-211.5,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-125,423,250);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bg300x250_retinajpg();
	this.instance.setTransform(-211.5,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.5,-125,423,250);


(lib.Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Text300x250();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105,73);


(lib.Screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Phonescreen();
	this.instance.setTransform(0,29.7,0.476,0.474,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245.2,370.6);


(lib.Phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PHONEEETHISONE();
	this.instance.setTransform(0,0,0.935,0.932);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,322.5,494);


(lib.Notification = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.checked2();
	this.instance.setTransform(0,0,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194.1,115.2);


(lib.CTAA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cta();
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.8,38.4);


// stage content:
(lib.F1229_ConceptB_300x250_v3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("A3YziMAuxAAAMAAAAnFMguxAAAg");
	this.shape.setTransform(150.3,125.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(649));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#444444").ss(0.1,1,1).p("Eg1Zg0RIAAjRMBCbAAAIAADRALaShIAAq/MAkhAAAIKeAAMAAAAj3I2QAAIAAMKMhehAAAMAAAglCIQsAAIAAmSIAAiYEAkJArZI4vAAIAA44EgpsAShMA1GAAA");
	this.shape_1.setTransform(255.7,191.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("EgvJA16MAAAglCIQtAAMA1GAAAIAAY5IYvAAIAAMJgEAvZApxI4vAAIAA45Mg1GAAAIAAmRMgnMAAAMAAAgtcIbeAAIAAzEMBCbAAAIAATEMAi5AAAMAAAAouMgkgAAAIAAK/IAAq/MAkgAAAIKfAAMAAAAj4gA+cKnIAAiYgA8sHiMAu7AAAMAAAgnGMgu7AAAgEAvZApxg");
	this.shape_2.setTransform(183.8,202.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},14).to({state:[{t:this.shape_2},{t:this.shape_1}]},194).to({state:[{t:this.shape_2},{t:this.shape_1}]},11).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},14).to({state:[{t:this.shape_2},{t:this.shape_1}]},194).to({state:[{t:this.shape_2},{t:this.shape_1}]},11).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},14).to({state:[{t:this.shape_2},{t:this.shape_1}]},194).wait(1));

	// Text
	this.instance = new lib.Text("synched",0);
	this.instance.setTransform(-28.5,124.5,1,1,0,0,0,52.5,36.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).to({x:68.5,alpha:1},39,cjs.Ease.get(1)).to({startPosition:0},113).to({x:-28.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(56).to({_off:false},0).to({x:68.5,alpha:1},39,cjs.Ease.get(1)).to({startPosition:0},113).to({x:-28.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(56).to({_off:false},0).to({x:68.5,alpha:1},39,cjs.Ease.get(1)).to({startPosition:0},113).wait(1));

	// Cta
	this.instance_1 = new lib.CTAA("synched",0);
	this.instance_1.setTransform(149.9,223.2,1,1,0,0,0,128.9,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({startPosition:0},0).to({regY:19.5,scaleX:1.16,scaleY:1.16,x:149.8,y:223.3},7,cjs.Ease.get(1)).to({regY:19.4,scaleX:0.95,scaleY:0.95,y:223.2},4,cjs.Ease.get(1)).to({regX:129.2,regY:19.8,scaleX:1,scaleY:1,x:149.9,y:223.3},3,cjs.Ease.get(1)).wait(79).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(1).to({regX:128.9,regY:19.3,y:223.2},0).wait(115).to({startPosition:0},0).to({regY:19.5,scaleX:1.16,scaleY:1.16,x:149.8,y:223.3},7,cjs.Ease.get(1)).to({regY:19.4,scaleX:0.95,scaleY:0.95,y:223.2},4,cjs.Ease.get(1)).to({regX:129.2,regY:19.8,scaleX:1,scaleY:1,x:149.9,y:223.3},3,cjs.Ease.get(1)).wait(79).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(1).to({regX:128.9,regY:19.3,y:223.2},0).wait(115).to({startPosition:0},0).to({regY:19.5,scaleX:1.16,scaleY:1.16,x:149.8,y:223.3},7,cjs.Ease.get(1)).to({regY:19.4,scaleX:0.95,scaleY:0.95,y:223.2},4,cjs.Ease.get(1)).to({regX:129.2,regY:19.8,scaleX:1,scaleY:1,x:149.9,y:223.3},3,cjs.Ease.get(1)).wait(79).to({startPosition:0},0).wait(1));

	// Notification
	this.instance_2 = new lib.Notification("synched",0);
	this.instance_2.setTransform(151.1,110.6,0.93,0.93,0,0,0,97.1,57.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regX:97,scaleX:1,scaleY:1,x:151,alpha:1},6,cjs.Ease.get(1)).wait(31).to({startPosition:0},0).to({x:248},39,cjs.Ease.get(1)).to({startPosition:0},113).to({regX:97.1,scaleX:0.93,scaleY:0.93,x:151.1,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(19).to({_off:false},0).to({regX:97,scaleX:1,scaleY:1,x:151,alpha:1},6,cjs.Ease.get(1)).wait(31).to({startPosition:0},0).to({x:248},39,cjs.Ease.get(1)).to({startPosition:0},113).to({regX:97.1,scaleX:0.93,scaleY:0.93,x:151.1,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(19).to({_off:false},0).to({regX:97,scaleX:1,scaleY:1,x:151,alpha:1},6,cjs.Ease.get(1)).wait(31).to({startPosition:0},0).to({x:248},39,cjs.Ease.get(1)).to({startPosition:0},113).wait(1));

	// Scree
	this.instance_3 = new lib.Screen("synched",0);
	this.instance_3.setTransform(155.5,131.7,1,1,0,0,0,122.6,185.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({x:252.5},39,cjs.Ease.get(1)).to({startPosition:0},113).to({x:155.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(14).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({x:252.5},39,cjs.Ease.get(1)).to({startPosition:0},113).to({x:155.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},1).wait(14).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(33).to({startPosition:0},0).to({x:252.5},39,cjs.Ease.get(1)).to({startPosition:0},113).wait(1));

	// Phone
	this.instance_4 = new lib.Phone("synched",0);
	this.instance_4.setTransform(167.2,141,1,1,0,0,0,161.2,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(42).to({startPosition:0},0).to({x:264.2},39,cjs.Ease.get(1)).to({startPosition:0},113).to({x:167.2},11,cjs.Ease.get(1)).to({startPosition:0},1,cjs.Ease.get(1)).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(42).to({startPosition:0},0).to({x:264.2},39,cjs.Ease.get(1)).to({startPosition:0},113).to({x:167.2},11,cjs.Ease.get(1)).to({startPosition:0},1,cjs.Ease.get(1)).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(1).to({regY:247.1,rotation:-2,y:141.1},0).wait(1).to({regY:247,rotation:0,y:141},0).wait(42).to({startPosition:0},0).to({x:264.2},39,cjs.Ease.get(1)).to({startPosition:0},113).wait(1));

	// BG
	this.instance_5 = new lib.Bg300x250_retinajpg();
	this.instance_5.setTransform(-97,0,0.5,0.5);

	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.setTransform(114.5,125);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.setTransform(211.5,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:true},40).wait(163).to({_off:false},1,cjs.Ease.get(1)).wait(16).to({_off:true},40).wait(163).to({_off:false},1,cjs.Ease.get(1)).wait(16).to({_off:true},40).wait(153));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56).to({_off:false},0).to({_off:true,x:211.5},39,cjs.Ease.get(1)).wait(113).to({_off:false,x:114.5},11,cjs.Ease.get(1)).to({_off:true,scaleX:0.5,scaleY:0.5,x:-97,y:0},1,cjs.Ease.get(1)).wait(56).to({_off:false,scaleX:1,scaleY:1,x:114.5,y:125,mode:"synched",startPosition:0},0).to({_off:true,x:211.5},39,cjs.Ease.get(1)).wait(113).to({_off:false,x:114.5},11,cjs.Ease.get(1)).to({_off:true,scaleX:0.5,scaleY:0.5,x:-97,y:0},1,cjs.Ease.get(1)).wait(56).to({_off:false,scaleX:1,scaleY:1,x:114.5,y:125,mode:"synched",startPosition:0},0).to({_off:true,x:211.5},39,cjs.Ease.get(1)).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(56).to({_off:false},39,cjs.Ease.get(1)).to({startPosition:0},113).to({_off:true,x:114.5},11,cjs.Ease.get(1)).wait(57).to({_off:false,x:211.5},39,cjs.Ease.get(1)).to({startPosition:0},113).to({_off:true,x:114.5},11,cjs.Ease.get(1)).wait(57).to({_off:false,x:211.5},39,cjs.Ease.get(1)).to({startPosition:0},113).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.9,-39.9,892.5,713);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;