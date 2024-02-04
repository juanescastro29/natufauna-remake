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

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminProvider>
        <UserProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Toaster toastOptions={{ duration: 3000, position: "bottom-right" }} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/adoptions" element={<Adoptions />} />
              <Route path="/sponsorships" element={<Sponsorships />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/login" element={<Login />} />
              <Route path="/regist" element={<Regist />} />
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
