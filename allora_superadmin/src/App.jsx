import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./components/common_components/AuthContext";
import PrivateRoutes from "./components/auth_components/PrivateRoutes";

import Homepage from "./pages/common_pages/Homepage";
import Login from "./pages/user_pages/Login";
import Register from "./pages/user_pages/Register";
import UserDashboard from "./pages/user_pages/UserDashboard";
import Header from "./components/header_components/Header";
import Footer from "./components/header_components/Footer";
import PageNotFound from "./pages/common_pages/PageNotFound";
import ContactUs from "./pages/common_pages/ContactUs";
import TopHeader from "./components/header_components/TopHeader";

import SuperAdminDashboard from "./pages/superadmin_pages/SuperAdminDashboard";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import EmployeeDashboard from "./pages/employee_pages/EmployeeDashboard";
import OutletDashboard from "./pages/outletpages/OutletDashboard";
import VendorDashboard from "./pages/vendor_pages/VendorDashboard";
import DeliveryPersonDashboard from "./pages/delivery_person_pages/DeliveryPersonDashboard";
import AboutUs from "./pages/common_pages/AboutUs";

// ✅ Function to dynamically update the page title based on the current route
const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname) => {
      if (pathname === "/" || pathname === "/home" || pathname === "/homepage") return "Homepage";
      if (pathname === "/contact-us") return "Contact Us";
      if (pathname === "/about-us") return "About Us";
      if (pathname === "/register") return "Register";
      if (pathname === "/login") return "Login";
      if (pathname.startsWith("/user-dashboard/")) return "User Dashboard";
      if (pathname.startsWith("/superadmin-dashboard/")) return "Superadmin Dashboard";
      if (pathname.startsWith("/admin-dashboard/")) return "Admin Dashboard";
      if (pathname.startsWith("/employee-dashboard/")) return "Employee Dashboard";
      if (pathname.startsWith("/outlet-dashboard/")) return "Outlet Dashboard";
      if (pathname.startsWith("/vendor-dashboard/")) return "Vendor Dashboard";
      if (pathname.startsWith("/delivery-dashboard/")) return "Delivery Dashboard";
      return "Page Not Found";
    };

    document.title = `${getPageTitle(location.pathname)} - Allora`;
  }, [location.pathname]); // ✅ Runs only when pathname changes

  return null;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <TitleUpdater /> {/* ✅ Ensures the title updates dynamically */}
        <ToastContainer />
        <TopHeader />
        <Header />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="/*" element={<PageNotFound />} />

          {/* Private Routes with Role-Based Access */}
          <Route
            path="/dashboard/:id"
            element={
              <PrivateRoutes>
                <UserDashboard />
              </PrivateRoutes>
            }
          />
          <Route
            path="/user-dashboard/:id"
            element={
              <PrivateRoutes>
                <UserDashboard />
              </PrivateRoutes>
            }
          />

          <Route
            path="/superadmin-dashboard/:id"
            element={
              <PrivateRoutes allowedRoles={["superadmin"]}>
                <SuperAdminDashboard />
              </PrivateRoutes>
            }
          />

          <Route
            path="/admin-dashboard/:id"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "admin"]}>
                <AdminDashboard />
              </PrivateRoutes>
            }
          />

          <Route
            path="/employee-dashboard/:id"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "employee"]}>
                <EmployeeDashboard />
              </PrivateRoutes>
            }
          />

          <Route
            path="/outlet-dashboard/:id"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "outlet"]}>
                <OutletDashboard />
              </PrivateRoutes>
            }
          />

          <Route
            path="/vendor-dashboard/:id"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "vendor"]}>
                <VendorDashboard />
              </PrivateRoutes>
            }
          />

          <Route
            path="/delivery-dashboard/:id"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "delivery_agent"]}>
                <DeliveryPersonDashboard />
              </PrivateRoutes>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
