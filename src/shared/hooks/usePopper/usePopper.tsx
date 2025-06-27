import { useState } from "react";
import { usePopper as usePopperLib } from "react-popper";

import { usePopperProps } from "./usePopper.types";

const usePopper = ({
  options,
  placement = "top-start",
  offset = [0, 4]
}: usePopperProps = {}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const { styles: popperStyles, attributes } = usePopperLib(
    referenceElement,
    popperElement,
    {
      placement: placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: offset
          }
        },
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "viewport"
          }
        }
      ],
      ...options
    }
  );

  return {
    referenceElement,
    popperElement,
    setReferenceElement,
    setPopperElement,
    popperStyles,
    attributes
  };
};

export default usePopper;
