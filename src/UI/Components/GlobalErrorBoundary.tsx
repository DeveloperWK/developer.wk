"use client";
import { ErrorBoundary } from "react-error-boundary";
const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <section className="h-screen flex items-center justify-center">
      <h1>Something went wrong</h1>
      <p>{error?.message || "An unexpected error occurred"}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </section>
  );
};

const GlobalErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Define the onReset function conditionally
  const handleReset = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={handleReset} // Use the conditional function here
    >
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
