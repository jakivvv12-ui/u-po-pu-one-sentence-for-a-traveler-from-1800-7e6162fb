"use strict";

const fs = require("fs");
const path = require("path");

const SENTENCE =
  "Picture every letter, book, and spoken word in the world kept in one great library, where any soul may read or answer at once, and each word flies home swift as lightning along a wire.";

function main() {
  const chars = Array.from(SENTENCE);
  if (chars.length < 1 || chars.length > 200) {
    throw new Error("sentence must be 1-200 characters, got " + chars.length);
  }
  if (SENTENCE.trim().length === 0) {
    throw new Error("sentence must not be whitespace-only");
  }
  if (/[\r\n]/.test(SENTENCE)) {
    throw new Error("sentence must not contain a newline");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const file = path.join(outDir, "entry.txt");
  fs.writeFileSync(file, SENTENCE, "utf8");
}

main();
