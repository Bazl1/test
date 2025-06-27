"use client";

import { useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { Button } from "@/ui";

import { useOnClickOutside, usePopper } from "@/shared";
import { EmojiPickerProps } from "./EmojiPicker.types";

const EmojiPicker = ({ value, onChange }: EmojiPickerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const emojiRef = useRef<HTMLDivElement | null>(null);

  const { setReferenceElement, setPopperElement, popperStyles, attributes } =
    usePopper();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useOnClickOutside(emojiRef, handleClose);

  return (
    <div ref={emojiRef}>
      <div ref={setReferenceElement}>
        <Button variant="secondary" size="lg" onClick={handleToggle}>
          {value ? value : "Select emoji"}
        </Button>
      </div>
      {isOpen ? (
        <div
          ref={setPopperElement}
          style={{
            ...popperStyles.popper
          }}
          {...attributes.popper}
        >
          <Picker
            data={data}
            onEmojiSelect={(emoji: any) => onChange(emoji?.native)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default EmojiPicker;
