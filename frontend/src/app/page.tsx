import React from 'react';
import { Trophy, Activity, TrendingUp, Search, Bell } from 'lucide-react';

export default function Dashboard() {
  const props = [
    { player: "Saquon Barkley", team: "PHI", prop: "Anytime TD", line: "-110", projection: "0.82", edge: "12%", status: "High" },
    { player: "Justin Jefferson", team: "MIN", prop: "Over 88.5 Rec Yds", line: "-115", projection: "102.4", edge: "15%", status: "Strong" },
    { player: "Breece Hall", team: "NYJ", prop: "Over 4.5 Receptions", line: "+105", projection: "6.1", edge: "8%", status: "Value" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pb-20">
      {/* Header */}
      <header className="p-6 border-b border-zinc-800 flex justify-between items-center bg-black/50 backdrop-blur-lg sticky top-0 z-50">
        <div>
          <h1 className="text-2xl font-black tracking-tighter text-blue-500 italic">GRIDIRON AI</h1>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Live Data Engine</p>
        </div>
        <div className="flex gap-4">
          <Search className="w-5 h-5 text-zinc-400" />
          <Bell className="w-5 h-5 text-zinc-400" />
        </div>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-2 gap-4 p-6">
        <div className="bg-zinc-900/50 p-4 rounded-3xl border border-zinc-800">
          <p className="text-zinc-500 text-xs font-bold uppercase">Model ROI</p>
          <p className="text-2xl font-black text-green-400">+14.2%</p>
        </div>
        <div className="bg-zinc-900/50 p-4 rounded-3xl border border-zinc-800">
          <p className="text-zinc-500 text-xs font-bold uppercase">Win Rate</p>
          <p className="text-2xl font-black text-blue-400">62.4%</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-tight">Top Value Props</h2>
          <span className="text-blue-500 text-sm font-bold">View All</span>
        </div>

        {props.map((item, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 shadow-xl relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-black tracking-tight">{item.player}</h3>
                <p className="text-zinc-500 text-xs font-bold uppercase">{item.team} • {item.prop}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border ${
                item.status === 'Strong' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                'bg-green-500/10 text-green-400 border-green-500/20'
              }`}>
                {item.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-zinc-800/50">
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Line</p>
                <p className="text-sm font-bold">{item.line}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Proj</p>
                <p className="text-sm font-bold text-blue-400">{item.projection}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-bold uppercase">Edge</p>
                <p className="text-sm font-bold text-green-400">{item.edge}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-zinc-800 p-4 flex justify-around items-center">
        <Trophy className="w-6 h-6 text-blue-500" />
        <Activity className="w-6 h-6 text-zinc-600" />
        <TrendingUp className="w-6 h-6 text-zinc-600" />
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 border-2 border-white/20" />
      </nav>
    </div>
  );
}
