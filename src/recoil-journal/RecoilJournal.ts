import produce from "immer";
import {
  useRecoilTransactionObserver_UNSTABLE as useRecoilTransactionObserver,
  RecoilState,
} from "recoil";
import { pickBy, isEqual, Dictionary, isEmpty, difference } from "lodash";
import React from "react";

export const NO_UPDATES = "No state updates.";
export const NEW_STATE = "New State:";

export const makePropertiesUpdatedLabel = (key: string): string =>
  `${key} Properties Updated:`;

export const makeJsonResponse = <T>(
  label: string,
  toJSON: Partial<T>
): string =>
  `${label}
${JSON.stringify(toJSON, null, 2)}`;

const findDifferences = <AtomOrSelectorType>(
  oldState: AtomOrSelectorType,
  newState: AtomOrSelectorType
): any => {
  if (typeof oldState === "string" || typeof oldState === "number") {
    return newState;
  } else if (Array.isArray(oldState) && Array.isArray(newState)) {
    return difference(oldState, newState);
  } else if (typeof oldState === "object" && typeof newState === "object") {
    return pickBy(newState, (value: any, key: keyof AtomOrSelectorType) => {
      return !isEqual(oldState[key], value);
    });
  } else if (typeof oldState !== "object" && typeof newState === "object") {
    return newState;
  }
};

export const logUpdates = <T>(
  oldState: { value: T } | false,
  newState: { value: T } | false,
  key: string,
  journal: RecoilJournal,
  setJournal: (changes: object) => void
): void => {
  let newProperties: Dictionary<any> = {};
  // Find the differences!
  if (oldState && newState) {
    newProperties = findDifferences<T>(oldState.value, newState.value);
  } else if (newState) {
    newProperties = newState.value;
  }
  if (isEmpty(newProperties)) {
    console.info(NO_UPDATES);
  } else if (newState) {
    console.info(
      makeJsonResponse(makePropertiesUpdatedLabel(key), newProperties)
    );
    console.info(makeJsonResponse(NEW_STATE, newState.value));
    const newJournal = produce(journal, (draftState) => {
      draftState[key].push(newProperties);
      return draftState;
    });
    setJournal(newJournal);
  }
};

export type RecoilJournal = {
  [key: string]: object[];
};

export const createJournal = (
  key: string,
  journal: RecoilJournal
): RecoilJournal => {
  // Ensure that window has a recoilJournal and it has this key
  if (!journal[key]) {
    return {
      ...journal,
      [key]: [],
    };
  }
  return journal;
};

type StoreJournalProps<T> = {
  watchAtoms: RecoilState<T>[];
};

export const StoreJournal = (props: StoreJournalProps<any>): null => {
  const [journal, setJournal] = React.useState({});
  useRecoilTransactionObserver(({ snapshot, previousSnapshot }) => {
    props.watchAtoms.forEach((atom) => {
      const { key } = atom;

      const newJournal = createJournal(key, journal);

      // Get the current and previous states, if they exist
      const oldLoadable = previousSnapshot.getLoadable(atom);
      const newLoadable = snapshot.getLoadable(atom);
      const oldState =
        oldLoadable.state !== "hasError"
          ? { value: oldLoadable.contents as typeof props }
          : false;
      const newState =
        newLoadable.state !== "hasError"
          ? { value: newLoadable.contents as typeof props }
          : false;
      logUpdates(oldState, newState, key, newJournal, setJournal);
    });
  });
  return null;
};
