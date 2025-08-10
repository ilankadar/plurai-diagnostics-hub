import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import OpenSource from "./pages/OpenSource";
import Research from "./pages/Research";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Product from "./pages/Product";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      const eventParams = {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      };

      if (window.GA_MEASUREMENT_ID) {
        Object.assign(eventParams, { send_to: window.GA_MEASUREMENT_ID });
      }

      window.gtag('event', 'page_view', eventParams);

      console.log('Page view tracked:', {
        title: document.title,
        path: location.pathname + location.search,
        url: window.location.href
      });
    } else {
      console.warn('Google Analytics not initialized (gtag not found)');
    }
  }, [location]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <RouteTracker />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/open-source" element={<OpenSource />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<Index />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename="/">
        <Toaster />
        <Sonner />
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
