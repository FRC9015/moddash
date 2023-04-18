import { type FC } from "react";

import { TabContainer } from "@/components/Tab/TabContainer";

type Props = {
  tabId: string;
};

const Page: FC<Props> = ({ tabId }) => {
  return (
    <div>
      <TabContainer tabId={tabId}></TabContainer>
    </div>
  );
};

export default Page;
