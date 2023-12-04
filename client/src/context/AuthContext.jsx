import { createContext, useContext } from 'react';
import { useGetAuthUser } from '../features/auth/useGetAuthUser';
import FullScreenLoader from '../components/FullScreenLoader';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { user, isLoading } = useGetAuthUser();

  if (isLoading) return <FullScreenLoader />;

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
