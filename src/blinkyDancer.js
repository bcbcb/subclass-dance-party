var BlinkyDancer = function(top, left, timeBetweenSteps){
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
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  Dancer.prototype.step.call(this,timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
