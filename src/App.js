import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
import PrivateRoute from "./components/authentication/PrivateRoute";
import ForgotPassword from "./components/authentication/ForgotPassword";
import UpdateProfile from "./components/authentication/UpdateProfile";
import Profile from "./components/authentication/Profile";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route
              exact
              path="/folder/:folderId"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/update-profile"
              element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
