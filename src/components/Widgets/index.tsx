import { Suspense } from "react";

import { usePropertiesInTab } from "@/utils/moddash/usePropertiesInTab";

import { type Widget, widgetMap } from "./utils";

const SCALAR = 4;

// eslint-disable-next-line react/prop-types
export const AutoRenderWidget: Widget = ({ widgetName }) => {
  const { type, dimensions, position } = usePropertiesInTab(widgetName);

  const WidgetToRender = widgetMap[type];

  if (!WidgetToRender && type !== "default") {
    console.error({ type });
    throw new Error("Invalid Widget Type!");
  }

  const height = `${dimensions.height * (SCALAR + 2)}rem`,
    width = `${dimensions.width * SCALAR}rem`;

  const x = `${position.x * SCALAR}rem`,
    y = `${position.y * SCALAR}rem`;

  return (
    <div
      className="absolute p-1"
      style={{
        height,
        width,
        maxHeight: height,
        maxWidth: width,
        left: x,
        top: y,
      }}
    >
      {WidgetToRender !== undefined ? (
        <Suspense>
          <WidgetToRender widgetName={widgetName} />
        </Suspense>
      ) : null}
    </div>
  );
};
