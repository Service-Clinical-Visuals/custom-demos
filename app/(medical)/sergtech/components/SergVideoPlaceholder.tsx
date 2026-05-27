import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function VideoPlaceholder() {
  return (
    <div className="relative w-full h-full rounded-[26px] overflow-hidden">
      {/* FUTURE VIDEO CONTAINER */}

      <DynamicVideoPlayer  type="360" className="object-cover w-full h-full" />
    </div>
  );
}