import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";
import { match } from "ts-pattern";

import { NTSourceModal } from "@/components/NTSourceInput/Modal";
import { TabBar } from "@/components/Tabs";
import Tab from "@/pages/Tab";
import { router } from "@/router";
import { useSelectNTConnection } from "@/state/useSelectNTConnection";
import NTProvider from "@/utils/nt/NTProvider";
import { useFMSValues } from "@/utils/nt/useFMSValues";

const DashboardRoot: FC = () => {
  const data = useFMSValues();
  console.log("root render");
  return <>{JSON.stringify(data)}</>;
};

const Page: FC = () => {
  const robotURI = useSelectNTConnection((state) => state.robotUri);
  const routes = router.useRoute(["Dashboard", "Tab"]);

  if (!robotURI) {
    throw new Error("We're screwed");
  }

  return (
    <NTProvider uri={robotURI}>
      <TabBar />
      {match(routes)
        .with({ name: "Tab" }, ({ params: { tab } }) => <Tab tabId={tab} />)
        .with({ name: "Dashboard" }, () => <DashboardRoot />)
        .otherwise(() => (
          <DashboardRoot />
        ))}
      <NTSourceModal />
    </NTProvider>
  );
};

const PageWithErrorBoundary = withErrorBoundary(
  () => (
    <>
      <Page />
    </>
  ),
  {
    // eslint-disable-next-line react/prop-types
    FallbackComponent: (props) => <>{props.error}</>,
  }
);

export default PageWithErrorBoundary;
