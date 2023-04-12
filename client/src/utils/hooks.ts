import { useState } from "react";
import { FormType } from "../types";

export const useForm = (initState: FormType) => {
  const [value, setValue] = useState(initState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  return { value, onChange };
};
