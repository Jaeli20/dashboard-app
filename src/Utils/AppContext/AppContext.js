import React, { createContext, useReducer } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    TransitionsModalVisibility: false,
    DeleteUserModalVisibility: false,
    DeleteUserData: {},
    darkMode: true,
    userData: {},
    globalInfo: {},
    hasPermission: false,
    user_id: "",
    userAdminData: [],
    singleUserAdminData: [],
    adminUserID: "",
    userDataObject: [],
    logData: [],
  };

  const appReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_TRANSITIONMODALVISIBILITY":
        return { ...state, TransitionsModalVisibility: action.payload };
      case "TOGGLE_DELETEUSERMODALVISIBILITY":
        return { ...state, DeleteUserModalVisibility: action.payload };
      case "SET_DELETEUSERDATA":
        return { ...state, DeleteUserData: action.payload };
      case "SET_DARKMODE":
        return { ...state, darkMode: action.payload };
      case "SET_USERDATA":
        return { ...state, userData: action.payload };
      case "SET_GLOBALINFO":
        return { ...state, globalInfo: action.payload };
      case "SET_PERMISSION":
        return { ...state, hasPermission: action.payload };
      case "SET_USERID":
        return { ...state, user_id: action.payload };
      case "SET_USEADMINDATA":
        return { ...state, userAdminData: action.payload };
      case "SET_SINGLEUSEADMINDATA":
        return { ...state, singleUserAdminData: action.payload };
      case "SET_ADMINUSERID":
        return { ...state, adminUserID: action.payload };
      case "SET_GLOBALUSERDATA":
        return { ...state, userDataObject: action.payload };
      case "SET_LOGDATA":
        return { ...state, logData: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
