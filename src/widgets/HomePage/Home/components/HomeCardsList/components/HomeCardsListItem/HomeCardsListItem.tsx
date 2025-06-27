"use client";

import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { useSwipeable } from "react-swipeable";
import { toast } from "react-toastify";

import { useCardsStore } from "@/store";
import { HomeCardsListItemProps } from "./HomeCardsListItem.types";

import styles from "./HomeCardsListItem.module.scss";

const HomeCardsListItem = ({ card }: HomeCardsListItemProps) => {
  const deleteCard = useCardsStore((state) => state.deleteCard);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleDelete(),
    delta: 50,
    preventScrollOnSwipe: true,
    trackTouch: true
  });

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: card?.id });

  const handleDelete = () => {
    deleteCard(card.id);
    toast.success("Card deleted successfully");
  };

  return (
    <div
      ref={setNodeRef}
      className={styles.card__wrapper}
      style={{
        transform: CSS.Transform.toString(transform),
        transition
      }}
      {...listeners}
      {...attributes}
    >
      <div className={styles.card} {...handlers}>
        <div className={styles.card__emoji}>{card?.emoji}</div>
        <p className={styles.card__text}>{card?.message}</p>
      </div>
    </div>
  );
};

export default HomeCardsListItem;
