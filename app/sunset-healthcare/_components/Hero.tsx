import React from 'react';
import DynamicVideoPlayer from "../../_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="bg-black w-full min-h-screen flex flex-col items-center justify-end pb-16 md:pb-24 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>
    </section>
  );
}




