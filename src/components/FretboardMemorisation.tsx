import { keys } from "~/components/uimodels/Keys";

export default function FretboardMemorisation() {
  const todaysKey = keys[Math.floor(Math.random() * keys.length)];

  return (
    <div>
      <h2>Fretboard Memorisation</h2>
      <p>
        Set metronome and play {todaysKey} across the fretboard in time with it,
        starting with the lowest place you can find it. When you have hit the
        highest version of the note you can on the freboard, descend again in
        order and repeat
      </p>
    </div>
  );
}
