const API = {};

// Initial Data

const delayms = 4;

API.localSignal = {
  code: ["MADIF, Living Thing'"]
};

API.fetchLocalSignal = () => {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(API.localSignal.code[0])
    }, delayms)
  })
};

export default API;
