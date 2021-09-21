const screenRobot = require('./modules/screenRobot');

const GK = require('global-keypress');
const Timer = require('tiny-timer');

const timer = new Timer();

timer.on('done', () => (open = false));

// instantiate
const gk = new GK();
let open = false;

// launch keypress daemon process
gk.start();

// emitted events by process
gk.on('press', (key) => {
  // OPENS TIMED WINDOW
  if (key.data === '<Tab>') {
    open = true;
    timer.stop();
    timer.start(500);
  }

  // FOCUSES ON RIGHT MONITOR
  if (open && key.data === '<Right>') {
    screenRobot.focusRightMonitor();
    open = false;
  }
  // FOCUSES ON MAIN MONITOR
  if ((open && key.data === '<Down>') || key.data === '<Enter>') {
    screenRobot.focusMainMonitor();
    open = false;
  }
  // FOCUSES ON LEFT MONITOR
  if (open && key.data === '<Left>') {
    screenRobot.focusLeftMonitor();
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
