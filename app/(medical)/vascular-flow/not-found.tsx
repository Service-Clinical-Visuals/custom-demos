import React from "react";
import Button from "./_components/Button";

export default function VascularFlowNotFound() {
  return (
    <main className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center px-4 relative overflow-hidden font-sans">
      
      {/* Decorative brand gradient blobs for a premium look */}
      <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[55%] bg-[#004A87]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[55%] h-[55%] bg-[#00A0E0]/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="flex flex-col items-center max-w-xl text-center relative z-10">
        
        {/* Brand Logo representation */}
        <div className="mb-12 select-none">
          <div className="bg-[#004A87] px-6 py-3 rounded-sm inline-flex items-center">
            <span className="text-white font-extrabold text-2xl tracking-tight">Vascular</span>
            <span className="text-[#00A0E0] font-extrabold text-2xl tracking-tight">Flow</span>
          </div>
        </div>

        {/* Big visual 404 */}
        <h1 className="text-[120px] md:text-[160px] font-black text-[#004A87] leading-none mb-4 select-none drop-shadow-[0_4px_16px_rgba(0,75,135,0.08)]">
          404
        </h1>

        <h2 className="text-[24px] md:text-[28px] font-extrabold text-slate-800 mb-6 leading-tight">
          Page Not Found
        </h2>
        
        <p className="text-slate-500 text-[15px] md:text-[16px] leading-relaxed mb-12 max-w-md">
          The page you are looking for doesn't exist or has been moved. We invite you to return to the VascularFlow homepage.
        </p>

        {/* Using our custom premium split arrow button! */}
        <Button href="/vascular-flow" variant="split">
          Go Back Home
        </Button>

      </div>

      {/* Subtle brand footer note */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[12px] text-slate-400 font-bold tracking-widest uppercase">
        &copy; {new Date().getFullYear()} VASCULARFLOW. ALL RIGHTS RESERVED
      </div>
      
    </main>
  );
}
