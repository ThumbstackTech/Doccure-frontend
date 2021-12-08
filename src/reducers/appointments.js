const appointments = (state = [], action) => {
  switch (action.type) {
    case "SET-APPOINTMENTS":
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default appointments;
