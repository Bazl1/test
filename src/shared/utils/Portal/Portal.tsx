"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

import { useMounted } from "@/shared";

const Portal = ({ children }: { children: ReactNode }) => {
  const { isMounted } = useMounted();

  return isMounted ? createPortal(children, document.body) : null;
};

export default Portal;
