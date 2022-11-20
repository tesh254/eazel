function init() {
  if (window.createjs) {
    window.eazel.stage = new window.createjs.Stage(canvas);

    window.eazel.stage.setClearColor("#00000");

    const circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);

    window.eazel.stage.addChild();

    window.eazel.stage.update();

    console.log(`window: ${window}`);
  }
}

init();
