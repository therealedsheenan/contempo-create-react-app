const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};

export default sampleReducer;
