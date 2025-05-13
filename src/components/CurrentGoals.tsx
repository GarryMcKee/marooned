"use client";

interface CurrentGoalsProps {
  goals: string[];
}

export default function CurrentGoals({ goals }: CurrentGoalsProps) {
  const goalsList = goals.map((goal) => {
    return <li key={goal}>{goal}</li>;
  });
  return (
    <div>
      <h2>Current Goals</h2>
      <ul id="goalsList">{goalsList}</ul>
    </div>
  );
}
