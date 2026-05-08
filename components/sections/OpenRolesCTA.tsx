"use client";

export default function OpenRolesCTA() {
  return (
    <section id="open-positions" className="bg-[#ffffff]">
      <div className="container max-w-7xl">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8 py-[clamp(6rem,14vh,10rem)]">
          <h2 className="font-hero text-center text-[clamp(2.75rem,5vw,4.5rem)] tracking-tight text-black leading-none">
            Open Roles
          </h2>
          <button
            type="button"
            className="group inline-flex min-w-[220px] items-center justify-center border border-black bg-[#141922] px-10 py-3.5 text-[1.05rem] font-medium tracking-[0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
          >
            Apply Now
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
