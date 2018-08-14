import API_INIT from "./_api";

// Actions
export const TEST_LOCAL_SIGNAL = "TEST_LOCAL_SIGNAL";

// Action creators
const testLocalSignal = (localSignal) => {
  return {
    type: TEST_LOCAL_SIGNAL,
    localSignal
  }
};

// Reducer
export const reducer = (state = {}, action) => {
  switch(action.type) {
    case TEST_LOCAL_SIGNAL :
      return {...state, localSignal: action.localSignal};
    default :
      return state;
  }
};

// Middleware
export const logger = (store) => (next) => (action) => {
  const result = next(action);
  if(action.type === TEST_LOCAL_SIGNAL) {
    console.log("00000 - ", action.localSignal);
  }
  return result
};

// Thunks
export const handleTestLocalSignal = () => {
  return (dispatch) => {
    return Promise.all([
      API_INIT.fetchLocalSignal(),
    ]).then(([localSignal]) => {
      dispatch(testLocalSignal(localSignal));
    })
  }
};

// Widget

// Connectors
