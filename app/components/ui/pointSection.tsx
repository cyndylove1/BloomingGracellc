import { CheckCircle2 } from "lucide-react";

export default function PointSection() {
    const pridePoints = [
      "Integrity and confidentiality",
      "Thorough vetting and background checks",
      "Tailored staffing solutions",
      "Ongoing client and staff support",
    ];
    return (
      <>
        <div className="flex flex-col gap-10 border-t border-purple-200">
          <div className=" p-4 bg-purple/50 rounded-3xl border border-purple-100">
            <p className="font-bold mb-7 md:text-2xl text-xl text-[#0A0F2D]">
              We pride ourselves on:
            </p>
            <div className="grid grid-cols-1 space-y-4 md:grid-cols-2">
              {pridePoints.map((point, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle2 className="text-[#6354E1] fill-purple-700/10 md:w-7 md:h-7 h-5 w-5 shrink-0" />
                  <span className="font-light text-gray-900 text-base">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </>
    );
}