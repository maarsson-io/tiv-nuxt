import { defineConfig, devices } from '@playwright/test';

const port = 4173;
const isCI = !!process.env.CI;

// Runs against the production server build, as deployed: `npm run build` first.
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: isCI ? [['github'], ['html', { open: 'never' }]] : 'list',
  // Screenshots depend on the OS font rendering, so visual tests run locally only.
  grepInvert: isCI ? /@visual/ : undefined,
  snapshotPathTemplate: '{testDir}/__screenshots__/{platform}/{projectName}/{arg}{ext}',
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
    },
  },
  use: {
    baseURL: `http://localhost:${port}`,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'] },
    },
  ],
  webServer: {
    command: 'node .output/server/index.mjs',
    env: { PORT: String(port) },
    url: `http://localhost:${port}`,
    reuseExistingServer: !isCI,
  },
});
