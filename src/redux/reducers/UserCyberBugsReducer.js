import {
  GET_USER_SEARCH,
  GET_USER_BY_PROJECT_ID,
  GET_USER_SEARCH_BY_PROJECT_ID,
} from "../types/UserCyberBugsType";

const { USER_LOGIN } = require("../../ulti/constants/Cyberbugs/Cyberbugs");

let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: usLogin,
  userSearch: [],
  arrUser: [],
};

export const UserLoginCyberBugsReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USER_SEARCH: {
      state.userSearch = action.lstUserSearch;
      return { ...state };
    }

    case GET_USER_BY_PROJECT_ID: {
      state.arrUser = action.arrUser;
      return { ...state };
    }

    case GET_USER_SEARCH_BY_PROJECT_ID: {
      state.arrUser = action.arrUser;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
