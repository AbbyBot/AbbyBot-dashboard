import React, { Suspense, useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LoadingProvider, useLoading } from './context/LoadingContext';
import Init from './components/Init';

function App() {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Simulate loading of other components
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this timeout as needed

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <Suspense fallback={<Init />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default function Root() {
  return (
    <LoadingProvider>
      <App />
    </LoadingProvider>
  );
}
