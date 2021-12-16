const nonConsultedappointments = (state = [], action) => {
  switch (action.type) {
    case "FETCH-NONCONSULTED-APPOINTMENTS":
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default nonConsultedappointments;
