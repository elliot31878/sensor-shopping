import { useLoggedIn } from "cart/cartAPIActions";
import React, { useMemo } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const isLoggedIn = useLoggedIn();

  const PATHS = useMemo(() => {
    switch (pathname) {
      case "/":
        return "HOME";
      case "/cart":
        return "CART";
      default:
        return "HOME";
    }
  }, [pathname]);

  return (
    <main
      className="
      z-50
      p-5
    bg-white
      text-3xl
      font-bold
      rounded-full
      sticky
      bottom-5
      mx-auto

      w-1/2
      h-20
      shadow-2xl
        "
    >
      <section className={`absolute -top-5  flex gap-10 w-full justify-center`}>
        <Link
          to={"/"}
          className={`
        rounded-full
        transition-all
        cursor-pointer
        hover:shadow-2xl
        hover:-translate-y-5
        relative
        shadow-2xl
      ${PATHS === "HOME" ? "bg-violet-600" : "bg-white"}
        w-16
        h-16`}
        >
          <p
            className={`
          ri-home-2-fill
        ${PATHS === "HOME" ? "text-white" : "text-black"}
          w-full
          h-full
          flex
          flex-row
          justify-center
          items-center
          text-3xl
          
            `}
          />
        </Link>

        {isLoggedIn && (
          <Link
            to="/cart"
            className={`
        rounded-full
        transition-all
        cursor-pointer
        hover:shadow-2xl
        hover:-translate-y-5
        relative
        shadow-2xl
      ${PATHS === "CART" ? "bg-violet-600" : "bg-white"}
        w-16
        h-16`}
          >
            <p
              className={`
          ri-shopping-cart-2-fill
        ${PATHS === "CART" ? "text-white" : "text-black"}
          w-full
          h-full
          flex
          flex-row
          justify-center
          items-center
          text-3xl
          
            `}
            />
          </Link>
        )}
      </section>
    </main>
  );
}
