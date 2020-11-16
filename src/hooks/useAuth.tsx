import { IAuthProviderValue, IRoute } from '@types'
import React, { useContext, useState } from 'react'
import { filterRoutesHasPermission } from 'utils/permissions'

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = React.createContext<IAuthProviderValue | null>(null)

// Provider hook that creates auth object and handles state
const useProviderAuth = () => {
  const [user, setUser] = useState(null)

  const signIn = (email: string, password: string) => {}
  const signUp = (email: string, password: string) => {}
  const signOut = () => {}
  const sendPasswordResetEmail = (email: string) => {}
  const confirmPasswordReset = (code: string, password: string) => {}

  return {
    user,
    signIn,
    signUp,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset
  }
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useProviderAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = (): IAuthProviderValue | null => {
  return useContext(AuthContext)
}
