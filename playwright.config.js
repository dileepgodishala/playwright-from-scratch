// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  
  timeout: 30000,

  expect: {
    timeout: 20000,
  },

  reporter: 'html',
  
  use: {
    
    // browserName : 'chromium',

    headless: false,

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});

module.exports = config