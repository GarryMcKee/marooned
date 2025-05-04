import WarmupNotation from "~/components/WarmupComponent";
import FretboardMemorisation from "~/components/FretboardMemorisation";
import RepertoireWorkout from "~/components/RepertoireWorkout";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center bg-white text-black">
      <WarmupNotation />
      <FretboardMemorisation />
      <RepertoireWorkout
        repertoireTitle="Acoustic Repertoire"
        pieces={["A", "B", "C"]}
      />
      <RepertoireWorkout
        repertoireTitle="Electric Repertoire"
        pieces={["A", "B", "C"]}
      />
      <RepertoireWorkout
        repertoireTitle="Piano Repertoire"
        pieces={["A", "B", "C"]}
      />
    </main>
  );
}
