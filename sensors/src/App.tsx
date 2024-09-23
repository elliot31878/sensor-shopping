import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import SafeComponent from "./components/SafeComponent";
import SensorsContent from "./layout/SensorsContent";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Outlet, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));

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

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <SafeComponent>
          <Header />
          <section className="mt-10">
            <Outlet />
          </section>
          <Footer />
        </SafeComponent>
      </Suspense>
    </QueryClientProvider>
  </div>
);

export const RouteLayout = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="sensor/:id" element={<SensorsContent />} />
        </Route>
        <Route element={<>NOTFOUND</>} />
      </Routes>
    </BrowserRouter>
  );
});

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<RouteLayout />);
