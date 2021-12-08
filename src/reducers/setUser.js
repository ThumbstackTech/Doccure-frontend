const setUser = (state = {}, action) => {
  switch (action.type) {
    case "SET-USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default setUser;
