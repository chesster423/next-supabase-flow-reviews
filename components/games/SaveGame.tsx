import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/SubmitButton";
import { createClient } from "@/utils/supabase/server";
import React from "react";
import platforms from "@/enums/platforms";
import genre from "@/enums/genre";
import Dropdown from "@/components/common/Dropdown";
import { GameDataProps } from '@/utils/types';

export default async function SaveGame({ gameData }: { gameData?: GameDataProps}) {

  const saveGame = async (formData: FormData) => {
    "use server";

    const supabase = createClient();

    const payload:GameDataProps = { 
      id: null,
      game_name: formData.get("game_name") as string, 
      description: formData.get("description") as string,
      platform: formData.get("platform") as string,
      genre: formData.get("genre") as string,
      rating: formData.get("rating") as string,
      hours_played: formData.get("hours_played") as string,
      comment: formData.get("comment") as string,
      image: null
    }

    if (formData.get("id")) {
      payload.id = formData.get("id") as unknown as number;
    }else{
      delete payload.id;
    }

    const { error } = await supabase
    .from('games')
    .upsert(payload)

    if (error) {
      console.log(error);
      return redirect("/dashboard/games/create?message=Failed to add game review.");
    }

    return redirect("/dashboard/games/");
  };

  return (
    <div className="animate-in flex flex-col gap-20 opacity-0 px-3 max-w-[1280px]">
      <div>
        <h2 className="font-bold text-3xl mb-4">Game Information</h2>
        <form className=" animate-in w-full justify-center gap-2 text-foreground">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <input
                type="hidden"
                name="id"
                defaultValue={gameData?.id}
                required
              />
              <label className="text-md" htmlFor="game_name">
                Game
              </label>
              <input
                className="rounded-md px-4 py-2 bg-slate-900 border mb-6"
                name="game_name"
                placeholder="The name of the game"
                defaultValue={gameData?.game_name}
                required
              />
              <label className="text-md" htmlFor="description">
                Description
              </label>
              <input
                className="rounded-md px-4 py-2 bg-slate-900 border mb-6"
                type="text"
                name="description"
                defaultValue={gameData?.description}
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-md" htmlFor="platform">
                Platform
              </label>     
              <Dropdown options={platforms} formName="platform" selectedValue={gameData?.platform}></Dropdown>
              <label className="text-md" htmlFor="genre">
                Genre
              </label>
              <Dropdown options={genre} formName="genre" selectedValue={gameData?.genre}></Dropdown>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-md" htmlFor="rating">
                Rating
            </label>
            <input
                className="rounded-md px-4 py-2 bg-slate-900 border mb-6"
                type="text"
                name="rating"
                defaultValue={gameData?.rating}
              />

            <label className="text-md" htmlFor="hours_played">
              Hours Played
            </label>
            <input
                className="rounded-md px-4 py-2 bg-slate-900 border mb-6"
                type="text"
                name="hours_played"
                defaultValue={gameData?.hours_played}
              />

            <label className="text-md" htmlFor="comment">
              Commentary
            </label>
            <textarea 
            className="rounded-md px-4 py-2 bg-slate-900 border mb-6" 
            name="comment"
            defaultValue={gameData?.comment}
            >              
            </textarea>

            <SubmitButton
              formAction={saveGame}
              className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
              pendingText="Saving game review..."
            >Submit Review</SubmitButton>
          </div>
        </form>
      </div>

  </div>
  )

}