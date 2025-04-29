import WarmupNotation from "~/components/WarmupComponent";
import FretboardMemorisation from "~/components/FretboardMemorisation";

export default function HomePage() {
  return (
    <main className="flex min-h-screen max-w-screen-md mx-auto flex-col items-center justify-center text-black bg-white">
      <WarmupNotation/>
      <FretboardMemorisation/>
    </main>
  );
}
