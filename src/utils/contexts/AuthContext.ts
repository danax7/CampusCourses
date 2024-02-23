// import React, { createContext, useContext, useState } from 'react';

// type UserRole = 'teacherAndStudent' | 'teacher' | 'student' | 'user' | 'guest';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   userRole: UserRole;
//   login: (token: string, role: UserRole) => void;
//   logout: () => void;
// }

// const initialAuthContext: AuthContextType = {
//   isAuthenticated: !!localStorage.getItem('token'),
//   userRole: localStorage.getItem('role') as UserRole || 'guest',
//   login: () => {},
//   logout: () => {}
// };

// const AuthContext = createContext<AuthContextType>(initialAuthContext);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(initialAuthContext.isAuthenticated);
//   const [userRole, setUserRole] = useState<UserRole>(initialAuthContext.userRole);

//   const login = (token: string, role: UserRole) => {
//     localStorage.setItem('token', token);
//     localStorage.setItem('role', role);
//     setIsAuthenticated(true);
//     setUserRole(role);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('role');
//     setIsAuthenticated(false);
//     setUserRole('guest');
//   };

//   const authContextValue: AuthContextType = {
//     isAuthenticated,
//     userRole,
//     login,
//     logout
//   };

//   return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
// };


// export const useAuth = (): AuthContextType => useContext(AuthContext);
