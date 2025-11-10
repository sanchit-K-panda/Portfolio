'use client'

import { Toaster } from 'react-hot-toast'

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#000',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        success: {
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },
          style: {
            background: '#fff',
            color: '#000',
            border: '2px solid #000',
          },
        },
        error: {
          iconTheme: {
            primary: '#fff',
            secondary: '#000',
          },
          style: {
            background: '#000',
            color: '#fff',
            border: '2px solid #fff',
          },
        },
        loading: {
          iconTheme: {
            primary: '#666',
            secondary: '#fff',
          },
        },
      }}
    />
  )
}
