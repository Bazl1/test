import { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "variant"> {
  label?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}
