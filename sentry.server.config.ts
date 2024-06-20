// sentry.server.config.js

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e62e1692a1da82c2f2eaebd994bd943c@o468766.ingest.us.sentry.io/4507457779793920",
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  integrations: [
  ],
  debug: false,
});
