export default function Home() {
  const props = [
    { name: "Saquon Barkley", prop: "Anytime TD", line: "-110", edge: "+12%" },
    { name: "Justin Jefferson", prop: "Over 88.5 Yds", line: "-115", edge: "+15%" },
    { name: "Breece Hall", prop: "Over 4.5 Rec", line: "+105", edge: "+8%" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-black italic text-blue-500 tracking-tighter">GRIDIRON AI</h1>
        <div className="h-1 w-20 bg-blue-600 mt-1"></div>
      </header>

      {/* Stats Bar */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1 bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
          <p className="text-zinc-500 text-[10px] font-bold uppercase">Model ROI</p>
          <p className="text-xl font-black text-green-400">+14.2%</p>
        </div>
        <div className="flex-1 bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
          <p className="text-zinc-500 text-[10px] font-bold uppercase">Win Rate</p>
          <p className="text-xl font-black text-blue-400">62.4%</p>
        </div>
      </div>

      {/* Prop Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Top Value Props</h2>
        {props.map((p, i) => (
          <div key={i} className="bg-zinc-900 p-5 rounded-3xl border border-zinc-800">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-black text-lg">{p.name}</p>
                <p className="text-xs text-zinc-500 font-bold uppercase">{p.prop}</p>
              </div>
              <span className="bg-blue-500/10 text-blue-400 text-[10px] font-black px-2 py-1 rounded-md border border-blue-500/20">HIGH</span>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-4">
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Odds</p>
                <p className="font-bold">{p.line}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Edge</p>
                <p className="font-bold text-green-400">{p.edge}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center">
        <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">Phase 1: Engine Live</p>
      </footer>
    </div>
  );
}
