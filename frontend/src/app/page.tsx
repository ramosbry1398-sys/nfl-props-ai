// We need ../../ to go up two levels to reach the utils folder
import { createClient } from '../../utils/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data } = await supabase.from('players').select('*').limit(1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-black">
      <h1 className="text-5xl font-extrabold text-blue-500 tracking-tighter">GRIDIRON AI</h1>
      <div className="mt-8 p-6 border border-zinc-800 rounded-2xl bg-zinc-900 shadow-2xl">
        <p className="text-green-400 font-bold tracking-widest uppercase">System Live</p>
        <p className="text-blue-400 text-sm mt-2 font-mono">DB CONNECTED</p>
      </div>
    </main>
  )
}
