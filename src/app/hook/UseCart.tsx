import { useContext } from "react";
import { CartContext } from "../context/CardContext";

export const useCart = () => useContext(CartContext);