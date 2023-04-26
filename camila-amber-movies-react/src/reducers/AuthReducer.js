import localforage from "localforage";

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localforage.setItem("loggedInUser", action.user);
      return {
        ...state,
        user: action.user,
        isAuthorized: action.user.role === "Admin" ? true : false,
      };
    case "LOGOUT":
      localforage.removeItem("loggedInUser");
      return {
        ...state,
        isAuthorized: false,
        user: null,
      };

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const initialAuth = {
  user: null,
  isAuthorized: false,
};
