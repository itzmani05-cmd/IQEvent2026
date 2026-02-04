import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme } from 'antd';
import Index from "./pages/Index";
import Events from "./pages/Events";
import Register from "./pages/Register";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import EventRegister from "./components/EventRegister";

const App = () => (
  <BrowserRouter>
    <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#dc2626',
            borderRadius: 8,
            colorBgContainer: '#141414',
            colorBgElevated: '#1f1f1f',
            colorBorder: '#333333',
            colorText: '#fafafa',
            colorTextSecondary: '#a3a3a3',
          },
        }}
      >
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </ConfigProvider>
  </BrowserRouter>
);

export default App;
