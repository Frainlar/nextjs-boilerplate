// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import * as Spotlight from "@spotlightjs/spotlight";

Sentry.init({
  dsn: "https://e62e1692a1da82c2f2eaebd994bd943c@o468766.ingest.us.sentry.io/4507457779793920",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,
  profilesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
if (process.env.NODE_ENV === "development") {
  Spotlight.init();
}
