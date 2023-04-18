import { type FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { match } from "ts-pattern";

import NotFound from "@/NotFound";
import { NTSourceModal } from "@/components/NTSourceInput/Modal";
import { TabBar } from "@/components/TabBar";
import Tab from "@/pages/Tab";
import { router } from "@/router";
import { useSelectNTConnection } from "@/state/useSelectNTConnection";
import NTProvider from "@/utils/nt/NTProvider";

const Page: FC = () => {
  const robotURI = useSelectNTConnection((state) => state.robotUri);
  const routes = router.useRoute(["Dashboard", "Tab"]);

  if (!robotURI) {
    throw new Error("We're screwed");
  }

  return (
    <NTProvider uri={robotURI}>
      <TabBar />

      <ErrorBoundary
        fallbackRender={() => (
          <>
            Unhappy Other <NotFound />
          </>
        )}
      >
        {match(routes)
          .with({ name: "Tab" }, ({ params: { tab } }) => <Tab tabId={tab} />)
          .with({ name: "Dashboard" }, () => <Tab tabId="Dashboard" />)
          .otherwise(() => (
            <NotFound />
          ))}
        <NTSourceModal />
      </ErrorBoundary>
    </NTProvider>
  );
};

export default Page;
