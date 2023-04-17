import { FC } from "react";

import { WidgetInfo } from "@/components/Widgets/WidgetInfo";
import { useMDWidgets } from "@/utils/moddash/useMDWidgets";

type Props = {
  tabId: string;
};

const Page: FC<Props> = ({ tabId }) => {
  const widgets = useMDWidgets(tabId);

  return (
    <div>
      {widgets.map((name) => (
        <WidgetInfo tabId={tabId} widgetName={name} key={name} />
      ))}
    </div>
  );
};

export default Page;
