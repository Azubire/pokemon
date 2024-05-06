import { TAppDispatch, TRootState } from "@/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const useAppDispatch: () => TAppDispatch = useDispatch;
