import { AuthProvider } from './AuthContext'
import { BotProvider } from './BotProvider'
import { ModalProvider } from './ModalProvider'
export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <BotProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </BotProvider>
    </AuthProvider>
  )
}

