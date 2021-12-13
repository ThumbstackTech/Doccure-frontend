const createToken = (state = [], action) => {
  console.log("createapp payyleoad", action.payload);
  switch (action.type) {
    case "CREATE-TOKEN":
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    default:
      return state;
  }
};

export default createToken;
