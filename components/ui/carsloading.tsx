import React from "react";

const CarsLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-8">
      {/* Animated road */}
      <div className="relative w-full max-w-md h-2 bg-gray-300 rounded-full overflow-hidden">
        {/* Road stripes */}
        <div className="absolute inset-y-0 left-0 w-full flex">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-full w-8 bg-yellow-400 mr-16 animate-moveStripes"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Animated car */}
      <div className="relative animate-bounce">
        <svg
          width="80"
          height="40"
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-drive"
        >
          <rect x="10" y="15" width="60" height="15" rx="2" fill="#f26522" />
          <circle cx="20" cy="35" r="5" fill="#333" />
          <circle cx="60" cy="35" r="5" fill="#333" />
          <rect x="45" y="10" width="20" height="10" rx="2" fill="#f26522" />
        </svg>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-gray-600">
          Loading your cars...
        </div>
      </div>

      {/* Pulsing dots */}
      <div className="flex gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-3 w-3 bg-[#f26522] rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes moveStripes {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-24px);
          }
        }
        @keyframes drive {
          0%,
          100% {
            transform: translateX(-5px) rotate(-1deg);
          }
          50% {
            transform: translateX(5px) rotate(1deg);
          }
        }
        .animate-moveStripes {
          animation: moveStripes 0.8s linear infinite;
        }
        .animate-drive {
          animation: drive 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CarsLoading;
