import { forwardRef, Ref } from "react";
import cn from "classnames";

import { FormField } from "@/ui";

import { InputProps } from "./Input.types";

import styles from "./Input.module.scss";

const Input = forwardRef(
  (
    {
      label,
      className,
      size = "md",
      variant = "primary",
      leftIcon,
      rightIcon,
      error,
      isRequired = false,
      isDisabled = false,
      isReadOnly = false,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <FormField
        label={label}
        size={size}
        error={error}
        isRequired={isRequired}
      >
        <label
          className={cn(
            styles.input__row,
            className,
            styles[`input__row_${size}`],
            styles[`input__row_${variant}`],
            {
              [styles.input__row_disabled]: isDisabled,
              [styles.input__row_error]: error
            }
          )}
        >
          {leftIcon ? (
            <div
              className={cn(styles.input__icon, styles[`input__icon_${size}`])}
            >
              {leftIcon}
            </div>
          ) : null}
          <input
            ref={ref}
            className={cn(
              styles.input,
              styles[`input__${size}`],
              styles[`input__${variant}`],
              {
                [styles.input__disabled]: isDisabled
              }
            )}
            type="text"
            required={isRequired}
            disabled={isDisabled}
            readOnly={isReadOnly}
            {...props}
          />
          {rightIcon ? (
            <div
              className={cn(styles.input__icon, styles[`input__icon_${size}`])}
            >
              {rightIcon}
            </div>
          ) : null}
        </label>
      </FormField>
    );
  }
);

export default Input;
