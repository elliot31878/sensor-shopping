import "tailwindcss/tailwind.css";
import React from "react";

import { useState } from "react";

import { useLoggedIn, useLogin } from "cart/cartAPIActions";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function Login() {
  const loggedIn = useLoggedIn();

  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("elliot");
  const [password, setPassword] = useState("31878");
  const { login } = useLogin();

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i
          className="ri-fingerprint-line text-2xl cursor-pointer"
          id="showLogin"
        />
      </span>
      <Dialog fullWidth open={showLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please login to continue shopping
          </DialogContentText>
        </DialogContent>
        <section className="w-full flex flex-col gap-5 items-center justify-center p-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(ev) => {
              setUsername(ev.target.value);
            }}
            className="border text-sm border-gray-400 p-2 rounded-md w-full text-black"
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
            className="border text-sm border-gray-400 p-2 rounded-md w-full text-black"
          />
          <button
            onClick={() => {
              login({ username, password });
            }}
            className="bg-green-900 text-white py-2 px-5 rounded-md font-light text-sm"
          >
            LOGIN
          </button>
        </section>
      </Dialog>
    </>
  );
}
