import React from "react";
import Link from "next/link";

export default function XNovNotFound() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden font-sans">
      
      {/* Decorative brand gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[55%] bg-[#EC4899]/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="flex flex-col items-center max-w-xl text-center relative z-10">
        
        {/* Brand Logo */}
        <div className="mb-12 select-none">
          <img src="/x-nov/x-nov_logo.png" alt="X.NOV" className="h-10 w-auto opacity-90" />
        </div>

        {/* Big visual 404 */}
        <h1 className="text-[120px] md:text-[160px] font-black text-[#EC4899] leading-none mb-4 select-none drop-shadow-[0_4px_16px_rgba(236,72,153,0.1)]">
          404
        </h1>

        <h2 className="text-[24px] md:text-[28px] font-bold text-[#212121] mb-6 leading-tight">
          Page Not Found
        </h2>
        
        <p className="text-[#6D6B6B] text-[15px] md:text-[16px] leading-relaxed mb-12 max-w-md">
          The page you are looking for doesn't exist or has been moved. We invite you to return to the X.NOV homepage.
        </p>

        <Link href="/x-nov">
          <span className="bg-[#EC4899] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#db2777] transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer">
            Return Home
          </span>
        </Link>

      </div>
      
    </main>
  );
}
