import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div>DashboardPage</div>;
    </ProtectedRoute>
  );
};

export default DashboardPage;
