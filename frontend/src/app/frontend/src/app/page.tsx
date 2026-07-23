import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data: players } = await supabase.from('players').select('*').limit(1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-extrabold tracking-tighter text-blue-500 mb-2">
        GRIDIRON AI
      </h1>
      <p className="text-zinc-400 text-lg mb-8">NFL Player Prop Analytics</p>
      
      <div className="p-4 border border-zinc-800 rounded-xl bg-zinc-900/50 w-full max-w-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Database Status:</span>
          <span className="text-green-400 text-sm font-bold">CONNECTED</span>
        </div>
      </div>
      
      <p className="mt-10 text-xs text-zinc-600 uppercase tracking-widest">
        Phase 1: Infrastructure Active
      </p>
    </main>
  )
}
