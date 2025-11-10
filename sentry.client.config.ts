// Sentry configuration for Next.js
// To complete setup:
// 1. Create account at https://sentry.io
// 2. Get your DSN from Project Settings
// 3. Run: npx @sentry/wizard@latest -i nextjs
// 4. This will automatically configure Sentry

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions in development
  
  // Session Replay
  replaysSessionSampleRate: 0.1, // Sample 10% of sessions
  replaysOnErrorSampleRate: 1.0, // Sample 100% of sessions with errors
  
  // Environment
  environment: process.env.NODE_ENV,
  
  // Enable debug mode in development
  debug: process.env.NODE_ENV === 'development',
  
  // Filter out sensitive data
  beforeSend(event) {
    // Remove sensitive headers
    if (event.request) {
      delete event.request.cookies
    }
    return event
  },
  
  // Ignore specific errors
  ignoreErrors: [
    // Browser extensions
    'top.GLOBALS',
    // Random plugins/extensions
    'originalCreateNotification',
    'canvas.contentDocument',
    'MyApp_RemoveAllHighlights',
    // Network errors
    'NetworkError',
    'Non-Error promise rejection captured',
  ],
})
