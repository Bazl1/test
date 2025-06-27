"use client";

import { HomeCardsGridItem } from "@/widgets";

import { useCardsStore } from "@/store";
import { ICard } from "@/shared";

import styles from "./HomeCardsGrid.module.scss";

const HomeCardsGrid = () => {
  const cards = useCardsStore((state) => state.cards);

  return (
    <div className={styles.cards}>
      {cards && cards.length > 0
        ? cards?.map((card: ICard) => (
            <HomeCardsGridItem key={card?.id} card={card} />
          ))
        : null}
    </div>
  );
};

export default HomeCardsGrid;
