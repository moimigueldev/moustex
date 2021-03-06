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
  if (key.data === '`') {
    open = true;
    timer.stop();

    timer.start(500);
  }

  // FOCUSES ON RIGHT MONITORclear

  if (open && key.data === '3') {
    console.log('Shifted focus to right monitor');
    screenRobot.focusRightMonitor();
    open = false;
  }
  // FOCUSES ON MAIN MONITOR
  if (open && key.data === '2') {
    console.log('Shifted focus to main monitor');
    screenRobot.focusMainMonitor();
    open = false;
  }
  // FOCUSES ON LEFT MONITOR
  if (open && key.data === '1') {
    console.log('Shifted focus to left monitor');
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
