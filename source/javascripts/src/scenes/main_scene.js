tm.define("MainScene", {
  superClass: "tm.app.Scene",

  init: function() {
    this.superInit();

    this.star = tm.display.StarShape().addChildTo(this);
    this.star.setPosition(320, 480);

    this.label = tm.display.Label('Hello world.').addChildTo(this);
    this.label.setPosition(320, 880);
  },

  update: function(app) {
    this.star.rotation += 16;

    // move to touch position
    var pointing = app.pointing;
    if (pointing.getPointing()) {
      this.star.x += (pointing.x - this.star.x) * 0.1;
      this.star.y += (pointing.y - this.star.y) * 0.1;
    }
  }
});