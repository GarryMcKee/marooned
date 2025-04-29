import WarmupNotation from "~/components/uimodels/WarmupComponent";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black bg-white">
      <p>Hello Marooned!</p>
      <WarmupNotation/>
    </main>
  );
}
