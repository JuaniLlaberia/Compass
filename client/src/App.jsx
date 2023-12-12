import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { Toaster } from 'sonner';

const AuthPage = lazy(() => import('./pages/AuthPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ChatsPage = lazy(() => import('./pages/ChatsPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import AppLayout from './pages/AppLayout';
import ProtectedRoutes from './features/auth/ProtectedRoutes';
import FullScreenLoader from './components/FullScreenLoader';
import { ThemeContextProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';

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
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/app',
            element: <HomePage />,
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
            path: '*',
            element: <NotFoundPage />,
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
            <Suspense fallback={<FullScreenLoader />}>
              <RouterProvider router={router} />
            </Suspense>
            <Toaster richColors closeButton position='bottom-center' />
          </ThemeContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
