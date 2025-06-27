import { ReactNode } from "react";

export interface PopupProps {
  children: ReactNode;
  onChange: () => void;
  title?: string;
  className?: string;
  classNameInner?: string;
}
