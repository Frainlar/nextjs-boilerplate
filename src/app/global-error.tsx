"use client"
import * as Sentry from "@sentry/nextjs";
import { useEffect, useState } from "react";
import NextError from "next/error"; // Correct import statement for NextError

interface ErrorProps {
  error?: NextError | Error; // Define the type of the error prop
}

const GlobalError: React.FC<ErrorProps> = ({ error }) => {
  const [hasError, setHasError] = useState(false); // State to handle error

  useEffect(() => {
    if (error) {
      Sentry.captureException(error);
      setHasError(true); // Set error state for rendering
    }
  }, [error]); // Dependency array for useEffect

  if (hasError) {
    return (
      <div>
        <p>An error occurred.</p>
        {/* Optionally render additional error information */}
      </div>
    );
  }

  // Return your app content if there's no error
  return (
    <div>
      {/* Your application's JSX content */}
      <p>This is your app content.</p>
    </div>
  );
};

export default GlobalError;
