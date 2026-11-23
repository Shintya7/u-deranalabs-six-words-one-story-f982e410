// Six Words, One Story — make.fun bounty
// One complete story in exactly six words.
// Writes the story to /output/entry.txt (no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const STORY = "She planted his letters. Roses bloomed.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT || "/output/entry.txt";

// The turn: letters planted in grief become roses — loss turned into growth.
function validateStory(story: string): void {
  const wordCount = story.trim().split(/\s+/).filter(Boolean).length;
  if (wordCount !== 6) {
    throw new Error(`Story must be exactly 6 words, got ${wordCount}.`);
  }

  if (story.length < 1 || story.length > 60) {
    throw new Error(
      `Story must be 1-60 characters, got ${story.length}.`
    );
  }

  if (story.trim().length === 0) {
    throw new Error("Story must not be only whitespace.");
  }
}

validateStory(STORY);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, STORY, "utf8");

console.log(`Wrote ${STORY.length} characters to ${OUTPUT_PATH}`);
