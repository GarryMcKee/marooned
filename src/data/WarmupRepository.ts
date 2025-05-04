import warmupsData from "~/assets/notationdata/warmups.json";
import type { GuitarNoteSequence } from "~/components/uimodels/GuitarNote";

export interface TabNoteJSON {
  positions: { str: number; fret: number }[];
  duration: string;
}

const typedWarmupsData = warmupsData as GuitarNoteSequence;

export function getTodaysWarmupNotes(): TabNoteJSON[] {
  const randomIndex = Math.floor(
    Math.random() * typedWarmupsData.warmups.length,
  );
  const warmup = typedWarmupsData.warmups[randomIndex] ?? [];
  return warmup.map((fretString) => {
    return {
      positions: [{ str: fretString.guitarString, fret: fretString.fret }],
      duration: "q",
    };
  });
}
