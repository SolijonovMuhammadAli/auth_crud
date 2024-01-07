import React, { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.any,
};
