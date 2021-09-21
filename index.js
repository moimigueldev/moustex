// Get pixel color under the mouse.
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

// focusRightMonitor();
// focusLeftMonitor();
// focusMainMonitor();

const GK = require('global-keypress');
const Timer = require('tiny-timer');

const timer = new Timer();

timer.on('done', () => {
  console.log('DONE WITH THE TIMER');
  open = false;
});

// instantiate
const gk = new GK();
let open = false;

// launch keypress daemon process
gk.start();

// emitted events by process
gk.on('press', (key) => {
  console.log(key.data);

  // OPENS TIMED WINDOW
  if (key.data === '<Tab>') {
    open = true;
    timer.stop();
    timer.start(500);
  }

  // FOCUSES ON RIGHT MONITOR
  if (open && key.data === '<Right>') {
    focusRightMonitor();
    console.log('FOCUSING ON RIGHT MONITOR');
    open = false;
  }
  // FOCUSES ON MAIN MONITOR
  if (open && key.data === '<Down>') {
    focusMainMonitor();
    console.log('FOCUSING ON RIGHT MONITOR');
    open = false;
  }
  // FOCUSES ON LEFT MONITOR
  if (open && key.data === '<Left>') {
    focusLeftMonitor();
    console.log('FOCUSING ON RIGHT MONITOR');
    open = false;
  }
});

// process error
gk.on('error', (error) => {
  console.error(error);
});

// process closed
gk.on('close', () => {
  console.log('closed');
});
