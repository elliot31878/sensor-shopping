import "remixicon/fonts/remixicon.css";

import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import SensorsContent from "sensors/SensorsContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../index.scss";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount) => {
        if (failureCount > 2) return false;

        return true;
      },
    },
  },
});

export const MainLayout = React.memo(() => {
  return (
    <div className="text-3xl mx-auto max-w-6xl h-lvh w-full">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/sensor/:id" element={<SensorsContent />} />
            <Route path="/cart" element={<CartContent />} />
            <Route element={<>NOTFOUND</>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
});

export default MainLayout;
