import acousticRepertoireData from "~/assets/repertoires/acousticRepertoire.json";
import pianoRepertoireData from "~/assets/repertoires/pianoRepertoire.json";
import type { RepertoirePiece } from "~/components/uimodels/RepertoirePiece";

const acousticTracks: RepertoirePiece[] = acousticRepertoireData.tracks;
const pianoTracks: RepertoirePiece[] = pianoRepertoireData.tracks;

export function getAcousticRepertoire(): RepertoirePiece[] {
  return acousticTracks;
}

export function getPianoRepertoire(): RepertoirePiece[] {
  return pianoTracks;
}

export class getElectricRepertoire {}