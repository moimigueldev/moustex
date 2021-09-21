# MOUSTEX

Moustex is a program to help you shift focus from mutiple monitors without the need to use your mouse.

Only works with up to 3 monitors and tested on macOS only.

**INSTALLATION**

1.  `npm install moustex`
2.  `npm install`
3.  `sudo node index.js`

**Commands**

1. `Backtick + 1` moves mouse and focuses on monitor to your left.
2. `Backtick + 2` moves mouse and focuses the center monitor.
3. `Backtick + 3` moves mouse and focuses on monitor to your right.

If you want to have this app running in the background. You can open a terminal and run the program. You will have to keep the terminal open.

I recommend using PM2 to create a background service. Visit [PM2](https://github.com/Unitech/pm2) for installation.

**Directions for PM2**

1. Before adding this app to PM2. You will need to manually start the program via terminal in the file directory `sudo node index.js`. Once the program runs for the first time on system restart, you can exit the app `ctrl + c`. This is due to your machine needing permission before starting the app. _Only need to do this when computer restarts_
2. In the file directory run `pm2 start index.js --name {your_desired_name}`
3. The app is now running in the background and you can close the terminal.
   _Refer to [PM2](https://github.com/Unitech/pm2) for more commands._
4. Run `pm2 list` to take a look at all running instances.
