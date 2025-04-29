"use client"; // <-- Add this line to mark the file as a client component

import { useEffect } from "react";
import { Vex } from "vexflow";
import warmupsData from "~/assets/notationdata/warmups.json";
import type { GuitarNote, GuitarNoteSequence } from "~/components/uimodels/GuitarNote"; // Assuming this is the correct path

const typedWarmupsData = warmupsData as GuitarNoteSequence;

export default function WarmupNotation() {
  useEffect(() => {
    const { Renderer, TabStave, TabNote, Formatter } = Vex.Flow;

    const div = document.getElementById("warmupOutput") as HTMLDivElement;

    const renderer = new Renderer(div, Renderer.Backends.SVG);
    renderer.resize(500, 300);
    const context = renderer.getContext();

    const stave = new TabStave(10, 40, 400);
    stave.addClef("tab").setContext(context).draw();

    // Function to get a random warmup (one of the inner arrays)
    function getTodaysWarmup(): GuitarNote[] {
      const randomIndex = Math.floor(
        Math.random() * typedWarmupsData.warmups.length,
      );
      const warmup = typedWarmupsData.warmups[randomIndex];

      // If undefined, return an empty array or a fallback warmup
      return warmup ?? []; // This ensures it always returns a valid GuitarNote[] (either the warmup or an empty array)
    }

    // Map each warmup (array of GuitarNote objects) to TabNote objects
    const notes = getTodaysWarmup().map((fretString) => {
      return new TabNote({
        positions: [{ str: fretString.guitarString, fret: fretString.fret }],
        duration: "q",
      });
    });

    // Format and draw the notes on the stave
    Formatter.FormatAndDraw(context, stave, notes);
  }, []); // Empty dependency array → runs only once on mount

  return <div id="warmupOutput" className="notation" />;
}
