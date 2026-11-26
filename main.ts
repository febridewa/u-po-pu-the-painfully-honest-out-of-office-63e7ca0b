// The Painfully Honest Out-of-Office
// Writes a single brutally honest but still polite out-of-office auto-reply,
// one sentence under 200 characters, to /output/entry.txt.
//
// The line admits the thing a real employee would only say privately —
// that the inbox is being ignored on purpose — and stays warm and
// professional enough that a manager would let it stand. The turn of
// phrase a reader would quote: the inbox is a to-do list other people
// wrote for me.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm away until Monday, and the honest truth is I'm ignoring my inbox on purpose — it's a to-do list other people wrote for me, and it can wait; thank you for writing, and I'll reply when I'm back.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`chars: ${ENTRY.length}`);
