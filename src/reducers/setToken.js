let data = "";
if (localStorage.getItem("doccure-token")) {
  data = localStorage.getItem("doccure-token");
}

const setToken = (state = "", action) => {
  switch (action.type) {
    case "SET-TOKEN":
      localStorage.setItem("doccure-token", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default setToken;
