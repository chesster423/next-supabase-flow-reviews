

import GamesList from "@/components/games/GamesList";
import { createClient } from '@/utils/supabase/server';

export default async function Games() {

  const supabase = createClient();
  const { data: games } = await supabase.from("games").select();

  const deleteGame = async (id: number) => {
    const supabase = createClient();
    return await supabase.from('games').delete().eq('id', id);
  };

  return (
    <>
    {/* <pre>{JSON.stringify(games, null, 2)}</pre> */}
    <div className="w-full">
      <GamesList games={games}/>
    </div>
    </>
  )
}