import SaveGame from "@/components/games/SaveGame";
import { createClient } from "@/utils/supabase/server";

export default async function EditPage({ params }: { params: { id: number } }) {

  const loadGame = async(id: number) => {
    "use server";

    const supabase = createClient();
    const { data, error } = await supabase
    .from('games')
    .select()
    .eq('id', id) 
    .single();

    return data;
  }


  return (
    <div>
      <SaveGame gameData={await loadGame(params.id)}/>
    </div>
  );
}
