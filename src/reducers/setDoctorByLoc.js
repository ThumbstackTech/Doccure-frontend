const setDoctorByLoc = (state = [], action) => {
  switch (action.type) {
    case "SET-DOC-LOC":
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default setDoctorByLoc;
