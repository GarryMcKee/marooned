import WarmupNotation from "~/components/WarmupComponent";
import FretboardMemorisation from "~/components/FretboardMemorisation";
import RepertoireWorkout from "~/components/RepertoireWorkout";
import {
  getAcousticRepertoire,
  getPianoRepertoire,
} from "~/data/RepertoireRepository";
import { getTodaysWarmupNotes } from "~/data/WarmupRepository";

export default function HomePage() {
  const warmupNotes = getTodaysWarmupNotes();
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center bg-white text-black">
      <WarmupNotation warmupNotes={warmupNotes} />

      <FretboardMemorisation />

      <RepertoireWorkout
        repertoireTitle="Acoustic Repertoire"
        pieces={getAcousticRepertoire()}
      />

      <RepertoireWorkout
        repertoireTitle="Piano Repertoire"
        pieces={getPianoRepertoire()}
      />
    </main>
  );
}
