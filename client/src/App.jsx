import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import AuthPage from './pages/AuthPage';
import AppLayout from './pages/AppLayout';
import HomePage from './pages/HomePage';
import NotificationPage from './pages/NotificationPage';
import ChatsPage from './pages/ChatsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoutes from './features/auth/ProtectedRoutes';
import SignUpPage from './pages/SignUpPage';
import { ThemeContextProvider } from './context/ThemeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/signup/information',
        element: <SignUpPage />,
      },
      {
        element: <AppLayout />,
        children: [
          {
            path: '/app',
            element: <HomePage />,
          },
          {
            path: '/notifications',
            element: <NotificationPage />,
          },
          {
            path: '/chats',
            element: <ChatsPage />,
          },
          {
            path: '/profile',
            element: <ProfilePage />,
          },
          {
            path: '/settings',
            element: <SettingsPage />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <RouterProvider router={router} />
            <Toaster
              richColors
              closeButton
              position='bottom-center'
            />
          </ThemeContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
