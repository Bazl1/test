"use client";

import { useState } from "react";

import { HomeAddEmojiPopup, HomeCardsGrid, HomeCardsList } from "@/widgets";
import { Button } from "@/ui";

import { useIsMobile } from "@/shared";

import styles from "./Home.module.scss";

const Home = () => {
  const [isAddEmojiPopupOpen, setIsAddEmojiPopupOpen] =
    useState<boolean>(false);

  const { isMobile } = useIsMobile();

  const handleAddEmojiToggle = () => {
    setIsAddEmojiPopupOpen(!isAddEmojiPopupOpen);
  };

  const handleAddEmojiClose = () => {
    setIsAddEmojiPopupOpen(false);
  };

  return (
    <>
      <section className={styles.home}>
        <div className="container">
          <div className={styles.home__inner}>
            <div className={styles.home__row}>
              <h2 className={styles.home__title}>Emoji cards</h2>
              <Button onClick={handleAddEmojiToggle}>Add emoji</Button>
            </div>
            <div className={styles.home__cards}>
              {isMobile ? <HomeCardsList /> : <HomeCardsGrid />}
            </div>
          </div>
        </div>
      </section>
      {isAddEmojiPopupOpen ? (
        <HomeAddEmojiPopup handleClose={handleAddEmojiClose} />
      ) : null}
    </>
  );
};

export default Home;
