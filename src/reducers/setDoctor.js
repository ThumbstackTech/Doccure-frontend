const setDoctor = (state = {}, action) => {
  switch (action.type) {
    case "SET-DOCTOR":
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default setDoctor;
