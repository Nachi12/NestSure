import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// ============================================
// PAGES
// ============================================

import HomePage from "./pages/HomePage";
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login";

import Signup from "./pages/Signup";

// ============================================
// APP
// ============================================

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* DYNAMIC SERVICE PAGE */}
        <Route
  path="/service/:slug"
  element={<ServiceDetails />}
/>

        {/* AUTH */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;