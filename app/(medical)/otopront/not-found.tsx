import React from "react";
import Link from "next/link";
import Button from "./_components/Button";

export default function OtoprontNotFound() {
  return (
    <main className="min-h-screen w-full bg-[#FFF8F8] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Decorative absolute brand colors blobs for premium layout */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#BD0A27]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#BD0A27]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="flex flex-col items-center max-w-xl text-center relative z-10">
        
        {/* Otopront Logo top representation */}
        <div className="mb-12">
          <span className="text-[#BD0A27] font-bold text-[40px] tracking-tight">
            otopront<span className="text-[16px] align-super">&reg;</span>
          </span>
        </div>

        {/* Big visual 404 */}
        <h1 className="text-[120px] md:text-[160px] font-bold text-[#BD0A27] leading-none mb-4 select-none drop-shadow-[0_4px_12px_rgba(189,10,39,0.08)]">
          404
        </h1>

        <h2 className="text-[24px] md:text-[28px] font-semibold text-[#111111] mb-6 leading-tight">
          Page Not Found
        </h2>
        
        <p className="text-[#484848] text-[15px] md:text-[16px] leading-relaxed mb-12 max-w-md">
          The page you are looking for doesn't exist or has been moved. We encourage you to return home or search our solutions.
        </p>

        {/* Reusing our custom premium counter-rotating diamond arrow button! */}
        <Button href="/otopront" variant="red" arrowType="circle">
          Go Back Home
        </Button>

      </div>

      {/* Subtle brand footer note */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[12px] text-[#777777] font-medium tracking-wide">
        &copy; {new Date().getFullYear()} OTOPRONT. ALL RIGHTS RESERVED
      </div>
      
    </main>
  );
}
