import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const COMMENT = 'LGTM, nice catch on the typo. Good to keep standards up near the end.';

function main(): void {
  if (COMMENT.includes('\n') || COMMENT.includes('\r')) {
    throw new Error('Comment must be a single line');
  }
  const chars = [...COMMENT].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`Comment length ${chars} out of range 1..140`);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, 'entry.txt'), COMMENT, 'utf8');
}

main();
