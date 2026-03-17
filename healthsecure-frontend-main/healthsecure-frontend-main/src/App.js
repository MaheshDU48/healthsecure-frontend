import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Compliance from "./pages/Compliance";
import Anomalies from "./pages/Anomalies";
import PHIRisks from "./pages/PHIRisks";
import Assets from "./pages/Assets";
import Vulnerabilities from "./pages/Vulnerabilities";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function AppLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, background: "#f8fafc", minHeight: "100vh" }}>
        {children}
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/assets"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Assets />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/vulnerabilities"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Vulnerabilities />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/phi-risks"
        element={
          <ProtectedRoute>
            <AppLayout>
              <PHIRisks />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/compliance"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Compliance />
            </AppLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/anomalies"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Anomalies />
            </AppLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
