"use client";
import { useEffect } from "react";
import { TabNote, Vex } from "vexflow";
import type { TabNoteJSON } from "~/data/WarmupRepository";

interface WarmupComponentProps {
  warmupNotes: TabNoteJSON[];
}

export default function WarmupNotation({ warmupNotes }: WarmupComponentProps) {
  useEffect(() => {
    const { Renderer, TabStave, Formatter } = Vex.Flow;
    const div = document.getElementById("warmupOutput") as HTMLDivElement;
    const renderer = new Renderer(div, Renderer.Backends.SVG);
    renderer.resize(500, 300);
    const context = renderer.getContext();
    const stave = new TabStave(10, 40, 400);
    stave.addClef("tab").setContext(context).draw();

    Formatter.FormatAndDraw(context, stave, tabNoteJSONParser(warmupNotes));
  }, [warmupNotes]);

  return (
    <div>
      <h2>Todays Warmup</h2>
      <div id="warmupOutput" className="notation" />
    </div>
  );
}

function tabNoteJSONParser(tabNotesJSON: TabNoteJSON[]): TabNote[] {
  return tabNotesJSON.map((tabNoteJSON) => {
    return new TabNote({
      positions: tabNoteJSON.positions,
      duration: tabNoteJSON.duration,
    });
  });
}
