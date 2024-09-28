import React from 'react'
import { AuthProvider } from './AuthContext'
import { ModalProvider } from './ModalProvider'

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </AuthProvider>
  )
}

