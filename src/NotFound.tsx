import { Link } from "@swan-io/chicane";
import { type FC } from "react";

import { router } from "@/router";

const Page: FC = () => {
  return (
    <div>
      NOT FOUND{" "}
      <Link
        to={router.Home()}
        className="mt-4 rounded bg-blue-500 p-4 text-white hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Page;
