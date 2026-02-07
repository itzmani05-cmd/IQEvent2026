import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Register from "./pages/Register";
import ContactPage from "./components/ContactPage";
import NotFound from "./pages/NotFound";
import EventRegister from "./components/EventRegister";
import ScrollTop from "./components/ScrollTop";

const AppRoutes = () => {
  const location = useLocation();
  const [hasClickedPass, setHasClickedPass] = useState(false);

  useEffect(() => {
    if (location.state?.fromPass) {
      setHasClickedPass(true);
    }
  }, [location.state]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/events" element={<Events/>} />
      <Route
        path="/register"
        element={<EventRegister/>}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <BrowserRouter>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#dc2626",
          borderRadius: 8,
          colorBgContainer: "#141414",
          colorBgElevated: "#1f1f1f",
          colorBorder: "#333333",
          colorText: "#fafafa",
          colorTextSecondary: "#a3a3a3",
        },
      }}
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollTop />
        <AppRoutes />
      </TooltipProvider>
    </ConfigProvider>
  </BrowserRouter>
);

export default App;
