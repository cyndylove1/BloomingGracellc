import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="relative">
          <div className="w-5 h-5 border-2 border-white rotate-45 transition-colors"></div>
          <div className="absolute inset-0 w-5 h-5 bg-[#FFD700] rotate-45 scale-50 transition-opacity"></div>
        </div>
        <span className="text-white text-2xl font-serif tracking-tight italic">
          BoomingGrace-LLC
        </span>
      </Link>
    </>
  );
}
