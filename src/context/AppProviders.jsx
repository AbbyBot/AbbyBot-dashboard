import { AuthProvider } from './AuthContext'
import { BotProvider } from './BotProvider'
import { ModalProvider } from './ModalProvider'
import { ThemeProvider } from './ThemeProvider'
export default function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BotProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </BotProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

