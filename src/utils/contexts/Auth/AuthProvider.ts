// import React from 'react'
// import { useLocalStorage } from './hooks/useLocalStorage'
// import { UserContextInfo, UserContext } from './AuthContext'


// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//   const { value: isAuth, setValue: setIsAuth } = useLocalStorage(IS_AUTH_KEY, false)
//   const { value: user, setValue: setUser } = useLocalStorage<UserContextInfo>(USER_INFO_KEY, {
//     token: '',
//     email: '',
//     role: "guest"
//   })

//   const login = (userInfo: UserContextInfo) => {
//     setIsAuth(true)
//     setUser({ ...userInfo })
//   }

//   const logout = () => {
//     setIsAuth(false)
//     setUser({
//       token: '',
//       email: '',
//       role: "guest"
//     })
//   }

//   return <UserContext.Provider value={{ isAuth, user, login, logout }}>{children}</UserContext.Provider>
// }