import React from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

const Error: React.FC<ErrorProps> = ({ 
  message = "Something went wrong. Please try again later.", 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-red-600/10 p-4 rounded-full mb-6">
        <AlertCircle className="h-10 w-10 text-red-600" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Oops!</h3>
      <p className="text-zinc-400 max-w-sm mb-8">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-2 rounded-lg transition-colors font-medium border border-zinc-700"
        >
          <RefreshCcw className="h-4 w-4" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;
