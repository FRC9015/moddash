import { DndContext, Modifiers } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { FC, ReactNode } from "react";

type Props = { children?: ReactNode; itemIds: string[]; modifiers?: Modifiers };

export const DndParent: FC<Props> = ({ children, itemIds, modifiers }) => {
  return (
    <DndContext modifiers={modifiers}>
      <SortableContext items={itemIds}>{children}</SortableContext>
    </DndContext>
  );
};
