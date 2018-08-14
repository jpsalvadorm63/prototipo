const API = {};

// Initial Data

const delayms = 4;

API.loginfo = {
  logedIn: false,
  locked: false,
  logedOut: false,
};

API.fetchLogInfo = () => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(API.loginfo)
    })
  });
};
