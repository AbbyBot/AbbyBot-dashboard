import { AuthProvider } from './AuthContext'
import { ModalProvider } from './ModalProvider'
export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </AuthProvider>
  )
}

