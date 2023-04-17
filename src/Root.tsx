import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { match } from "ts-pattern";

import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";

import NotFound from "./NotFound";
import { UtilBar } from "./components/UtilBar";
import { router } from "./router";

const queryClient = new QueryClient();

export const Root = () => {
  const routes = router.useRoute(["Home", "Dashboard", "Tab"]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <UtilBar /> */}
      {match(routes)
        .with({ name: "Home" }, () => <Home />)
        .with({ name: "Dashboard" }, () => <Dashboard />)
        .with({ name: "Tab" }, () => <Dashboard />)
        .otherwise(() => (
          <NotFound />
        ))}
    </QueryClientProvider>
  );
};
