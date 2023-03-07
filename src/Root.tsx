import { match } from "ts-pattern";

import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";

import NotFound from "./NotFound";
import { UtilBar } from "./components/UtilBar";
import { router } from "./router";

export const Root = () => {
  const routes = router.useRoute(["Home", "Dashboard"]);

  return (
    <>
      <UtilBar />
      {match(routes)
        .with({ name: "Home" }, () => <Home />)
        .with({ name: "Dashboard" }, () => <Dashboard />)
        .otherwise(() => (
          <NotFound />
        ))}
    </>
  );
};
