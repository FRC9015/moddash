import { type FC } from "react";

import { useBaseMDProperties } from "@/utils/moddash/useBaseMDProperties";

type Props = {
  tabId: string;
  widgetName: string;
};
export const WidgetInfo: FC<Props> = ({ tabId, widgetName }) => {
  const properties = useBaseMDProperties(widgetName, tabId);

  return (
    <div className="m-4 rounded border-4 border-black p-4">
      {JSON.stringify(properties)}
    </div>
  );
};
