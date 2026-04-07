export default function Socials({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
        active
          ? "bg-[#FFD700] text-[#000B40]"
          : "bg-white/10 text-white hover:bg-[#FFD700] hover:text-[#000B40]"
      }`}
    >
      {icon}
    </div>
  );
}
