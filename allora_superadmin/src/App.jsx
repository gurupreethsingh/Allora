import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./components/common_components/AuthContext";
import PrivateRoutes from "./components/auth_components/PrivateRoutes";

import Homepage from "./pages/common_pages/Homepage";
import Header from "./components/header_components/Header";
import Footer from "./components/footer_components/Footer";
import PageNotFound from "./pages/common_pages/PageNotFound";
import TopHeader from "./components/header_components/TopHeader";

// dashboard pages for all users
import SuperAdminDashboard from "./pages/superadmin_pages/SuperAdminDashboard";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import EmployeeDashboard from "./pages/employee_pages/EmployeeDashboard";
import OutletDashboard from "./pages/outletpages/OutletDashboard";
import VendorDashboard from "./pages/vendor_pages/VendorDashboard";
import DeliveryPersonDashboard from "./pages/delivery_person_pages/DeliveryPersonDashboard";

// user pages.
import Login from "./pages/user_pages/Login";
import Register from "./pages/user_pages/Register";
import UserDashboard from "./pages/user_pages/UserDashboard";
import ForgotPassword from "./pages/user_pages/ForgotPassword";
import ResetPassword from "./pages/user_pages/ResetPassword";
import Profile from "./pages/user_pages/Profile";
import UpdateProfile from "./pages/user_pages/UpdateProfile";
import AllUsers from "./pages/user_pages/AllUsers";
import SingleUser from "./pages/user_pages/SingleUser";

// contact pages.
import AllMessages from "./pages/contact_pages/AllMessages";
import ReplyMessage from "./pages/contact_pages/ReplyMessage";
import AllReplies from "./pages/contact_pages/AllReplies";

// blog pages.
import AddBlog from "./pages/blog_pages/AddBlog";

// subscription page.
import Subscriptions from "./pages/subscription_pages/Subscriptions";

// ✅ Function to dynamically update the page title based on the current route
const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const getPageTitle = (pathname) => {
      if (pathname === "/" || pathname === "/home" || pathname === "/homepage")
        return "Homepage";
      if (pathname === "/register") return "Register";
      if (pathname === "/login") return "Login";
      if (pathname.startsWith("/user-dashboard/")) return "User Dashboard";
      if (pathname.startsWith("/superadmin-dashboard/"))
        return "Superadmin Dashboard";
      if (pathname.startsWith("/admin-dashboard/")) return "Admin Dashboard";
      if (pathname.startsWith("/employee-dashboard/"))
        return "Employee Dashboard";
      if (pathname.startsWith("/outlet-dashboard/")) return "Outlet Dashboard";
      if (pathname.startsWith("/vendor-dashboard/")) return "Vendor Dashboard";
      if (pathname.startsWith("/delivery-dashboard/"))
        return "Delivery Dashboard";
      if (pathname.startsWith("/forgot-password")) return "Forgot Password";
      if (pathname.startsWith("/reset-password/")) return "Reset Password";
      if (pathname.startsWith("/profile/")) return "Profile";
      if (pathname.startsWith("/all-users")) return "All Users";
      if (pathname.startsWith("/single-user/")) return "Single User";
      if (pathname.startsWith("/all-messages/")) return "All Messages";
      if (pathname.startsWith("/reply-message/")) return "Reply Message";
      if (pathname.startsWith("/all-replies")) return "All Replies";
      if (pathname.startsWith("/add-blog")) return "Add Blog";
      if (pathname.startsWith("/subscriptions")) return "Subscriptions";
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

          {/* user pages */}
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/reset-password" element={<ResetPassword />} />

          <Route
            path="/profile/:id"
            element={
              <PrivateRoutes>
                <Profile />
              </PrivateRoutes>
            }
          />

          <Route
            path="/update-profile/:id"
            element={
              <PrivateRoutes>
                <UpdateProfile />
              </PrivateRoutes>
            }
          />

          <Route
            path="/all-users"
            element={
              <PrivateRoutes allowedRoles={["superadmin"]}>
                <AllUsers />
              </PrivateRoutes>
            }
          />

          <Route
            path="/single-user/:id"
            element={
              <PrivateRoutes allowedRoles={["superadmin"]}>
                <SingleUser />
              </PrivateRoutes>
            }
          />

          {/* Contact and message reply routes */}

          <Route
            path="/all-messages"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "admin"]}>
                <AllMessages />
              </PrivateRoutes>
            }
          />
          <Route
            path="/reply-message/:id"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "admin"]}>
                <ReplyMessage />
              </PrivateRoutes>
            }
          />

          <Route
            path="/all-replies"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "admin"]}>
                <AllReplies />
              </PrivateRoutes>
            }
          />

          {/* blog page routes  */}
          <Route
            path="/add-blog"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "admin"]}>
                <AddBlog />
              </PrivateRoutes>
            }
          />
          {/* subscription page routes  */}
          <Route
            path="/subscriptions"
            element={
              <PrivateRoutes allowedRoles={["superadmin", "admin"]}>
                <Subscriptions />
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
