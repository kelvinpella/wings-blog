import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;
export default function CustomButton({ name, type }: Props) {
  return (
    <button
      type={type}
      className="py-1 px-2.5 bg-royal-blue text-white rounded-md capitalize my-2"
    >
      {name}
    </button>
  );
}
