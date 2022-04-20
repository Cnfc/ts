import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootReducer } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;
