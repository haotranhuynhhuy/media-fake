import { useState } from "react";
import { FormType } from "../types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useForm = (initState: FormType) => {
  const [value, setValue] = useState(initState);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  return { value, onChange };
};

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
