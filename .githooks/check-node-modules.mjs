/* Checks that the installed packages match package-lock.json, for example after
   switching to a branch with different dependencies. npm records the installed
   tree in node_modules/.package-lock.json, so this compares the two files. */
import { existsSync, readFileSync } from 'node:fs';

const read = path => JSON.parse(readFileSync(path, 'utf8')).packages ?? {};

if (!existsSync('node_modules/.package-lock.json')) {
  console.error('node_modules is missing or incomplete.');
  process.exit(1);
}

const locked = read('package-lock.json');
const installed = read('node_modules/.package-lock.json');

const mismatches = Object.entries(locked)
  .filter(([path]) => path !== '')
  .filter(([path, entry]) => {
    const current = installed[path];
    // Optional packages for other platforms are never installed.
    if (!current) {
      return !entry.optional;
    }
    return current.version !== entry.version;
  })
  .map(([path, entry]) => `  ${path.replace(/^node_modules\//, '')}: locked ${entry.version}, installed ${installed[path]?.version ?? 'none'}`);

if (mismatches.length > 0) {
  console.error('node_modules does not match package-lock.json:');
  console.error(mismatches.slice(0, 10).join('\n'));
  if (mismatches.length > 10) {
    console.error(`  ...and ${mismatches.length - 10} more`);
  }
  process.exit(1);
}
