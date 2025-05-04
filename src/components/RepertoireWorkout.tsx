"use client";
interface RepertoireWorkoutProps {
  repertoireTitle: string;
  pieces: string[];
}

export default function RepertoireWorkout({repertoireTitle, pieces} : RepertoireWorkoutProps) {
  return (
    <div>
      <h2>{repertoireTitle}</h2>
      <p>
        {pieces[0]}
      </p>
    </div>
  );
}
