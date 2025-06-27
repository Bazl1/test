import { create } from "zustand";
import { persist } from "zustand/middleware";

import { CARDS_STORAGE, ICard } from "@/shared";

interface useCardsStoreProps {
  cards: ICard[];
  setCards: (cards: ICard[]) => void;
  addCard: (card: ICard) => void;
  deleteCard: (id: string) => void;
}
const initialState = {
  cards: []
};

export const useCardsStore = create<useCardsStoreProps>()(
  persist(
    (set) => ({
      ...initialState,

      setCards: (cards: ICard[]) => {
        set(() => ({
          cards
        }));
      },

      addCard: (card: ICard) => {
        set((state) => ({
          cards: [...state.cards, card]
        }));
      },

      deleteCard: (id: string) => {
        set((state) => ({
          cards: state.cards.filter((card) => card.id !== id)
        }));
      }
    }),
    {
      name: CARDS_STORAGE
    }
  )
);
