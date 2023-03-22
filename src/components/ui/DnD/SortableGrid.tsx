import { useSortable } from "@dnd-kit/sortable";
import { CSSProperties, FC, ReactNode } from "react";

import GridStyles from "./DndGrid.module.css";

type Props = {
  children?: ReactNode;
  id: string;
  gridSize?: number;
};

export const DndSortableGrid: FC<Props> = ({ children, id, gridSize = 32 }) => {
  const { setNodeRef } = useSortable({ id });

  return (
    <main
      ref={setNodeRef}
      className={GridStyles.Grid}
      style={
        {
          "--grid-size": `${gridSize}px`,
        } as CSSProperties
      }
    >
      {children}
    </main>
  );
};
