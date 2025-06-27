import { ReactNode } from "react";

export interface FormFieldProps {
  children: ReactNode;
  label?: string;
  size?: "sm" | "md" | "lg";
  error?: any;
  isRequired?: boolean;
}
