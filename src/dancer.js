// Creates and returns a new dancer object that can step
// Base Class => must refactor to pseudoclassical first
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.$node.mouseover(function() {
    $(this).toggleClass('glow');
  });

  this.step(timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function() {
    context.step(timeBetweenSteps);
  }, timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  this.top = top;
  this.left = left;

  this.checkDistance();
};

Dancer.prototype.lineUp = function () {
  this.setPosition(400, this.left);
  var context = this;
  var conga = setInterval(function() {
    context.setPosition(context.top, context.left + 30);
  }, 500);
};

Dancer.prototype.checkDistance = function () {
  var threshold = 100;

  for (var i = 0; i < window.dancers.length; i++) {
    var neighbor = window.dancers[i];
    if (neighbor === this ) {
      continue;
    }
    var a = Math.pow( this.top - neighbor.top, 2);
    var b = Math.pow( this.left - neighbor.left, 2);
    var c = Math.sqrt(a + b);

    if (c <= threshold) {
      this.$node.addClass("animated rubberBand red");
      neighbor.$node.addClass("animated rubberBand blue");
    };
  }
}
