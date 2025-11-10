// Sentry configuration for Next.js server-side
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Performance Monitoring
  tracesSampleRate: 1.0,
  
  // Environment
  environment: process.env.NODE_ENV,
  
  // Enable debug mode in development
  debug: process.env.NODE_ENV === 'development',
  
  // Filter sensitive data
  beforeSend(event) {
    // Remove sensitive data from server events
    if (event.request) {
      delete event.request.cookies
      delete event.request.headers
    }
    return event
  },
})
