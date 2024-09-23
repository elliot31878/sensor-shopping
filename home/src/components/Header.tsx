import React from "react";

import Login from "cart/Login";
import MiniCart from "cart/MiniCart";
import { useLoggedIn } from "cart/cartAPIActions";

export default function Header() {
  const isLoggedIn = useLoggedIn();
  return (
    <header className="h-20 p-5 bg-violet-700 text-white text-3xl font-bold  sticky top-0 z-50 rounded-b-lg  shadow-md">
      <section className="flex items-center h-full">
        {isLoggedIn && (
          <span className="flex-grow flex items-center">
            <img
              className="max-h-10 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyi7tmvX97urbes9G8urNT3VmXmhxvGtdElottKliS2GCqdt6-U04l35hxheaWH5JmLY&usqp=CAU"
            />
            <span className="ml-5 text-lg flex flex-col  font-light">
              <p>Elliot</p>
              <p>Aghajanzadeh</p>
            </span>
          </span>
        )}
        <section className="flex-end relative">
          <MiniCart />
          <Login />
        </section>
      </section>
    </header>
  );
}
