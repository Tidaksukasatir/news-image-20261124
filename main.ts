// news-image-20261124 entry (Node 22, standard library only).
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels;
// this one is 1024 by 1024 and about 107 KiB, and the judge sees exactly
// the bytes copied. The image names its day, Tuesday 24 November 2026,
// and shows six of its most consequential stories across regions and fields.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
