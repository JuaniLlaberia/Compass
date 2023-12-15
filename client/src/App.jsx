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
const UserSettings = lazy(() => import('./features/settings/UserSettings'));
const Faq = lazy(() => import('./pages/extra/Faq'));
const Legal = lazy(() => import('./pages/extra/Legal'));

import HomeLayout from './pages/HomeLayout';
import AppLayout from './pages/AppLayout';
import ProtectedRoutes from './features/auth/ProtectedRoutes';
import FullScreenLoader from './components/FullScreenLoader';
import SettingsTheme from './features/settings/SettingsTheme';
import SettingsLikes from './features/settings/SettingsLikes';
import SettingsLanguage from './features/settings/SettingsLanguage';
import { ThemeContextProvider } from './context/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
  },
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/legal',
        element: <Legal />,
      },
    ],
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
            element: <UserSettings />,
            path: '/settings',
            children: [
              {
                path: '/settings/theme',
                element: <SettingsTheme />,
              },
              {
                path: '/settings/likes',
                element: <SettingsLikes />,
              },
              {
                path: '/settings/languages',
                element: <SettingsLanguage />,
              },
            ],
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
