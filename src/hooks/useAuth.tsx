import React, { useContext, useState } from 'react'

type AuthProviderProps = {
  children: React.ReactNode
}

// TODO: replace any to another meaningful type
export const AuthContext = React.createContext<any>(undefined)

// Provider hook that creates auth object and handles state
const useProviderAuth = () => {
  const [user, setUser] = useState(null)

  const signIn = () => {}
  const signUp = () => {}
  const signOut = () => {}
  const sendPasswordResetEmail = () => {}
  const confirmPasswordReset = () => {}

  return {
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
export const useAuth = () => {
  return useContext(AuthContext)
}
