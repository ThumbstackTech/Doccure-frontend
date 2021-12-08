const setBookmark = (state = {}, action) => {
  switch (action.type) {
    case "SET-BOOKMARK":
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default setBookmark;
