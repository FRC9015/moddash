import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useWidgetsInTab } from "@/utils/moddash/useWidgetsInTab";

import { AutoRenderWidget } from "../Widgets";
import { InvalidWidget } from "../Widgets/InvalidWidget";

export const WidgetRender: FC = () => {
  const widgets = useWidgetsInTab();

  return (
    <>
      {widgets.map((widget) => (
        <ErrorBoundary fallbackRender={() => <InvalidWidget />} key={widget}>
          <AutoRenderWidget widgetName={widget} />
        </ErrorBoundary>
      ))}
    </>
  );
};
