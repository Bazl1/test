"use client";

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";

import { HomeCardsListItem } from "@/widgets";

import { useCardsStore } from "@/store";
import { ICard } from "@/shared";

import styles from "./HomeCardsList.module.scss";

const HomeCardsList = () => {
  const { cards, setCards } = useCardsStore((state) => state);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = cards.findIndex((item) => item.id === active.id);
      const newIndex = cards.findIndex((item) => item.id === over.id);

      const newArray = arrayMove(cards, oldIndex, newIndex);
      setCards(newArray);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      {/*  Помилка в терміналі, яка не впливає на функціонал. В доках ліби не знайшов що не так, тому поки просто вимкнув її */}
      {/* DND Kit: https://docs.dndkit.com/presets/sortable/sortable-context */}
      {/*  @ts-expect-error TS2786 */}
      <SortableContext items={cards} strategy={verticalListSortingStrategy}>
        <div className={styles.cards}>
          {cards && cards?.length > 0
            ? cards?.map((card: ICard) => (
                <HomeCardsListItem key={card?.id} card={card} />
              ))
            : null}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default HomeCardsList;
