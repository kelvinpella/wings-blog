import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> &
  FieldHookConfig<string> &
  ClassAttributes<HTMLInputElement>;
export default function CustomInput(props: Props) {
  const [field, meta] = useField(props);
  return (
    <input
      {...field}
      {...props}
      className="py-1 px-2 bg-ghost-white text-sm rounded-md outline-none"
    ></input>
  );
}
