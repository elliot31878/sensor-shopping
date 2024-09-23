import React from "react";
import ReactDOM from "react-dom/client";

import CartContent from "./layout/CartContent";
import Header from "home/Header";
import Footer from "home/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

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
  <QueryClientProvider client={queryClient}>
    <div className="mx-auto max-w-6xl">
      <Header />
      <section className="my-10">
        <CartContent />
      </section>
      <Footer />
    </div>
  </QueryClientProvider>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
