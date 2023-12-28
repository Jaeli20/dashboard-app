import React, { createContext, useReducer } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    TransitionsModalVisibility: false,
  };

  const appReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_TRANSITIONMODALVISIBILITY":
        return { ...state, TransitionsModalVisibility: action.payload };

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
