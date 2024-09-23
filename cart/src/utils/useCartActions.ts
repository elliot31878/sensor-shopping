import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { jwt, cart } from "./cartAPIActions.pure";

export const KEY_NAMES = ["LOGIN", "CARTS", "ADD_CART", "CLEAR_CART"];

export const useGetCart = () => {
  const { refetch: sendReqForCarts, data } = useQuery({
    enabled: !!jwt && !!jwt.value && jwt.value !== null,
    queryKey: [KEY_NAMES[1]],
    queryFn: () => {
      return axios.get(`${process.env.API_BASE_URL}cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt.value}`,
        },
      });
    },
  });

  const getCarts = async () => {
    if (!!jwt && !!jwt.value && jwt.value !== null) {
      const { data } = await sendReqForCarts();
      const res = data?.data;
      console.log(data, res);
      cart.next(res);
    }
  };

  useEffect(() => {
    const res = data?.data;
    if (res) {
      cart.next(res);
    }
  }, [data?.data]);

  return { getCarts };
};

export const useAddCart = () => {
  const { getCarts } = useGetCart();
  type TParams = {
    id: number;
  };
  type TDATA = {
    data: {};
  };
  type TERROR = { message: string; statusCode: number };

  const { mutate } = useMutation<TDATA, TERROR, TParams>({
    mutationKey: [KEY_NAMES[2]],
    mutationFn: ({ id }) => {
      return axios.post(
        `${process.env.API_BASE_URL}cart`,
        { id: String(id) },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt.value}`,
          },
        }
      );
    },
    onSuccess() {
      getCarts();
    },
  });

  return { addToCart: mutate };
};

export const useClearCart = () => {
  const { getCarts } = useGetCart();

  const { mutate } = useMutation({
    mutationKey: [KEY_NAMES[3]],
    mutationFn: () => {
      return axios.delete(`${process.env.API_BASE_URL}cart`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt.value}`,
        },
      });
    },
    onSuccess() {
      getCarts();
    },
  });

  return { clearCart: mutate };
};

export const useLogin = () => {
  type TParams = {
    username: string;
    password: string;
  };
  type TDATA = {
    data: { access_token: string };
  };
  type TERROR = { message: string; statusCode: number };

  const { getCarts } = useGetCart();
  const { data, mutate: login } = useMutation<TDATA, TERROR, TParams>({
    mutationKey: [KEY_NAMES[0]],
    mutationFn: ({ username, password }) => {
      return axios.post(
        `${process.env.API_BASE_URL}auth/login`,
        { username: String(username), password: String(password) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },
    onSuccess() {
      getCarts();
    },
  });

  useEffect(() => {
    const result = data?.data;
    if (result) {
      jwt.next(result.access_token);
    }
  }, [data?.data]);

  return { login };
};

export const useLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    jwt.subscribe(() => {
      setLoggedIn(!!jwt.value);
    });
  }, []);

  return loggedIn;
};
