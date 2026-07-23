import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data } = await supabase.from('players').select('*').limit(1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-black">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tighter text-blue-500">
          GRIDIRON AI
        </h1>
        <p className="text-zinc-400 text-lg">NFL Player Prop Analytics</p>
        <div className="mt-8 p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 w-full max-w-sm mx-auto">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-300">System Status:</span>
            <span className="text-green-400 text-sm font-bold">LIVE</span>
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-300">Database:</span>
            <span className="text-blue-400 text-sm font-mono text-xs">CONNECTED</span>
          </div>
        </div>
      </div>
    </main>
  )
}
