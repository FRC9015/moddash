import { FC } from "react";

import { NTInput } from "@/components/NTSourceInput/Input";
import { NTInputOptions } from "@/components/NTSourceInput/Options";

const Page: FC = () => {
  return (
    <div className="absolute flex h-screen w-screen items-center justify-center pt-9">
      <section className="mx-4 flex w-96 flex-col items-center justify-center rounded-xl bg-white bg-opacity-10 px-2 py-2 text-white shadow-2xl outline outline-1 outline-offset-0 outline-slate-100 backdrop-blur-lg sm:mx-0 md:px-4 md:py-4">
        <h1 className="mb-4 text-2xl font-bold">FRC ModDash</h1>
        <NTInputOptions />
        <NTInput />
      </section>
    </div>
  );
};

export default Page;
