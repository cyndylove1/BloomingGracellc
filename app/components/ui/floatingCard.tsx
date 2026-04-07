export default function FloatingCard() {
    return (
      <>
        {" "}
        <div className="absolute -bottom-10 right-[-20px] bg-white px-8 py-5 rounded-2xl shadow-xl flex items-center gap-6 border border-blue-50 z-20">
          <div>
            <p className="text-2xl font-extrabold text-[#0A0F2D] tracking-tight">
              15+
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Years Of Experience
            </p>
          </div>
        </div>
      </>
    );
}