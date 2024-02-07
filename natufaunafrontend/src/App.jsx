import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Adoptions from "./pages/Adoptions";
import Sponsorships from "./pages/Sponsorships";
import Donations from "./pages/Donations";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import Regist from "./pages/Regist";
import AdminProvider from "./context/AdminContext";
import UserProvider from "./context/UserContext";
import PrivateRouteUser from "./components/PrivateRouteUser";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import MyAdoptions from "./pages/User/MyAdoptions";
import MySponsorships from "./pages/User/MySponsorships";
import MyDonations from "./pages/User/MyDonations";
import AdminAdoptions from "./pages/Admin/AdminAdoptions";
import AdminSponsorships from "./pages/Admin/AdminSponsorship";
import AdminDonations from "./pages/Admin/AdminDonations";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminProvider>
        <UserProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Toaster
              toastOptions={{ duration: 3000, position: "bottom-right" }}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/adoptions" element={<Adoptions />} />
              <Route path="/sponsorships" element={<Sponsorships />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/login" element={<Login />} />
              <Route path="/regist" element={<Regist />} />
              <Route
                path="/myAdoptions"
                element={
                  <PrivateRouteUser>
                    <MyAdoptions />
                  </PrivateRouteUser>
                }
              />
              <Route
                path="/mySponsorships"
                element={
                  <PrivateRouteUser>
                    <MySponsorships />
                  </PrivateRouteUser>
                }
              />
              <Route
                path="/myDonations"
                element={
                  <PrivateRouteUser>
                    <MyDonations />
                  </PrivateRouteUser>
                }
              />
              <Route
                path="/adminAdoptions"
                element={
                  <PrivateRouteAdmin>
                    <AdminAdoptions />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path="/adminSponsorships"
                element={
                  <PrivateRouteAdmin>
                    <AdminSponsorships />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path="/adminDonations"
                element={
                  <PrivateRouteAdmin>
                    <AdminDonations />
                  </PrivateRouteAdmin>
                }
              />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserProvider>
      </AdminProvider>
    </div>
  );
};

export default App;
