import { Meta, StoryObj } from "@storybook/react";

import { DndSnapGrid } from "./ParentSnapGrid";

const meta: Meta = {
  title: "DnD/SortableSnapGrid",
  component: DndSnapGrid,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {};
