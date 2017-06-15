# usleep

* `sleep` takes a number of seconds and the process will sleep for the given amount of time.
* `msleep` takes a number of milliseconds and the process will sleep for the given amount of time.
* `usleep` takes a number of microseconds and the process will sleep for the given amount of time.

## Usage

Example for CommonJS / Node.js

    let {msleep} = require('usleep');
    msleep(300).then(() => {
      console.info('It slept for 300 milliseconds');
    });

Example for Babel / TypeScript

    import {sleep} from 'usleep';
    async function foo () {
      await sleep(2);
      console.info('It slept for 2 seconds');
    }
    
## Installation

To use the library, install it through [npm](https://npmjs.com)

```shell
npm install --save usleep
```


## API
##### sleep(int seconds)
##### msleep(int milliseconds)
##### usleep(int microseconds)