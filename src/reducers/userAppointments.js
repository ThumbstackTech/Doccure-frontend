const userAppointments = (state = [], action) => {
  switch (action.type) {
    case "USER-APPOINTMENTS":
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default userAppointments;
