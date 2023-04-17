import { FC, LazyExoticComponent, lazy } from "react";

export type WidgetProps = { widgetName: string };
export type Widget = FC<WidgetProps>;

type WidgetMap = {
  [K: string]: LazyExoticComponent<Widget> | undefined;
};

export const widgetMap: WidgetMap = {
  ["StringWidget"]: lazy(() => import("./StringWidget")),
};
