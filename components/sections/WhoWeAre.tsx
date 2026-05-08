"use client";

const cards = [
  {
    title: "Free Thinkers",
    description: "We attract people who are intellectually diverse and contrarian at heart. Vinkurans have strong convictions and open minds. Whether you have PhD or GED, deep thinking matters most.",
  },
  {
    title: "Catalysts",
    description: "Vinkurans take initiative. There's no top-down instruction holding you back. This creates unusual freedom: when you see a solution, you own it.",
  },
  {
    title: "Independents",
    description: "You are not evaluated by distant executives — you are judged by outcomes. There's no oversight from anyone who isn't directly in the problem with you. Your work will speak for itself.",
  },
  {
    title: "Fast-movers",
    description: "Vinkurans make decisions quickly. We optimize for impact, not consensus. There is no bureaucratic distance between identifying a problem and fixing it.",
  }
];

export default function WhoWeAre() {
  return (
    <section className="bg-[#ffffff]" style={{ padding: '120px 0 160px 0' }}>
      <div className="container max-w-7xl">
        
        <h2 className="text-5xl md:text-6xl font-body mb-20 text-black font-normal tracking-tight">Who we are.</h2>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[#fafafa] p-12 md:p-16 flex flex-col justify-start items-start rounded-sm min-h-[340px]">
              <div className="mb-8 p-1 border border-gray-300 rounded-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-body mb-6 text-black font-normal tracking-tight">
                {card.title}
              </h3>
              <p className="font-body text-[1.1rem] text-gray-700 leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
