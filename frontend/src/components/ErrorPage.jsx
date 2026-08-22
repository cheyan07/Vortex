import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* Soft white glow */}
      <div
        className="
          pointer-events-none
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          bg-white/10
          blur-[140px]
        "
      />

      {/* Purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          top-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-purple-400/10
          blur-[120px]
        "
      />

      {/* Cyan glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-20
          bottom-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-cyan-300/10
          blur-[120px]
        "
      />

      {/* Main Glass Card */}
      <div
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-3xl
          border border-white/20
          bg-white/[0.08]
          shadow-2xl
          backdrop-blur-2xl
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            justify-center
            bg-black/30
            px-8
            py-16
            sm:px-12
            lg:px-16
          "
        >
          {/* 404 */}
          <h1
            className="
              bg-gradient-to-r
              from-orange-300
              via-purple-400
              to-cyan-300
              bg-clip-text
              text-8xl
              font-black
              leading-none
              tracking-tight
              text-transparent
            "
          >
            404
          </h1>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-3xl
              font-semibold
              text-white
            "
          >
            Page Not Found
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-md
              text-sm
              leading-6
              text-white/50
            "
          >
            The page you're looking for doesn't exist, has been moved, or the
            URL might be incorrect.
          </p>

          {/* Go Home */}
          <button
            onClick={() => navigate("/")}
            className="
              group
              mt-8
              w-full
              rounded-xl
              bg-gradient-to-r
              from-orange-400
              via-purple-500
              to-cyan-400
              px-6
              py-4
              font-semibold
              text-white
              shadow-lg
              shadow-purple-500/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-purple-400/30
              active:scale-[0.98]
            "
          >
            <span
              className="
                mr-2
                inline-block
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              ←
            </span>
            Go Home
          </button>

          {/* Go Back */}
          <button
            onClick={() => navigate(-1)}
            className="
              mt-3
              w-full
              rounded-xl
              border
              border-white/20
              bg-white/[0.07]
              px-6
              py-4
              font-semibold
              text-white/80
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/30
              hover:bg-white/[0.13]
              hover:text-white
              active:scale-[0.98]
            "
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;