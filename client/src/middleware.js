import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "./actions/signup";

const localStorageJwtKey = "currentUserJwt";

export const storeJwt = store => next => action => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      // i can store in the local storage also the user id
      localStorage.setItem(localStorageJwtKey, JSON.stringify(action.payload));
    }
    if (action.type === USER_LOGOUT) {
      localStorage.removeItem(localStorageJwtKey);
    }
  } catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e);
  }

  next(action);
};
