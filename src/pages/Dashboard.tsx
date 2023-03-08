import { NTProvider } from "ntcore-react";
import { FC } from "react";
import { withErrorBoundary } from "react-error-boundary";

import { useSelectNTConnection } from "@/state/useSelectNTConnection";

const Page: FC = () => {
  const robotURI = useSelectNTConnection((state) => state.robotUri);

  if (!robotURI) {
    throw new Error("We're screwed");
  }

  return <NTProvider uri={robotURI}></NTProvider>;
};

const PageWithErrorBoundary = withErrorBoundary(Page, {
  // eslint-disable-next-line react/prop-types
  FallbackComponent: (props) => <>{props.error}</>,
});

export default PageWithErrorBoundary;
