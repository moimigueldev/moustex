const robot = require('robotjs');
const screen = robot.getScreenSize();
const mouse = robot.getMousePos();

function focusRightMonitor() {
  robot.moveMouse((screen.width += 10), screen.height / 2);
  robot.mouseClick();
}
function focusLeftMonitor() {
  robot.moveMouse(-10, screen.height / 2);
  robot.mouseClick();
}

function focusMainMonitor() {
  robot.moveMouse(screen.width / 2, screen.height / 2);
  robot.mouseClick();
}

module.exports = { focusLeftMonitor, focusMainMonitor, focusRightMonitor };
