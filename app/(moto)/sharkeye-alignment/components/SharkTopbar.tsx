import { Globe, Search } from "lucide-react";

export default function SharkTopbar() {
  return (
    <div className="w-full bg-[#1f1a1c] ">

      <div className="max-w-380 mx-auto text-white h-12 flex items-center justify-between  text-[16px] tracking-wide">
      <p className="font-medium">Welcome Guest!</p>

      <div className="flex items-center gap-4">
        <Globe size={24} strokeWidth={1.7} />

        <Search size={24} strokeWidth={1.7} />

        <div className="h-4 w-[1px] bg-white/30" />

        <button className="font-medium cursor-pointer">Sign In</button>
      </div>
      </div>
    </div>
  );
}