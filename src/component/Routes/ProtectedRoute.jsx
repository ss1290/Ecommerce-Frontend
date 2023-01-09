import { redirect } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ isAuthenticated, isAdmin, children }) => {
  const { loading, user } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated === false) {
      redirect("/login");
    }
    if (isAdmin === true && user.role !== "admin") {
      redirect("/login");
    }
  });

  return <> {loading === false && <>{children}</>}</>;
};

export default ProtectedRoute;
