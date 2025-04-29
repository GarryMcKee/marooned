export type GuitarNote = {
  guitarString: number;
  fret: number;
};
export type GuitarNoteSequence = {
  warmups: GuitarNote[][];
};