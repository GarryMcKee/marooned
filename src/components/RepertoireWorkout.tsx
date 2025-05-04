import type { RepertoirePiece } from "~/components/uimodels/RepertoirePiece";
import * as console from "node:console";

interface RepertoireWorkoutProps {
  repertoireTitle: string;
  pieces: RepertoirePiece[];
}

export default function RepertoireWorkout({
  repertoireTitle,
  pieces,
}: RepertoireWorkoutProps) {
  const todaysRepertoirePiece =
    pieces[Math.floor(Math.random() * pieces.length)]!;

  console.log("Todays's repertoire pieces", todaysRepertoirePiece);

  return (
    <div>
      <h2>{repertoireTitle}</h2>
      <p>
        {todaysRepertoirePiece.artistName} - {todaysRepertoirePiece.songName}
      </p>
    </div>
  );
}
