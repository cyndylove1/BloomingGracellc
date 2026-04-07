import { ArrowRight, LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;

  icon?: LucideIcon;
  showIcon?: boolean;
}

export default function Button({
  text,
  icon: Icon = ArrowRight,
  showIcon = true,
  className = "",
  ...props
}: PrimaryButtonProps) {
  const bentoButtonClasses = `
    mt-4 md:mt-0 bg-[#FFD700] text-[#0A0F2D] 
    px-5 py-3 font-extrabold text-sm uppercase cursor-pointer tracking-widest 
    flex items-center justify-center gap-2.5 
    hover:bg-yellow-400 transition-all 
    shadow-lg shadow-yellow-400/10 
    active:scale-[0.98] group
  `;

  return (
    <button className={`${bentoButtonClasses} ${className}`} {...props}>
      <span className="font-bold tracking-tight">{text}</span>

      {showIcon && (
        <Icon
          size={16}
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0 stroke-[3]"
        />
      )}
    </button>
  );
}
