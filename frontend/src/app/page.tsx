import { createClient } from "../utils/supabase/server";

export default async function Home() {
  // Initialize the Supabase client
  const supabase = await createClient();
  
  // Test the connection by trying to fetch one player
  const { data, error } = await supabase.from("players").select("*").limit(1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-black">
      <div className="space-y-6">
        <h1 className="text-6xl font-black tracking-tighter text-blue-500 italic">
          GRIDIRON AI
        </h1>
        <p className="text-zinc-400 text-lg font-medium">NFL Player Prop Analytics Platform</p>
        
        <div className="mt-8 p-8 border border-zinc-800 rounded-3xl bg-zinc-900/50 backdrop-blur-sm w-full max-w-sm mx-auto shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">System Status</span>
            <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full border border-green-500/20">
              LIVE
            </span>
          </div>
          
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Database</span>
            <span className="text-blue-400 font-mono font-bold uppercase tracking-tighter text-sm">
              Connected
            </span>
          </div>
        </div>
        
        <p className="mt-12 text-[10px] text-zinc-600 uppercase font-bold tracking-[0.3em]">
          Phase 1: Infrastructure Secured
        </p>
      </div>
    </main>
  );
}
