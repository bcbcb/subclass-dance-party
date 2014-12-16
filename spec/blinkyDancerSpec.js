//sinon => replace setTimeout with its own function
//creates a spy that has characteristic of original function + more capability
describe("blinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      // has how many times we called this function. doesn't have on original
      // function but spy has it
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

//sinon => replace setTimeout with its own function
//creates a spy that has characteristic of original function + more capability
describe("bouncyDancer", function() {

  var bouncyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes it bounce", function() {
    sinon.spy(bouncyDancer.$node, 'toggleClass');
    sinon.spy(bouncyDancer.$node, 'addClass');
    bouncyDancer.step();
    expect(bouncyDancer.$node.toggleClass.called).to.be.true;
    expect(bouncyDancer.$node.addClass.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bouncyDancer, "step");
      // has how many times we called this function. doesn't have on original
      // function but spy has it
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(2);
    });
  });
});

//sinon => replace setTimeout with its own function
//creates a spy that has characteristic of original function + more capability
describe("wobblyDancer", function() {

  var wobblyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wobblyDancer = new WobblyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(wobblyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node wobble", function() {
    it("should have a step function that makes it bounce", function() {
    sinon.spy(bouncyDancer.$node, 'toggleClass');
    sinon.spy(bouncyDancer.$node, 'addClass');
    bouncyDancer.step();
    expect(bouncyDancer.$node.toggleClass.called).to.be.true;
    expect(bouncyDancer.$node.addClass.called).to.be.true;
  });  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(wobblyDancer, "step");
      // has how many times we called this function. doesn't have on original
      // function but spy has it
      expect(wobblyDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(wobblyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(wobblyDancer.step.callCount).to.be.equal(2);
    });
  });
});
