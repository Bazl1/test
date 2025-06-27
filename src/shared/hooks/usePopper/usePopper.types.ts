import { PopperProps } from "react-popper";
import { Placement } from "@popperjs/core";

export interface usePopperProps {
  options?: PopperProps<any>;
  placement?: Placement;
  offset?: number[];
}
