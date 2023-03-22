import { createSnapModifier } from "@dnd-kit/modifiers";
import { FC, ReactNode, useMemo } from "react";

import { useGridSettings } from "@/state/useGridSettings";

import { DndSortableGrid } from "./SortableGrid";
import { DndParent } from "./SortableParent";

type Props = {
  children?: ReactNode;
};

export const DndSnapGrid: FC<Props> = ({ children }) => {
  const gridSize = useGridSettings((state) => state.gridSize);

  const snap = useMemo(() => createSnapModifier(gridSize), [gridSize]);
  return (
    <DndParent itemIds={["grid-parent"]} modifiers={[snap]}>
      <DndSortableGrid id="grid-parent">{children}</DndSortableGrid>
    </DndParent>
  );
};
