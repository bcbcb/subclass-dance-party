var BouncyDancer = function(top, left, timeBetweenSteps){
  //var this = Object.create(BlinkyDancer.prototype);

  // Do something with subclass
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.apply(this,arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = ???.step;
  // consider if this is necessary => no, can just call Dancer.prototype.step()

  //return blinkyDancer;
  //return this; => this line will be incorporated
  this.$node.text("\u2603");
  this.$node.addClass('animated bouncy');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  Dancer.prototype.step.call(this,timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('bounce bouncing');

};


var WobblyDancer = function(top, left, timeBetweenSteps){
  //var this = Object.create(BlinkyDancer.prototype);

  // Do something with
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.apply(this,arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = ???.step;
  // consider if this is necessary => no, can just call Dancer.prototype.step()

  //return blinkyDancer;
  //return this; => this line will be incorporated
  var arr = ["\u2744", "\u2745", "\u2746"];
  var snowflakeCode = arr[Math.floor(Math.random() * 3)];
  this.$node.text(snowflakeCode);
  this.$node.addClass('wobbly');
};

WobblyDancer.prototype = Object.create(Dancer.prototype);
WobblyDancer.prototype.constructor = WobblyDancer;

WobblyDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  Dancer.prototype.step.call(this,timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass('animated wobble glow');

  this.$node.animate({  borderSpacing: -90 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
},'linear');

  this.setPosition(
    this.top + Math.floor(Math.random() * 30),
    this.left + Math.floor(Math.random() * 201) - 100
    );


};

var FlyingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  this.t = 0;
  this.$node.addClass("flying");
};

FlyingDancer.prototype = Object.create(Dancer.prototype);
FlyingDancer.prototype.constructor = FlyingDancer;

FlyingDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  Dancer.prototype.step.call(this,timeBetweenSteps);

  this.setPosition( Math.sin(2 * this.t) * 500 + 500, Math.sin(1 * this.t) * 500 + 500);
  console.log(this.top, this.left);
  this.t++;
};

