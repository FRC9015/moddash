import { ChangeEvent, useState } from "react";
import { match } from "ts-pattern";

import { router } from "@/router";
import { useSelectNTConnection } from "@/state/useSelectNTConnection";

export const NTInput = () => {
  const selectedInput = useSelectNTConnection((state) => state.inputOption);
  return (
    <div className="mt-2 self-start">
      {match(selectedInput)
        .with("rio", () => <RioInput />)
        .with("localhost", () => <SimulationInput />)
        .otherwise(() => (
          <></>
        ))}
    </div>
  );
};

const RioInput = () => {
  const [value, setValue] = useState<number>(9015);
  const [disabled, setDisabled] = useState(false);

  const setURIWithTeamNo = useSelectNTConnection(
    (state) => state.setURIWithTeamNo
  );
  const setModalOpen = useSelectNTConnection((state) => state.setModalOpen);

  // eslint-disable-next-line no-undef
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.valueAsNumber;

    const valueString = String(value);

    if (valueString.length > 5) {
      value = Number(valueString.slice(0, 5));
    }

    if (value > 10000 || value < 1) {
      if (value > 10000) {
        value = 10000;
      } else if (value < 1) {
        value = 1;
      }
    }

    setValue(value);
  };

  const handleSubmit = async () => {
    setDisabled(true);
    console.log({ value });

    if (Number.isNaN(value)) {
      setDisabled(false);
      return;
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        setURIWithTeamNo(value);
        resolve("done");
      }, 50);
    });

    setModalOpen(false);
    router.push("Dashboard");
  };

  return (
    <>
      <label htmlFor="roborio" className="block text-sm font-medium leading-6 ">
        Connect to a roboRIO
      </label>
      <div className=" flex rounded-md shadow-sm">
        <span className=" inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-white px-3 text-gray-500 sm:text-sm">
          roborio-
        </span>
        <input
          type="number"
          value={value}
          onChange={handleInput}
          min={1}
          max={10000}
          name="roborio"
          id="roborio"
          className=" block w-20 min-w-0 flex-1 border-0 py-1.5 text-center text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
          placeholder="9995"
          disabled={disabled}
        />
        <span className=" inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-white px-3 text-gray-500 sm:text-sm">
          -team.local
        </span>
        <button
          onClick={handleSubmit}
          className="ml-4 h-10 w-10 rounded-md bg-blue-700 p-2 text-white"
        >
          Go
        </button>
      </div>
    </>
  );
};

const SimulationInput = () => {
  const [value, setValue] = useState<number>(5810);
  const [disabled, setDisabled] = useState(false);

  const setURIWithLocalhost = useSelectNTConnection(
    (state) => state.setURIWithLocalhost
  );
  const setModalOpen = useSelectNTConnection((state) => state.setModalOpen);

  // eslint-disable-next-line no-undef
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.valueAsNumber;

    const valueString = String(value);

    if (valueString.length > 5) {
      value = Number(valueString.slice(0, 5));
    }

    if (value > 65535 || value < 1) {
      if (value > 65535) {
        value = 65535;
      } else if (value < 1) {
        value = 1;
      }
    }

    setValue(value);
  };

  const handleSubmit = async () => {
    setDisabled(true);

    if (Number.isNaN(value)) {
      setDisabled(false);
      return;
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        setURIWithLocalhost(value);
        resolve("done");
      }, 50);
    });

    setModalOpen(false);
    router.push("Dashboard");
  };

  return (
    <>
      <label
        htmlFor="simulation"
        className="block text-sm font-medium leading-6 "
      >
        Connect to a simulation
      </label>
      <div className=" flex rounded-md shadow-sm">
        <span className=" inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-white px-3 text-gray-500 sm:text-sm">
          localhost:
        </span>
        <input
          type="number"
          value={value}
          onChange={handleInput}
          min={1}
          max={65535}
          name="simulation"
          id="simulation"
          className=" block w-[5.5rem] min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-left text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
          placeholder="5810"
          disabled={disabled}
        />
        <button
          onClick={handleSubmit}
          className="ml-4 h-10 w-10 rounded-md bg-blue-700 p-2 text-white"
        >
          Go
        </button>
      </div>
    </>
  );
};
