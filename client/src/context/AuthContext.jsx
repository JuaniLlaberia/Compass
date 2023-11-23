import { createContext, useContext } from 'react';
import { useGetAuthUser } from '../features/auth/useGetAuthUser';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { user, isLoading } = useGetAuthUser();

  if (isLoading) return <h1 className='text-black'>Loading</h1>;

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
