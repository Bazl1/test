"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { Button, EmojiPicker, Input, Popup } from "@/ui";

import { useCardsStore } from "@/store";
import { HomeAddEmojiPopupSchema, HomeAddEmojiPopupSchemaType } from "@/shared";
import { HomeAddEmojiPopupProps } from "./HomeAddEmojiPopup.types";

import styles from "./HomeAddEmojiPopup.module.scss";

const HomeAddEmojiPopup = ({ handleClose }: HomeAddEmojiPopupProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<HomeAddEmojiPopupSchemaType>({
    resolver: yupResolver(HomeAddEmojiPopupSchema)
  });

  const [emoji, setEmoji] = useState<string | null>(null);

  const addCard = useCardsStore((state) => state.addCard);

  const onSubmit = (data: HomeAddEmojiPopupSchemaType) => {
    if (!emoji) {
      return toast.error("Please select an emoji");
    }

    const card = {
      id: uuidv4(),
      emoji,
      message: data.message,
      createdAt: new Date().toISOString()
    };

    addCard(card);
    toast.success("Emoji added successfully");
    handleClose();
  };

  return (
    <Popup title="Add Emoji" onChange={handleClose}>
      <div className={styles.popup}>
        <form className={styles.popup__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.popup__row}>
            <EmojiPicker value={emoji} onChange={setEmoji} />
          </div>
          <div className={styles.popup__row}>
            <Input
              label="Message"
              error={errors.message?.message}
              {...register("message")}
            />
          </div>
          <div className={styles.popup__row}>
            <Button
              className={styles.popup__btn}
              type="submit"
              variant="secondary"
            >
              Add Emoji
            </Button>
          </div>
        </form>
      </div>
    </Popup>
  );
};

export default HomeAddEmojiPopup;
