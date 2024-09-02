import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { useState } from "react";

export const AuthGuard = ({ children }) => {
  const auth = useAuth();

  if (!auth.user || auth.user.role === undefined) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
