import React, { useContext, useEffect, useState } from "react";
import { ICart } from "@/types/type";

interface IProps {
  cart: ICart[];
  setCart: React.Dispatch<React.SetStateAction<ICart[]>>;
  adjustQuantityOfAProduct: (x: number, y: boolean) => void;
  addItemToCart: (x: ICart) => void;
  removeItemFromCart: (x: number) => void;
}

const defaultValue: IProps = {
  cart: [],
  setCart: () => [],
  adjustQuantityOfAProduct: () => "",
  addItemToCart: () => "",
  removeItemFromCart: () => "",
};

export const MyContext = React.createContext(defaultValue);

// export const queryClient = new QueryClient();

export const MyContextProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<ICart[]>([]);

  function adjustQuantityOfAProduct(itemId: number, isIncrease: boolean) {
    setCart((el) => {
      if (isIncrease) {
        return el.map((e) =>
          e.id === itemId ? { ...e, quantity: e.quantity + 1 } : e
        );
      } else {
        return el.map((e) =>
          e.id === itemId
            ? { ...e, quantity: e.quantity <= 1 ? e.quantity : e.quantity - 1 }
            : e
        );
      }
    });
  }

  function removeItemFromCart(itemId: number) {
    setCart((el) => el.filter((e) => e.id !== itemId));
  }

  function addItemToCart(newItem: ICart) {
    setCart((el) => [...el, newItem]);
  }

  return (
    <MyContext.Provider
      value={{
        cart,
        setCart,
        adjustQuantityOfAProduct,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
