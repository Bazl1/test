"use client";

import { useEffect, useState } from "react";

import { useIsMobileProps } from "./useIsMobile.types";

const useIsMobile = ({ breakpoint = 768 }: useIsMobileProps = {}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return { isMobile };
};

export default useIsMobile;
