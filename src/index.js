/**
 * Created by Nebaz on 15.06.2017.
 */

let usleep = {

  sleep: seconds => {
    return new Promise(resolve => {
      setTimeout(resolve, 1000 * seconds);
    });
  },

  msleep: milliseconds => {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  },

  usleep: microseconds => {
    return new Promise(resolve => {
      setTimeout(resolve, microseconds / 1000);
    });
  }
};

module.exports = usleep;
