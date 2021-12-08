const consultedappointments = (state = [], action) => {
  switch (action.type) {
    case "FETCH-CONSULTED-APPOINTMENTS":
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default consultedappointments;
