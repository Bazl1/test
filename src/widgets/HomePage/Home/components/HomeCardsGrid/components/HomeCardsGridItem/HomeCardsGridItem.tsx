"use client";

import { toast } from "react-toastify";

import { Button } from "@/ui";

import { useCardsStore } from "@/store";
import { HomeCardsGridItemProps } from "./HomeCardsGridItem.types";

import styles from "./HomeCardsGridItem.module.scss";

const HomeCardsGridItem = ({ card }: HomeCardsGridItemProps) => {
  const deleteCard = useCardsStore((state) => state.deleteCard);

  const handleDelete = () => {
    deleteCard(card.id);
    toast.success("Card deleted successfully");
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__emoji}>{card?.emoji}</div>
      <p className={styles.card__text}>{card?.message}</p>
      <Button
        className={styles.card__btn}
        variant="secondary"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </div>
  );
};

export default HomeCardsGridItem;
