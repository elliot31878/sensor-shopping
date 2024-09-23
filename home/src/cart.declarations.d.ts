declare module "cart/Login" {
  const Login: React.ComponentType;
  export default Login;
}
declare module "cart/MiniCart" {
  const MiniCart: React.ComponentType;
  export default MiniCart;
}

declare module "cart/cartAPIActions" {
  export const useLoggedIn: () => boolean;
  export const useLogin: () => {
    login: UseMutateFunction<TDATA, TERROR, TParams, unknown>;
  };
  export const useAddCart: () => {
    addToCart: UseMutateFunction<
      AxiosResponse<unknown, unknown>,
      Error,
      void,
      unknown
    >;
  };

  export const useClearCart: () => {
    clearCart: UseMutateFunction<AxiosResponse<any, any>, Error, void, unknown>;
  };
}
declare module "cart/cartAPIActionsPure" {
  export const cart: BehaviorSubject<ICart | null>;
}

declare module "cart/CartContent" {
  const CartContent: React.ComponentType;
  export default CartContent;
}
