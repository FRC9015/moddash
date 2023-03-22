import { NetworkTablesTypeInfos } from "ntcore-ts-client";

import useNTValue from "./useNTValue";

type FMSInfoFN = () => {
  eventName: string;
  fmsControlData: number;
  gameSpecificMessage: string;
  isRedAlliance: boolean;
  matchNumber: number;
  matchType: number;
  replayNumber: number;
  stationNumber: number;
};

export const useFMSValues: FMSInfoFN = () => {
  return {
    eventName: useNTValue(
      "/FMSInfo/EventName",
      NetworkTablesTypeInfos.kString,
      ""
    ),
    fmsControlData: useNTValue(
      "/FMSInfo/FMSControlData",
      NetworkTablesTypeInfos.kInteger,
      -1
    ),
    gameSpecificMessage: useNTValue(
      "/FMSInfo/GameSpecificMessage",
      NetworkTablesTypeInfos.kString,
      ""
    ),
    isRedAlliance: useNTValue(
      "/FMSInfo/IsRedAlliance",
      NetworkTablesTypeInfos.kBoolean,
      false
    ),
    matchNumber: useNTValue(
      "/FMSInfo/MatchNumber",
      NetworkTablesTypeInfos.kInteger,
      -1
    ),
    matchType: useNTValue(
      "/FMSInfo/MatchType",
      NetworkTablesTypeInfos.kInteger,
      -1
    ),
    replayNumber: useNTValue(
      "/FMSInfo/ReplayNumber",
      NetworkTablesTypeInfos.kInteger,
      -1
    ),
    stationNumber: useNTValue(
      "/FMSInfo/StationNumber",
      NetworkTablesTypeInfos.kInteger,
      -1
    ),
  };
};
